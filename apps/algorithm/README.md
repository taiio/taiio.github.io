# Dijkstra 3D Pathfinder

An infinite, self-generating 3D visualization of graph pathfinding algorithms
(Dijkstra, A*, BFS, DFS, Bellman-Ford), built with **Vite + React + Three.js**.

## Getting started

```bash
npm install
npm run dev       # local dev server, http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
index.html              Vite entry (mounts <div id="root">)
src/
  main.jsx              React root
  App.jsx                Owns the SceneManager + AnimationController lifecycle,
                         bridges engine state -> React state, renders the HUD
  App.css                All HUD/panel styling (dark "instrument panel" theme)

  lib/                   Framework-agnostic "engine" — no React, no DOM lookups
    constants.js          Color palette, timing constants, small math helpers
    graph.js              Graph data structure + GraphGenerator (random 3D graphs,
                           k-nearest connections, guaranteed connectivity)
    algorithms.js          Dijkstra, AStar, GreedyBestFirst, BFS, DFS,
                           BidirectionalBFS, BellmanFord — each a generator
                           that yields a shared step vocabulary (start/visit/relax/
                           settle/done), so the renderer and controller stay generic
    SceneManager.js        All Three.js: scene/camera/bloom, node & edge meshes,
                           particles, traveling light pulses, click-to-explore
                           interaction (raycasting), label sprites
    PathRenderer.js        Highlights the final shortest path
    AnimationController.js Drives an algorithm's step generator with timing,
                           pause/resume, algorithm switching, and the endless
                           regenerate-graph cycle. Reports state via an
                           `onUpdate(patch)` callback instead of touching the DOM
    treeLayout.js           Pure function: lays out the traversal tree diagram

  components/             React components (presentational, driven by props)
    TelemetryPanel.jsx     Stats, banner, "current calculation" readout, frontier
                           chips, algorithm <select>, Pause/Regenerate buttons
    TreePanel.jsx           Collapsible wrapper for the tree diagram
    TreeDiagram.jsx         Renders the live shortest-path tree as SVG
    LegendPanel.jsx         Static color legend
    BrandPanel.jsx          Static top-right label
    LoadingOverlay.jsx      Brief fade-in veil while the scene initializes
```

## Design notes

- **Engine vs. UI separation**: everything under `src/lib` is plain JS/Three.js
  with zero React or DOM-query dependencies. `AnimationController` talks to the
  outside world only through the `onUpdate(patch)` callback it's given — so it
  could just as easily be wired into Vue, Svelte, or vanilla DOM instead of React.
- **Click-to-explore edges**: all edges start hidden. Clicking a node reveals its
  neighboring edges for ~4s (auto-hides again unless the running algorithm
  permanently claims that edge via a relax step).
- **Edge rendering**: edges are thin dashed `THREE.Line`s (native GL lines stay
  ~1px regardless of camera zoom — a deliberate "gossamer thread" look for
  unexplored connections). Once the algorithm actually relaxes an edge, its
  dashes solidify into a continuous line and it takes on the state color
  (yellow while being considered, green if it improved a distance, red if
  rejected, violet if part of the final path). Edges leaving the **source**
  node always render green, so the start's outgoing branches stay legible.
- **Source/target color-locking**: the source (green) and target (red) nodes
  keep their color throughout the whole run — even mid-traversal, even in the
  final path highlight — while everything in between still cycles through the
  normal visit/relax/settle/path colors.
- **Playback speed**: the HUD's speed slider (0.25×–4×) scales every wait in
  `AnimationController._waitStep`, which is the single timing primitive behind
  the whole run loop — so one slider affects graph-build dwell, per-step
  pacing, and the final-path hold time uniformly.
- **Traversal Tree panel**: mirrors the 3D scene — nodes/branches light up in
  the 2D tree exactly when the algorithm visits/relaxes them in 3D. For
  `BidirectionalBFS`, only the forward (start-rooted) half feeds the tree,
  since the backward half technically belongs to a second tree rooted at the
  target.
- Extending with a new algorithm: add a generator class to `algorithms.js`
  emitting the same step shape, then register it in the `ALGORITHMS` map and
  add an `<option>` in `TelemetryPanel.jsx`. No other file needs to change.
  Every algorithm was validated against 20+ random graphs for termination and
  against an independent reference implementation for path optimality before
  shipping.
