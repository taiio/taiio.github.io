import { lazy, Suspense } from "react";
import { ThemeToggleButton } from "@/components/ThemeSwitcher";

const GalaxyBackground = lazy(() =>
  import("@/components/GalaxyBackground").then((m) => ({ default: m.GalaxyBackground })),
);

export function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" style={{ fontFamily: "var(--font-mono)", fontWeight: 600 }}>
          {"<Portfolio />"}
        </a>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="#projects" className="nav-link">
            Projects
          </a>
          <a href="#apps" className="nav-link">
            Apps
          </a>
          <a href="#contact" className="nav-link">
            Contact
          </a>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid var(--border)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: 0,
      }}
    >
      <Suspense fallback={null}>
        <GalaxyBackground />
      </Suspense>

      {/* Soft gradient so the text stays readable over the galaxy */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--bg) 88%), linear-gradient(to bottom, transparent 60%, var(--bg) 100%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container fade-in"
        style={{
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(36px, 7vw, 72px)",
            margin: "0 0 20px",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Hi. I made a galaxy.
          <br />
          It&apos;s a bit much, I know.
        </h1>
        <p
          className="section-sub"
          style={{ fontSize: 18, margin: "0 auto", textAlign: "center" }}
        >
          Go ahead — drag it, spin it, zoom way in, zoom way out. It won&apos;t judge you.
        </p>
        <p
          style={{
            marginTop: 20,
            color: "var(--text-faint)",
            fontSize: 13,
            fontFamily: "var(--font-mono)",
            pointerEvents: "auto",
          }}
        >
          🖱️ drag to rotate · scroll to zoom · right-click drag to pan
        </p>

        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            color: "var(--text-faint)",
            fontSize: 13,
            fontFamily: "var(--font-mono)",
          }}
        >
          <span>keep scrolling, it gets weirder</span>
          <span style={{ animation: "bob 1.6s ease-in-out infinite" }}>↓</span>
        </div>
      </div>

      <style>
        {`
          @keyframes bob {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
        `}
      </style>
    </section>
  );
}
