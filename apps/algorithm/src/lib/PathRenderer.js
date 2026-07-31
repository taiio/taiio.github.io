import { COLORS, wait } from "./constants.js";

/* =========================================================================
   PATH RENDERER — highlights the final shortest path
   ========================================================================= */
export class PathRenderer {
  constructor(sceneManager) {
    this.sm = sceneManager;
  }

  async highlight(graph, path) {
    if (!path || path.length < 2) return;
    for (let i = 0; i < path.length; i++) {
      const nodeId = path[i];
      const isSource = i === 0;
      const isTarget = i === path.length - 1;
      const nodeColor = isSource ? COLORS.nodeSource : isTarget ? COLORS.nodeTarget : COLORS.nodePath;
      this.sm.pulseNode(nodeId, false);
      this.sm.setNodeColor(nodeId, nodeColor, {
        emissive: isSource || isTarget ? 0.6 : 0.75,
        duration: 300,
        scale: isSource || isTarget ? 1.5 : 1.7,
      });
      if (i > 0) {
        const prevId = path[i - 1];
        const edgeId = graph.edges.has(`${prevId}-${nodeId}`) ? `${prevId}-${nodeId}` : `${nodeId}-${prevId}`;
        this.sm.revealEdge(edgeId, { targetOpacity: 0.9, duration: 250 });
        this.sm.setEdgeColor(edgeId, COLORS.edgePath, { emissive: 0.8, duration: 300 });
        this.sm.spawnTraveler(prevId, nodeId, 0xe6d1ff, 260);
      }
      this.sm.spawnBurst(nodeId, isSource ? COLORS.nodeSource : isTarget ? COLORS.nodeTarget : COLORS.nodePath, 22);
      await wait(180);
    }
  }
}
