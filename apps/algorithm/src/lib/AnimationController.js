import { GraphGenerator } from "./graph.js";
import { ALGORITHMS, ALGO_KEYS } from "./algorithms.js";
import { PathRenderer } from "./PathRenderer.js";
import { COLORS, STEP_MS, wait } from "./constants.js";

export class AnimationController {
  /**
   * @param {import('./SceneManager.js').SceneManager} sceneManager
   * @param {object} options
   * @param {(patch: object) => void} options.onUpdate - called with partial state whenever something changes
   * @param {string} options.initialAlgorithm - "random" | "dijkstra" | "astar" | "bfs" | "dfs" | "bellmanford"
   */
  constructor(sceneManager, { onUpdate = () => {}, initialAlgorithm = "random", initialSpeed = 1 } = {}) {
    this.sm = sceneManager;
    this.pathRenderer = new PathRenderer(sceneManager);
    this.onUpdate = onUpdate;

    this.paused = false;
    this.stopped = false;
    this.interrupt = null; // null | "newGraph" | "sameGraph"
    this.selectedAlgorithm = initialAlgorithm;
    this.speedMultiplier = initialSpeed;
    this.currentStartId = null;
    this.currentEndId = null;

    this._resetTreeData();
  }

  /* keep source (green) / target (red) instantly recognizable no matter
     what state the algorithm is currently painting a node with */
  _nodeColorFor(id, fallbackColor) {
    if (id === this.currentStartId) return COLORS.nodeSource;
    if (id === this.currentEndId) return COLORS.nodeTarget;
    return fallbackColor;
  }

  /* ------------------------------------------------------------------ *
   * Public controls — called directly from React event handlers
   * ------------------------------------------------------------------ */

  togglePause() {
    this.paused = !this.paused;
    this.onUpdate({ paused: this.paused });
  }

  regenerateNow() {
    this.interrupt = "newGraph";
  }

  setAlgorithm(key) {
    this.selectedAlgorithm = key;
    this.interrupt = "sameGraph"; // re-run the chosen algorithm on the current graph immediately
  }

  setSpeed(multiplier) {
    this.speedMultiplier = multiplier;
    this.onUpdate({ speed: multiplier });
  }

  stop() {
    this.stopped = true;
    this.interrupt = "newGraph";
  }

  /* ------------------------------------------------------------------ *
   * Internal helpers
   * ------------------------------------------------------------------ */

  async _waitStep(ms) {
    const scaledMs = ms / this.speedMultiplier;
    let elapsed = 0;
    const tick = 60;
    while (elapsed < scaledMs) {
      if (this.interrupt) return;
      if (!this.paused) elapsed += tick;
      await wait(tick);
    }
  }

  _banner(text, num) {
    this.onUpdate({ banner: { text, num } });
  }

  _calc(text) {
    this.onUpdate({ calc: text || "" });
  }

  _renderFrontier(frontier, chosenId) {
    this.onUpdate({ frontier: frontier && frontier.length ? { list: frontier, chosenId } : null });
  }

  pickAlgorithmKey() {
    if (this.selectedAlgorithm === "random") {
      return ALGO_KEYS[Math.floor(Math.random() * ALGO_KEYS.length)];
    }
    return this.selectedAlgorithm;
  }

  /* ------------------------------------------------------------------ *
   * Traversal-tree state — kept here (not in SceneManager) and pushed to
   * React as a plain serializable snapshot for the TreeDiagram component.
   * ------------------------------------------------------------------ */

  _resetTreeData() {
    clearTimeout(this._flashTimer);
    this.treeData = {
      rootId: null,
      parent: new Map(),      // childId -> parentId
      nodesInTree: new Set(),
      currentId: null,
      pathNodeSet: new Set(),
      pathLinkSet: new Set(),
      flashLink: null,
    };
  }

  _treeReset(rootId = null) {
    this._resetTreeData();
    this.treeData.rootId = rootId;
    if (rootId !== null) this.treeData.nodesInTree.add(rootId);
    this._pushTree();
  }

