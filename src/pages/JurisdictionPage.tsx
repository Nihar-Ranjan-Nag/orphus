import {
  ArrowRight,
  Check,
  CheckCircle2,
  Globe2,
  Landmark,
  Scale,
  ShieldCheck,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";

import {
  Link,
  Navigate,
  useParams,
} from "react-router-dom";

import {
  jurisdictions,
  serviceBuckets,
} from "@/data/siteArchitecture";

/* =========================================================
   JURISDICTION-SPECIFIC VISUALS
========================================================= */

const jurisdictionVisuals: Record<
  string,
  {
    hero: string;
    secondary: string;
    label: string;
    intro: string;
  }
> = {
  uae: {
    hero:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=88",
    secondary:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1600&q=88",
    label: "UAE MARKET ENTRY",
    intro:
      "A strategic base for operating businesses, investors and international groups seeking access to the GCC and wider global markets.",
  },

  difc: {
    hero:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=88",
    secondary:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=88",
    label: "DUBAI FINANCIAL CENTRE",
    intro:
      "Institutional-grade structures for investment, holding, financing and regulated activity within Dubai’s financial ecosystem.",
  },

  adgm: {
    hero:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88",
    secondary:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=88",
    label: "ABU DHABI FINANCIAL CENTRE",
    intro:
      "Common-law structuring for SPVs, private wealth, funds and sophisticated ownership arrangements.",
  },

  bvi: {
    hero:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=1800&q=88",
    secondary:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=88",
    label: "INTERNATIONAL STRUCTURING",
    intro:
      "A widely used jurisdiction for holdings, investment structures and cross-border transactions.",
  },

  seychelles: {
    hero:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=88",
    secondary:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1600&q=88",
    label: "INTERNATIONAL STRUCTURING",
    intro:
      "Flexible ownership and international structures where simplicity and efficient administration are important.",
  },
};

export default function JurisdictionPage() {
  const { slug } = useParams();

  const jurisdiction = jurisdictions.find(
    (item) => item.slug === slug
  );

  if (!jurisdiction) {
    return <Navigate to="/" replace />;
  }

  const visual =
    jurisdictionVisuals[jurisdiction.slug] ||
    jurisdictionVisuals.uae;

  return (
    <main className="bg-[#FFFEFA] pt-[82px] text-[#0A1714]">
      {/* =====================================================
          COMPACT HERO
      ===================================================== */}
 {/* =====================================================
    JURISDICTION HERO
===================================================== */}

<section className="relative overflow-hidden bg-[#071813] text-white">
  {/* Background texture */}
  <div className="absolute inset-0 opacity-20 grid-texture-dark" />

  <div
    className="
      section-shell
      relative
      grid
      min-h-[470px]
      items-stretch
      gap-0

      lg:grid-cols-[1.02fr_.98fr]
    "
  >
    {/* =================================================
        LEFT CONTENT
    ================================================= */}

    <div
      className="
        relative
        z-10
        flex
        items-center
        py-12
        pr-0

        md:py-14

        lg:pr-12
      "
    >
      <div className="max-w-[650px]">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#D8B867]" />

          <p
            className="
              text-[12px]
              font-extrabold
              uppercase
              tracking-[.20em]
              text-[#D8B867]
            "
          >
            {jurisdiction.kicker}
          </p>
        </div>

        {/* Jurisdiction title */}
        <h1
          className="
            mt-5
            font-serif
            text-[clamp(58px,7vw,92px)]
            font-normal
            leading-[.9]
            tracking-[-.05em]
            text-white
          "
        >
          {jurisdiction.title}
        </h1>

        {/* Intro */}
        <p
          className="
            mt-6
            max-w-[590px]
            text-[17px]
            leading-7
            text-white/70
            md:text-[18px]
          "
        >
          {visual.intro}
        </p>

        {/* Quick facts */}
        <div
          className="
            mt-7
            grid
            max-w-[600px]
            gap-3
            sm:grid-cols-2
          "
        >
          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.045]
              p-4
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[.15em]
                text-[#D8B867]
              "
            >
              Context
            </p>

            <p
              className="
                mt-2
                text-[14px]
                leading-5
                text-white/78
              "
            >
              {jurisdiction.context}
            </p>
          </div>

          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-white/[0.045]
              p-4
            "
          >
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[.15em]
                text-[#D8B867]
              "
            >
              Best suited to
            </p>

            <p
              className="
                mt-2
                text-[14px]
                leading-5
                text-white/78
              "
            >
              {jurisdiction.bestFor}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="
              inline-flex
              min-h-[44px]
              items-center
              gap-2
              rounded-md
              bg-[#0B5345]
              px-5
              text-[12px]
              font-bold
              uppercase
              tracking-[.09em]
              text-white
              transition
              hover:bg-[#106756]
            "
          >
            Discuss a Structure

            <ArrowRight size={13} />
          </Link>

          <Link
            to="/blog"
            className="
              inline-flex
              min-h-[44px]
              items-center
              rounded-md
              border
              border-white/18
              bg-white/[0.035]
              px-5
              text-[12px]
              font-bold
              uppercase
              tracking-[.09em]
              text-white
              transition
              hover:bg-white/[0.07]
            "
          >
            Read Insights
          </Link>
        </div>
      </div>
    </div>

    {/* =================================================
        RIGHT VISUAL
    ================================================= */}

    <div
      className="
        relative
        min-h-[330px]
        overflow-hidden

        lg:min-h-full
      "
    >
      <img
        src={visual.hero}
        alt={`${jurisdiction.title} business and financial environment`}
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Blend image into dark left side */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            90deg,
            #071813_0%,
            rgba(7,24,19,.78)_16%,
            rgba(7,24,19,.24)_45%,
            transparent_78%
          )]
        "
      />

      {/* Bottom fade */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(
            0deg,
            rgba(7,24,19,.82)_0%,
            rgba(7,24,19,.12)_35%,
            transparent_60%
          )]
        "
      />

      {/* Bottom caption */}
      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          max-w-[420px]
        "
      >
        <p
          className="
            text-[11px]
            font-extrabold
            uppercase
            tracking-[.18em]
            text-[#D8B867]
          "
        >
          {visual.label}
        </p>

        <p
          className="
            mt-2
            font-serif
            text-[22px]
            font-normal
            leading-[1.1]
            text-white
          "
        >
          Selected for purpose, governance and cross-border use.
        </p>
      </div>
    </div>
  </div>

  {/* =================================================
      BOTTOM TRUST STRIP
  ================================================= */}

  <div className="border-t border-white/10 bg-[#061711]">
    <div
      className="
        section-shell
        grid
        gap-4
        py-4
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {[
        {
          icon: Building2,
          title: "Commercial Purpose",
          text: "Structure aligned with real business use.",
        },
        {
          icon: Landmark,
          title: "Bankability",
          text: "Considered against institutional scrutiny.",
        },
        {
          icon: Scale,
          title: "Governance",
          text: "Ownership and control designed clearly.",
        },
        {
          icon: ShieldCheck,
          title: "Ongoing Compliance",
          text: "Practical after implementation.",
        },
      ].map(({ icon: Icon, title, text }) => (
        <div
          key={title}
          className="
            flex
            items-start
            gap-3
            border-white/10
            lg:border-l
            lg:pl-5
            first:lg:border-l-0
            first:lg:pl-0
          "
        >
          <Icon
            size={15}
            className="mt-1 shrink-0 text-[#D8B867]"
          />

          <div>
            <p
              className="
                font-serif
                text-[17px]
                text-white
              "
            >
              {title}
            </p>

            <p
              className="
                mt-1
                text-[12px]
                leading-4
                text-white/45
              "
            >
              {text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* =====================================================
          WHY THIS JURISDICTION
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div
          className="
            section-shell
            grid
            items-center
            gap-12
            lg:grid-cols-[.9fr_1.1fr]
          "
        >
          {/* LEFT IMAGE */}
          <div className="relative">
            <div
              className="
                relative
                h-[430px]
                overflow-hidden
                rounded-[24px]
                border
                border-[#DCE2DD]

                sm:h-[450px]

                lg:h-[470px]
              "
            >
              <img
                src={visual.secondary}
                alt={`${jurisdiction.title} business environment`}
                className="h-full w-full object-cover"
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-[linear-gradient(180deg,transparent_42%,rgba(4,25,20,.10)_62%,rgba(4,25,20,.46)_100%)]
                "
              />

              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  z-10

                  max-w-[320px]

                  rounded-2xl

                  border
                  border-white/10

                  bg-[#07251E]/92

                  p-4

                  text-white

                  shadow-[0_14px_34px_rgba(0,0,0,.18)]

                  backdrop-blur-md

                  sm:bottom-5
                  sm:left-5
                  sm:right-auto
                  sm:max-w-[300px]
                  sm:p-5

                  lg:bottom-6
                  lg:left-6
                  lg:max-w-[310px]
                "
              >
                <Globe2
                  size={18}
                  className="text-[#D8B867]"
                />

                <p
                  className="
                    mt-3
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.17em]
                    text-[#D8B867]

                    sm:mt-4
                    sm:text-[11px]
                  "
                >
                  STRUCTURING PRINCIPLE
                </p>

                <p
                  className="
                    mt-2
                    font-serif
                    text-[19px]
                    leading-[1.12]

                    sm:text-[21px]
                  "
                >
                  Choose the jurisdiction for the objective — not the name.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="section-kicker">
              WHY THIS JURISDICTION
            </p>

            <h2
              className="
                mt-4
                max-w-[650px]
                font-serif
                text-[clamp(36px,4.5vw,58px)]
                font-normal
                leading-[1.02]
                tracking-[-.04em]
              "
            >
              Use the jurisdiction because it fits — not because it is familiar.
            </h2>

            <p
              className="
                mt-5
                max-w-[620px]
                text-[17px]
                leading-7
                text-[#5E6D68]
              "
            >
              The right answer depends on the commercial purpose,
              ownership, banking pathway, regulatory environment and
              where the structure needs to operate.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Commercial purpose and ownership structure",
                "Bankability and economic substance",
                "Regulatory requirements and governance",
                "Ongoing operating and compliance requirements",
              ].map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-start
                    gap-3
                    text-[15px]
                    leading-6
                    text-[#354540]
                  "
                >
                  <Check
                    size={15}
                    className="mt-1 shrink-0 text-[#0B5345]"
                  />

                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STRUCTURING CRITERIA
      ===================================================== */}

      <section className="bg-[#F7F4EC] py-16 md:py-20">
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
                STRUCTURING CRITERIA
              </p>

              <h2
                className="
                  mt-4
                  max-w-[680px]
                  font-serif
                  text-[clamp(36px,4.5vw,56px)]
                  font-normal
                  leading-[1.02]
                "
              >
                Four areas we assess before recommending a jurisdiction.
              </h2>
            </div>

            <p
              className="
                max-w-[430px]
                text-[16px]
                leading-7
                text-[#61706B]
              "
            >
              The jurisdiction should remain commercially useful,
              bankable and administratively practical after
              implementation.
            </p>
          </div>

          <div
            className="
              mt-10
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-4
            "
          >
            {[
              {
                icon: Building2,
                title: "Ownership & Governance",
                copy:
                  "Control, shareholder rights, succession, directors and governance expectations.",
              },
              {
                icon: Landmark,
                title: "Banking & Substance",
                copy:
                  "Real bankability, source of funds, economic substance and supporting evidence.",
              },
              {
                icon: Globe2,
                title: "Cross-Border Fit",
                copy:
                  "How the entity interacts with contracts, investments, operating markets and the wider group.",
              },
              {
                icon: ShieldCheck,
                title: "Ongoing Compliance",
                copy:
                  "Records, filings, regulatory obligations and the practical burden of maintaining the structure.",
              },
            ].map(({ icon: Icon, title, copy }, index) => (
              <div
                key={title}
                className="
                  group/card
                  relative
                  min-h-[255px]
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-[#DCE2DC]
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
                    absolute
                    right-4
                    top-3
                    font-serif
                    text-[50px]
                    text-[#0B5345]/[0.04]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF2EF]
                    text-[#0B5345]
                  "
                >
                  <Icon size={17} />
                </div>

                <h3
                  className="
                    mt-7
                    font-serif
                    text-[24px]
                    font-normal
                    leading-[1.08]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[14px]
                    leading-6
                    text-[#687671]
                  "
                >
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          JURISDICTION SNAPSHOT
      ===================================================== */}

      <section className="bg-white py-16 md:py-20">
        <div
          className="
            section-shell
            grid
            overflow-hidden
            rounded-[26px]
            bg-[#07251E]
            lg:grid-cols-[1fr_1fr]
          "
        >
          {/* LEFT */}
          <div className="p-8 text-white md:p-10 lg:p-12">
            <p className="section-kicker-gold">
              JURISDICTION SNAPSHOT
            </p>

            <h2
              className="
                mt-4
                max-w-[570px]
                font-serif
                text-[clamp(36px,4.5vw,56px)]
                font-normal
                leading-[1.02]
                text-white
              "
            >
              Designed around use, not just incorporation.
            </h2>

            <p
              className="
                mt-5
                max-w-[560px]
                text-[16px]
                leading-7
                text-white/65
              "
            >
              We assess the structure against how it will operate
              in practice — including banking, ownership,
              counterparties, regulatory requirements and ongoing
              administration.
            </p>

            <div
              className="
                mt-7
                grid
                gap-3
                sm:grid-cols-2
              "
            >
              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[.045]
                  p-4
                "
              >
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.16em]
                    text-[#D8B867]
                  "
                >
                  Context
                </p>

                <p
                  className="
                    mt-2
                    text-[15px]
                    font-semibold
                    leading-6
                    text-white/80
                  "
                >
                  {jurisdiction.context}
                </p>
              </div>

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[.045]
                  p-4
                "
              >
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.16em]
                    text-[#D8B867]
                  "
                >
                  Best suited to
                </p>

                <p
                  className="
                    mt-2
                    text-[15px]
                    font-semibold
                    leading-6
                    text-white/80
                  "
                >
                  {jurisdiction.bestFor}
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="
                mt-8
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#D8B867]
                px-5
                py-3.5
                text-[12px]
                font-bold
                uppercase
                tracking-[.09em]
                text-[#071813]
              "
            >
              Discuss This Jurisdiction
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="min-h-[360px]">
            <img
              src={visual.hero}
              alt={`${jurisdiction.title} financial environment`}
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          RELEVANT SOLUTIONS
      ===================================================== */}

      <section className="bg-[#F7F4EC] py-16 md:py-20">
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
                RELEVANT SOLUTIONS
              </p>

              <h2
                className="
                  mt-4
                  max-w-[680px]
                  font-serif
                  text-[clamp(36px,4.5vw,56px)]
                  font-normal
                "
              >
                Build the complete financial architecture.
              </h2>
            </div>

            <Link
              to="/services"
              className="micro-link"
            >
              View all solutions
              <ArrowRight size={13} />
            </Link>
          </div>

          <div
            className="
              mt-10
              grid
              gap-4
              md:grid-cols-2
              lg:grid-cols-3
            "
          >
            {serviceBuckets.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="
                    group/card
                    relative
                    overflow-hidden

                    rounded-[20px]

                    border
                    border-[#DDE3DE]

                    bg-white

                    p-6

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
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EAF2EF]
                      text-[#0B5345]
                    "
                  >
                    <Icon size={17} />
                  </div>

                  <p
                    className="
                      mt-6
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.16em]
                      text-[#A7802D]
                    "
                  >
                    {service.eyebrow}
                  </p>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[26px]
                      font-normal
                      leading-[1.08]
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      text-[15px]
                      leading-6
                      text-[#687671]
                    "
                  >
                    {service.description}
                  </p>

                  <span
                    className="
                      micro-link
                      mt-6
                    "
                  >
                    Explore solution

                    <ArrowRight
                      size={12}
                      className="transition-transform md:group-hover/card:translate-x-1"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
 
    </main>
  );
}