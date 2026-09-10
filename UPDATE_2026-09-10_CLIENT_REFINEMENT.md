# Orpheus client refinement — 10 September 2026

This build applies the latest client consistency feedback and fixes specialist-service navigation.

## Implemented
- Kept the hero clean by removing the low-contrast right-side overlay treatment that merged into the background.
- Preserved the established Orpheus emerald / gold / warm-paper visual system and responsive navbar.
- Fixed the key navigation issue where specialist-service cards sent users to the same generic destination.
- Added 12 distinct specialist-service detail routes so every capability card now opens relevant content.
- Updated capability links on both the homepage and Solutions page.
- Added tailored client-facing copy, outcomes, execution steps and consultation context to each specialist service.
- Detail pages use responsive one-column mobile layouts, two-column tablet layouts and structured desktop grids.
- Preserved the three approved top-level solution pillars and existing jurisdiction architecture.
- Added an IntersectionObserver test mock so the app smoke test is stable under JSDOM.

## Validation
- `npm run build` — passed.
- `npm run test` — passed (2/2 tests).
- `npm run lint` — passed with 0 errors; existing non-blocking warnings remain in shared utility/UI files.
