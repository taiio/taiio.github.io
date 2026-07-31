import React from "react";

const ITEMS = [
  { color: "rgba(85, 91, 102, 0.7)", label: "Unvisited" },
  { color: "rgba(255, 212, 0, 0.7)", label: "Current" },
  { color: "rgba(47, 111, 237, 0.7)", label: "Visited" },
  { color: "rgba(255, 157, 47, 0.7)", label: "In queue" },
  { color: "rgba(46, 204, 113, 0.7)", label: "Source" },
  { color: "rgba(255, 59, 59, 0.7)", label: "Target" },
  { color: "rgba(180, 92, 255, 0.7)", label: "Shortest path" },
];


export default function LegendPanel() {
  return (
    <div className="hud" id="legend">
      {ITEMS.map((item) => (
        <div className="li" key={item.label}>
          <span className="sw" style={{ background: item.color }} />
          {item.label}
        </div>
      ))}
    </div>
  );
}
