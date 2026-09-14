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
          min-h-[500px]
          min-[390px]:min-h-[520px]
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
              object-[58%_top]
              brightness-[1.12]
              contrast-[1.04]
              saturate-[1.08]

              sm:object-[54%_top]
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
                "linear-gradient(90deg, rgba(3,22,16,0.94) 0%, rgba(3,22,16,0.90) 26%, rgba(3,22,16,0.78) 42%, rgba(3,22,16,0.58) 54%, rgba(3,22,16,0.24) 66%, rgba(3,22,16,0.06) 78%, rgba(3,22,16,0.00) 90%)",
            }}
          />

          {/* BOTTOM FADE */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(3,22,16,0.82) 0%, rgba(3,22,16,0.48) 12%, rgba(3,22,16,0.14) 28%, rgba(3,22,16,0) 42%)",
            }}
          />

          {/* SUBTLE EMERALD TINT */}
          <div className="absolute inset-0 bg-[#0B5345]/[0.02]" />

          {/* MOBILE READABILITY */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(3,22,16,0.50) 0%, rgba(3,22,16,0.64) 46%, rgba(3,22,16,0.94) 100%)",
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
            min-h-[500px]
            max-w-[1480px]
            items-center
            px-5
            py-8

            min-[390px]:min-h-[520px]

            sm:min-h-[580px]
            sm:py-10

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
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]
                  text-[#D8B867]

                  sm:text-[11px]
                  md:text-[13px]
                  md:tracking-[.20em]
                "
              >
                LEAD ARCHITECT. DIRECT EXECUTION.
              </p>
            </div>

            {/* HEADING */}
            <h1
              className="
                mt-4
                max-w-[760px]

                font-serif
                text-[clamp(38px,10.4vw,48px)]
                font-normal
                leading-[.98]
                tracking-[-.045em]

                text-white

                [text-shadow:0_2px_18px_rgba(0,0,0,.35)]

                min-[390px]:text-[clamp(40px,10vw,52px)]

                sm:mt-5
                sm:text-[clamp(48px,8vw,66px)]

                md:text-[clamp(56px,6.2vw,76px)]
                lg:text-[clamp(62px,5.3vw,76px)]
              "
            >
              Structuring capital,
              <br />
              entities and wealth
              <br />
              <span className="text-[#59B79E]">across borders.</span>
            </h1>

            {/* COPY */}
            <p
              className="
                mt-4
                max-w-[680px]

                text-[16px]
                leading-[1.78]

                 text-white/82

                min-[390px]:text-[16.5px]

                md:mt-5
                md:text-[18.5px]
                md:leading-8
                md:text-white/84

                lg:text-[18px]
              "
            >
              Orpheus Financial architects and executes complex corporate,
              banking, capital and private wealth solutions from Dubai. Our team
              leads each engagement from strategy and structuring through
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
          Compact 2-column and 2-row layout exactly like screenshot.

          DESKTOP:
          Same horizontal 4-column premium layout with brighter description.
      ===================================================== */}
      <div className="relative z-20 border-t border-white/10 bg-[#061711]">
        <div
          className="
            mx-auto
            max-w-[1480px]
            px-4

            sm:px-5
            md:px-10
            xl:px-16
          "
        >
          <div
            className="
              grid
              grid-cols-2
              border-x
              border-white/10

              md:grid-cols-4
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
                    gap-2.5

                    px-3
                    py-3

                    transition-colors
                    duration-300

                    hover:bg-white/[0.018]

                    min-[390px]:min-h-[74px]
                    min-[390px]:gap-3
                    min-[390px]:px-4

                    sm:min-h-[84px]
                    sm:py-4

                    md:min-h-[124px]
                    md:items-start
                    md:gap-3
                    md:px-4
                    md:py-5

                    lg:min-h-[138px]
                    lg:gap-4
                    lg:px-5
                    lg:py-6

                    xl:min-h-[150px]
                    xl:px-6
                    xl:py-7

                    ${index % 2 === 1 ? "border-l border-white/10" : ""}
                    ${index > 1 ? "border-t border-white/10 md:border-t-0" : ""}
                    ${index > 0 ? "md:border-l md:border-white/10" : ""}
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
                      border-[#D8B867]/20

                      bg-[#D8B867]/[0.055]

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
                        text-[14px]
                        font-normal
                        leading-[1.08]

                        text-white

                        min-[390px]:text-[15px]

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
                        mt-1.5
                        hidden
                        max-w-[290px]

                        text-[12.5px]
                        leading-[1.55]

                         text-white/56

                        md:mt-2
                        md:block
                        md:text-[13.5px]
                        md:leading-[1.65]
                        md:text-white/60

                        lg:text-[14px]
                        lg:leading-[1.65]

                        xl:text-[14.5px]
                        xl:leading-[1.7]
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
      </div>
    </section>
  );
}