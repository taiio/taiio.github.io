# Portfolio + Application Hub

A GitHub Pages monorepo that hosts a personal portfolio at the root, plus any number of fully
independent applications under sub-paths (`/custody`, `/flight-tool`, …).

```
https://username.github.io/              → portfolio
https://username.github.io/custody        → independent app
https://username.github.io/flight-tool    → independent app
```

## Why this architecture

- **Each app is a real, independent project.** `apps/custody` and `apps/flight-tool` each have
  their own `package.json`, `vite.config.ts`, `tsconfig.json`, and dependency tree. You can
  `cd apps/custody && npm install && npm run dev` with zero knowledge of the rest of the repo.
- **Zero hardcoded project list.** The portfolio discovers apps by scanning `apps/*/app.json`
  with `import.meta.glob` in the browser (`src/lib/registry.ts`) and with `fast-glob` on the
  Node build side (`scripts/lib/apps.mjs`). Adding an app means adding a folder — nothing in the
  host source ever needs to change.
- **Scales to 50–100 apps.** Discovery, building, and deployment are all loop-driven over
  whatever exists under `apps/`, not enumerated by hand.

## Repository layout

```
portfolio/
├── package.json            # host portfolio + orchestration scripts
├── pnpm-workspace.yaml      # workspace = apps/*
├── vite.config.ts           # portfolio build (base: "/")
├── src/                      # portfolio: pages, components, router, registry
├── apps/
│   ├── custody/              # fully independent app
│   └── flight-tool/          # fully independent app
├── scripts/                  # discovery + build + deploy pipeline
├── generated/apps.json       # generated registry snapshot (build artifact)
└── .github/workflows/deploy.yml
```

## Adding a new application

1. Prototype it anywhere you like, completely standalone.
2. Move the finished project into `apps/<slug>/`.
3. Add `apps/<slug>/app.json`:

   ```json
   {
     "name": "My New App",
     "slug": "my-new-app",
     "description": "What it does.",
     "tags": ["React", "Tooling"],
     "featured": false,
     "priority": 10
   }
   ```

4. Make sure its `vite.config.ts` uses the base-path pattern from
   `apps/custody/vite.config.ts` (`process.env.VITE_BASE_PATH ?? "/<slug>/"`).
5. Commit. `pnpm install && pnpm build` picks it up automatically — no other file changes needed.

## Local development

```bash
pnpm install                 # installs the portfolio + every app in the workspace
pnpm dev                     # portfolio dev server at http://localhost:5173
pnpm dev:app custody         # a single app's own dev server, standalone
pnpm discover                # list every discovered app.json
```

Each app can also be run with zero pnpm/workspace awareness:

```bash
cd apps/custody
npm install
npm run dev
```

## Building for production

```bash
pnpm build
```

Runs, in order:

1. `scripts/generate-registry.mjs` → writes `generated/apps.json`
2. `pnpm build:portfolio` → builds the portfolio shell to `dist-portfolio/`
3. `scripts/build-apps.mjs` → builds every app to its own `apps/<slug>/dist/`, with
   `VITE_BASE_PATH=/<slug>/` injected so assets resolve correctly under its sub-path
4. `scripts/copy-artifacts.mjs` → assembles everything into the final `dist/`:

```
dist/
├── index.html
├── assets/
├── custody/
│   ├── index.html
│   └── assets/
└── flight-tool/
    ├── index.html
    └── assets/
```

## Deployment

CI (`.github/workflows/deploy.yml`) installs, lints, typechecks, tests, builds, and deploys
`dist/` to GitHub Pages on every push to `main`, via `actions/upload-pages-artifact` +
`actions/deploy-pages`.

For a manual deploy without CI: `pnpm build && pnpm deploy` (pushes `dist/` to a `gh-pages`
branch via a throwaway git worktree).

## Developer experience

- TypeScript (strict) everywhere, each app typechecked independently
- ESLint + Prettier
- Husky pre-commit (`lint` + `typecheck`) and commit-msg (Commitlint, Conventional Commits)
- Vitest for the portfolio's discovery/search logic (`src/lib/__tests__`)

## Bonus features implemented

- Command Palette (⌘/Ctrl+K) with keyboard navigation, jumping to sections or any discovered app
- Theme switcher (dark by default, persisted to `localStorage`)
- Terminal Mode (`help`, `apps`, `open <slug>`, `whoami`, `clear`)
- Live search + filter-by-tag across all discovered applications
- Minimal offline support via a service worker caching the portfolio shell (PWA manifest included)
# portfolio
