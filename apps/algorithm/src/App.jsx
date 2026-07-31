import React, { useEffect, useRef, useState, useCallback } from "react";
import { SceneManager } from "./lib/SceneManager.js";
import { AnimationController } from "./lib/AnimationController.js";
import TelemetryPanel from "./components/TelemetryPanel.jsx";
import TreePanel from "./components/TreePanel.jsx";
import LegendPanel from "./components/LegendPanel.jsx";
import BrandPanel from "./components/BrandPanel.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";

const INITIAL_STATE = {
  stats: {
    nodes: "–",
    edges: "–",
    step: "–",
    distance: "–",
    queueSize: "–",
    algorithm: "–",
  },
  banner: { text: "Bootstrapping graph", num: undefined },
  calc: "",
  frontier: null, // { list: [{id, priority}], chosenId } | null
  tree: {
    rootId: null,
    parentEntries: [],
    nodesInTree: [],
    currentId: null,
    pathNodeIds: [],
    pathLinkKeys: [],
    flashLinkKey: null,
  },
  paused: false,
};

export default function App() {
  const mountRef = useRef(null);
  const controllerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loadingHiding, setLoadingHiding] = useState(false);
  const [state, setState] = useState(INITIAL_STATE);
  const [algorithm, setAlgorithmState] = useState("random");
  const [speed, setSpeedState] = useState(1);

  useEffect(() => {
    const container = mountRef.current;
    const sceneManager = new SceneManager(container);

    const controller = new AnimationController(sceneManager, {
      initialAlgorithm: algorithm,
      initialSpeed: speed,
      onUpdate: (patch) => {
        setState((prev) => ({
          ...prev,
          ...patch,
          stats: patch.stats ? { ...prev.stats, ...patch.stats } : prev.stats,
        }));
      },
    });
    controllerRef.current = controller;

    let rafId;
    const renderLoop = () => {
      sceneManager.update();
      rafId = requestAnimationFrame(renderLoop);
    };
    renderLoop();
    controller.run();

    const loadingTimer = setTimeout(() => {
      setLoadingHiding(true);
      setTimeout(() => setLoading(false), 650);
    }, 350);

    return () => {
      controller.stop();
      cancelAnimationFrame(rafId);
      clearTimeout(loadingTimer);
      sceneManager.renderer.dispose();
      if (container && sceneManager.renderer.domElement.parentNode === container) {
        container.removeChild(sceneManager.renderer.domElement);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTogglePause = useCallback(() => controllerRef.current?.togglePause(), []);
  const handleRegenerate = useCallback(() => controllerRef.current?.regenerateNow(), []);
  const handleAlgorithmChange = useCallback((key) => {
    setAlgorithmState(key);
    controllerRef.current?.setAlgorithm(key);
  }, []);
  const handleSpeedChange = useCallback((value) => {
    setSpeedState(value);
    controllerRef.current?.setSpeed(value);
  }, []);

  return (
    <>
      {loading && <LoadingOverlay hiding={loadingHiding} />}
      <div className="canvas-root" ref={mountRef} />

      <BrandPanel />
      <TelemetryPanel
        stats={state.stats}
        banner={state.banner}
        calc={state.calc}
        frontier={state.frontier}
        paused={state.paused}
        algorithm={algorithm}
        speed={speed}
        onTogglePause={handleTogglePause}
        onRegenerate={handleRegenerate}
        onAlgorithmChange={handleAlgorithmChange}
        onSpeedChange={handleSpeedChange}
      />
      <LegendPanel />
      <TreePanel tree={state.tree} />
    </>
  );
}