  _treeAddEdge(parentId, childId) {
    const t = this.treeData;
    t.parent.set(childId, parentId);
    t.nodesInTree.add(parentId);
    t.nodesInTree.add(childId);
    t.flashLink = `${parentId}->${childId}`;
    this._pushTree();
    clearTimeout(this._flashTimer);
    this._flashTimer = setTimeout(() => {
      this.treeData.flashLink = null;
      this._pushTree();
    }, 550);
  }

  _treeSetCurrent(id) {
    this.treeData.currentId = id;
    this._pushTree();
  }

  _treeSetFinalPath(path) {
    const t = this.treeData;
    t.pathNodeSet = new Set(path);
    t.pathLinkSet = new Set();
    for (let i = 1; i < path.length; i++) t.pathLinkSet.add(`${path[i - 1]}->${path[i]}`);
    this._pushTree();
  }

  _pushTree() {
    const t = this.treeData;
    this.onUpdate({
      tree: {
        rootId: t.rootId,
        parentEntries: [...t.parent.entries()],
        nodesInTree: [...t.nodesInTree],
        currentId: t.currentId,
        pathNodeIds: [...t.pathNodeSet],
        pathLinkKeys: [...t.pathLinkSet],
        flashLinkKey: t.flashLink,
      },
    });
  }

  /* ------------------------------------------------------------------ *
   * Main loop
   * ------------------------------------------------------------------ */

