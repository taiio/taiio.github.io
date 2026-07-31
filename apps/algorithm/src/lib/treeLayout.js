/**
 * Computes a simple left-to-right tree layout from a childId -> parentId map.
 * Leaves get sequential row slots; internal nodes sit at the average
 * y-position of their children. Depth (parent-chain length) drives x.
 *
 * @param {Map<number, number>} parentMap  childId -> parentId
 * @param {number|null} rootId
 * @param {Set<number>} nodesInTree
 * @returns {Map<number, {x:number, y:number}>}
 */
export function computeTreeLayout(parentMap, rootId, nodesInTree) {
  const children = new Map(); // parentId -> [childIds]
  for (const [child, par] of parentMap) {
    if (!children.has(par)) children.set(par, []);
    children.get(par).push(child);
  }

  const pos = new Map();
  const rowH = 24, colW = 52;
  let slot = 0;
  const seen = new Set();

  const visit = (id, depth) => {
    if (seen.has(id)) return pos.get(id);
    seen.add(id);
    const kids = (children.get(id) || []).filter((k) => !seen.has(k));
    if (kids.length === 0) {
      const p = { x: depth * colW, y: slot * rowH };
      pos.set(id, p);
      slot++;
      return p;
    }
    let sumY = 0;
    for (const k of kids) sumY += visit(k, depth + 1).y;
    const p = { x: depth * colW, y: sumY / kids.length };
    pos.set(id, p);
    return p;
  };

  if (rootId !== null && nodesInTree.has(rootId)) visit(rootId, 0);

  // orphaned nodes (shouldn't normally happen) get appended below
  for (const id of nodesInTree) {
    if (!pos.has(id)) { pos.set(id, { x: 0, y: slot * rowH }); slot++; }
  }

  return pos;
}
