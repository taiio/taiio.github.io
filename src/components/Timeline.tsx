const MILESTONES = [
  { year: "2018", label: "Shipped my first real thing. It broke immediately. Character building." },
  { year: "2020", label: "Learned that \"it works on my machine\" is not a deployment strategy." },
  { year: "2022", label: "Built something people actually paid money for. Still surprised." },
  { year: "2024", label: "Started this weird portfolio-that's-also-an-app-hub idea." },
  { year: "2026", label: "Added a rotating galaxy to my homepage for no good reason." },
];

export function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <div className="eyebrow">A rough timeline</div>
        <h2>How we got here</h2>
        <div style={{ borderLeft: "2px solid var(--border)", paddingLeft: 24 }}>
          {MILESTONES.map((m) => (
            <div key={m.year} style={{ marginBottom: 28, position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  left: -30,
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  marginTop: 6,
                }}
              />
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent)" }}>
                {m.year}
              </span>
              <p style={{ margin: "4px 0 0", color: "var(--text-muted)" }}>{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
