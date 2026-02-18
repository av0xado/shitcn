# Active Context: shitcn — Parody Component Library

## Current State

**Project Status**: ✅ Complete — shitcn parody component library docs site built and deployed

The project has been transformed from a clean Next.js starter into a full parody component-library documentation site called "shitcn", featuring intentionally awful UI components and 6 toggleable chaos features.

## Recently Completed

- [x] Built complete shitcn site with all required routes
- [x] Implemented 6 chaos features (DrunkMouse, UnclickableCookieBanner, ToastStorm, WhackAMole, DrunkMode, TrippingBalls)
- [x] Created Control Panel (immune to chaos) with individual toggles
- [x] Created 12 component entries with 5 interactive demos
- [x] Built layout: top nav + left sidebar + main content area
- [x] Created DemoSandbox component for scoped whack-a-mole
- [x] Created ChaosLayer for global chaos effects
- [x] Added localStorage persistence for chaos state
- [x] Implemented data-chaos-immune attribute system
- [x] All routes working: /, /docs, /docs/installation, /docs/usage, /components, /components/[slug], /showcase, /about, 404
- [x] TypeScript strict mode passing
- [x] ESLint passing (React 19 strict rules)
- [x] Next.js build succeeding (22 pages generated)

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
| `src/components/chaos/` | ChaosLayer + 5 chaos feature components | ✅ Ready |
| `src/components/demos/` | 5 interactive demo components | ✅ Ready |
| `src/components/ControlPanel.tsx` | Chaos control panel (immune) | ✅ Ready |
| `src/components/DemoSandbox.tsx` | Scoped demo wrapper for whack-a-mole | ✅ Ready |
| `src/context/ChaosContext.tsx` | Chaos state management | ✅ Ready |
| `src/data/components.ts` | Component metadata (12 entries) | ✅ Ready |

## Chaos Features

| Feature | Description | Scope |
|---------|-------------|-------|
| DrunkMouse | Cursor jitter + element wobble on hover | Global |
| UnclickableCookieBanner | Cookie banner dodges cursor | Global overlay |
| ToastStorm | Click = toast notification | Global (not immune elements) |
| WhackAMole | Random button activation | Demo areas only |
| DrunkMode | Progressive blur on main content | Main content |
| TrippingBalls | Psychedelic transforms/colors | Main content elements |

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
