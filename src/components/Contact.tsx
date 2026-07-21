export function Contact() {
  return (
    <section id="contact" style={{ borderBottom: "none" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <div className="eyebrow">Say hi</div>
        <h2>Got a fun project? A weird bug? A meme?</h2>
        <p className="section-sub" style={{ margin: "0 auto 24px" }}>
          I answer emails faster than I answer &quot;how&apos;s the WiFi in your galaxy.&quot;
        </p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", justifyContent: "center" }}>
          <a className="link-arrow" href="mailto:hello@example.com">
            Email →
          </a>
          <a
            className="link-arrow"
            href="https://github.com/username"
            target="_blank"
            rel="noreferrer"
          >
            GitHub →
          </a>
          <a
            className="link-arrow"
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn →
          </a>
        </div>
        <p style={{ marginTop: 64, color: "var(--text-faint)", fontSize: 13 }}>
          Press <kbd>⌘/Ctrl</kbd> + <kbd>K</kbd> to open the command palette.
        </p>
      </div>
    </section>
  );
}
