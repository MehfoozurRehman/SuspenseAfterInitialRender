# SuspenseAfterInitialRender

A React wrapper that keeps Suspense fallbacks out of the first render.

**Status:** Working demo. The component is complete and builds as a library, but the repo has no tests, no demo page, and no evidence of a live consumer.

## The problem

Nested Suspense boundaries each show their own loading state during the first render, so the page appears in fragments. This component renders its children without a Suspense boundary on the first render, then switches to a normal boundary with the given fallback after mount. Only suspensions that happen after the first render show the fallback.

## What it does

- Renders children with no Suspense boundary on the first render, so the outermost boundary handles initial loading.
- Switches to a `Suspense` boundary with the `fallback` prop after mount.
- Exposes one default export with two props: `fallback` and `children`.
- Builds to ES and UMD bundles through Vite library mode, with `react` and `react-dom` marked external.

## How it's built

- React 18 function component written in TypeScript.
- The first-render flag is a single `useState` value that a `useEffect` flips to `false` on mount.
- Vite 5 library build, with a Brotli compression plugin in the build pipeline.
- `package.json` declares `exports` for both the ES and UMD builds and sets `"private": false`, so it is set up for publishing.

## Running it locally

```bash
pnpm install   # or: npm install
pnpm build     # or: npm run build
pnpm dev       # or: npm run dev
```

The `dev` and `build` scripts run `node api.js` before Vite. That file is an obfuscated script that is not part of the component. Review it, or remove it, before running these scripts. See "What's left".

## What's left

- No tests cover the first-render switch or the fallback behaviour.
- There is no `index.html` or demo page, so `dev` has nothing to preview.
- `api.js` is an obfuscated script that `dev` and `build` execute before Vite runs. It should be reviewed and removed.
