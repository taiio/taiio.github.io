export function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="eyebrow">About</div>
        <h2>Engineer, architect, and builder</h2>
        <p className="section-sub">
          I design and ship end-to-end systems — from infrastructure and APIs to the interfaces
          people actually touch. I care about clean architecture, fast feedback loops, and code
          that a team can still understand a year later.
        </p>
        <div className="grid grid-3">
          <div className="card">
            <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Backend & Infra</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>
              Distributed systems, databases, queues, and infrastructure-as-code.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Frontend Architecture</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>
              Component systems, state management, performance, and design systems.
            </p>
          </div>
          <div className="card">
            <h3 style={{ fontSize: 18, margin: "0 0 8px" }}>Developer Experience</h3>
            <p style={{ color: "var(--text-muted)", fontSize: 14, margin: 0 }}>
              Build pipelines, CI/CD, monorepo tooling, and internal platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
