# Client feedback fixes — August 2026

Implemented in this build:

1. The approved orange Orpheus client logo is used consistently via `public/brands/orpheus-client-logo.png`, including the initial loading screen.
2. Removed the broken automatic WhatsApp redirect. The floating assistant now answers inside the website with realistic scripted guidance and then shows the phone number and email.
3. Chat suggestions and replies adapt to the current service/jurisdiction instead of using one generic offshore message everywhere.
4. Normal React route changes are forced to the top of the destination page, including Lenis/native scroll state reset.
5. Removed the self-referencing `/services#...` navigation that was contributing to confusing page positions. Corporate Finance and Debt Raising now use real service routes.
6. Phone calling remains unchanged because the client confirmed it is working correctly.
7. Email stays on the currently configured operations address pending any separate client confirmation. Contact values are centralized in `src/data/contact.ts` for a one-line future change.
8. The markets section now shows five core markets by default. “View all markets” expands the complete 18-market list without leaving the page.
9. Jurisdictions are consolidated into three top-level groups: UAE, BVI and Seychelles. UAE Mainland, DIFC and ADGM are nested under UAE while their existing detail pages remain available.
10. Solutions are consolidated into three top-level pillars: Corporate Structuring & Governance, Banking & Capital, and Private Wealth. Detailed services are nested within those pillars.
11. The Solutions overview page uses the same three-pillar architecture so users see a consistent hierarchy across the site.
12. Smooth scrolling now falls back safely to native browser scrolling if `ResizeObserver` is unavailable, preventing a startup crash/white page.
13. The updated package excludes the unused Bun lockfile so npm maintenance commands no longer try to invoke Bun.

## Validation

- `npm run test` — passed
- `npm run build` — passed
- `npm run lint` — passed with warnings only; no lint errors
