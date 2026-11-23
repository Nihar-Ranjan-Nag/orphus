
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Scale,
} from "lucide-react";

/**
 * ORPHEUS FINANCIAL
 * Compact Blog Hero Section
 *
 * Features:
 * - Compact desktop height
 * - Two-column responsive layout
 * - Dark green and gold branding
 * - Subtle background grid
 * - Interactive insights dashboard
 * - No external images
 */

const insights = [
  {
    number: "01",
    category: "REGULATORY UPDATES",
    title: "UAE Company Law",
    description: "7 important changes",
    href: "#uae-company-law-section",
    icon: Scale,
  },
  {
    number: "02",
    category: "EXPERT PERSPECTIVES",
    title: "Articles & Insights",
    description: "Explore our latest thinking",
    href: "#insights",
    icon: BookOpen,
  },
  {
    number: "03",
    category: "BUSINESS STRATEGY",
    title: "Corporate Governance",
    description: "Built right. Run right.",
    href: "#governance-story",
    icon: Building2,
  },
];

export default function BlogHeroSection() {
  return (
    <section
      id="blog-hero"
      className="relative isolate overflow-hidden bg-[#061C15] text-white"
    >
      {/* SUBTLE BACKGROUND GRID */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              #D5B052 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              #D5B052 1px,
              transparent 1px
            )
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* BACKGROUND GRADIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-r
          from-[#061C15]
          via-[#061C15]/90
          to-transparent
        "
      />

      {/* MAIN TWO-COLUMN GRID */}
      <div
        className="
          relative mx-auto grid
          w-full max-w-[1120px]
          items-center
          gap-7
          px-5 py-8
          sm:px-8
          md:grid-cols-[1.2fr_0.8fr]
          md:gap-8
          lg:min-h-[350px]
          lg:grid-cols-[1.25fr_0.75fr]
          lg:gap-12
          lg:px-0
          lg:py-8
        "
      >
        {/* =====================================
            LEFT SIDE — EDITORIAL CONTENT
        ===================================== */}

        <div className="relative z-10 min-w-0">

          {/* EYEBROW */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#D5B052]" />

            <span
              className="
                text-[10px]
                font-bold uppercase
                tracking-[0.22em]
                text-[#D5B052]
              "
            >
              OUR INSIGHTS
            </span>
          </div>

          {/* HEADING */}
          <h1
            className="
              font-serif
              text-[36px]
              font-normal
              leading-[1.12]
              tracking-[-0.035em]
              sm:text-[43px]
              lg:text-[50px]
            "
          >
            Perspectives that inform.

            <span className="mt-1 block text-[#D5B052]">
              Ideas that move you forward.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            className="
              mt-4 max-w-[540px]
              text-[13px]
              leading-[1.85]
              text-[#B6C5BF]
              sm:text-[14px]
            "
          >
            Explore expert insights on corporate
            structuring, governance, banking,
            UAE company law and sustainable
            business growth.
          </p>

          {/* TOPIC INDICATORS */}
          <div
            className="
              mt-5 flex flex-wrap
              items-center gap-3
              text-[11px]
              text-[#A6BBAE]
            "
          >
            <span
              className="
                h-1.5 w-1.5
                rounded-full bg-[#D5B052]
              "
            />

            <span>Business</span>

            <span className="text-[#567568]">/</span>

            <span>Governance</span>

            <span className="text-[#567568]">/</span>

            <span>Finance</span>
          </div>
        </div>

        {/* =====================================
            RIGHT SIDE — COMPACT INSIGHTS CARD
        ===================================== */}

        <div
          className="
            relative w-full min-w-0
            max-w-[410px]
            justify-self-center
            md:justify-self-end
          "
        >
          {/* DECORATIVE GOLD FRAME */}
          <div
            aria-hidden="true"
            className="
              absolute -right-2 -top-2
              hidden h-full w-full
              rounded-xl
              border border-[#D5B052]/20
              sm:block
            "
          />

          {/* MAIN CARD */}
          <div
            className="
              relative overflow-hidden
              rounded-xl
              border border-[#D5B052]/25
              bg-[#103126]/90
              shadow-[0_18px_45px_rgba(0,0,0,0.18)]
              backdrop-blur-xl
            "
          >
            {/* CARD HEADER */}
            <div
              className="
                flex items-center
                justify-between
                border-b border-white/10
                px-5 py-3
              "
            >
              <div>
                <p
                  className="
                    text-[10px]
                    font-bold uppercase
                    tracking-[0.15em]
                    text-[#D5B052]
                  "
                >
                  THE ORPHEUS JOURNAL
                </p>

                <p
                  className="
                    mt-1 text-[11px]
                    text-[#B7CBBE]
                  "
                >
                  Explore our expertise
                </p>
              </div>

              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-full
                  border border-white/15
                  text-[#D5B052]
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </div>

            {/* INTERACTIVE ITEMS */}
            <div className="divide-y divide-white/10">
              {insights.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.number}
                    href={item.href}
                    className="
                      group flex items-center
                      gap-3 px-5 py-3
                      transition-colors
                      duration-200
                      hover:bg-white/[0.06]
                    "
                  >
                    {/* ICON */}
                    <span
                      className="
                        flex h-9 w-9
                        shrink-0
                        items-center justify-center
                        rounded-lg
                        border border-[#D5B052]/20
                        bg-[#D5B052]/10
                        text-[#D5B052]
                        transition-colors
                        group-hover:bg-[#D5B052]/20
                      "
                    >
                      <Icon size={17} />
                    </span>

                    {/* CONTENT */}
                    <span className="min-w-0 flex-1">
                      <span
                        className="
                          block text-[9px]
                          font-bold uppercase
                          tracking-[0.11em]
                          text-[#9BB8A7]
                        "
                      >
                        {item.number} / {item.category}
                      </span>

                      <span
                        className="
                          mt-0.5 block
                          text-[14px]
                          font-semibold
                          text-white
                        "
                      >
                        {item.title}
                      </span>

                      <span
                        className="
                          mt-0.5 block
                          text-[11px]
                          text-[#AFC3B5]
                        "
                      >
                        {item.description}
                      </span>
                    </span>

                    {/* ARROW */}
                    <ArrowUpRight
                      size={15}
                      className="
                        shrink-0
                        text-[#D5B052]/70
                        transition-transform
                        duration-200
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:text-[#D5B052]
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* CARD FOOTER */}
            <div
              className="
                flex items-center
                justify-between
                border-t border-white/10
                bg-[#09251C]/70
                px-5 py-3
              "
            >
              <span
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.13em]
                  text-[#A8BEB0]
                "
              >
                Knowledge. Clarity. Confidence.
              </span>

              <span
                className="
                  h-1.5 w-1.5
                  rounded-full
                  bg-[#D5B052]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
