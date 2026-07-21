# Custody Architecture

A standalone React + Vite + TypeScript application. This app is fully independent of the
portfolio host and every other app in this monorepo — it has its own dependencies, its own
`vite.config.ts`, and its own build process.

## Run standalone

```bash
cd apps/custody
npm install
npm run dev
```

## Build

```bash
npm run build
```

Builds to `dist/` with `base` set to `/custody/` (or whatever `VITE_BASE_PATH` the monorepo build
pipeline provides — see `vite.config.ts` for the fallback strategy).

## Contract with the host portfolio

This app's only coupling to the rest of the monorepo is `app.json`, which the portfolio's
`import.meta.glob("/apps/*/app.json")` discovery scans automatically. Nothing else needs to be
registered anywhere.
