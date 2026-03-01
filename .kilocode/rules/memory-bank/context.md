# Active Context: shitcn — Parody Component Library

## Current State

**Project Status**: ✅ Active Refactor — global chaos demo runtime removed from the docs app shell; chaos features preserved as modular, reusable building blocks for future installable component-library packaging.

The project is a parody component-library documentation site called "shitcn", now being refactored toward production-ready, installable feature modules (instead of app-coupled demo wiring).

## Recently Completed

- [x] Built complete shitcn site with all required routes
- [x] Implemented 6 chaos features (DrunkMouse, UnclickableCookieBanner, ToastStorm, WhackAMole, DrunkMode, TrippingBalls)
- [x] Removed Control Panel from app runtime
- [x] Created 18 component entries with 5 interactive demos
- [x] Added 6 control-panel chaos feature component pages with "coming soon" demos
- [x] Built layout: top nav + left sidebar + main content area
- [x] Created DemoSandbox component for scoped whack-a-mole
- [x] Removed ChaosLayer and ChaosProvider from app runtime
- [x] Preserved all 6 chaos feature implementations for reuse
- [x] Introduced reusable chaos feature module surface (`src/features/chaos`)
- [x] Refactored DemoSandbox to use standalone `useWhackAMole(enabled)` hook
- [x] All routes working: /, /docs, /docs/installation, /docs/usage, /components, /components/[slug], /showcase, /about, 404
- [x] TypeScript strict mode passing
- [x] ESLint passing (React 19 strict rules)
- [x] Next.js build succeeding (22 pages generated)
- [x] Adjusted TrippingBalls animation delay to 5–20s

## Current Structure

| File/Directory | Purpose | Status |
|----------------|---------|--------|
| `src/app/page.tsx` | Home page with hero, features, quick start | ✅ Ready |
| `src/app/layout.tsx` | Root layout with Shell wrapper | ✅ Ready |
| `src/app/globals.css` | Global styles + chaos animations | ✅ Ready |
| `src/app/not-found.tsx` | Custom 404 page | ✅ Ready |
| `src/app/docs/` | Docs pages (intro, installation, usage) | ✅ Ready |
| `src/app/components/` | Component gallery + [slug] detail pages | ✅ Ready |
| `src/app/showcase/` | Showcase page | ✅ Ready |
| `src/app/about/` | About page | ✅ Ready |
| `src/components/layout/` | Shell, Navbar, Sidebar | ✅ Ready |
| `src/components/chaos/` | 5 chaos feature implementation components | ✅ Ready |
| `src/components/demos/` | 5 interactive demo components | ✅ Ready |
| `src/components/DemoSandbox.tsx` | Scoped demo wrapper for whack-a-mole | ✅ Ready |
| `src/features/chaos/` | Reusable chaos runtime API + metadata + hook | ✅ Ready |
| `src/data/components.ts` | Component metadata (18 entries) | ✅ Ready |

## Chaos Features

| Feature | Description | Current Availability |
|---------|-------------|-------|
| DrunkMouse | Cursor jitter + element wobble on hover | Implemented, not globally mounted |
| UnclickableCookieBanner | Cookie banner dodges cursor | Implemented, not globally mounted |
| ToastStorm | Click = toast notification | Implemented, not globally mounted |
| WhackAMole | Random button activation | Implemented via hook |
| DrunkMode | Progressive blur on main content | Implemented, not globally mounted |
| TrippingBalls | Psychedelic transforms/colors | Implemented, not globally mounted |

## Interactive Demos

| Component | Demo Type |
|-----------|-----------|
| ConfirmButton | Recursive confirmation dialogs |
| SlowInput | Delayed keystroke processing |
| ToastStorm | Toast multiplication |
| FormWithAmnesia | Form that clears every 10 seconds |
| InvertedScroll | Reversed scroll direction |

## Session History

| Date | Changes |
|------|---------|
| Initial | Template created with base setup |
| 2026-02-18 | Built complete shitcn parody site with 6 chaos features, 12 components, control panel |
| 2026-02-18 | Rendered Control Panel overlay via portal to fix stacking/visibility issue |
| 2026-02-18 | Fixed portal root missing position/zIndex — panel was hidden behind page content; refactored to module-level singleton `getPortalRoot()` to satisfy strict ESLint rules (no setState in effects, no ref access during render) |
| 2026-02-18 | Slowed TrippingBalls animations by 3× (duration 6–24s, delay 0–6s, refresh interval 15s) |
| 2026-02-18 | Slowed TrippingBalls animations by further 2× (duration 12–48s, delay 0–12s, refresh interval 30s) |
| 2026-02-18 | Updated TrippingBalls delay range to 5–20s |
| 2026-02-18 | Reworked ToastContainer: each toast spawns at a random position along one of 4 screen edges with directional slide-in animation; added `data-chaos-immune="toast"` to preserve animations while blocking chaos filters |
| 2026-02-18 | Fixed hydration mismatch in ControlPanel: added `suppressHydrationWarning` to chaos-active indicator elements (server renders all-false from DEFAULT_STATE, client reads localStorage) |
| 2026-02-18 | Resolved persistent hydration mismatch: DEFAULT_STATE set to all-false; `dynamic(ssr:false)` in Navbar retained; chaos features start disabled |
| 2026-03-01 | Added six new component detail pages (via `src/data/components.ts`) for control-panel chaos features: DrunkMouse, UnclickableCookieBanner, ToastStormChaos, WhackAMoleControls, DrunkMode, and TrippingBalls; all set to `hasDemo: false` so preview sections show "coming soon" |
| 2026-03-01 | Refactored away global demo chaos wiring: removed `ControlPanel`, `ChaosLayer`, and `ChaosContext` from app runtime; added reusable `src/features/chaos` module (`ChaosFeatureRuntime`, `useWhackAMole`, metadata/types); updated docs usage examples to new API |
