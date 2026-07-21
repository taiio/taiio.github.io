import { useEffect, useRef, useState } from "react";
import { appRegistry } from "@/lib/registry";

const HELP = [
  "Available commands:",
  "  help          show this message",
  "  apps          list all applications",
  "  open <slug>   navigate to an application",
  "  whoami        about me",
  "  clear         clear the terminal",
];

export function TerminalMode() {
  const [lines, setLines] = useState<string[]>(["Welcome. Type 'help' to get started.", ""]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [lines]);

  function run(cmd: string) {
    const trimmed = cmd.trim();
    const [name, ...args] = trimmed.split(" ");
    const output: string[] = [`$ ${cmd}`];

    switch (name) {
      case "help":
        output.push(...HELP);
        break;
      case "apps":
        appRegistry.forEach((a) => output.push(`  ${a.slug.padEnd(16)} ${a.description}`));
        break;
      case "open": {
        const app = appRegistry.find((a) => a.slug === args[0]);
        if (app) {
          output.push(`Navigating to ${app.path} …`);
          setTimeout(() => (window.location.href = app.path), 400);
        } else {
          output.push(`No app named "${args[0] ?? ""}". Try 'apps' to list them.`);
        }
        break;
      }
      case "whoami":
        output.push("Staff-level full-stack engineer. See the About section above.");
        break;
      case "clear":
        setLines([]);
        return;
      case "":
        break;
      default:
        output.push(`command not found: ${name}`);
    }

    setLines((prev) => [...prev, ...output, ""]);
  }

  return (
    <div className="terminal" onClick={() => document.getElementById("term-input")?.focus()}>
      <div ref={scrollRef} style={{ maxHeight: 220, overflowY: "auto" }}>
        {lines.map((l, i) => (
          <div key={i} style={{ whiteSpace: "pre-wrap" }}>
            {l}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <span>&gt;&nbsp;</span>
        <input
          id="term-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              run(input);
              setInput("");
            }
          }}
          style={{
            background: "transparent",
            border: "none",
            outline: "none",
            color: "inherit",
            fontFamily: "inherit",
            flex: 1,
          }}
          autoFocus
          spellCheck={false}
        />
      </div>
    </div>
  );
}