  async run() {
    while (!this.stopped) {
      this.interrupt = null;
      const { graph, startId, endId } = GraphGenerator.generate();

      // inner loop: keep re-running (possibly different) algorithms on this
      // same graph until a full cycle finishes or a new graph is requested
      while (!this.stopped) {
        this.interrupt = null;
        this.sm.buildGraph(graph, startId, endId);

        this.onUpdate({
          stats: {
            nodes: graph.nodeCount(),
            edges: graph.edgeCount(),
            step: "Building graph",
            distance: "–",
            queueSize: "–",
          },
        });
        this._banner("New graph generated");
        this._calc("");
        this._renderFrontier(null);
        this._treeReset();
        await this._waitStep(900);
        if (this.interrupt === "newGraph") break;

        const algoKey = this.pickAlgorithmKey();
        const meta = ALGORITHMS[algoKey];
        this.onUpdate({ stats: { algorithm: meta.label } });
        const stepMs = STEP_MS * meta.speed;

        const algo = new meta.cls(graph, startId, endId);
        const gen = algo.run();
        let finalPath = null, finalDistance = null;

        for (const step of gen) {
          if (this.interrupt) break;

          if (step.type === "start") {
            this.currentStartId = step.startId;
            this.currentEndId = step.endId;
            this.onUpdate({ stats: { step: `${meta.label} started` } });
            this._banner(`${meta.label} Started`, ` src=N${step.startId} → dst=N${step.endId}`);
            this._treeReset(step.startId);
            this.sm.setNodeColor(step.startId, COLORS.nodeSource, { emissive: 0.55, duration: 300, scale: 1.4 });
            this.sm.setNodeColor(step.endId, COLORS.nodeTarget, { emissive: 0.55, duration: 300, scale: 1.4 });
            await this._waitStep(stepMs);
          }

          else if (step.type === "visit") {
            const distText = Number.isFinite(step.distance) ? step.distance.toFixed(1) : "∞";
            this.onUpdate({
              stats: { step: `Visiting N${step.nodeId}`, distance: distText, queueSize: step.queueSize },
            });
            this._banner(`Current Node: N${step.nodeId}  ·  Distance:`, ` ${distText}`);
            this._renderFrontier(step.frontier, step.nodeId);
            this._treeSetCurrent(step.nodeId);
            this.sm.pulseNode(step.nodeId, true);
            this.sm.setNodeColor(step.nodeId, this._nodeColorFor(step.nodeId, COLORS.nodeCurrent), { emissive: 0.65, duration: 260, scale: 1.55 });
            await this._waitStep(stepMs);
          }

          else if (step.type === "relax") {
            const fromSource = step.from === this.currentStartId;
            this.onUpdate({
              stats: { step: `Relaxing edge N${step.from}→N${step.to}`, queueSize: step.queueSize },
            });
            this.sm.revealEdge(step.edgeId, { targetOpacity: 0.85, duration: 300 });
            this.sm.setEdgeColor(step.edgeId, fromSource ? COLORS.nodeSource : COLORS.edgeRelaxing, { emissive: 0.6, duration: 220 });
            this.sm.spawnTraveler(step.from, step.to, 0xfff2b0, 380);
            this.sm.setNodeColor(step.to, this._nodeColorFor(step.to, COLORS.nodeQueued), { emissive: 0.5, duration: 220, scale: 1.25 });

            const newD = step.newDistance.toFixed(1);
            const oldD = Number.isFinite(step.oldDistance) ? step.oldDistance.toFixed(1) : "∞";
            this._calc(`newDistance = dist[N${step.from}] (${step.currentDistance.toFixed(1)}) + weight (${step.weight}) = ${newD}   vs current ${oldD}`);
            await this._waitStep(stepMs * 0.55);

            if (step.improved) {
              if (step.side !== "backward") this._treeAddEdge(step.from, step.to);
              this.sm.setEdgeColor(step.edgeId, COLORS.edgeImproved, { emissive: 0.65, duration: 260 });
              this.sm.setNodeColor(step.to, this._nodeColorFor(step.to, COLORS.nodeQueued), { emissive: 0.55, duration: 260, scale: 1.3 });
              this.sm.spawnBurst(step.to, COLORS.edgeImproved, 10);
            } else if (fromSource) {
              // still a genuine branch leaving the start node — keep it green
              // rather than flashing red, so the start's directions stay legible
              this.sm.setEdgeColor(step.edgeId, COLORS.nodeSource, { emissive: 0.5, duration: 260 });
            } else {
              this.sm.setEdgeColor(step.edgeId, COLORS.edgeRejected, { emissive: 0.55, duration: 180, flashThenIdle: true });
            }
            await this._waitStep(stepMs * 0.45);
          }

          else if (step.type === "settle") {
            this.sm.pulseNode(step.nodeId, false);
            this.sm.setNodeColor(step.nodeId, this._nodeColorFor(step.nodeId, COLORS.nodeVisited), { emissive: 0.35, duration: 320, scale: 1 });
          }

          else if (step.type === "done") {
            finalPath = step.path;
            finalDistance = step.distance;
          }
        }

        if (this.interrupt === "newGraph") break;
        if (this.interrupt === "sameGraph") continue; // re-run inner loop: new algorithm, same graph

        this._renderFrontier(null);
        this.onUpdate({ stats: { queueSize: "0" } });

        if (finalPath && finalPath.length > 1) {
          this.onUpdate({ stats: { step: "Backtracking shortest path" } });
          this._banner("Shortest Path Found  ·  Distance =", ` ${finalDistance.toFixed(1)}`);
          this._treeSetFinalPath(finalPath);
          await this.pathRenderer.highlight(graph, finalPath);
          if (this.interrupt) { if (this.interrupt === "sameGraph") continue; else break; }
          this.onUpdate({ stats: { step: "Shortest path" } });
          await this.sm.dimNonPath(graph, finalPath, 600);
        } else {
          this.onUpdate({ stats: { step: "No path exists" } });
          this._banner("No path found between source and target");
        }

        await this._waitStep(6000); // hold the final path on screen before cycling
        if (this.interrupt === "sameGraph") continue;

        this.onUpdate({ stats: { step: "Fading out" } });
        this._banner("Regenerating graph…");
        await this.sm.fadeOutGraph(800);
        break; // move on to a brand-new graph
      }
    }
  }
}
