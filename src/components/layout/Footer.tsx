import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Link } from "react-router-dom";

import {
  jurisdictionGroups,
  solutionPillars,
} from "@/data/siteArchitecture";

import { OrpheusWordmark } from "@/components/ui/OrpheusWordmark";

import {
  CONTACT,
  EMAIL_HREF,
  PHONE_HREF,
} from "@/data/contact";

import {
  GOOGLE_MAPS_URL,
  OFFICE_ADDRESS,
} from "@/data/siteLinks";

export function Footer() {
  return (
    <footer
      className="
        bg-[#061510]
        text-white
      "
    >
      <div
        className="
          mx-auto
          max-w-[1240px]

          px-5
          py-12

          sm:px-6
          sm:py-14

          md:px-10
          md:py-16
        "
      >
        {/* =====================================================
            MAIN FOOTER GRID
        ===================================================== */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[1.35fr_1fr_1fr_1fr_1.1fr]
            lg:gap-10
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            <OrpheusWordmark
              variant="light"
              className="
                h-[36px]

                sm:h-[38px]
              "
            />

            <p
              className="
                mt-5

                max-w-[320px]

                text-[14px]
                leading-7

                text-white/68

                sm:text-[15px]
              "
            >
              Structuring capital, entities and wealth across borders
              from Dubai.
            </p>

            {/* SOCIAL */}

            <div
              className="
                mt-5

                flex
                gap-2
              "
            >
              <a
                href="https://www.linkedin.com/company/orpheuss/"
                target="_blank"
                rel="noreferrer"
                aria-label="Orpheus Financial on LinkedIn"
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/15

                  text-white/70

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:border-[#D8B867]/55
                  hover:text-[#D8B867]
                "
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* =================================================
              MOBILE 2 x 2 LIST GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-2

              gap-x-7
              gap-y-9

              sm:gap-x-10

              lg:contents
            "
          >
            {/* =============================================
                SOLUTIONS
            ============================================= */}

            <div>
              <h3
                className="
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-[#D8B867]

                  sm:text-[13px]
                "
              >
                Solutions
              </h3>

              <div
                className="
                  mt-4

                  space-y-3
                "
              >
                {solutionPillars.map((pillar) => (
                  <Link
                    key={pillar.slug}
                    to={`/services#${pillar.slug}`}
                    className="
                      block

                      text-[14px]
                      leading-6

                      text-white/70

                      transition-colors
                      duration-200

                      hover:text-white

                      sm:text-[15px]
                    "
                  >
                    {pillar.title}
                  </Link>
                ))}
              </div>
            </div>

            {/* =============================================
                JURISDICTIONS
            ============================================= */}

            <div>
              <h3
                className="
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-[#D8B867]

                  sm:text-[13px]
                "
              >
                Jurisdictions
              </h3>

              <div
                className="
                  mt-4

                  space-y-3
                "
              >
                {jurisdictionGroups.map(
                  (jurisdiction) => (
                    <Link
                      key={jurisdiction.slug}
                      to={`/jurisdictions/${jurisdiction.slug}`}
                      className="
                        block

                        text-[14px]
                        leading-6

                        text-white/70

                        transition-colors
                        duration-200

                        hover:text-white

                        sm:text-[15px]
                      "
                    >
                      {jurisdiction.title}
                    </Link>
                  ),
                )}
              </div>
            </div>

            {/* =============================================
                RESOURCES
            ============================================= */}

            <div>
              <h3
                className="
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-[#D8B867]

                  sm:text-[13px]
                "
              >
                Resources
              </h3>

              <div
                className="
                  mt-4

                  space-y-3
                "
              >
                <Link
                  to="/blog"
                  className="
                    block

                    text-[14px]

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  Insights
                </Link>

                <Link
                  to="/about"
                  className="
                    block

                    text-[14px]

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  About
                </Link>

                <Link
                  to="/contact"
                  className="
                    block

                    text-[14px]

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  Contact
                </Link>

                <Link
                  to="/services"
                  className="
                    block

                    text-[14px]

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  Service overview
                </Link>
              </div>
            </div>

            {/* =============================================
                CONTACT
            ============================================= */}

            <div>
              <h3
                className="
                  text-[12px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-[#D8B867]

                  sm:text-[13px]
                "
              >
                Contact
              </h3>

              <div
                className="
                  mt-4

                  space-y-4
                "
              >
                {/* ADDRESS */}

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex
                    items-start
                    gap-2.5

                    text-[14px]
                    leading-6

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  <MapPin
                    size={15}
                    className="
                      mt-1
                      shrink-0

                      text-[#D8B867]
                    "
                  />

                  <span>
                    {OFFICE_ADDRESS}
                  </span>
                </a>

                {/* PHONE */}

                <a
                  href={PHONE_HREF}
                  className="
                    flex
                    items-center
                    gap-2.5

                    text-[14px]

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  <Phone
                    size={15}
                    className="
                      shrink-0

                      text-[#D8B867]
                    "
                  />

                  {CONTACT.phoneDisplay}
                </a>

                {/* EMAIL */}

                <a
                  href={EMAIL_HREF}
                  className="
                    flex
                    min-w-0
                    items-start
                    gap-2.5

                    text-[14px]
                    leading-6

                    text-white/70

                    transition-colors
                    duration-200

                    hover:text-white

                    sm:text-[15px]
                  "
                >
                  <Mail
                    size={15}
                    className="
                      mt-1
                      shrink-0

                      text-[#D8B867]
                    "
                  />

                  <span
                    className="
                      break-all
                    "
                  >
                    {CONTACT.email}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div
          className="
            mt-10

            flex
            flex-col
            justify-between
            gap-3

            border-t
            border-white/10

            pt-6

            text-[12px]
            leading-6

            text-white/50

            sm:text-[13px]

            md:mt-12
            md:flex-row
            md:items-center
          "
        >
          <span>
            © {new Date().getFullYear()} Orpheus Financial. All rights reserved.
          </span>

          <span>
            Privacy Policy · Terms of Use · Cookie Policy
          </span>
        </div>
      </div>
    </footer>
  );
}