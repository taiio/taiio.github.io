export default function AppNotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 48 }}>404</h1>
      <p style={{ color: "var(--text-muted)" }}>
        This page doesn&apos;t exist. If you&apos;re looking for an application, check the applications
        section on the homepage.
      </p>
      <a className="btn btn-primary" href="/">
        Back to home
      </a>
    </div>
  );
}
