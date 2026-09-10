import {
  ArrowRight,
  Building2,
  Check,
  Globe2,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

const milestones = [
  {
    year: "2019",
    text: "Orpheus Financial established in Dubai.",
  },
  {
    year: "2021",
    text: "Institutional banking coordination expanded.",
  },
  {
    year: "2023",
    text: "18-market footprint and debt advisory capability added.",
  },
  {
    year: "2026",
    text: "60+ institutions and corporations supported globally.",
  },
];

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

const revealCard = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  const whoWeAre = [
    {
      no: "01",
      icon: Building2,
      title: "Objective first",
      text:
        "We begin with the commercial goal before discussing jurisdiction, entity or product.",
    },
    {
      no: "02",
      icon: Network,
      title: "Connected thinking",
      text:
        "Structure, banking, capital and governance are considered together rather than in isolation.",
    },
    {
      no: "03",
      icon: ShieldCheck,
      title: "Execution focused",
      text:
        "Our work is designed to move from advice into practical implementation.",
    },
  ];

  const differences = [
    {
      icon: Landmark,
      title: "Banking aware",
      text:
        "Structures are considered against how banks and financial institutions are likely to assess them.",
    },
    {
      icon: Globe2,
      title: "Cross-border by design",
      text:
        "Jurisdictional choices are made in the context of real commercial and international use.",
    },
    {
      icon: Network,
      title: "Integrated advisory",
      text:
        "Corporate, banking, capital and ownership considerations are connected.",
    },
    {
      icon: ShieldCheck,
      title: "Governance conscious",
      text:
        "Documentation, control and regulatory obligations are built into the process.",
    },
  ];

  const principles = [
    "Clear communication",
    "Commercial relevance",
    "Confidentiality",
    "Independent advice",
    "Compliance awareness",
    "Long-term relationships",
  ];

  return (
    <main className="overflow-hidden bg-[#FFFEFA] pt-[76px] text-[#0A1714]">
      {/* =====================================================
          1. HERO
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden
          border-b
          border-[#E0E4DF]
          bg-[#F7F4EC]
        "
      >
        <div
          aria-hidden="true"
          className="
            absolute
            -left-32
            top-12
            h-72
            w-72
            rounded-full
            bg-[#69B7A1]/10
            blur-[100px]

            lg:h-[420px]
            lg:w-[420px]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            -right-28
            bottom-0
            h-64
            w-64
            rounded-full
            bg-[#D8B867]/10
            blur-[90px]
          "
        />

        <div
          className="
            section-shell
            relative
            grid
            items-center
            gap-8
            py-10

            sm:py-12

            lg:min-h-[560px]
            lg:grid-cols-[.92fr_1.08fr]
            lg:gap-12
            lg:py-14

            xl:gap-16
          "
        >
          {/* COPY */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -28,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="section-kicker">
              ABOUT ORPHEUS
            </p>

            <h1
              className="
                mt-4
                max-w-[680px]

                font-serif
                text-[42px]
                font-normal
                leading-[.98]
                tracking-[-.045em]

                sm:text-[50px]

                md:text-[58px]

                lg:text-[64px]

                xl:text-[70px]
              "
            >
              Financial thinking
              <br />

              with an{" "}

              <span className="italic text-[#0B5345]">
                execution mindset.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-[620px]

                text-[16px]
                leading-7

                text-[#53655F]

                sm:text-[17px]

                lg:mt-6
                lg:text-[17px]
                lg:leading-8
              "
            >
              Orpheus Financial is a Dubai-based advisory firm
              supporting businesses, investors and private clients
              across corporate structuring, banking, capital,
              compliance and wealth architecture.
            </p>

            <div
              className="
                mt-6
                flex
                flex-col
                gap-3

                min-[430px]:flex-row

                lg:mt-7
              "
            >
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  gap-2

                  rounded-lg

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
                  hover:bg-[#106856]
                  hover:shadow-[0_12px_26px_rgba(11,83,69,.18)]
                "
              >
                Speak With Us

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
                  group/btn
                  relative
                  inline-flex
                  min-h-[46px]
                  items-center
                  justify-center
                  overflow-hidden

                  rounded-lg

                  border
                  border-[#0B5345]/20

                  bg-white/80

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
                  md:hover:bg-white
                  md:hover:shadow-[0_10px_24px_rgba(7,40,33,.07)]
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

                    bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                    transition-transform
                    duration-300

                    md:block
                    md:group-hover/btn:scale-x-100
                  "
                />

                <span className="relative z-10">
                  Our Solutions
                </span>
              </Link>
            </div>
          </motion.div>

          {/* IMAGE */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group
              relative

              h-[260px]
              overflow-hidden

              rounded-[22px]

              shadow-[0_20px_55px_rgba(7,40,33,.11)]

              sm:h-[320px]

              md:h-[350px]

              lg:h-[420px]
              lg:rounded-[28px]
            "
          >
            <img
              src="/images/advisory.jpg"
              alt="Orpheus Financial advisory"
              className="
                h-full
                w-full
                object-cover

                transition-transform
                duration-700

                group-hover:scale-[1.035]
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-[linear-gradient(180deg,transparent_38%,rgba(5,26,21,.78)_100%)]
              "
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0

                p-5

                sm:p-6

                lg:p-7
              "
            >
              <div
                className="site-card 
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-white/15

                  bg-[#061E18]/55

                  px-3
                  py-1.5

                  backdrop-blur-md
                "
              >
                <Globe2
                  size={12}
                  className="text-[#E2C47D]"
                />

                <span
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.16em]

                    text-[#E2C47D]

                    sm:text-[11px]
                  "
                >
                  DUBAI · INTERNATIONAL ADVISORY
                </span>
              </div>

              <p
                className="
                  mt-3
                  max-w-[420px]

                  font-serif
                  text-[23px]
                  leading-[1.08]

                  text-white

                  sm:text-[27px]

                  lg:text-[31px]
                "
              >
                Built for cross-border decisions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. WHO WE ARE
      ====================================================== */}

      <section
        className="
          bg-white

          py-14

          md:py-18

          lg:py-20
        "
      >
        <div className="section-shell">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 20,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            className="
              grid
              gap-8

              lg:grid-cols-[.72fr_1.28fr]
              lg:gap-12
            "
          >
            <div>
              <p className="section-kicker">
                WHO WE ARE
              </p>

              <h2
                className="
                  mt-4
                  max-w-[500px]

                  font-serif
                  text-[34px]
                  font-normal
                  leading-[1.03]

                  sm:text-[40px]

                  lg:text-[48px]
                "
              >
                A specialist advisory firm, not a product distributor.
              </h2>
            </div>

            <motion.div
              variants={revealContainer}
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
                grid
                grid-cols-1
                gap-4

                sm:grid-cols-2

                lg:grid-cols-3
              "
            >
              {whoWeAre.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.no}
                    variants={revealCard}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            scale: 1.01,
                          }
                    }
                    className="
                      group/card
                      relative

                      overflow-hidden

                      rounded-[20px]

                      border
                      border-[#DCE2DC]

                      bg-[#FAFBF8]

                      p-5

                      transition-[border-color,background-color,box-shadow]
                      duration-300

                      hover:border-[#0B5345]/30
                      hover:bg-white
                      hover:shadow-[0_18px_40px_rgba(7,40,33,.09)]

                      sm:p-6

                      lg:min-h-[270px]
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-x-0
                        top-0

                        h-[3px]

                        origin-left
                        scale-x-0

                        bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                        transition-transform
                        duration-500

                        group-hover/card:scale-x-100
                      "
                    />

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-3
                      "
                    >
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center

                          rounded-full

                          bg-[#EAF2EF]

                          text-[#0B5345]

                          transition-colors

                          group-hover/card:bg-[#0B5345]
                          group-hover/card:text-white
                        "
                      >
                        <Icon size={17} />
                      </span>

                      <span
                        className="
                          font-serif
                          text-[25px]

                          text-[#C9A95D]/80
                        "
                      >
                        {item.no}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-5

                        font-serif
                        text-[24px]
                        font-normal
                        leading-[1.06]

                        transition-colors

                        group-hover/card:text-[#0B5345]

                        lg:text-[25px]
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-3

                        text-[15px]
                        leading-6

                        text-[#5D6F68]

                        lg:text-[16px]
                        lg:leading-6
                      "
                    >
                      {item.text}
                    </p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          3. OUR ROLE
      ====================================================== */}

      <section
        className="
          bg-[#F7F4EC]

          py-12

          md:py-16
        "
      >
        <div className="section-shell">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 26,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              group
              relative

              min-h-[500px]

              overflow-hidden

              rounded-[24px]

              shadow-[0_22px_60px_rgba(7,40,33,.10)]

              sm:min-h-[460px]

              lg:min-h-[440px]
              lg:rounded-[28px]
            "
          >
            <img
              src="/images/banking.jpg"
              alt="Dubai financial district"
              className="
                absolute
                inset-0

                h-full
                w-full

                object-cover

                transition-transform
                duration-700

                group-hover:scale-[1.025]
              "
            />

            <div
              className="
                absolute
                inset-0

                bg-[linear-gradient(180deg,rgba(4,25,20,.24)_0%,rgba(4,25,20,.86)_100%)]

                md:bg-[linear-gradient(90deg,rgba(4,25,20,.92)_0%,rgba(4,25,20,.72)_45%,rgba(4,25,20,.16)_82%)]
              "
            />

            <div
              className="
                relative

                flex
                min-h-[500px]
                max-w-[700px]

                flex-col
                justify-end

                p-6

                text-white

                sm:min-h-[460px]
                sm:p-8

                md:justify-center
                md:p-10

                lg:min-h-[440px]
                lg:p-12
              "
            >
              <p className="section-kicker-gold">
                OUR ROLE
              </p>

              <h2
                className="
                  mt-4

                  font-serif
                  text-[34px]
                  font-normal
                  leading-[1.02]

                  sm:text-[42px]

                  lg:text-[52px]
                "
              >
                We connect the decisions that normally sit with
                different advisers.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[600px]

                  text-[16px]
                  leading-7

                  text-white/78

                  sm:text-[17px]

                  lg:text-[18px]
                  lg:leading-8
                  lg:text-white/82
                "
              >
                Corporate structure affects bankability. Bankability
                affects capital access. Ownership affects governance.
                Governance affects counterparties. Our role is to
                understand those relationships before a structure is
                implemented.
              </p>

              <div
                className="
                  mt-6

                  flex
                  flex-wrap
                  gap-2
                "
              >
                {[
                  "Structure",
                  "Bankability",
                  "Capital",
                  "Governance",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full

                      border
                      border-white/15

                      bg-white/[.07]

                      px-3
                      py-1.5

                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.1em]

                      text-white/80

                      backdrop-blur-sm
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          4. STORY + TIMELINE
      ====================================================== */}

      <section
        className="
          bg-white

          py-14

          md:py-20
        "
      >
        <div
          className="
            section-shell
            grid
            gap-10

            lg:grid-cols-[.9fr_1.1fr]
            lg:items-start
            lg:gap-14
          "
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -24,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >
            <p className="section-kicker">
              OUR STORY
            </p>

            <h2
              className="
                mt-4
                max-w-[560px]

                font-serif
                text-[35px]
                font-normal
                leading-[1.02]

                sm:text-[42px]

                lg:text-[50px]
              "
            >
              Built in Dubai. Developed through client needs.
            </h2>

            <p
              className="
                mt-5
                max-w-[580px]

                text-[16px]
                leading-7

                text-[#52645E]

                sm:text-[17px]

                lg:mt-6
                lg:text-[18px]
                lg:leading-8
              "
            >
              Orpheus was founded to bridge the gap between
              financial structuring and practical execution.
              What began as a corporate structuring practice has
              evolved into a broader advisory platform spanning
              banking, capital, compliance and private wealth.
            </p>

            <p
              className="
                mt-4
                max-w-[580px]

                text-[16px]
                leading-7

                text-[#52645E]

                sm:text-[17px]

                lg:text-[18px]
                lg:leading-8
              "
            >
              The firm has expanded deliberately, adding
              capabilities as client requirements became more
              sophisticated rather than building services around
              volume.
            </p>
          </motion.div>

          {/* TIMELINE */}

          <motion.div
            variants={revealContainer}
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
              relative
              grid
              gap-3

              before:absolute
              before:bottom-4
              before:left-[24px]
              before:top-4
              before:w-px
              before:bg-[#DDE3DE]

              sm:before:left-[30px]
            "
          >
            {milestones.map((item, index) => (
              <motion.div
                key={item.year}
                variants={revealCard}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        x: 5,
                      }
                }
                className="
                  group
                  relative

                  grid
                  grid-cols-[50px_1fr]
                  gap-4

                  rounded-[18px]

                  border
                  border-[#E2E6E1]

                  bg-[#FAFBF8]

                  p-4

                  transition-all
                  duration-300

                  hover:border-[#0B5345]/25
                  hover:bg-white
                  hover:shadow-[0_14px_32px_rgba(7,40,33,.07)]

                  sm:grid-cols-[62px_1fr]
                  sm:gap-5
                  sm:p-5
                "
              >
                <div className="relative z-10">
                  <span
                    className="
                      flex
                      h-9
                      w-9

                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#C9A95D]/30

                      bg-[#FBF5E6]

                      text-[12px]
                      font-bold

                      text-[#9A772B]

                      transition-colors

                      group-hover:bg-[#D8B867]
                      group-hover:text-[#071813]
                    "
                  >
                    0{index + 1}
                  </span>
                </div>

                <div>
                  <p
                    className="
                      font-serif
                      text-[25px]
                      leading-none

                      text-[#A7802D]

                      sm:text-[28px]
                    "
                  >
                    {item.year}
                  </p>

                  <p
                    className="
                      mt-2

                      text-[15px]
                      leading-6

                      text-[#52625D]

                      sm:text-[16px]
                    "
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          5. DIFFERENCE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[#071813]

          py-14

          text-white

          md:py-20
        "
      >
        <div className="absolute inset-0 grid-texture-dark opacity-20" />

        <div
          aria-hidden="true"
          className="
            absolute
            -left-28
            bottom-0

            h-80
            w-80

            rounded-full

            bg-[#0B5345]/30

            blur-[100px]
          "
        />

        <div className="section-shell relative">
          <div
            className="
              grid
              gap-9

              lg:grid-cols-[.78fr_1.22fr]
              lg:gap-14
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="section-kicker-gold">
                WHAT MAKES US DIFFERENT
              </p>

              <h2
                className="
                  mt-4
                  max-w-[540px]

                  font-serif
                  text-[35px]
                  font-normal
                  leading-[1.02]

                  sm:text-[42px]

                  lg:text-[50px]
                "
              >
                Independent thinking with institutional discipline.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[500px]

                  text-[16px]
                  leading-7

                  text-white/65

                  lg:text-[17px]
                  lg:text-white/72
                "
              >
                Every engagement is considered against the commercial,
                banking and governance realities behind the structure.
              </p>
            </motion.div>

            <motion.div
              variants={revealContainer}
              initial={reduceMotion ? false : "hidden"}
              whileInView={
                reduceMotion
                  ? undefined
                  : "visible"
              }
              viewport={{
                once: true,
                amount: 0.1,
              }}
              className="
                grid
                grid-cols-1
                gap-3

                sm:grid-cols-2
              "
            >
              {differences.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  variants={revealCard}
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -6,
                          scale: 1.01,
                        }
                  }
                  className="
                    group/card

                    rounded-[20px]

                    border
                    border-white/10

                    bg-white/[.045]

                    p-5

                    backdrop-blur-sm

                    transition-[background-color,border-color,box-shadow]
                    duration-300

                    hover:border-[#D8B867]/30
                    hover:bg-white/[.075]
                    hover:shadow-[0_18px_40px_rgba(0,0,0,.13)]

                    sm:p-6
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-[#D8B867]/25

                      bg-[#D8B867]/10

                      text-[#E2C47D]

                      transition-all
                      duration-300

                      group-hover/card:bg-[#D8B867]
                      group-hover/card:text-[#071813]
                    "
                  >
                    <Icon size={17} />
                  </span>

                  <h3
                    className="
                      mt-5

                      font-serif
                      text-[23px]
                      font-normal
                      leading-[1.08]

                      text-white

                      sm:text-[25px]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-3

                      text-[15px]
                      leading-6

                      text-white/65

                      transition-colors

                      group-hover/card:text-white/78

                      lg:text-[16px]
                    "
                  >
                    {text}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          6. PRINCIPLES
      ====================================================== */}

      <section
        className="
          bg-[#F7F4EC]

          py-14

          md:py-20
        "
      >
        <div
          className="
            section-shell
            grid
            gap-9

            lg:grid-cols-[.72fr_1.28fr]
            lg:gap-14
          "
        >
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -20,
                  }
            }
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="section-kicker">
              OUR PRINCIPLES
            </p>

            <h2
              className="
                mt-4
                max-w-[500px]

                font-serif
                text-[35px]
                font-normal
                leading-[1.02]

                sm:text-[42px]

                lg:text-[49px]
              "
            >
              Simple standards that guide every engagement.
            </h2>
          </motion.div>

          <motion.div
            variants={revealContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={
              reduceMotion
                ? undefined
                : "visible"
            }
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              grid
              grid-cols-1
              gap-3

              sm:grid-cols-2
            "
          >
            {principles.map((item, index) => (
              <motion.div
                key={item}
                variants={revealCard}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -4,
                        scale: 1.01,
                      }
                }
                className="
                  group

                  flex
                  min-h-[76px]

                  items-center
                  gap-4

                  rounded-[18px]

                  border
                  border-[#DCE2DC]

                  bg-white/65

                  p-4

                  transition-all
                  duration-300

                  hover:border-[#0B5345]/25
                  hover:bg-white
                  hover:shadow-[0_12px_28px_rgba(7,40,33,.07)]

                  sm:p-5
                "
              >
                <span
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0

                    items-center
                    justify-center

                    rounded-full

                    bg-[#E5F0EC]

                    text-[#0B5345]

                    transition-all

                    group-hover:bg-[#0B5345]
                    group-hover:text-white
                  "
                >
                  <Check size={14} />
                </span>

                <div className="min-w-0">
                  <span
                    className="
                      block

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[.15em]

                      text-[#A7802D]
                    "
                  >
                    0{index + 1}
                  </span>

                  <span
                    className="
                      mt-1
                      block

                      font-serif
                      text-[19px]
                      leading-tight

                      text-[#172821]

                      sm:text-[21px]

                      lg:text-[22px]
                    "
                  >
                    {item}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          7. DUBAI AT THE CENTRE
      ====================================================== */}

      <section
        className="
          bg-white

          py-12

          md:py-18

          lg:py-20
        "
      >
        <div className="section-shell">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 26,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            transition={{
              duration: 0.65,
            }}
            className="
              group

              grid

              overflow-hidden

              rounded-[22px]

              border
              border-[#DDE3DE]

              bg-[#FBFCF9]

              shadow-[0_16px_45px_rgba(7,40,33,.06)]

              lg:grid-cols-[1fr_1fr]
              lg:rounded-[28px]
            "
          >
            {/* IMAGE */}

            <div
              className="
                relative

                h-[260px]

                overflow-hidden

                sm:h-[330px]

                lg:h-auto
                lg:min-h-[480px]
              "
            >
              <img
                src="/images/entity.jpg"
                alt="Dubai international business district"
                className="
                  absolute
                  inset-0

                  h-full
                  w-full

                  object-cover

                  transition-transform
                  duration-700

                  group-hover:scale-[1.035]
                "
              />

              <div
                className="
                  absolute
                  inset-0

                  bg-[linear-gradient(180deg,transparent_58%,rgba(4,25,20,.35)_100%)]
                "
              />
            </div>

            {/* CONTENT */}

            <div
              className="
                flex
                flex-col
                justify-center

                p-6

                sm:p-8

                md:p-10

                lg:p-12
              "
            >
              <p className="section-kicker">
                DUBAI AT THE CENTRE
              </p>

              <h2
                className="
                  mt-4
                  max-w-[540px]

                  font-serif
                  text-[35px]
                  font-normal
                  leading-[1.03]

                  sm:text-[42px]

                  lg:text-[49px]
                "
              >
                A regional base with a global outlook.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[540px]

                  text-[16px]
                  leading-7

                  text-[#566861]

                  sm:text-[17px]

                  lg:text-[18px]
                  lg:leading-8
                "
              >
                Dubai places Orpheus at the intersection of GCC
                commerce, international banking, global capital and
                private wealth.
              </p>

              <div
                className="
                  mt-6
                  grid
                  gap-2.5
                "
              >
                {[
                  "18 active markets",
                  "International banking relationships",
                  "Cross-border structuring capability",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      group/item

                      flex
                      min-h-[48px]

                      items-center
                      gap-3

                      rounded-xl

                      bg-white

                      px-4
                      py-2.5

                      text-[14px]
                      font-semibold

                      text-[#40514B]

                      shadow-[0_5px_18px_rgba(7,40,33,.04)]

                      transition-all

                      hover:translate-x-1
                      hover:bg-[#EDF4F1]

                      sm:text-[15px]

                      lg:text-[16px]
                    "
                  >
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0

                        items-center
                        justify-center

                        rounded-full

                        bg-[#E5F0EC]

                        text-[#0B5345]

                        transition-colors

                        group-hover/item:bg-[#0B5345]
                        group-hover/item:text-white
                      "
                    >
                      <Check size={12} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="
                  group/link

                  mt-7

                  inline-flex
                  min-h-[46px]
                  w-full

                  items-center
                  justify-center
                  gap-2

                  rounded-lg

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
                  hover:bg-[#106856]
                  hover:shadow-[0_12px_28px_rgba(11,83,69,.18)]

                  sm:w-fit
                "
              >
                Start a Conversation

                <ArrowRight
                  size={13}
                  className="
                    transition-transform

                    group-hover/link:translate-x-1
                  "
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          FINAL SMALL STRIP
      ====================================================== */}

      <section
        className="
          border-t
          border-[#E3E7E3]

          bg-[#F7F4EC]

          py-8

          sm:py-10
        "
      >
        <div
          className="
            section-shell

            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div
            className="
              flex
              items-start
              gap-3
            "
          >
            <span
              className="
                flex
                h-9
                w-9
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#E5F0EC]

                text-[#0B5345]
              "
            >
              <Sparkles size={15} />
            </span>

            <div>
              <p
                className="
                  font-serif
                  text-[21px]
                  leading-tight

                  text-[#172821]

                  sm:text-[23px]
                "
              >
                Advice designed to move into execution.
              </p>

              <p
                className="
                  mt-1

                  text-[14px]
                  leading-5

                  text-[#667570]

                  sm:text-[15px]
                "
              >
                Start with the objective. We’ll help define the path.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="
              group/btn
              relative
              inline-flex
              min-h-[44px]

              items-center
              justify-center
              gap-2

              overflow-hidden
              rounded-lg

              border
              border-[#0B5345]/20

              px-4

              text-[11px]
              font-extrabold
              uppercase
              tracking-[.1em]

              text-[#0B5345]

              transition-all
              duration-300

              md:hover:border-[#0B5345]
              md:hover:bg-[#0B5345]
              md:hover:text-white

              sm:w-fit
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

                bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                transition-transform
                duration-300

                md:block
                md:group-hover/btn:scale-x-100
              "
            />

            <span className="relative z-10">
              Talk to Orpheus
            </span>

            <ArrowRight
              size={12}
              className="
                relative
                z-10
                transition-transform

                md:group-hover/btn:translate-x-1
              "
            />
          </Link>
        </div>
      </section>
    </main>
  );
}