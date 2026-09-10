# Orpheus Financial — 2026 Institutional Redesign

This build applies the August 2026 redesign brief while preserving the underlying Web2 React project and its existing content/routes.

## Applied design direction
- Deep Corporate Emerald `#0B5345` as the secondary structural color.
- British Racing Green `#014421` and Vibrant Forest `#18453B` used as supporting dark greens.
- Gold remains a restrained premium accent rather than the dominant UI color.
- Warm ivory / paper backgrounds replace large areas of black.
- Editorial serif headlines + clean sans-serif utility text.
- Static Dubai hero image (no hero video).
- Compact, high-trust cards with thin borders and restrained shadows.
- Mobile-first navigation and responsive layouts.

## New information architecture
Dedicated SEO URLs now exist for broad solution buckets:
- `/services/entity-management`
- `/services/banking-treasury`
- `/services/private-credit-debt`
- `/services/private-wealth`
- `/services/compliance-risk`
- `/services/corporate-finance-advisory`

Dedicated jurisdiction URLs:
- `/jurisdictions/uae`
- `/jurisdictions/difc`
- `/jurisdictions/adgm`
- `/jurisdictions/bvi`
- `/jurisdictions/seychelles`

## Image reliability
The redesigned cards use relevant online editorial/business images through `SmartImage`. If any remote image cannot load, the component automatically falls back to the bundled `/dubai-bg.png`, so cards never appear as broken images.

## Run
```bash
npm install
npm run dev
```

Production:
```bash
npm run build
npm run preview
```
