import React, { useState } from "react";
import TreeDiagram from "./TreeDiagram.jsx";

export default function TreePanel({ tree }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`hud panel${collapsed ? " collapsed" : ""}`} id="treePanel">
      <button
        className="tele-head"
        type="button"
        aria-expanded={!collapsed}
        onClick={() => setCollapsed((c) => !c)}
      >
        <span className="dot" />
        <span>Traversal Tree</span>
        <span className="chevron">▾</span>
      </button>

      <div className="tele-collapsible">
        <div className="tele-collapsible-inner">
          <div id="treeSvgWrap">
            <TreeDiagram tree={tree} />
          </div>
        </div>
      </div>
    </div>
  );
}
