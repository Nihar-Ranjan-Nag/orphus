# Orpheus website update — 3 September 2026 feedback

Implemented:
- Homepage reordered to the approved inverted-funnel sequence.
- Client logos moved directly below the Hero.
- Removed the three redundant hero trust pills; retained four feature cards.
- Lead Architect + direct execution positioning strengthened across Hero and How We Work.
- Homepage consolidated to three solution pillars.
- Private Wealth expanded to family office, estate/succession and global wealth management/advisory.
- UAE consolidated with Mainland, DIFC and ADGM nested beneath it.
- BVI and Seychelles now use direct CTAs instead of redundant one-item submenus.
- Markets reduced to five by default with View All Markets expansion.
- Firm Announcement moved into Insights.
- Market Insights newsletter has an active subscription interaction ready for API wiring.
- Request Guide no longer redirects to the contact form; it is disabled until the approved PDF is supplied.
- Reusable Advisory CTA added before the footer on internal pages.
- Homepage How We Work and Contact copy/components use single static text layers to avoid duplicate/ghost rendering.
- Responsive layouts retained/updated for phone, tablet and desktop widths.

Pending external asset:
- Replace the disabled guide button with a direct `download` link when Rayyan provides the final PDF.

Backend note:
- Newsletter and contact interactions currently use the project’s existing frontend toast pattern. Connect them to production API/email endpoints when those endpoints are available.
