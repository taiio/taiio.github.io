interface Job {
  role: string;
  company: string;
  period: string;
  points: string[];
}

const JOBS: Job[] = [
  {
    role: "Staff Software Engineer",
    company: "Independent / Consulting",
    period: "2023 — Present",
    points: [
      "Architected multi-app monorepo platforms serving 50+ independent products from a single deployment pipeline.",
      "Led migration of legacy monoliths to modular, independently-deployable services.",
    ],
  },
  {
    role: "Senior Full-Stack Engineer",
    company: "Fintech / Crypto Infrastructure",
    period: "2021 — 2023",
    points: [
      "Built multichain custody architecture handling institutional-grade asset transfers.",
      "Owned CI/CD, observability, and developer tooling for a 12-engineer team.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    company: "Product Startups",
    period: "2018 — 2021",
    points: [
      "Shipped customer-facing products end-to-end, from schema design to production UI.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="eyebrow">Experience</div>
        <h2>Where I&apos;ve worked</h2>
        <div className="grid" style={{ gap: 16 }}>
          {JOBS.map((job) => (
            <div className="card" key={job.role + job.company}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <h3 style={{ fontSize: 18, margin: 0 }}>
                  {job.role} · <span style={{ color: "var(--text-muted)" }}>{job.company}</span>
                </h3>
                <span
                  style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-faint)" }}
                >
                  {job.period}
                </span>
              </div>
              <ul style={{ color: "var(--text-muted)", fontSize: 14, marginTop: 12 }}>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
