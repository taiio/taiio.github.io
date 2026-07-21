import { useEffect, useMemo, useState } from "react";
import { appRegistry } from "@/lib/registry";

interface Command {
  id: string;
  label: string;
  hint: string;
  run: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const commands: Command[] = useMemo(() => {
    const appCommands: Command[] = appRegistry.map((app) => ({
      id: `app-${app.slug}`,
      label: `Open ${app.name}`,
      hint: app.path,
      run: () => {
        window.location.href = app.path;
      },
    }));

    return appCommands;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) => c.label.toLowerCase().includes(q));
  }, [commands, query]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      } else if (e.key === "Enter" && filtered[selected]) {
        filtered[selected].run();
        setOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, selected]);

  if (!open) return null;

  return (
    <div className="palette-overlay" onClick={() => setOpen(false)}>
      <div className="palette-box" onClick={(e) => e.stopPropagation()}>
        <input
          autoFocus
          className="palette-input"
          placeholder="Type a command or search apps…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setSelected(0);
          }}
        />
        <div role="listbox" style={{ maxHeight: 320, overflowY: "auto" }}>
          {filtered.length === 0 && <div className="palette-item">No results</div>}
          {filtered.map((cmd, i) => (
            <div
              key={cmd.id}
              role="option"
              aria-selected={i === selected}
              className="palette-item"
              onMouseEnter={() => setSelected(i)}
              onClick={() => {
                cmd.run();
                setOpen(false);
              }}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <span>{cmd.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{cmd.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
