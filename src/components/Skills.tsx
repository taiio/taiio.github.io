const SKILL_GROUPS: Array<{ title: string; items: string[] }> = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"] },
  { title: "Frontend", items: ["React", "Vite", "Next.js", "Redux", "Tailwind"] },
  { title: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "gRPC", "REST"] },
  { title: "Infra & Tooling", items: ["Docker", "GitHub Actions", "Terraform", "AWS", "pnpm"] },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="eyebrow">Skills</div>
        <h2>Tools I reach for</h2>
        <p className="section-sub">A working toolkit, not a buzzword list.</p>
        <div className="grid grid-2">
          {SKILL_GROUPS.map((group) => (
            <div className="card" key={group.title}>
              <h3 style={{ fontSize: 16, margin: "0 0 12px" }}>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
