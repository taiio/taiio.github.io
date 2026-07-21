# Caro Online

Realtime multiplayer Caro (Gomoku) — Next.js + Firebase Realtime Database, statically exported.

Unlike the other example apps in this monorepo (which use Vite), this one is a Next.js app. It's
still fully independent: its own `package.json`, its own `next.config.mjs`, its own dependency
tree. The monorepo doesn't care what framework an app uses — it only cares that `npm run build`
produces a static `dist/` folder, same as every other app.

## Run standalone

```bash
cd apps/caro
npm install
npm run dev
```

## Build

```bash
npm run build
```

This runs `next build` with `output: "export"` (fully static, no Node.js server needed), then a
`postbuild` step that:

1. Renames `out/_next` → `out/node` and rewrites references to it. This sidesteps GitHub Pages'
   default Jekyll processing, which silently drops any folder starting with an underscore unless
   a `.nojekyll` file is present (the monorepo's build pipeline already adds one, but this is a
   harmless extra safeguard).
2. Renames `out/` → `dist/` so the output matches the same contract every other app in this
   monorepo follows (`scripts/copy-artifacts.mjs` always looks for `apps/<slug>/dist`).

## Base path

Same convention as the Vite apps: `next.config.mjs` reads `NEXT_BASE_PATH` (no trailing slash,
Next.js requirement) and falls back to `/caro` when run standalone. The monorepo's
`scripts/build-apps.mjs` sets this automatically for every app during a full build.

## Firebase

Game state syncs through Firebase Realtime Database (see `lib/firebase.ts`). The config object
there contains only the public Firebase Web config, which is safe to ship client-side — access is
controlled by Firebase security rules, not by keeping this config secret.

## Contract with the host portfolio

This app's only coupling to the rest of the monorepo is `app.json`, which the portfolio's
`import.meta.glob("/apps/*/app.json")` discovery scans automatically. Nothing else needs to be
registered anywhere.
