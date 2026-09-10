import {
  ArrowRight,
  CheckCircle2,
  Landmark,
  Building2,
  ShieldCheck,
  Gem,
  HandCoins,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import {
  jurisdictions,
  processSteps,
  serviceBuckets,
} from "@/data/siteArchitecture";

/* =========================================================
   PROFESSIONAL SERVICE IMAGES

   These images are deliberately more financial / corporate
   and less like generic office stock photography.
========================================================= */

const serviceImages: Record<string, string> = {
  "entity-management":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=88",

  "banking-treasury":
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=88",

  "private-credit-debt":
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=88",

  "private-wealth":
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=88",

  "compliance-risk":
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=88",

  "corporate-finance-advisory":
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1600&q=88",
};

const serviceMiniPoints: Record<string, string[]> = {
  "entity-management": [
    "Entity formation & restructuring",
    "Corporate governance",
    "Holding companies & SPVs",
  ],

  "banking-treasury": [
    "Corporate banking strategy",
    "KYC & UBO preparation",
    "Multi-bank treasury",
  ],

  "private-credit-debt": [
    "Debt raising & refinancing",
    "Capital stack design",
    "Lender introductions",
  ],

  "private-wealth": [
    "Wealth management",
    "Investment advisory",
    "Family office",
    "Estate & succession planning",
  ],

  "compliance-risk": [
    "AML & KYC governance",
    "Regulatory support",
    "Compliance reviews",
  ],

  "corporate-finance-advisory": [
    "Transaction advisory",
    "Financial structuring",
    "Cross-border execution",
  ],
};


const privateWealthGroups = [
  {
    title: "Wealth Management",
    items: ["Comprehensive wealth planning", "Portfolio management", "Asset allocation", "Risk management", "Investment planning"],
  },
  {
    title: "Investment Advisory",
    items: ["Equities", "Mutual funds", "Fixed income", "Alternative investments", "Private equity", "Venture capital", "Pre-IPO investments"],
  },
  {
    title: "Family Office",
    items: ["Single family office", "Multi family office", "Family governance", "Consolidated reporting", "Next-generation planning"],
  },
  {
    title: "Estate & Succession Planning",
    items: ["Estate planning", "Succession planning", "Trust structures", "Wealth transfer"],
  },
];

const serviceIcons: Record<
  string,
  typeof Building2
> = {
  "entity-management": Building2,
  "banking-treasury": Landmark,
  "private-credit-debt": HandCoins,
  "private-wealth": Gem,
  "compliance-risk": ShieldCheck,
  "corporate-finance-advisory": BriefcaseBusiness,
};

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const service = serviceBuckets.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const HeroIcon =
    serviceIcons[service.slug] || service.icon;

  const heroImage =
    serviceImages[service.slug] || service.image;

  const miniPoints =
    serviceMiniPoints[service.slug] ||
    service.outcomes.slice(0, 3);

  return (
    <main
      className="
        bg-[#FFFEFA]
        pt-[76px]
        text-[#0A1714]
      "
    >
      {/* =====================================================
          COMPACT SERVICE HERO
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#E1E5DF]
          bg-[#F8F6F0]
        "
      >
        {/* subtle grid */}
        <div className="absolute inset-0 grid-texture opacity-40" />

        <div
          className="
            section-shell
            relative
            grid
            min-h-[500px]
            items-center
            gap-10
            py-12

            lg:grid-cols-[1.02fr_.98fr]
            lg:py-14
          "
        >
          {/* ===============================================
              LEFT CONTENT
          =============================================== */}

          <div className="max-w-[650px]">
            {/* eyebrow */}
            <p className="section-kicker">
              {service.eyebrow}
            </p>

            {/* icon */}
            <div
              className="
                mt-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#0B5345]/15
                bg-[#EAF2EF]
                text-[#0B5345]
              "
            >
              <HeroIcon size={19} />
            </div>

            {/* title */}
            <h1
              className="
                mt-5
                max-w-[640px]
                font-serif
                text-[clamp(42px,5vw,68px)]
                font-normal
                leading-[.97]
                tracking-[-.045em]
                text-[#081A15]
              "
            >
              {service.title}
            </h1>

            {/* description */}
            <p
              className="
                mt-5
                max-w-[620px]
                text-[17px]
                leading-7
                text-[#5F6E69]

                md:text-[18px]
              "
            >
              {service.description}
            </p>

            {/* capabilities */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                gap-x-5
                gap-y-2.5
              "
            >
              {miniPoints.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[13px]
                    font-semibold
                    text-[#41514C]
                  "
                >
                  <CheckCircle2
                    size={14}
                    className="text-[#0B5345]"
                  />

                  {point}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  gap-2
                  rounded-md
                  bg-[#0B5345]
                  px-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.09em]
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106756]
                "
              >
                Discuss Your Objective

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to="/services"
                className="
                  inline-flex
                  min-h-[44px]
                  items-center
                  justify-center
                  rounded-md
                  border
                  border-[#0B5345]/20
                  bg-white
                  px-5
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.09em]
                  text-[#0B5345]

                  transition-all
                  duration-300

                  md:hover:-translate-y-0.5
                  md:hover:border-[#0B5345]/35
                  md:hover:bg-[#EDF4F1]
                  md:hover:shadow-[0_8px_20px_rgba(7,40,33,.06)]
                "
              >
                All Solutions
              </Link>
            </div>
          </div>

          {/* ===============================================
              RIGHT IMAGE
          =============================================== */}

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[590px]

              lg:mx-0
              lg:ml-auto
            "
          >
            {/* gold top detail */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -left-3
                -top-3
                h-20
                w-20
                rounded-tl-[24px]
                border-l
                border-t
                border-[#C9A95D]/35
              "
            />

            <div
              className="
                relative
                overflow-hidden
                rounded-[24px]
                border
                border-[#D8DED8]
                bg-[#E9ECE7]
                shadow-[0_24px_60px_rgba(6,38,31,.10)]
              "
            >
              <div
                className="
                  relative
                  h-[330px]

                  sm:h-[360px]
                  lg:h-[390px]
                "
              >
                <img
                  src={heroImage}
                  alt={`${service.title} financial advisory`}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-[1.025]
                  "
                />

                {/* image tint */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-[linear-gradient(
                      180deg,
                      transparent_40%,
                      rgba(4,25,20,.12)_72%,
                      rgba(4,25,20,.62)_100%
                    )]
                  "
                />

                {/* bottom label */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-center
                    justify-between
                    gap-4
                    p-5
                  "
                >
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.17em]
                        text-[#E4C77D]
                      "
                    >
                      ORPHEUS FINANCIAL
                    </p>

                    <p
                      className="
                        mt-1
                        font-serif
                        text-[18px]
                        font-normal
                        text-white
                      "
                    >
                      Dubai-based. Internationally focused.
                    </p>
                  </div>

                  <div
                    className="
                      hidden
                      rounded-full
                      border
                      border-white/20
                      bg-black/15
                      px-3
                      py-1.5
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.12em]
                      text-white/80
                      backdrop-blur-sm

                      sm:block
                    "
                  >
                    {service.eyebrow}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE HANDLE
      ===================================================== */}

      <section
        className="
          bg-[#F7F4EC]
          py-16
          md:py-20
        "
      >
        <div
          className="
            section-shell
            grid
            gap-12

            lg:grid-cols-[.82fr_1.18fr]
          "
        >
          <div>
            <p className="section-kicker">
              WHAT WE HANDLE
            </p>

            <h2
              className="
                section-title
                max-w-[520px]
              "
            >
              A clear mandate, designed around execution.
            </h2>

            <p
              className="
                section-copy
                max-w-[550px]
              "
            >
              We combine commercial structuring with practical
              implementation. The goal is not a document or
              incorporation in isolation — it is an architecture
              that works with banks, counterparties, regulators
              and the client's wider strategy.
            </p>
          </div>

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            "
          >
            {service.outcomes.map(
              (outcome, index) => (
                <div
                  key={outcome}
                  className="
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-white
                    p-6

                    transition-all
                    duration-300

                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0

                      hidden
                      h-[3px]
                      w-full

                      origin-left
                      scale-x-0

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    "
                  />
                  <span
                    className="
                      text-[12px]
                      font-bold
                      tracking-[.12em]
                      text-[#B48D34]
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[25px]
                      font-normal
                      leading-[1.07]
                      text-[#0A1714]
                    "
                  >
                    {outcome}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[15px]
                      leading-6
                      text-[#687671]
                    "
                  >
                    Structured around documentation,
                    governance, counterparties and
                    implementation requirements.
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {service.slug === "private-wealth" && (
        <section className="bg-white py-16 md:py-20">
          <div className="section-shell">
            <div className="max-w-[720px]">
              <p className="section-kicker">PRIVATE WEALTH CAPABILITIES</p>
              <h2 className="section-title">From wealth planning to family continuity.</h2>
              <p className="section-copy">The Private Wealth mandate now reflects the full 3 September scope: wealth management, investment advisory, family office services, and estate and succession planning.</p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {privateWealthGroups.map((group) => (
                <article
                  key={group.title}
                  className="
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-[#F9FAF7]
                    p-5

                    transition-all
                    duration-300

                    md:p-6
                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:bg-white
                    md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0

                      hidden
                      h-[3px]
                      w-full

                      origin-left
                      scale-x-0

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    "
                  />
                  <h3 className="font-serif text-[25px] font-normal">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-[#DDE3DE] bg-white px-3 py-2 text-[12px] font-semibold text-[#42534D]">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section
        className="
          bg-white
          py-16
          md:py-20
        "
      >
        <div className="section-shell">
          <p className="section-kicker">
            OUR PROCESS
          </p>

          <h2
            className="
              mt-3
              max-w-[620px]
              font-serif
              text-[clamp(34px,4vw,52px)]
              font-normal
              leading-[1.02]
            "
          >
            Structured from objective to execution.
          </h2>

          <div
            className="
              mt-8
              grid
              gap-4

              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {processSteps.map((step) => (
              <div
                key={step.no}
                className="
                  group/card
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#DDE3DE]
                  bg-[#FFFEFA]
                  p-6

                  transition-all
                  duration-300

                  md:hover:-translate-y-1
                  md:hover:border-[#0B5345]/25
                  md:hover:shadow-[0_16px_40px_rgba(7,40,33,.08)]
                "
              >
                <span
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0

                    hidden
                    h-[3px]
                    w-full

                    origin-left
                    scale-x-0

                    bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                    transition-transform
                    duration-300

                    md:block
                    md:group-hover/card:scale-x-100
                  "
                />
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#0B5345]
                    text-[12px]
                    font-bold
                    text-white
                  "
                >
                  {step.no}
                </span>

                <h3
                  className="
                    mt-5
                    font-serif
                    text-[24px]
                    font-normal
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-[15px]
                    leading-6
                    text-[#6A7773]
                  "
                >
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JURISDICTIONS
      ===================================================== */}

      <section
        className="
          bg-[#F7F4EC]
          py-16
          md:py-20
        "
      >
        <div className="section-shell">
          <div
            className="
              flex
              flex-col
              justify-between
              gap-5

              md:flex-row
              md:items-end
            "
          >
            <div>
              <p className="section-kicker">
                CROSS-BORDER CONTEXT
              </p>

              <h2
                className="
                  mt-3
                  font-serif
                  text-[clamp(34px,4vw,52px)]
                  font-normal
                "
              >
                Related jurisdictions.
              </h2>
            </div>

            <Link
              to="/contact"
              className="micro-link"
            >
              Need a comparison?

              <ArrowRight size={13} />
            </Link>
          </div>

          <div
            className="
              mt-8
              grid
              gap-4
              sm:grid-cols-2
              lg:grid-cols-5
            "
          >
            {jurisdictions.map(
              (jurisdiction) => (
                <Link
                  key={jurisdiction.slug}
                  to={`/jurisdictions/${jurisdiction.slug}`}
                  className="
                    group/card
                    relative
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#DDE3DE]
                    bg-white
                    p-5

                    transition-all
                    duration-300

                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:shadow-[0_15px_38px_rgba(7,40,33,.07)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0

                      hidden
                      h-[3px]
                      w-full

                      origin-left
                      scale-x-0

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    "
                  />
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.15em]
                      text-[#0B5345]
                    "
                  >
                    {jurisdiction.kicker}
                  </p>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[25px]
                      font-normal
                    "
                  >
                    {jurisdiction.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[14px]
                      leading-5
                      text-[#687671]
                    "
                  >
                    {jurisdiction.description}
                  </p>

                  <span
                    className="
                      micro-link
                      mt-5
                    "
                  >
                    Explore

                    <ArrowRight size={11} />
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section
        className="
          bg-[#071813]
          py-12
          text-white
        "
      >
        <div
          className="
            section-shell
            flex
            flex-col
            justify-between
            gap-6

            md:flex-row
            md:items-center
          "
        >
          <div>
            <p
              className="
                font-serif
                text-[28px]
                font-normal
              "
            >
              Need advice on the right structure?
            </p>

            <p
              className="
                mt-2
                text-[15px]
                text-white/55
              "
            >
              Start with the commercial objective before
              choosing the structure.
            </p>
          </div>

          
        </div>
      </section>
    </main>
  );
}