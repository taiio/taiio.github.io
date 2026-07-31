import * as THREE from "three";
import { rand } from "./constants.js";

/* =========================================================================
   GRAPH — plain data structure, no rendering knowledge
   ========================================================================= */
export class Graph {
  constructor() {
    this.nodes = new Map();     // id -> { id, position: THREE.Vector3 }
    this.adjacency = new Map(); // id -> [{ to, weight, edgeId }]
    this.edges = new Map();     // edgeId -> { id, a, b, weight }
  }

  addNode(id, position) {
    this.nodes.set(id, { id, position });
    this.adjacency.set(id, []);
  }

  addEdge(a, b, weight) {
    const edgeId = `${a}-${b}`;
    if (this.edges.has(edgeId) || this.edges.has(`${b}-${a}`)) return;
    this.edges.set(edgeId, { id: edgeId, a, b, weight });
    this.adjacency.get(a).push({ to: b, weight, edgeId });
    this.adjacency.get(b).push({ to: a, weight, edgeId });
  }

  neighbors(id) {
    return this.adjacency.get(id) || [];
  }

  nodeCount() {
    return this.nodes.size;
  }

  edgeCount() {
    return this.edges.size;
  }
}

/* =========================================================================
   GRAPH GENERATOR — random 3D point cloud, k-nearest, guaranteed connectivity
   ========================================================================= */
export class GraphGenerator {
  static generate() {
    const graph = new Graph();
    const count = Math.floor(rand(20, 51));
    const bound = 50;

    for (let i = 0; i < count; i++) {
      const pos = new THREE.Vector3(rand(-bound, bound), rand(-bound, bound), rand(-bound, bound));
      graph.addNode(i, pos);
    }

    // connect each node to its 2-5 nearest neighbors
    const ids = [...graph.nodes.keys()];
    for (const id of ids) {
      const p = graph.nodes.get(id).position;
      const k = Math.floor(rand(2, 6));
      const dists = ids
        .filter((other) => other !== id)
        .map((other) => ({ other, d: p.distanceTo(graph.nodes.get(other).position) }))
        .sort((x, y) => x.d - y.d)
        .slice(0, k);
      for (const { other, d } of dists) {
        graph.addEdge(id, other, Math.round(d * 10) / 10);
      }
    }

    // ensure full connectivity via union-find; bridge separate components
    const parent = new Map(ids.map((id) => [id, id]));
    const find = (x) => (parent.get(x) === x ? x : (parent.set(x, find(parent.get(x))), parent.get(x)));
    const union = (x, y) => {
      const rx = find(x), ry = find(y);
      if (rx !== ry) parent.set(rx, ry);
    };
    for (const e of graph.edges.values()) union(e.a, e.b);

    let guard = 0;
    while (guard++ < ids.length) {
      const roots = new Map();
      for (const id of ids) {
        const r = find(id);
        if (!roots.has(r)) roots.set(r, []);
        roots.get(r).push(id);
      }
      if (roots.size <= 1) break;
      const groups = [...roots.values()];
      const base = groups[0];
      for (let g = 1; g < groups.length; g++) {
        let best = null;
        for (const a of base) {
          for (const b of groups[g]) {
            const d = graph.nodes.get(a).position.distanceTo(graph.nodes.get(b).position);
            if (!best || d < best.d) best = { a, b, d };
          }
        }
        if (best) {
          graph.addEdge(best.a, best.b, Math.round(best.d * 10) / 10);
          union(best.a, best.b);
        }
      }
    }

    const startId = ids[Math.floor(Math.random() * ids.length)];
    let endId = ids[Math.floor(Math.random() * ids.length)];
    while (endId === startId) endId = ids[Math.floor(Math.random() * ids.length)];

    return { graph, startId, endId };
  }
}
