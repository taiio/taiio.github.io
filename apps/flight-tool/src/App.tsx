import { useState } from "react";

interface Flight {
  code: string;
  route: string;
  status: "On Time" | "Delayed" | "Boarding";
  eta: string;
}

const FLIGHTS: Flight[] = [
  { code: "VN214", route: "SGN → HAN", status: "On Time", eta: "14:35" },
  { code: "VJ123", route: "SGN → DAD", status: "Boarding", eta: "13:10" },
  { code: "QH202", route: "HAN → SGN", status: "Delayed", eta: "16:05" },
];

export default function App() {
  const [selected, setSelected] = useState<Flight | null>(null);

  return (
    <div
      style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "0 auto", padding: 32 }}
    >
      <a href="/" style={{ fontSize: 13, color: "#6366f1" }}>
        ← Back to portfolio
      </a>
      <h1 style={{ marginTop: 16 }}>Flight Tool</h1>
      <p style={{ color: "#555" }}>
        Standalone demo — this application is a completely independent Vite project living at{" "}
        <code>apps/flight-tool</code>, deployed under <code>/flight-tool</code>.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 32 }}>Live board</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: 8 }}>Flight</th>
            <th style={{ padding: 8 }}>Route</th>
            <th style={{ padding: 8 }}>Status</th>
            <th style={{ padding: 8 }}>ETA</th>
          </tr>
        </thead>
        <tbody>
          {FLIGHTS.map((f) => (
            <tr
              key={f.code}
              onClick={() => setSelected(f)}
              style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
            >
              <td style={{ padding: 8, fontFamily: "monospace" }}>{f.code}</td>
              <td style={{ padding: 8 }}>{f.route}</td>
              <td style={{ padding: 8 }}>{f.status}</td>
              <td style={{ padding: 8 }}>{f.eta}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div style={{ marginTop: 24, padding: 16, background: "#f5f5f7", borderRadius: 8 }}>
          Selected flight <strong>{selected.code}</strong> — status: {selected.status}, ETA{" "}
          {selected.eta}.
        </div>
      )}
    </div>
  );
}
