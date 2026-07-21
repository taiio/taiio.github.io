import { spawnSync } from "node:child_process";

function run(command, args) {
  console.log(`\n$ ${command} ${args.join(" ")}`);
  const result = spawnSync(command, args, { stdio: "inherit", shell: process.platform === "win32" });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

console.log("=== Portfolio + Application Hub: full build ===");

run("node", ["scripts/generate-registry.mjs"]);
run("pnpm", ["run", "build:portfolio"]);
run("node", ["scripts/build-apps.mjs"]);
run("node", ["scripts/copy-artifacts.mjs"]);

console.log("\n=== Build complete. Output in dist/ ===");
