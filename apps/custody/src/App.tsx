import { useState } from "react";

interface Wallet {
  chain: string;
  address: string;
  balance: string;
}

const WALLETS: Wallet[] = [
  { chain: "Ethereum", address: "0x9f...3a21", balance: "128.44 ETH" },
  { chain: "Bitcoin", address: "bc1q...k92p", balance: "3.021 BTC" },
  { chain: "Solana", address: "7xKX...q1m2", balance: "4,201.5 SOL" },
];

export default function App() {
  const [selected, setSelected] = useState<Wallet | null>(null);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", maxWidth: 720, margin: "0 auto", padding: 32 }}>
      <a href="/" style={{ fontSize: 13, color: "#6366f1" }}>
        ← Back to portfolio
      </a>
      <h1 style={{ marginTop: 16 }}>Custody Architecture</h1>
      <p style={{ color: "#555" }}>
        Standalone demo — this application is a completely independent Vite project living at{" "}
        <code>apps/custody</code>, deployed under <code>/custody</code>.
      </p>

      <h2 style={{ fontSize: 18, marginTop: 32 }}>Vaults</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #ddd" }}>
            <th style={{ padding: 8 }}>Chain</th>
            <th style={{ padding: 8 }}>Address</th>
            <th style={{ padding: 8 }}>Balance</th>
          </tr>
        </thead>
        <tbody>
          {WALLETS.map((w) => (
            <tr
              key={w.chain}
              onClick={() => setSelected(w)}
              style={{ cursor: "pointer", borderBottom: "1px solid #eee" }}
            >
              <td style={{ padding: 8 }}>{w.chain}</td>
              <td style={{ padding: 8, fontFamily: "monospace" }}>{w.address}</td>
              <td style={{ padding: 8 }}>{w.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selected && (
        <div style={{ marginTop: 24, padding: 16, background: "#f5f5f7", borderRadius: 8 }}>
          Selected vault: <strong>{selected.chain}</strong> — signing policy requires 2-of-3
          multisig approval before withdrawal.
        </div>
      )}
    </div>
  );
}
