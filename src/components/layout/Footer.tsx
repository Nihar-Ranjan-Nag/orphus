import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { jurisdictionGroups, solutionPillars } from "@/data/siteArchitecture";
import { OrpheusWordmark } from "@/components/ui/OrpheusWordmark";
import { CONTACT, EMAIL_HREF, PHONE_HREF } from "@/data/contact";
import { GOOGLE_MAPS_URL, OFFICE_ADDRESS } from "@/data/siteLinks";

export function Footer() {
  return (
    <footer className="bg-[#061510] text-white">
      <div className="mx-auto max-w-[1240px] px-5 py-14 md:px-10 md:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.1fr]">
          <div>
            <OrpheusWordmark variant="light" className="h-[34px]" />
            <p className="mt-5 max-w-[290px] text-[13px] leading-6 text-white/66">
              Structuring capital, entities and wealth across borders from Dubai.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="https://www.linkedin.com/company/orpheuss/"
                target="_blank"
                rel="noreferrer"
                aria-label="Orpheus Financial on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-[#D8B867]/55 hover:text-[#D8B867]"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D8B867]">Solutions</h3>
            <div className="mt-4 space-y-2.5">
              {solutionPillars.map((pillar) => (
                <Link key={pillar.slug} to={`/services#${pillar.slug}`} className="block text-[12px] text-white/68 hover:text-white">
                  {pillar.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D8B867]">Jurisdictions</h3>
            <div className="mt-4 space-y-2.5">
              {jurisdictionGroups.map((jurisdiction) => (
                <Link key={jurisdiction.slug} to={`/jurisdictions/${jurisdiction.slug}`} className="block text-[12px] text-white/68 hover:text-white">
                  {jurisdiction.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D8B867]">Resources</h3>
            <div className="mt-4 space-y-2.5">
              <Link to="/blog" className="block text-[12px] text-white/68 hover:text-white">Insights</Link>
              <Link to="/about" className="block text-[12px] text-white/68 hover:text-white">About</Link>
              <Link to="/contact" className="block text-[12px] text-white/68 hover:text-white">Contact</Link>
              <Link to="/services" className="block text-[12px] text-white/68 hover:text-white">Service overview</Link>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[.18em] text-[#D8B867]">Contact</h3>
            <div className="mt-4 space-y-3">
              <a href={GOOGLE_MAPS_URL} target="_blank" rel="noreferrer" className="flex gap-2 text-[12px] leading-5 text-white/68 hover:text-white">
                <MapPin size={12} className="mt-0.5 shrink-0 text-[#D8B867]" />
                {OFFICE_ADDRESS}
              </a>
              <a href={PHONE_HREF} className="flex gap-2 text-[12px] text-white/68 hover:text-white">
                <Phone size={12} className="text-[#D8B867]" />
                {CONTACT.phoneDisplay}
              </a>
              <a href={EMAIL_HREF} className="flex min-w-0 gap-2 text-[12px] text-white/68 hover:text-white">
                <Mail size={12} className="shrink-0 text-[#D8B867]" />
                <span className="break-all">{CONTACT.email}</span>
              </a>
            </div>
            
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-white/48 md:flex-row">
          <span>© {new Date().getFullYear()} Orpheus Financial. All rights reserved.</span>
          <span>Privacy Policy · Terms of Use · Cookie Policy</span>
        </div>
      </div>
    </footer>
  );
}
