import React, { useMemo } from "react";
import { computeTreeLayout } from "../lib/treeLayout.js";

export default function TreeDiagram({ tree }) {
  const { rootId, parentEntries, nodesInTree, currentId, pathNodeIds, pathLinkKeys, flashLinkKey } = tree;

  const pos = useMemo(() => {
    const parentMap = new Map(parentEntries);
    const nodesSet = new Set(nodesInTree);
    return computeTreeLayout(parentMap, rootId, nodesSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(parentEntries), rootId, JSON.stringify(nodesInTree)]);

  if (nodesInTree.length === 0) {
    return <div className="empty-hint">Waiting for traversal…</div>;
  }

  const pathNodeSet = new Set(pathNodeIds);
  const pathLinkSet = new Set(pathLinkKeys);

  let maxX = 0, maxY = 0;
  for (const p of pos.values()) {
    maxX = Math.max(maxX, p.x);
    maxY = Math.max(maxY, p.y);
  }
  const off = 16;
  const w = maxX + 44, h = maxY + 28;

  const links = [];
  for (const [child, par] of parentEntries) {
    const a = pos.get(par), b = pos.get(child);
    if (!a || !b) continue;
    const key = `${par}->${child}`;
    let cls = "tlink ";
    if (pathLinkSet.has(key)) cls += "tlink-path";
    else if (flashLinkKey === key) cls += "tlink-flash";
    else cls += "tlink-visited";
    links.push(
      <line key={key} className={cls} x1={a.x + off} y1={a.y + off} x2={b.x + off} y2={b.y + off} />
    );
  }

  const nodes = [];
  for (const id of nodesInTree) {
    const p = pos.get(id);
    if (!p) continue;
    let cls = "tnode ";
    if (id === currentId) cls += "tnode-current";
    else if (pathNodeSet.has(id)) cls += "tnode-path";
    else cls += "tnode-visited";
    if (id === rootId) cls += " tnode-root";
    nodes.push(
      <g key={id} className={cls} transform={`translate(${p.x + off},${p.y + off})`}>
        <circle r="8.5" />
        <text y="2.6">{id}</text>
      </g>
    );
  }

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h}>
      {links}
      {nodes}
    </svg>
  );
}
