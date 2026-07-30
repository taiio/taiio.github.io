import React from "react";

export default function LoadingOverlay({ hiding }) {
  return (
    <div className="loading-overlay" style={{ opacity: hiding ? 0 : 1 }}>
      Initializing scene<span>...</span>
    </div>
  );
}
