# Orpheus 2026 — Visibility, Typography & UX Update

This revision addresses the page screenshots where headings/body copy and imagery could disappear or appear too faint.

## What changed
- Removed opacity-dependent hero text on reusable page heroes.
- Reworked scroll reveal behavior so content is visible by default and animation is only progressive enhancement.
- Rebuilt Services, Service Detail, Jurisdiction, Insights and Contact layouts with explicit high-contrast text.
- Increased body, card, navigation and footer font sizes for readability.
- Standardized typography: editorial Georgia serif headings + system sans-serif body text, avoiding missing web-font rendering issues.
- Replaced critical externally-hosted service/jurisdiction imagery with local project assets so cards do not break when third-party image hosts are blocked.
- Kept SmartImage fallbacks for resilience.
- Added **Trusted by businesses across 18 markets** to the homepage.
- Improved solution cards, jurisdiction cards, process cards and insight cards for clearer hierarchy and more comfortable spacing.
- Kept the requested Deep Corporate Emerald `#0B5345`, dark institutional green, warm ivory and restrained gold palette.

## Core pages updated
- `/`
- `/services`
- `/services/:slug`
- `/jurisdictions/:slug`
- `/blog`
- `/contact`

## Run
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm run preview
```
