import {
  ArrowRight,
  Check,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

import { solutionPillars } from "@/data/siteArchitecture";
import { capabilityServiceByTitle } from "@/data/capabilityServices";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function ServicesPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-[#FFFEFA] pt-[76px] text-[#0A1714]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#071813]
          py-16
          text-white

          md:py-20
          lg:py-20
          xl:py-24
        "
      >
        <div className="absolute inset-0 grid-texture opacity-25" />

        <motion.div
          aria-hidden="true"
          className="
            absolute
            -right-32
            top-1/2
            hidden
            h-[420px]
            w-[420px]
            -translate-y-1/2
            rounded-full
            bg-[#0B5345]/25
            blur-[110px]

            lg:block
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.08, 1],
                  opacity: [0.55, 0.8, 0.55],
                }
          }
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative section-shell">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 24,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-[920px]"
          >
            <p className="section-kicker-gold">
              OUR SOLUTIONS
            </p>

            <h1
              className="
                mt-4
                max-w-[900px]

                font-serif
                text-[clamp(42px,6vw,72px)]
                font-normal
                leading-[.98]
                tracking-[-.045em]

                sm:text-[52px]

                lg:text-[64px]

                xl:text-[70px]
              "
            >
              Three connected pillars.
              <br className="hidden sm:block" />
              One clear mandate.
            </h1>

            <p
              className="
                mt-5
                max-w-[760px]

                text-[16px]
                leading-7

                text-white/75

                sm:text-[17px]

                md:text-[18px]

                lg:mt-6
                lg:text-[17px]
                lg:leading-8
                lg:text-white/82
              "
            >
              Start with the outcome you need. Each pillar brings
              the relevant specialists together across structuring,
              banking, capital, governance and wealth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          SOLUTION CARDS
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#F7F4EC]

          pt-14
          pb-7

          sm:pt-16
          sm:pb-8

          md:pt-16
          md:pb-9

          lg:pt-20
          lg:pb-8
        "
      >
        <div className="absolute inset-0 grid-texture opacity-35" />

        <div className="relative section-shell">
          <motion.div
            variants={containerVariants}
            initial={reduceMotion ? false : "hidden"}
            whileInView={
              reduceMotion
                ? undefined
                : "visible"
            }
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="
              group/cards

              grid
              grid-cols-1
              gap-5

              md:grid-cols-2

              lg:grid-cols-3
              lg:gap-6

              xl:gap-7
            "
          >
            {solutionPillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.slug}
                  id={pillar.slug}
                  variants={cardVariants}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group/card
                    relative

                    flex
                    scroll-mt-28
                    flex-col

                    overflow-hidden

                    rounded-[22px]

                    border
                    border-[#DCE2DC]

                    bg-white

                    p-5

                    shadow-[0_10px_30px_rgba(7,40,33,.035)]

                    transition-[border-color,box-shadow,background-color,opacity]
                    duration-300

                    md:md:hover:border-[#0B5345]/35
                    md:hover:bg-[#FEFFFD]
                    md:hover:shadow-[0_28px_60px_rgba(7,40,33,.13)]

                    sm:p-6

                    md:min-h-[510px]
                    md:hover:-translate-y-2

                    lg:min-h-[535px]
                    lg:rounded-[24px]
                    lg:p-6

                    xl:min-h-[550px]
                    xl:p-7
                  "
                >
                  {/* TOP ACCENT */}

                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0

                      hidden
                      h-[4px]
                      w-full

                      origin-left
                      scale-x-0

                      bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                      transition-transform
                      duration-500

                      md:block
                      md:group-hover/card:scale-x-100
                    "
                  />

                  {/* SOFT HOVER GLOW */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20

                      hidden
                      h-48
                      w-48

                      rounded-full

                      bg-[#69B7A1]/0

                      blur-[70px]

                      transition-colors
                      duration-500

                      md:block
                      md:group-hover/card:bg-[#69B7A1]/10
                    "
                  />

                  {/* DECORATIVE NUMBER */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      right-5
                      top-4

                      font-serif
                      text-[52px]
                      leading-none

                      text-[#0B5345]/[.045]

                      transition-all
                      duration-300

                      md:group-hover/card:-translate-x-1
                      md:md:group-hover/card:text-[#0B5345]/[.075]

                      lg:right-6
                      lg:text-[60px]
                    "
                  >
                    0{index + 1}
                  </span>

                  {/* ICON */}

                  <motion.div
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            rotate: 5,
                            scale: 1.08,
                          }
                    }
                    transition={{
                      duration: 0.25,
                    }}
                    className="
                      relative

                      flex
                      h-11
                      w-11
                      shrink-0

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#0B5345]/10

                      bg-[#EAF2EF]

                      text-[#0B5345]

                      transition-colors
                      duration-300

                      md:group-hover/card:border-[#0B5345]
                      md:group-hover/card:bg-[#0B5345]
                      md:group-hover/card:text-white

                      lg:h-12
                      lg:w-12
                    "
                  >
                    <Icon
                      size={18}
                      className="lg:size-[20px]"
                    />
                  </motion.div>

                  {/* EYEBROW */}

                  <p
                    className="
                      mt-6

                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[.18em]

                      text-[#A7802D]

                      lg:text-[12px]
                    "
                  >
                    {pillar.eyebrow}
                  </p>

                  {/* TITLE */}

                  <h2
                    className="
                      mt-2

                      font-serif
                      text-[31px]
                      font-normal
                      leading-[1.02]
                      tracking-[-.025em]

                      transition-colors
                      duration-300

                      md:group-hover/card:text-[#0B5345]

                      sm:text-[34px]

                      lg:min-h-[76px]
                      lg:text-[35px]

                      xl:text-[37px]
                    "
                  >
                    {pillar.title}
                  </h2>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-3

                      text-[15px]
                      leading-6

                      text-[#5B6D67]

                      transition-colors
                      duration-300

                      md:group-hover/card:text-[#40544D]

                      sm:text-[16px]

                      lg:min-h-[106px]
                      lg:text-[16px]
                      lg:leading-6

                      xl:text-[17px]
                      xl:leading-7
                    "
                  >
                    {pillar.description}
                  </p>

                  {/* SPECIALIST SERVICES */}

                  <div
                    className="
                      mt-5

                      border-t
                      border-[#E4E8E4]

                      pt-4
                    "
                  >
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.16em]

                        text-[#8A948F]

                        lg:text-[12px]
                      "
                    >
                      Specialist services
                    </p>

                    <div className="mt-3 grid gap-2">
                      {pillar.capabilities.map((capability) => (
                        <Link
                          key={capability}
                          to={`/services/capability/${capabilityServiceByTitle[capability]?.slug ?? ""}`}
                          className="
                            group/item
                            relative

                            flex
                            min-h-[44px]
                            w-full

                            items-center
                            justify-between
                            gap-3

                            overflow-hidden
                            rounded-xl

                            border
                            border-transparent

                            bg-[#F5F7F4]

                            px-3.5
                            py-2.5

                            transition-all
                            duration-300

                            md:hover:translate-x-1
                            md:md:hover:border-[#0B5345]/15
                            md:hover:bg-[#EAF2EF]
                            md:hover:shadow-[0_6px_16px_rgba(7,40,33,.05)]
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
                              md:group-hover/item:scale-x-100
                            "
                          />

                          <span
                            className="
                              relative
                              z-10

                              flex
                              min-w-0
                              items-center
                              gap-2.5

                              text-[14px]
                              font-semibold
                              leading-5

                              text-[#263833]

                              transition-colors

                              md:group-hover/item:text-[#0B5345]

                              lg:text-[15px]
                            "
                          >
                            <span
                              className="
                                flex
                                h-5
                                w-5
                                shrink-0

                                items-center
                                justify-center

                                rounded-full

                                bg-[#E3EEE9]

                                text-[#0B5345]

                                transition-colors

                                md:group-hover/item:bg-[#0B5345]
                                md:group-hover/item:text-white
                              "
                            >
                              <Check size={11} />
                            </span>

                            {capability}
                          </span>

                          <ArrowRight
                            size={12}
                            className="
                              relative
                              z-10
                              shrink-0

                              text-[#6E7E78]

                              transition-all
                              duration-200

                              md:group-hover/item:translate-x-1
                              md:group-hover/item:text-[#0B5345]
                            "
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* FOOTER */}

                  <div className="mt-auto pt-5">
                    <Link
                      to={`/contact?solution=${encodeURIComponent(
                        pillar.title,
                      )}`}
                      className="
                        group/link

                        inline-flex
                        min-h-[42px]

                        items-center
                        gap-2

                        rounded-lg

                        border
                        border-[#0B5345]/15

                        px-4

                        text-[12px]
                        font-extrabold
                        uppercase
                        tracking-[.09em]

                        text-[#0B5345]

                        transition-all
                        duration-300

                        md:hover:border-[#0B5345]
                        md:hover:bg-[#0B5345]
                        md:hover:text-white

                        lg:text-[13px]
                      "
                    >
                      Discuss this objective

                      <ArrowRight
                        size={12}
                        className="
                          transition-transform
                          duration-300

                          md:group-hover/link:translate-x-1
                        "
                      />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 22,
                  }
            }
            whileInView={
              reduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              mt-7

              overflow-hidden

              rounded-[22px]

              border
              border-white/5

              bg-[linear-gradient(135deg,#061E18_0%,#0B5345_68%,#126C59_100%)]

              px-5
              py-6

              text-white

              shadow-[0_18px_45px_rgba(7,40,33,.12)]

              sm:px-6

              md:flex
              md:items-center
              md:justify-between
              md:gap-6
              md:px-8

              lg:mt-8
              lg:px-9
              lg:py-7
            "
          >
            <motion.div
              aria-hidden="true"
              className="
                absolute
                -right-20
                -top-24

                h-56
                w-56

                rounded-full

                bg-[#D8B867]/10

                blur-[60px]
              "
              animate={
                reduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.12, 1],
                      opacity: [0.55, 0.85, 0.55],
                    }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative">
              <p
                className="
                  font-serif
                  text-[24px]
                  font-normal
                  leading-[1.05]

                  sm:text-[27px]

                  lg:text-[30px]
                "
              >
                Not sure where your requirement fits?
              </p>

              <p
                className="
                  mt-2
                  max-w-[690px]

                  text-[14px]
                  leading-5

                  text-white/65

                  sm:text-[15px]

                  lg:text-[16px]
                  lg:leading-6
                  lg:text-white/75
                "
              >
                Share the objective and the advisory team will
                route it to the right specialist.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                group
                relative

                mt-5

                inline-flex
                min-h-[46px]
                w-full
                shrink-0

                items-center
                justify-center
                gap-2

                rounded-lg

                bg-[#D8B867]

                px-5

                text-[12px]
                font-extrabold
                uppercase
                tracking-[.09em]

                text-[#071813]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#E8CF8A]
                hover:shadow-[0_10px_24px_rgba(216,184,103,.22)]

                sm:w-auto

                md:mt-0

                lg:px-6
                lg:text-[13px]
              "
            >
              Start an enquiry

              <ArrowRight
                size={13}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}