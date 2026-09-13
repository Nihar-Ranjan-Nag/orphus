import {
  ArrowRight,
  Building2,
  Check,
  CircleDollarSign,
  FileCheck2,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  UsersRound,
  Waypoints,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import { Link } from "react-router-dom";

/* =========================================================
   ANIMATION
========================================================= */

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.03,
    },
  },
};

const revealCard = {
  hidden: {
    opacity: 0,
    y: 16,
    scale: 0.99,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

/* =========================================================
   DATA
========================================================= */

const capabilities = [
  {
    icon: Building2,
    title: "Corporate Structuring",
    text:
      "Holding structures, SPVs, ownership planning and international market entry.",
  },
  {
    icon: Landmark,
    title: "Banking Advisory",
    text:
      "Banking readiness, KYC preparation and relationship strategy.",
  },
  {
    icon: CircleDollarSign,
    title: "Capital Advisory",
    text:
      "Working capital, private credit, refinancing and lender engagement.",
  },
  {
    icon: UsersRound,
    title: "Private Wealth",
    text:
      "Family office coordination, succession and ownership planning.",
  },
  {
    icon: FileCheck2,
    title: "Governance",
    text:
      "AML, KYC, UBO, governance and recurring compliance support.",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text:
      "We begin with the commercial objective, current position and relevant jurisdictions.",
  },
  {
    number: "02",
    title: "Structure",
    text:
      "We identify the appropriate corporate, banking, financing or ownership pathway.",
  },
  {
    number: "03",
    title: "Coordinate",
    text:
      "Where required, we coordinate stakeholders, institutions and implementation steps.",
  },
  {
    number: "04",
    title: "Execute",
    text:
      "Advice is translated into practical actions, documentation and clear next steps.",
  },
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@orpheusfinancial.com",
  },
  {
    icon: Phone,
    title: "Advisory Call",
    value: "By appointment",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Dubai, United Arab Emirates",
  },
];

/* =========================================================
   CARD ANIMATION CLASSES

   IMPORTANT:
   The animated bar is attached directly to each card using
   ::before.

   This avoids nested group/card conflicts completely.

   Bar:
   left -> right
   dark green -> teal -> gold
========================================================= */

const animatedCard = `
  relative
  overflow-hidden

  before:pointer-events-none
  before:absolute
  before:left-0
  before:top-0
  before:z-30
  before:h-[4px]
  before:w-full
  before:origin-left
  before:scale-x-0
  before:bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_55%,#D8B867_100%)]
  before:content-['']
  before:transition-transform
  before:duration-500
  before:ease-out

  hover:before:scale-x-100
`;

const animatedDarkCard = `
  relative
  overflow-hidden

  before:pointer-events-none
  before:absolute
  before:left-0
  before:top-0
  before:z-30
  before:h-[4px]
  before:w-full
  before:origin-left
  before:scale-x-0
  before:bg-[linear-gradient(90deg,#D8B867_0%,#69B7A1_55%,#8BCBBB_100%)]
  before:content-['']
  before:transition-transform
  before:duration-500
  before:ease-out

  hover:before:scale-x-100
`;

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const reduceMotion = useReducedMotion();

  return (
    <main
      className="
        w-full
        overflow-x-hidden
        bg-[#FFFEFA]
        pt-[76px]
        text-[#0A1714]
      "
    >
      {/* =====================================================
          1. HERO
      ===================================================== */}

      <section
        className="
          relative
          isolate
          overflow-hidden
          bg-[#062F27]
          text-white
        "
      >
        {/* GRID */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[.055]

            [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)]
            [background-size:46px_46px]
          "
        />

        {/* GLOWS */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-40
            -top-40
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#16705D]/28
            blur-[120px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-48
            left-[7%]
            h-[360px]
            w-[360px]
            rounded-full
            bg-[#D8B867]/12
            blur-[110px]
          "
        />

        <div
          className="
            section-shell
            relative
            grid
            gap-8
            py-10

            sm:py-12

            lg:grid-cols-[1.05fr_.95fr]
            lg:items-center
            lg:gap-12
            lg:py-14
          "
        >
          {/* HERO LEFT */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -22,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
            }}
          >
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#D8B867]/28
                bg-white/[.04]
                px-3.5
                py-2
                text-[10px]
                font-extrabold
                uppercase
                tracking-[.17em]
                text-[#E4C875]
              "
            >
              <Sparkles size={12} />
              About Orpheus
            </div>

            <h1
              className="
                mt-5
                max-w-[700px]
                font-serif
                text-[39px]
                font-normal
                leading-[.97]
                tracking-[-.043em]

                sm:text-[48px]
                md:text-[56px]
                lg:text-[60px]
                xl:text-[64px]
              "
            >
              Advice begins with understanding{" "}

              <span className="italic text-[#8BCBBB]">
                the objective.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-[630px]
                text-[15px]
                leading-7
                text-white/72

                sm:text-[16px]
              "
            >
              Orpheus supports businesses, founders, investors and
              private clients across corporate structuring, banking,
              capital and international ownership requirements.
            </p>

            <div
              className="
                mt-7
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <a
                href="#capabilities"
                className="
                  inline-flex
                  min-h-[44px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#D8B867]
                  px-5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.11em]
                  text-[#06271F]

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#E5CC88]

                  sm:w-auto
                "
              >
                Explore capabilities
                <ArrowRight size={12} />
              </a>

              <Link
                to="/contact"
                className="
                  inline-flex
                  min-h-[44px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/18
                  bg-white/[.05]
                  px-5
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.11em]
                  text-white

                  transition-all
                  duration-300

                  hover:bg-white/[.1]

                  sm:w-auto
                "
              >
                Speak with us
              </Link>
            </div>
          </motion.div>

          {/* =================================================
              HERO RIGHT CARD
          ================================================= */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 22,
                  }
            }
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
            className={`
              ${animatedDarkCard}

              rounded-[22px]
              border
              border-white/10
              bg-white/[.055]
              p-5
              backdrop-blur-md

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-[1.015]
              hover:border-white/20
              hover:shadow-[0_18px_40px_rgba(0,0,0,.14)]

              sm:p-6
              lg:p-7
            `}
          >
            <span
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-[#D8B867]
                text-[#06271F]

                transition-transform
                duration-300

                hover:scale-110
              "
            >
              <Waypoints size={18} />
            </span>

            <h2
              className="
                mt-5
                max-w-[450px]
                font-serif
                text-[27px]
                font-normal
                leading-[1.06]
                tracking-[-.03em]

                sm:text-[31px]
                lg:text-[34px]
              "
            >
              Advisory built around commercial reality.
            </h2>

            <p
              className="
                mt-3
                max-w-[520px]
                text-[14px]
                leading-6
                text-white/64

                sm:text-[15px]
              "
            >
              Rather than beginning with a jurisdiction, product or
              institution, we start with what the client is trying to
              accomplish.
            </p>

            {/* HERO SMALL CARDS */}

            <div
              className="
                mt-5
                grid
                gap-2

                sm:grid-cols-2
              "
            >
              {[
                "Objective-led",
                "Cross-border",
                "Confidential",
                "Execution focused",
              ].map((item) => (
                <div
                  key={item}
                  className={`
                    ${animatedDarkCard}

                    flex
                    min-h-[46px]
                    items-center
                    gap-2.5

                    rounded-xl

                    border
                    border-white/[.08]

                    bg-white/[.05]

                    px-3.5

                    text-[14px]
                    font-semibold
                    text-white/86

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:scale-[1.02]
                    hover:border-white/15
                    hover:bg-white/[.09]
                  `}
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
                      bg-[#8BCBBB]
                      text-[#06271F]
                    "
                  >
                    <Check size={11} />
                  </span>

                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. CAPABILITIES
      ===================================================== */}

      <section
        id="capabilities"
        className="
          bg-[#F7F4EC]
          py-9

          sm:py-10
          lg:py-11
        "
      >
        <div className="section-shell">
          <div
            className="
              grid
              gap-4

              lg:grid-cols-[1fr_400px]
              lg:items-end
            "
          >
            <div>
              <p className="section-kicker">
                ADVISORY CAPABILITIES
              </p>

              <h2
                className="
                  mt-2
                  max-w-[760px]
                  font-serif
                  text-[31px]
                  font-normal
                  leading-[1.02]
                  tracking-[-.035em]

                  sm:text-[37px]
                  lg:text-[43px]
                "
              >
                Advice across structure, banking, capital and ownership.
              </h2>
            </div>

            <p
              className="
                max-w-[400px]
                text-[14px]
                leading-6
                text-[#5D6C67]

                sm:text-[15px]

                lg:text-right
              "
            >
              One engagement may involve several interconnected advisory
              areas.
            </p>
          </div>

          <motion.div
            variants={revealContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.1,
            }}
            className="
              mt-6
              grid
              gap-3

              sm:grid-cols-2

              lg:grid-cols-5
            "
          >
            {capabilities.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <motion.article
                  key={title}
                  variants={revealCard}
                  className={`
                    ${animatedCard}

                    rounded-[17px]

                    border
                    border-[#DCE2DC]

                    bg-white

                    p-4

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-1
                    hover:scale-[1.025]
                    hover:border-[#0B5345]/25

                    hover:shadow-[0_14px_30px_rgba(7,40,33,.075)]
                  `}
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center

                      rounded-full

                      bg-[#E8F2EE]

                      text-[#0B5345]

                      transition-all
                      duration-300

                      group-hover:bg-[#0B5345]
                      group-hover:text-white
                    "
                  >
                    <Icon size={16} />
                  </span>

                  <h3
                    className="
                      mt-3
                      font-serif
                      text-[21px]
                      font-normal
                      leading-tight
                      text-[#14201C]
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-6
                      text-[#5D6F68]
                    "
                  >
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          3. HOW WE WORK
      ===================================================== */}

      <section
        className="
          bg-white
          py-9

          sm:py-10
          lg:py-11
        "
      >
        <div className="section-shell">
          <div
            className="
              flex
              flex-col
              gap-4

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p className="section-kicker">
                HOW WE WORK
              </p>

              <h2
                className="
                  mt-2
                  max-w-[700px]
                  font-serif
                  text-[31px]
                  font-normal
                  leading-[1.02]
                  tracking-[-.035em]

                  sm:text-[37px]
                  lg:text-[43px]
                "
              >
                From objective to execution.
              </h2>
            </div>

            <p
              className="
                max-w-[440px]
                text-[14px]
                leading-6
                text-[#5D6C67]

                sm:text-[15px]

                md:text-right
              "
            >
              A disciplined process keeps complex advisory work clear,
              practical and focused.
            </p>
          </div>

          <motion.div
            variants={revealContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="
              mt-6
              grid
              gap-3

              sm:grid-cols-2

              lg:grid-cols-4
            "
          >
            {approach.map(
              ({
                number,
                title,
                text,
              }) => (
                <motion.article
                  key={number}
                  variants={revealCard}
                  className={`
                    ${animatedCard}

                    rounded-[17px]

                    border
                    border-[#DCE2DC]

                    bg-[#FAFBF8]

                    p-5

                    transition-all
                    duration-300
                    ease-out

                    hover:-translate-y-1
                    hover:scale-[1.025]
                    hover:border-[#0B5345]/25
                    hover:bg-white

                    hover:shadow-[0_14px_32px_rgba(7,40,33,.075)]
                  `}
                >
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
                        text-[12px]
                        font-extrabold
                        tracking-[.15em]
                        text-[#A7802D]
                      "
                    >
                      {number}
                    </span>

                    <span
                      className="
                        h-px
                        flex-1
                        bg-[#DDE3DE]
                      "
                    />
                  </div>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[25px]
                      font-normal
                      leading-tight
                    "
                  >
                    {title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[14px]
                      leading-6
                      text-[#5D6F68]
                    "
                  >
                    {text}
                  </p>
                </motion.article>
              ),
            )}
          </motion.div>

          {/* CTA CARD */}

          <div
            className={`
              ${animatedCard}

              mt-5

              flex
              flex-col
              gap-3

              rounded-[16px]

              border
              border-[#DCE2DD]

              bg-[#F7F4EC]

              px-5
              py-4

              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:scale-[1.01]
              hover:border-[#0B5345]/20

              hover:shadow-[0_12px_28px_rgba(7,40,33,.07)]

              sm:flex-row
              sm:items-center
              sm:justify-between
            `}
          >
            <div>
              <p
                className="
                  font-serif
                  text-[21px]
                  leading-tight
                "
              >
                Have a specific requirement?
              </p>

              <p
                className="
                  mt-1
                  text-[14px]
                  leading-6
                  text-[#667570]
                "
              >
                The Contact page is the best place to begin a confidential
                discussion.
              </p>
            </div>

            <Link
              to="/contact"
              className="
                inline-flex
                min-h-[42px]
                w-full
                shrink-0
                items-center
                justify-center
                gap-2

                rounded-lg

                bg-[#0B5345]

                px-4

                text-[10px]
                font-extrabold
                uppercase
                tracking-[.1em]

                text-white

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#106856]

                sm:w-auto
              "
            >
              Contact Orpheus
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* =====================================================
          4. GLOBAL REACH + CONTACT
      ===================================================== */}

      <section
        className="
          bg-[#F7F4EC]
          py-8

          sm:py-9
          lg:py-10
        "
      >
        <div className="section-shell">
          <div
            className="
              grid
              gap-4

              lg:grid-cols-[1.25fr_.75fr]
            "
          >
            {/* =================================================
                GLOBAL REACH MAIN CARD
            ================================================= */}

            <article
              className={`
                ${animatedCard}

                grid

                rounded-[20px]

                border
                border-[#DDE3DE]

                bg-white

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:scale-[1.01]

                hover:shadow-[0_16px_38px_rgba(7,40,33,.07)]

                md:grid-cols-[1.05fr_.95fr]
              `}
            >
              {/* LEFT */}

              <div
                className="
                  p-5

                  sm:p-5

                  lg:p-6
                "
              >
                <p
                  className="
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[.16em]

                    text-[#0B5345]
                  "
                >
                  Global reach
                </p>

                <h2
                  className="
                    mt-2

                    max-w-[540px]

                    font-serif

                    text-[29px]
                    font-normal

                    leading-[1.04]

                    tracking-[-.03em]

                    sm:text-[34px]

                    lg:text-[37px]
                  "
                >
                  Based in Dubai.

                  <span className="block">
                    International in outlook.
                  </span>
                </h2>

                <p
                  className="
                    mt-3

                    max-w-[540px]

                    text-[14px]
                    leading-6

                    text-[#566861]

                    sm:text-[15px]
                  "
                >
                  Positioned at the intersection of GCC commerce,
                  international banking, capital and private wealth.
                </p>

                {/* TAGS */}

                <div
                  className="
                    mt-4

                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {[
                    "Cross-border",
                    "Corporate",
                    "Banking",
                    "Capital",
                    "Private wealth",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full

                        border
                        border-[#E1E5E1]

                        bg-[#F3F5F1]

                        px-3
                        py-1.5

                        text-[11px]
                        font-semibold

                        text-[#455650]

                        transition-all
                        duration-300

                        hover:border-[#0B5345]/25
                        hover:bg-[#EAF2EF]
                        hover:text-[#0B5345]
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* REGIONAL ADVANTAGE CARD */}

                <div
                  className={`
                    ${animatedCard}

                    mt-5

                    rounded-[14px]

                    border
                    border-[#DDE3DE]

                    bg-[#FAFBF8]

                    p-4

                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:scale-[1.01]
                    hover:border-[#0B5345]/20

                    hover:shadow-[0_10px_24px_rgba(7,40,33,.05)]

                    sm:p-5
                  `}
                >
                  <p
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[.14em]

                      text-[#A7802D]
                    "
                  >
                    Regional advantage
                  </p>

                  <p
                    className="
                      mt-2

                      max-w-[520px]

                      text-[13px]
                      leading-5

                      text-[#5F6F69]

                      sm:text-[14px]
                      sm:leading-6
                    "
                  >
                    Dubai provides a practical base for regional business,
                    international banking and cross-border ownership
                    requirements.
                  </p>

                  <div
                    className="
                      mt-4

                      grid
                      gap-2
                    "
                  >
                    {[
                      "Access to GCC commercial networks",
                      "Strong banking and capital connectivity",
                      "Practical base for international structures",
                    ].map((item) => (
                      <div
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2.5
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
                            bg-[#E6F1ED]
                            text-[#0B5345]
                          "
                        >
                          <Check size={10} />
                        </span>

                        <p
                          className="
                            text-[12px]
                            font-medium
                            text-[#455650]

                            sm:text-[13px]
                          "
                        >
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =============================================
                  RIGHT GREEN PANEL
              ============================================= */}

              <div
                className="
                  relative
                  overflow-hidden

                  bg-[#062F27]

                  p-5

                  text-white

                  sm:p-5
                  lg:p-6
                "
              >
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[.06]

                    [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)]
                    [background-size:40px_40px]
                  "
                />

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-52
                    w-52
                    rounded-full
                    bg-[#69B7A1]/12
                    blur-[80px]
                  "
                />

                <div
                  className="
                    relative
                    flex
                    h-full
                    flex-col
                    justify-start
                  "
                >
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#D8B867]/25
                      bg-[#D8B867]/10
                      text-[#E2C47D]
                    "
                  >
                    <MapPin size={15} />
                  </span>

                  <h3
                    className="
                      mt-4
                      font-serif
                      text-[27px]
                      font-normal

                      sm:text-[30px]
                    "
                  >
                    Orpheus Financial
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[14px]
                      text-white/70
                    "
                  >
                    Dubai, United Arab Emirates
                  </p>

                  <p
                    className="
                      mt-3
                      max-w-[470px]
                      text-[13px]
                      leading-5
                      text-white/60

                      sm:text-[14px]
                      sm:leading-6
                    "
                  >
                    Corporate structuring, banking, financing and ownership
                    advisory for internationally active businesses, founders,
                    investors and private clients.
                  </p>

                  {/* GREEN PANEL CARDS */}

                  <div
                    className="
                      mt-5
                      grid
                      gap-2.5
                    "
                  >
                    {[
                      {
                        icon: Building2,
                        title: "Commercial hub",
                        text:
                          "Access to GCC business and institutional networks.",
                      },
                      {
                        icon: Landmark,
                        title: "Financial connectivity",
                        text:
                          "Links across banking, capital and advisory markets.",
                      },
                      {
                        icon: Globe2,
                        title: "International gateway",
                        text:
                          "Well positioned for cross-border structures and ownership.",
                      },
                    ].map(
                      ({
                        icon: Icon,
                        title,
                        text,
                      }) => (
                        <div
                          key={title}
                          className={`
                            ${animatedDarkCard}

                            flex
                            items-start
                            gap-3

                            rounded-[11px]

                            border
                            border-white/[.08]

                            bg-white/[.045]

                            p-3

                            transition-all
                            duration-300

                            hover:-translate-y-0.5
                            hover:scale-[1.02]
                            hover:border-white/15
                            hover:bg-white/[.075]
                          `}
                        >
                          <span
                            className="
                              flex
                              h-8
                              w-8
                              shrink-0
                              items-center
                              justify-center
                              rounded-full
                              bg-white/[.07]
                              text-[#8BCBBB]
                            "
                          >
                            <Icon size={13} />
                          </span>

                          <div className="min-w-0">
                            <p
                              className="
                                text-[13px]
                                font-semibold
                                text-white/90
                              "
                            >
                              {title}
                            </p>

                            <p
                              className="
                                mt-0.5
                                text-[11px]
                                leading-4
                                text-white/52

                                sm:text-[12px]
                                sm:leading-5
                              "
                            >
                              {text}
                            </p>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </article>

            {/* =================================================
                CONTACT PANEL
            ================================================= */}

            <div
              className={`
                ${animatedCard}

                rounded-[20px]

                border
                border-[#DDE3DE]

                bg-white

                p-5

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:scale-[1.01]
                hover:border-[#0B5345]/20

                hover:shadow-[0_16px_34px_rgba(7,40,33,.075)]

                sm:p-6
              `}
            >
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.16em]

                  text-[#0B5345]
                "
              >
                Contact
              </p>

              <h2
                className="
                  mt-2

                  font-serif

                  text-[28px]
                  font-normal

                  leading-[1.04]

                  sm:text-[30px]
                "
              >
                Reach Orpheus.
              </h2>

              <div
                className="
                  mt-4
                  grid
                  gap-2.5
                "
              >
                {contactMethods.map(
                  ({
                    icon: Icon,
                    title,
                    value,
                  }) => (
                    <article
                      key={title}
                      className={`
                        ${animatedCard}

                        flex
                        items-center
                        gap-3

                        rounded-[13px]

                        border
                        border-[#E0E5E1]

                        bg-[#FAFBF8]

                        p-3.5

                        transition-all
                        duration-300
                        ease-out

                        hover:-translate-y-0.5
                        hover:scale-[1.02]
                        hover:border-[#0B5345]/25

                        hover:bg-white

                        hover:shadow-[0_8px_24px_rgba(7,40,33,.06)]
                      `}
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
                          bg-[#EAF2EF]
                          text-[#0B5345]
                        "
                      >
                        <Icon size={15} />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[.1em]
                            text-[#697771]
                          "
                        >
                          {title}
                        </p>

                        <p
                          className="
                            mt-0.5
                            break-words
                            text-[13px]
                            font-semibold
                            text-[#0B5345]

                            sm:text-[14px]
                          "
                        >
                          {value}
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>

              <Link
                to="/contact"
                className="
                  mt-4

                  inline-flex
                  min-h-[40px]
                  w-full
                  items-center
                  justify-center
                  gap-2

                  rounded-lg

                  bg-[#0B5345]

                  px-4

                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.1em]

                  text-white

                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106856]

                  hover:shadow-[0_8px_20px_rgba(11,83,69,.15)]
                "
              >
                Contact the team
                <ArrowRight size={11} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}