import { featuredApps } from "@/lib/registry";

export function FeaturedProjects() {
  if (featuredApps.length === 0) return null;

  return (
    <section id="projects">
      <div className="container">
        <div className="eyebrow">Featured Projects</div>
        <h2>Selected work</h2>
        <p className="section-sub">
          Little apps I actually finished and shipped, each living at its own little corner of
          this site.
        </p>
        <div className="grid grid-2">
          {featuredApps.map((app) => (
            <div className="card" key={app.slug}>
              <h3 style={{ fontSize: 20, margin: "0 0 8px" }}>{app.name}</h3>
              <p style={{ color: "var(--text-muted)", fontSize: 14 }}>{app.description}</p>
              <div style={{ margin: "12px 0" }}>
                {app.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a href={app.path} className="link-arrow">
                Open project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
