import { ArrowRight } from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";

import { trustPillars } from "@/data/siteArchitecture";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2400&q=90";

const FALLBACK_IMAGE = "/dubai-bg.png";

export function HomeHero() {
  const [heroImage, setHeroImage] = useState(HERO_IMAGE);

  return (
    <section className="relative overflow-hidden bg-[#061711] pt-[76px] text-white">
      {/* =====================================================
          MAIN HERO
      ===================================================== */}

      <div
        className="
          relative
          min-h-[560px]
          sm:min-h-[580px]
          md:min-h-[600px]
          lg:min-h-[620px]
          xl:min-h-[640px]
        "
      >
        {/* =====================================================
            BACKGROUND IMAGE
        ===================================================== */}

        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Dubai skyline with Burj Khalifa"
            onError={() => {
              if (heroImage !== FALLBACK_IMAGE) {
                setHeroImage(FALLBACK_IMAGE);
              }
            }}
            className="
              h-full
              w-full
              object-cover
              object-[50%_top]

              brightness-[1.12]
              contrast-[1.04]
              saturate-[1.08]

              sm:object-[50%_top]
              md:object-[52%_top]
              lg:object-[55%_top]
              xl:object-[56%_top]
            "
          />

          {/* LEFT DARK OVERLAY */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(3,22,16,0.90) 0%, rgba(3,22,16,0.86) 24%, rgba(3,22,16,0.78) 38%, rgba(3,22,16,0.58) 48%, rgba(3,22,16,0.24) 58%, rgba(3,22,16,0.06) 70%, rgba(3,22,16,0.00) 82%)",
            }}
          />

          {/* BOTTOM FADE */}

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(3,22,16,0.78) 0%, rgba(3,22,16,0.42) 9%, rgba(3,22,16,0.10) 22%, rgba(3,22,16,0) 36%)",
            }}
          />

          {/* SUBTLE EMERALD TINT */}

          <div className="absolute inset-0 bg-[#0B5345]/[0.02]" />

          {/* MOBILE READABILITY */}

          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,22,16,0.45) 0%, rgba(3,22,16,0.62) 52%, rgba(3,22,16,0.90) 100%)",
            }}
          />
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[560px]
            max-w-[1480px]
            items-center
            px-5
            py-10

            sm:min-h-[580px]

            md:min-h-[600px]
            md:px-10
            md:py-12

            lg:min-h-[620px]

            xl:min-h-[640px]
            xl:px-16
          "
        >
          <div className="w-full max-w-[720px]">
            {/* EYEBROW */}

            <div className="flex items-center gap-3">
              <span className="h-px w-7 shrink-0 bg-[#D8B867]" />

              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.20em]
                  text-[#D8B867]

                  md:text-[13px]
                "
              >
                LEAD ARCHITECT. DIRECT EXECUTION.
              </p>
            </div>

            {/* HEADING */}

            <h1
              className="
                mt-5
                max-w-[760px]

                font-serif
                text-[clamp(42px,5.3vw,76px)]
                font-normal
                leading-[.97]
                tracking-[-.045em]

                text-white

                [text-shadow:0_2px_18px_rgba(0,0,0,.35)]
              "
            >
              Structuring capital,
              <br />

              entities and wealth
              <br />

              <span className="text-[#59B79E]">
                across borders.
              </span>
            </h1>

            {/* COPY */}

            <p
              className="
                mt-5
                max-w-[650px]

                text-[16px]
                leading-7

                text-white/90

                md:text-[18px]
                md:leading-8

                lg:text-[17px]
              "
            >
              Orpheus Financial architects and executes complex corporate,
              banking, capital and private wealth solutions from Dubai. Our
              team leads each engagement from strategy and structuring through
              documentation, implementation and ongoing support — not simply
              introductions to third parties.
            </p>

            {/* CTA */}

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services"
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
                  tracking-[.085em]

                  text-white

                  shadow-[0_9px_24px_rgba(0,0,0,.18)]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106856]

                  md:min-h-[48px]
                  md:px-6
                  md:text-[13px]
                "
              >
                Explore Our Solutions

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-1

                    md:size-[14px]
                  "
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT FINANCE LABEL
        ===================================================== */}

         
      </div>

      {/* =====================================================
          TRUST PILLARS

          MOBILE:
          Exactly same 2-column compact structure.

          DESKTOP:
          Bigger title, description and icon.
      ===================================================== */}

      <div className="relative z-20 border-t border-white/10 bg-[#061711]">
        <div
          className="
            mx-auto
            grid
            max-w-[1480px]

            grid-cols-2

            px-4

            sm:px-5

            md:grid-cols-4
            md:px-10

            xl:px-16
          "
        >
          {trustPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.title}
                className={`
                  group

                  flex
                  min-h-[70px]

                  items-center
                  gap-2

                  py-3
                  pr-2

                  transition-colors
                  duration-300

                  hover:bg-white/[0.018]

                  sm:min-h-[86px]
                  sm:gap-2.5
                  sm:py-4
                  sm:pr-4

                  md:min-h-[118px]
                  md:gap-3
                  md:px-4
                  md:py-5

                  lg:min-h-[132px]
                  lg:gap-4
                  lg:px-5
                  lg:py-6

                  xl:min-h-[145px]
                  xl:px-6
                  xl:py-7

                  ${
                    index % 2 === 1
                      ? "border-l border-white/10 pl-3 md:pl-4 lg:pl-5"
                      : ""
                  }

                  ${
                    index > 1
                      ? "border-t border-white/10 md:border-t-0"
                      : ""
                  }

                  ${
                    index === 2
                      ? "md:border-l md:border-white/10 md:pl-4 lg:pl-5"
                      : ""
                  }
                `}
              >
                {/* ICON */}

                <div
                  className="
                    flex
                    h-7
                    w-7
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    border
                    border-[#D8B867]/15

                    bg-[#D8B867]/[0.035]

                    md:h-9
                    md:w-9

                    lg:h-10
                    lg:w-10

                    xl:h-11
                    xl:w-11
                  "
                >
                  <Icon
                    size={12}
                    className="
                      text-[#D8B867]

                      md:size-[16px]
                      lg:size-[18px]
                      xl:size-[19px]
                    "
                  />
                </div>

                {/* TEXT */}

                <div className="min-w-0">
                  <h3
                    className="
                      font-serif
                      text-[15px]
                      font-normal
                      leading-[1.08]

                      text-white

                      sm:text-[16px]

                      md:text-[17px]
                      md:leading-[1.15]

                      lg:text-[19px]

                      xl:text-[20px]
                    "
                  >
                    {pillar.title}
                  </h3>

                  <p
                    className="
                      mt-1
                      hidden
                      max-w-[270px]

                      text-[11px]
                      leading-[1.45]

                      text-white/46

                      sm:block
                      sm:text-[11px]

                      md:mt-2
                      md:text-[13px]
                      md:leading-[1.55]
                      md:text-white/60

                      lg:text-[12.5px]
                      lg:leading-5

                      xl:text-[13.5px]
                      xl:leading-[1.6]
                    "
                  >
                    {pillar.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}