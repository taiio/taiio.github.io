import { spawnSync } from "node:child_process";
import fs from "fs-extra";
import path from "node:path";
import { ROOT } from "./lib/apps.mjs";

const DIST = path.join(ROOT, "dist");
const BRANCH = process.env.DEPLOY_BRANCH ?? "gh-pages";

function run(command, args, options = {}) {
  console.log(`$ ${command} ${args.join(" ")}`);

  const result = spawnSync(command, args, {
    stdio: "inherit",
    ...options,
  });

  if (result.status !== 0) {
    throw new Error(
      `Command failed: ${command} ${args.join(" ")}`
    );
  }
}

async function main() {
  if (!(await fs.pathExists(DIST))) {
    console.error('dist/ not found. Run "pnpm build" first.');
    process.exit(1);
  }

  console.log(
    `Deploying dist/ to the "${BRANCH}" branch via git worktree...`
  );

  const worktreeDir = path.join(ROOT, ".deploy-worktree");

  // Cleanup broken metadata from previous runs.
  await fs.remove(worktreeDir);

  try {
    run("git", ["worktree", "prune"], {
      cwd: ROOT,
    });
  } catch {}

  try {
    run("git", ["fetch", "origin", BRANCH], {
      cwd: ROOT,
    });
  } catch {
    console.log(
      `No existing "${BRANCH}" branch on origin yet — will create it.`
    );
  }

  try {
    run(
      "git",
      [
        "worktree",
        "add",
        "-B",
        BRANCH,
        worktreeDir,
        `origin/${BRANCH}`,
      ],
      { cwd: ROOT }
    );
  } catch {
    run(
      "git",
      ["worktree", "add", "-B", BRANCH, worktreeDir],
      { cwd: ROOT }
    );
  }

  // IMPORTANT:
  // Do NOT use emptyDir() because it removes .git.
  for (const file of await fs.readdir(worktreeDir)) {
    if (file === ".git") continue;

    await fs.remove(path.join(worktreeDir, file));
  }

  await fs.copy(DIST, worktreeDir);

  run("git", ["add", "-A"], {
    cwd: worktreeDir,
  });

  const commitResult = spawnSync(
    "git",
    [
      "commit",
      "-m",
      `chore(deploy): ${new Date().toISOString()}`,
    ],
    {
      cwd: worktreeDir,
      stdio: "inherit",
    }
  );

  if (commitResult.status === 0) {
    const remotes = spawnSync(
      "git",
      ["remote"],
      {
        cwd: worktreeDir,
        encoding: "utf8",
      }
    );

    if (!remotes.stdout.includes("deploy")) {
      run(
        "git",
        [
          "remote",
          "add",
          "deploy",
          "git@github.com:taiio/taiio.github.io.git",
        ],
        {
          cwd: worktreeDir,
        }
      );
    }

    run(
      "git",
      ["push", "-u", "--force", "deploy", BRANCH],
      {
        cwd: worktreeDir,
      }
    );

    console.log(`\n✔ Deployed to ${BRANCH}.`);
  } else {
    console.log(
      "\nNothing to commit — dist/ is unchanged since the last deploy."
    );
  }

  run(
    "git",
    ["worktree", "remove", "--force", worktreeDir],
    {
      cwd: ROOT,
    }
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});