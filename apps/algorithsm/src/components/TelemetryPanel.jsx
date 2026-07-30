import React, { useState } from "react";

const ALGORITHM_OPTIONS = [
  { value: "random", label: "Random each cycle" },
  { value: "dijkstra", label: "Dijkstra" },
  { value: "astar", label: "A*" },
  { value: "bfs", label: "BFS (breadth-first)" },
  { value: "dfs", label: "DFS (depth-first)" },
  { value: "bellmanford", label: "Bellman-Ford" },
];

export default function TelemetryPanel({
  stats,
  banner,
  calc,
  frontier,
  paused,
  algorithm,
  onTogglePause,
  onRegenerate,
  onAlgorithmChange,
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`hud panel${collapsed ? " collapsed" : ""}`} id="telemetry">
      <button
        className="tele-head"
        type="button"
        aria-expanded={!collapsed}
        onClick={() => setCollapsed((c) => !c)}
      >
        <span className={`dot${paused ? " paused" : ""}`} />
        <span>{paused ? "Paused" : "Running"}</span>
        <span className="chevron">▾</span>
      </button>

      <div className="tele-collapsible">
        <div className="tele-collapsible-inner">
          <div className="tele-body">
            <div className="row">
              <span className="k">Algorithm</span>
              <span className="v violet">{stats.algorithm}</span>
            </div>
            <div className="row">
              <span className="k">Nodes</span>
              <span className="v">{stats.nodes}</span>
            </div>
            <div className="row">
              <span className="k">Edges</span>
              <span className="v">{stats.edges}</span>
            </div>
            <div className="row">
              <span className="k">Current step</span>
              <span className="v accent">{stats.step}</span>
            </div>
            <div className="row">
              <span className="k">Current distance</span>
              <span className="v">{stats.distance}</span>
            </div>
            <div className="row">
              <span className="k">Queue size</span>
              <span className="v">{stats.queueSize}</span>
            </div>
          </div>

          <div id="banner">
            {banner?.text}
            {banner?.num !== undefined && <span className="num">{banner.num}</span>}
          </div>

          <div id="calc" className={calc ? "show" : ""}>
            {calc}
          </div>

          <div id="frontierWrap" style={{ display: frontier ? "" : "none" }}>
            <div className="frontier-label">Candidates in queue</div>
            <div id="frontierList">
              {frontier?.list.map((c) => {
                const label = Number.isFinite(c.priority) ? c.priority.toFixed(1) : "∞";
                const active = c.id === frontier.chosenId ? " active" : "";
                return (
                  <div className={`chip${active}`} key={c.id}>
                    N{c.id}
                    <b>{label}</b>
                  </div>
                );
              })}
            </div>
          </div>

          <div id="algoPicker">
            <label htmlFor="algoSelect">Algorithm</label>
            <select
              id="algoSelect"
              value={algorithm}
              onChange={(e) => onAlgorithmChange(e.target.value)}
            >
              {ALGORITHM_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div id="controls">
            <button className="ctl primary" onClick={onTogglePause}>
              {paused ? "Resume" : "Pause"}
            </button>
            <button className="ctl" onClick={onRegenerate}>
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
