# Orpheus client consistency & responsiveness update — 10 Sep 2026

## Implemented
- Increased content typography across home, services, service detail, capability detail, jurisdiction, about, insights/blog, blog detail and contact content.
- Added a shared interactive card language across the project: motion on entry, lift on hover/focus, stronger emerald border and animated emerald-to-gold top rail.
- Applied the card behaviour to major content cards while avoiding ordinary buttons, decorative shapes and icon chips.
- Improved mobile legibility and spacing with larger default copy, responsive section padding and touch-safe card active states.
- Jurisdiction child/detail pages now use the same more readable content scale as the homepage.
- Rebuilt the Contact page around the exact HomeContact consultation/form experience used on the homepage, followed by the Dubai office Google Maps section.
- Preserved unique specialist capability routes so cards open their relevant detail pages rather than a single generic destination.

## Validation
- `npm run build`: PASS
- `npm test -- --run`: PASS (2/2 tests)
- `npm run lint`: PASS with 0 errors; 10 pre-existing/non-blocking warnings in shared UI/hooks.
