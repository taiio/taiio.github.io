import { useMemo, useState } from "react";
import { appRegistry, getAllTags, searchApps } from "@/lib/registry";

export function AllApplications() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => getAllTags(), []);
  const results = useMemo(() => searchApps(query, tag), [query, tag]);

  return (
    <section id="apps">
      <div className="container">
        <div className="eyebrow">All Applications</div>
        <h2>{appRegistry.length} applications and counting</h2>
        <p className="section-sub">
          Everything I&apos;ve built, in one place. Poke around, search, or filter by tag.
        </p>

        <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search applications…"
            style={{
              flex: "1 1 240px",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid var(--border)",
              background: "var(--bg-elevated)",
              color: "var(--text)",
              fontSize: 14,
            }}
          />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              className={`chip ${tag === null ? "chip-active" : ""}`}
              onClick={() => setTag(null)}
            >
              All
            </button>
            {tags.map((t) => (
              <button
                key={t}
                className={`chip ${tag === t ? "chip-active" : ""}`}
                onClick={() => setTag(t === tag ? null : t)}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {results.length === 0 ? (
          <p style={{ color: "var(--text-faint)" }}>No applications match your search.</p>
        ) : (
          <div className="grid grid-3">
            {results.map((app) => (
              <a href={app.path} className="card" key={app.slug} style={{ display: "block" }}>
                <h3 style={{ fontSize: 16, margin: "0 0 6px" }}>{app.name}</h3>
                <p style={{ color: "var(--text-muted)", fontSize: 13, margin: "0 0 10px" }}>
                  {app.description}
                </p>
                <div>
                  {app.tags.slice(0, 3).map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
