/* =========================================================================
   DIJKSTRA
   ========================================================================= */
export class Dijkstra {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    const visited = new Set();
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const queue = new Set([...this.graph.nodes.keys()]);
    yield { type: "start", startId: this.startId, endId: this.endId };

    while (queue.size > 0) {
      let currentId = null, best = Infinity;
      for (const id of queue) {
        if (dist.get(id) < best) { best = dist.get(id); currentId = id; }
      }
      if (currentId === null || dist.get(currentId) === Infinity) break;

      const candidates = [...queue]
        .map((id) => ({ id, priority: dist.get(id) }))
        .filter((c) => c.priority !== Infinity)
        .sort((a, b) => a.priority - b.priority);

      queue.delete(currentId);

      yield {
        type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: queue.size,
        frontier: candidates.slice(0, 8),
      };

      if (currentId === this.endId) { visited.add(currentId); break; }

      for (const { to, weight, edgeId } of this.graph.neighbors(currentId)) {
        if (visited.has(to)) continue;
        const newDistance = dist.get(currentId) + weight;
        const improved = newDistance < dist.get(to);
        yield {
          type: "relax", edgeId, from: currentId, to, weight,
          currentDistance: dist.get(currentId), newDistance,
          oldDistance: dist.get(to), improved, queueSize: queue.size,
        };
        if (improved) { dist.set(to, newDistance); prev.set(to, currentId); }
      }

      visited.add(currentId);
      yield { type: "settle", nodeId: currentId };
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   A* — Dijkstra + Euclidean-distance heuristic toward the target
   ========================================================================= */
export class AStar {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  heuristic(id) {
    return this.graph.nodes.get(id).position.distanceTo(this.graph.nodes.get(this.endId).position);
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    const visited = new Set();
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const queue = new Set([...this.graph.nodes.keys()]);
    yield { type: "start", startId: this.startId, endId: this.endId };

    while (queue.size > 0) {
      const candidates = [...queue]
        .map((id) => ({ id, priority: dist.get(id), f: dist.get(id) + this.heuristic(id) }))
        .filter((c) => c.priority !== Infinity)
        .sort((a, b) => a.f - b.f);
      if (candidates.length === 0) break;
      const currentId = candidates[0].id;
      queue.delete(currentId);

      yield {
        type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: queue.size,
        frontier: candidates.slice(0, 8),
      };

      if (currentId === this.endId) { visited.add(currentId); break; }

      for (const { to, weight, edgeId } of this.graph.neighbors(currentId)) {
        if (visited.has(to)) continue;
        const newDistance = dist.get(currentId) + weight;
        const improved = newDistance < dist.get(to);
        yield {
          type: "relax", edgeId, from: currentId, to, weight,
          currentDistance: dist.get(currentId), newDistance,
          oldDistance: dist.get(to), improved, queueSize: queue.size,
        };
        if (improved) { dist.set(to, newDistance); prev.set(to, currentId); }
      }

      visited.add(currentId);
      yield { type: "settle", nodeId: currentId };
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   BFS — unweighted breadth-first traversal (FIFO queue, hop-count "distance")
   ========================================================================= */
export class BFS {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    const visited = new Set([this.startId]);
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const queue = [this.startId];
    yield { type: "start", startId: this.startId, endId: this.endId };

    while (queue.length > 0) {
      const frontier = queue.slice(0, 8).map((id) => ({ id, priority: dist.get(id) }));
      const currentId = queue.shift();
      yield { type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: queue.length, frontier };

      if (currentId === this.endId) break;

      for (const { to, edgeId } of this.graph.neighbors(currentId)) {
        const improved = !visited.has(to);
        const newDistance = dist.get(currentId) + 1;
        yield {
          type: "relax", edgeId, from: currentId, to, weight: 1,
          currentDistance: dist.get(currentId), newDistance,
          oldDistance: dist.get(to), improved, queueSize: queue.length,
        };
        if (improved) {
          dist.set(to, newDistance);
          prev.set(to, currentId);
          visited.add(to);
          queue.push(to);
        }
      }

      yield { type: "settle", nodeId: currentId };
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   DFS — depth-first traversal (LIFO stack). Finds *a* path, not
   guaranteed shortest — that trade-off is part of what makes it worth showing.
   ========================================================================= */
export class DFS {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    const visited = new Set();
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const stack = [this.startId];
    yield { type: "start", startId: this.startId, endId: this.endId };

    while (stack.length > 0) {
      const frontier = stack.slice(-8).map((id) => ({ id, priority: dist.get(id) })).reverse();
      const currentId = stack.pop();
      if (visited.has(currentId)) continue;
      visited.add(currentId);

      yield { type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: stack.length, frontier };

      if (currentId === this.endId) break;

      for (const { to, edgeId } of this.graph.neighbors(currentId)) {
        if (visited.has(to)) continue;
        const newDistance = dist.get(currentId) + 1;
        const improved = newDistance < dist.get(to);
        yield {
          type: "relax", edgeId, from: currentId, to, weight: 1,
          currentDistance: dist.get(currentId), newDistance,
          oldDistance: dist.get(to), improved, queueSize: stack.length,
        };
        if (improved) { dist.set(to, newDistance); prev.set(to, currentId); }
        stack.push(to);
      }

      yield { type: "settle", nodeId: currentId };
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   BELLMAN-FORD — relaxes every edge (both directions) each round, for up to
   V-1 rounds, stopping early once a full round makes no improvement.
   ========================================================================= */
export class BellmanFord {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const edgeList = [...this.graph.edges.values()];
    const maxRounds = Math.max(1, this.graph.nodeCount() - 1);

    yield { type: "start", startId: this.startId, endId: this.endId };

    for (let round = 0; round < maxRounds; round++) {
      let anyChange = false;

      for (const e of edgeList) {
        for (const [from, to] of [[e.a, e.b], [e.b, e.a]]) {
          if (dist.get(from) === Infinity) continue;

          yield { type: "visit", nodeId: from, distance: dist.get(from), queueSize: maxRounds - round };

          const newDistance = dist.get(from) + e.weight;
          const improved = newDistance < dist.get(to);
          yield {
            type: "relax", edgeId: e.id, from, to, weight: e.weight,
            currentDistance: dist.get(from), newDistance,
            oldDistance: dist.get(to), improved, queueSize: maxRounds - round,
          };
          if (improved) { dist.set(to, newDistance); prev.set(to, from); anyChange = true; }

          yield { type: "settle", nodeId: from };
        }
      }

      if (!anyChange) break;
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   GREEDY BEST-FIRST SEARCH — like A* but ignores the cost-so-far entirely,
   always chasing the node that *looks* closest to the target. Fast, but can
   be lured down a dead end — a good foil to show next to A*.
   ========================================================================= */
export class GreedyBestFirst {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  heuristic(id) {
    return this.graph.nodes.get(id).position.distanceTo(this.graph.nodes.get(this.endId).position);
  }

  *run() {
    const dist = new Map();
    const prev = new Map();
    const visited = new Set();
    for (const id of this.graph.nodes.keys()) dist.set(id, Infinity);
    dist.set(this.startId, 0);

    const queue = new Set([this.startId]);
    yield { type: "start", startId: this.startId, endId: this.endId };

    while (queue.size > 0) {
      const candidates = [...queue]
        .map((id) => ({ id, priority: this.heuristic(id) }))
        .sort((a, b) => a.priority - b.priority);
      const currentId = candidates[0].id;
      queue.delete(currentId);
      if (visited.has(currentId)) continue;

      yield {
        type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: queue.size,
        frontier: candidates.slice(0, 8),
      };

      if (currentId === this.endId) { visited.add(currentId); break; }

      for (const { to, weight, edgeId } of this.graph.neighbors(currentId)) {
        if (visited.has(to)) continue;
        const newDistance = dist.get(currentId) + weight;
        const improved = newDistance < dist.get(to);
        yield {
          type: "relax", edgeId, from: currentId, to, weight,
          currentDistance: dist.get(currentId), newDistance,
          oldDistance: dist.get(to), improved, queueSize: queue.size,
        };
        if (improved) { dist.set(to, newDistance); prev.set(to, currentId); }
        if (!visited.has(to)) queue.add(to);
      }

      visited.add(currentId);
      yield { type: "settle", nodeId: currentId };
    }

    const path = [];
    let cur = this.endId;
    if (dist.get(this.endId) !== Infinity) {
      while (cur !== undefined) { path.unshift(cur); if (cur === this.startId) break; cur = prev.get(cur); }
    }
    yield { type: "done", path, distance: dist.get(this.endId) };
  }
}

/* =========================================================================
   BIDIRECTIONAL BFS — expands simultaneously from source and target, one
   full frontier *layer* at a time per side, until the layers meet. Layer
   synchronization (rather than popping one node at a time from either side)
   is what guarantees the first meeting point found yields a truly shortest
   path — unweighted (hop-count).
   ========================================================================= */
export class BidirectionalBFS {
  constructor(graph, startId, endId) {
    this.graph = graph;
    this.startId = startId;
    this.endId = endId;
  }

  *run() {
    const distF = new Map(), distB = new Map();
    const prevF = new Map(), prevB = new Map();
    const visitedF = new Set([this.startId]);
    const visitedB = new Set([this.endId]);
    for (const id of this.graph.nodes.keys()) { distF.set(id, Infinity); distB.set(id, Infinity); }
    distF.set(this.startId, 0);
    distB.set(this.endId, 0);

    yield { type: "start", startId: this.startId, endId: this.endId };

    let meetNode = null;

    const expandLayer = function* (layer, dist, prev, visited, otherVisited, forward) {
      const nextLayer = [];
      const side = forward ? "forward" : "backward";
      for (const currentId of layer) {
        yield { type: "visit", nodeId: currentId, distance: dist.get(currentId), queueSize: layer.length, side };

        for (const { to, weight, edgeId } of this.graph.neighbors(currentId)) {
          const improved = !visited.has(to);
          const newDistance = dist.get(currentId) + 1;
          yield {
            type: "relax", edgeId, from: currentId, to, weight, side,
            currentDistance: dist.get(currentId), newDistance,
            oldDistance: dist.get(to), improved, queueSize: layer.length,
          };
          if (improved) {
            dist.set(to, newDistance);
            prev.set(to, currentId);
            visited.add(to);
            nextLayer.push(to);
            if (meetNode === null && otherVisited.has(to)) meetNode = to;
          }
        }

        yield { type: "settle", nodeId: currentId, side };
      }
      return nextLayer;
    }.bind(this);

    let layerF = [this.startId];
    let layerB = [this.endId];

    while (layerF.length > 0 && layerB.length > 0 && meetNode === null) {
      layerF = yield* expandLayer(layerF, distF, prevF, visitedF, visitedB, true);
      if (meetNode !== null) break;
      layerB = yield* expandLayer(layerB, distB, prevB, visitedB, visitedF, false);
    }

    let path = [];
    if (meetNode !== null) {
      const forwardHalf = [];
      let cur = meetNode;
      while (cur !== undefined) { forwardHalf.unshift(cur); if (cur === this.startId) break; cur = prevF.get(cur); }
      const backwardHalf = [];
      cur = prevB.get(meetNode);
      while (cur !== undefined) { backwardHalf.push(cur); if (cur === this.endId) break; cur = prevB.get(cur); }
      path = [...forwardHalf, ...backwardHalf];
    }

    const distance = path.length > 1 ? path.length - 1 : (path.length === 1 ? 0 : Infinity);
    yield { type: "done", path, distance };
  }
}


export const ALGORITHMS = {
  dijkstra: { label: "Dijkstra", cls: Dijkstra, speed: 1 },
  astar: { label: "A*", cls: AStar, speed: 1 },
  greedy: { label: "Greedy Best-First", cls: GreedyBestFirst, speed: 1 },
  bfs: { label: "BFS", cls: BFS, speed: 0.85 },
  dfs: { label: "DFS", cls: DFS, speed: 0.85 },
  bidirectional: { label: "Bidirectional BFS", cls: BidirectionalBFS, speed: 0.85 },
  bellmanford: { label: "Bellman-Ford", cls: BellmanFord, speed: 0.4 },
};
export const ALGO_KEYS = Object.keys(ALGORITHMS);
