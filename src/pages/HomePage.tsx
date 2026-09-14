import {
  ArrowRight,
  Building2,
  Download,
  Globe2,
  Landmark,
  Mail,
  MapPin,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import {
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  useState,
  type FormEvent,
} from "react";

import { Link } from "react-router-dom";

import { AdvisoryCTA } from "@/components/AdvisoryCTA";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { HomeHero } from "@/components/home/HomeHero";
import { BrandLogo } from "@/components/ui/BrandLogo";

import { announcements } from "@/data/announcements";
import { CLIENT_LOGOS } from "@/data/clientLogos";
import { capabilityServiceByTitle } from "@/data/capabilityServices";

import {
  CONTACT,
  EMAIL_HREF,
  PHONE_HREF,
} from "@/data/contact";

import {
  GOOGLE_MAPS_URL,
  OFFICE_ADDRESS,
} from "@/data/siteLinks";

import {
  insightCards,
  jurisdictionGroups,
  processSteps,
  solutionPillars,
} from "@/data/siteArchitecture";

import { toast } from "@/hooks/use-toast";

const SHOW_UAE_GUIDE_BLOCK = false;

/* =========================================================
   ANIMATION
========================================================= */

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.03,
    },
  },
};

const revealCard = {
  hidden: {
    opacity: 0,
    y: 22,
    scale: 0.985,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

/* =========================================================
   MARKETS
========================================================= */

const markets = [
  {
    code: "AE",
    name: "UAE",
    flag: "https://flagcdn.com/w80/ae.png",
  },
  {
    code: "IN",
    name: "India",
    flag: "https://flagcdn.com/w80/in.png",
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "https://flagcdn.com/w80/sg.png",
  },
  {
    code: "HK",
    name: "Hong Kong",
    flag: "https://flagcdn.com/w80/hk.png",
  },
  {
    code: "CA",
    name: "Canada",
    flag: "https://flagcdn.com/w80/ca.png",
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "https://flagcdn.com/w80/sa.png",
  },
  {
    code: "QA",
    name: "Qatar",
    flag: "https://flagcdn.com/w80/qa.png",
  },
  {
    code: "BH",
    name: "Bahrain",
    flag: "https://flagcdn.com/w80/bh.png",
  },
  {
    code: "OM",
    name: "Oman",
    flag: "https://flagcdn.com/w80/om.png",
  },
  {
    code: "VG",
    name: "BVI",
    flag: "https://flagcdn.com/w80/vg.png",
  },
  {
    code: "SC",
    name: "Seychelles",
    flag: "https://flagcdn.com/w80/sc.png",
  },
  {
    code: "KY",
    name: "Cayman Islands",
    flag: "https://flagcdn.com/w80/ky.png",
  },
  {
    code: "MU",
    name: "Mauritius",
    flag: "https://flagcdn.com/w80/mu.png",
  },
  {
    code: "KE",
    name: "Kenya",
    flag: "https://flagcdn.com/w80/ke.png",
  },
  {
    code: "US",
    name: "United States",
    flag: "https://flagcdn.com/w80/us.png",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const [showAllMarkets, setShowAllMarkets] =
    useState(false);

  const [submitting, setSubmitting] =
    useState(false);

  const [
    newsletterEmail,
    setNewsletterEmail,
  ] = useState("");

  const latestAnnouncement =
    announcements.find(
      (item) => item.active,
    );

  /* =======================================================
     CONTACT
  ======================================================= */

  const submitContact = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const form = event.currentTarget;

    setSubmitting(true);

    window.setTimeout(() => {
      setSubmitting(false);
      form.reset();

      toast({
        title: "Message received",
        description:
          "The Orpheus advisory team will contact you shortly.",
      });
    }, 650);
  };

  /* =======================================================
     NEWSLETTER
  ======================================================= */

  const subscribe = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      return;
    }

    toast({
      title: "Subscribed to Market Insights",
      description:
        "You’ll receive new Orpheus market and firm updates at this email address.",
    });

    setNewsletterEmail("");
  };

  const field =
    "h-12 w-full rounded-xl border border-[#D9E0DC] bg-white px-4 text-[15px] text-[#0A1714] outline-none transition placeholder:text-[#9AA5A1] focus:border-[#0B5345] focus:ring-4 focus:ring-[#0B5345]/10 lg:text-[16px]";

  return (
    <main className="overflow-hidden bg-[#FFFEFA] text-[#0A1714]">
      {/* =====================================================
          1. HERO
      ====================================================== */}

      <HomeHero />

      {/* =====================================================
          2. CLIENT TRUST
      ====================================================== */}

      <section
        className="
          overflow-hidden
          border-b
          border-[#E2E6E1]
          bg-white

          py-8

          md:py-11

          lg:py-12
        "
      >
        <div className="section-shell">
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 16,
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
            transition={{
              duration: 0.55,
            }}
            className="
              flex
              flex-col
              gap-5

              lg:flex-row
              lg:items-center
              lg:gap-10

              xl:gap-14
            "
          >
            <div
              className="
                max-w-[330px]
                shrink-0

                lg:w-[350px]
                lg:max-w-[350px]
              "
            >
              <p className="section-kicker">
                CLIENT TRUST
              </p>

              <h2
                className="
                  mt-2

                  font-serif
                  text-[clamp(27px,3vw,40px)]
                  font-normal
                  leading-[1.03]
                "
              >
                Trusted by businesses.
              </h2>
            </div>

            <div
              className="
                -mx-5
                min-w-0
                flex-1
                overflow-hidden

                lg:mx-0
              "
            >
              <div
                className="
                  client-logo-marquee

                  flex
                  w-max
                  items-center
                  gap-3

                  px-5

                  lg:gap-4
                  lg:px-0
                "
              >
                {[
                  ...CLIENT_LOGOS,
                  ...CLIENT_LOGOS,
                ].map((logo, index) => (
                  <div
                    key={`${logo.name}-${index}`}
                    aria-hidden={
                      index >=
                      CLIENT_LOGOS.length
                    }
                    className="
                      group

                      flex
                      h-[72px]
                      w-[150px]
                      shrink-0

                      items-center
                      justify-center

                      rounded-2xl

                      border
                      border-[#E2E7E2]

                      bg-[#FCFCF9]

                      px-4

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#0B5345]/25
                      hover:bg-white
                      hover:shadow-[0_14px_32px_rgba(7,40,33,.09)]

                      lg:h-[90px]
                      lg:w-[190px]
                      lg:px-5

                      xl:h-[96px]
                      xl:w-[205px]
                    "
                  >
                    <BrandLogo
                      src={logo.src}
                      alt={logo.name}
                      variant="light"
                      size="md"
                      padded={false}
                      className="w-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          3. OUR SOLUTIONS
      ====================================================== */}

       <section
  className="
    relative
    overflow-hidden
    bg-[#F7F4EC]
    py-14
    sm:py-16
    md:py-20
    lg:py-24
  "
>
  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      grid-texture
      opacity-40
    "
  />

  <div className="section-shell relative">
    {/* SECTION HEADER */}
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
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
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mx-auto
        max-w-[820px]
        text-center
      "
    >
      <p className="section-kicker">
        OUR SOLUTIONS
      </p>

      <h2
        className="
          section-title
          lg:text-[46px]
          lg:leading-[1.04]
          xl:text-[50px]
        "
      >
        Three pillars. One accountable advisory relationship.
      </h2>

      <p
        className="
          section-copy
          mx-auto
          lg:max-w-[780px]
          lg:text-[18px]
          lg:leading-8
          lg:text-[#52645E]
        "
      >
        Orpheus acts as lead architect and executor across corporate
        structuring, banking and capital, and private wealth — with
        specialist services available inside each pillar.
      </p>
    </motion.div>

    {/* SOLUTION CARDS */}
    <motion.div
      variants={revealContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        mt-9
        grid
        grid-cols-1
        gap-5
        md:mt-10
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
            variants={revealCard}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group/card
              relative
              flex
              flex-col
              overflow-hidden
              rounded-[22px]

              border
              border-[#DCE2DC]

              bg-white

              p-5

              shadow-[0_10px_28px_rgba(7,40,33,.04)]

              transition-[border-color,box-shadow,background-color,transform]
              duration-300

              sm:p-6

              md:min-h-[500px]
              md:hover:-translate-y-2
              md:hover:border-[#0B5345]/40
              md:hover:bg-[#FEFFFD]
              md:hover:shadow-[0_28px_60px_rgba(7,40,33,.14)]

              lg:min-h-[520px]
              lg:p-6
            "
          >
            {/* MAIN TOP LINE - DESKTOP/TABLET ONLY */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                z-20

                hidden
                h-[4px]
                w-full

                origin-left
                scale-x-0

                bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_58%,#D8B867_100%)]

                transition-transform
                duration-500
                ease-out

                md:block
                md:group-hover/card:scale-x-100
              "
            />

            {/* DESKTOP HOVER GLOW */}
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

            {/* CARD NUMBER */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                right-5
                top-4

                font-serif
                text-[48px]
                leading-none

                text-[#0B5345]/[.045]

                transition-all
                duration-300

                md:group-hover/card:-translate-x-1
                md:group-hover/card:text-[#0B5345]/[.08]

                lg:text-[58px]
              "
            >
              0{index + 1}
            </span>

            {/* ICON */}
            <span
              className="
                relative
                z-10

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

                transition-all
                duration-300

                md:group-hover/card:border-[#0B5345]
                md:group-hover/card:bg-[#0B5345]
                md:group-hover/card:text-white

                lg:h-12
                lg:w-12
              "
            >
              <Icon size={18} />
            </span>

            {/* EYEBROW */}
            <p
              className="
                relative
                z-10

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
            <h3
              className="
                relative
                z-10

                mt-2

                font-serif
                text-[30px]
                font-normal
                leading-[1.04]

                text-[#102A23]

                transition-colors
                duration-300

                md:group-hover/card:text-[#0B5345]

                sm:text-[33px]

                lg:min-h-[74px]
                lg:text-[35px]
              "
            >
              {pillar.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                relative
                z-10

                mt-3

                text-[15px]
                leading-6

                text-[#5A6C66]

                transition-colors
                duration-300

                md:group-hover/card:text-[#40544D]

                sm:text-[16px]

                lg:min-h-[100px]
                lg:text-[16px]
                lg:leading-6
              "
            >
              {pillar.description}
            </p>

            {/* SPECIALIST SERVICES */}
            <div
              className="
                relative
                z-10

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
                "
              >
                Specialist services
              </p>

              <div
                className="
                  mt-3
                  grid
                  gap-2
                "
              >
                {pillar.capabilities.map((capability) => (
                  <Link
                    key={capability}
                    to={`/services/capability/${
                      capabilityServiceByTitle[capability]?.slug ?? ""
                    }`}
                    className="
                      group/item
                      relative

                      flex
                      min-h-[48px]
                      w-full

                      items-center
                      justify-between
                      gap-3

                      overflow-hidden
                      rounded-xl

                      border
                      border-transparent

                      bg-[#F5F7F4]

                      px-4
                      py-3

                      text-[13px]
                      font-semibold
                      leading-[1.35]

                      text-[#263833]

                      transition-all
                      duration-300

                      sm:min-h-[50px]
                      sm:text-[14px]

                      md:hover:translate-x-1
                      md:hover:border-[#0B5345]/18
                      md:hover:bg-[#EAF2EF]
                      md:hover:text-[#0B5345]
                      md:hover:shadow-[0_7px_18px_rgba(7,40,33,.06)]

                      lg:min-h-[52px]
                      lg:text-[15px]
                    "
                  >
                    {/* INNER TOP LINE - DESKTOP/TABLET ONLY */}
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
                        ease-out

                        md:block
                        md:group-hover/item:scale-x-100
                      "
                    />

                    <span className="relative z-10 min-w-0 flex-1">
                      {capability}
                    </span>

                    <ArrowRight
                      size={13}
                      className="
                        relative
                        z-10

                        shrink-0

                        text-[#50655E]

                        transition-all
                        duration-300

                        md:group-hover/item:translate-x-1
                        md:group-hover/item:text-[#0B5345]
                      "
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* EXPLORE PILLAR */}
            
          </motion.article>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* =====================================================
          4. HOW WE WORK
      ====================================================== */}

      <section
        className="
          bg-white

          py-16

          md:py-24
        "
      >
        <div
          className="
            section-shell

            grid
            gap-8

            lg:grid-cols-[.9fr_1.1fr]
            lg:items-center
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
            transition={{
              duration: 0.6,
            }}
          >
            <p className="section-kicker">
              HOW WE WORK
            </p>

            <h2
              className="
                section-title
                max-w-[620px]
              "
            >
              We architect the solution and stay
              accountable for execution.
            </h2>

            <p
              className="
                section-copy
                max-w-[650px]

                lg:text-[18px]
                lg:leading-8
                lg:text-[#51635D]

                xl:text-[17px]
              "
            >
              Orpheus is not a passive introducer.
              Our team defines the structure,
              prepares the roadmap, manages
              documentation and leads implementation
              through to completion.
            </p>

            <div
              className="site-card 
                mt-5

                rounded-2xl

                border
                border-[#D8B867]/30

                bg-[#FBF7EA]

                p-4

                md:p-5
              "
            >
              <p
                className="
                  flex
                  items-start
                  gap-3

                  text-[14px]
                  font-semibold
                  leading-5

                  text-[#33443F]

                  md:text-[15px]
                  md:leading-6

                  lg:text-[16px]
                  lg:leading-7
                "
              >
                <Sparkles
                  size={16}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#A7802D]
                  "
                />

                One Orpheus team owns the engagement
                from architecture through execution
                and ongoing support.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={revealContainer}
            initial={
              reduceMotion
                ? false
                : "hidden"
            }
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
              grid-cols-2
              gap-3

              md:gap-4

              lg:gap-5
            "
          >
            {processSteps.map((step) => (
              <motion.article
                key={step.no}
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
                  group

                  rounded-[18px]

                  border
                  border-[#E1E5E1]

                  bg-[#F9FAF7]

                  p-4

                  transition-[background-color,border-color,box-shadow]
                  duration-300

                  hover:border-[#0B5345]/25
                  hover:bg-white
                  hover:shadow-[0_18px_40px_rgba(7,40,33,.09)]

                  md:p-5

                  lg:p-6
                "
              >
                <span
                  className="
                    inline-flex
                    h-8
                    w-8

                    items-center
                    justify-center

                    rounded-full

                    bg-[#0B5345]

                    text-[11px]
                    font-extrabold
                    text-white
                  "
                >
                  {step.no}
                </span>

                <h3
                  className="
                    mt-3

                    font-serif
                    text-[21px]
                    font-normal
                    leading-tight

                    transition-colors

                    group-hover:text-[#0B5345]

                    md:text-[25px]

                    lg:text-[28px]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2

                    text-[10.5px]
                    leading-[1.55]

                    text-[#667570]

                    sm:text-[13px]

                    md:text-[14px]

                    lg:text-[16px]
                    lg:leading-6
                    lg:text-[#52645E]
                  "
                >
                  {step.text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          5. DUBAI AT THE CENTRE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[linear-gradient(135deg,#061B15_0%,#0B5345_58%,#0E6354_100%)]

          py-14

          text-white

          md:py-20
        "
      >
        <div className="absolute inset-0 grid-texture-dark opacity-30" />

        <div
          className="
            section-shell
            relative

            grid
            gap-8

            lg:grid-cols-[1fr_.9fr]
            lg:items-center
            lg:gap-12
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
              DUBAI AT THE CENTRE
            </p>

            <h2
              className="
                mt-4
                max-w-[720px]

                font-serif
                text-[clamp(40px,5vw,64px)]
                font-normal
                leading-[1.01]
                tracking-[-.04em]
              "
            >
              Our hub for{" "}

              <span className="italic text-[#78C9B2]">
                cross-border execution.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-[660px]

                text-[17px]
                leading-7

                text-white/75

                md:text-[18px]

                lg:text-[17px]
                lg:leading-8
                lg:text-white/82
              "
            >
              Dubai sits at the centre of Orpheus'
              operating model: a base for corporate
              structuring, international banking,
              capital connectivity and private wealth
              solutions spanning the GCC, Asia, Europe
              and Africa.
            </p>
          </motion.div>

          <motion.div
            variants={revealContainer}
            initial={
              reduceMotion
                ? false
                : "hidden"
            }
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
              grid-cols-2
              gap-3

              lg:gap-4
            "
          >
            {[
              [
                Landmark,
                "Banking",
                "Institutional access and treasury architecture",
              ],
              [
                Building2,
                "Structuring",
                "UAE and international legal vehicles",
              ],
              [
                Network,
                "Capital",
                "Debt, transactions and strategic finance",
              ],
              [
                Globe2,
                "Wealth",
                "Family, succession and global wealth planning",
              ],
            ].map(
              ([Icon, title, text]) => {
                const C =
                  Icon as typeof Landmark;

                return (
                  <motion.div
                    key={String(title)}
                    variants={revealCard}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -6,
                            scale: 1.015,
                          }
                    }
                    className="
                      group

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[.05]

                      p-4

                      backdrop-blur-sm

                      transition-[background-color,border-color,box-shadow]
                      duration-300

                      hover:border-[#D8B867]/30
                      hover:bg-white/[.09]
                      hover:shadow-[0_16px_36px_rgba(0,0,0,.12)]

                      md:p-5

                      lg:p-6
                    "
                  >
                    <C
                      size={18}
                      className="
                        text-[#E4CB8A]

                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    />

                    <h3
                      className="
                        mt-3

                        font-serif
                        text-[20px]
                        font-normal

                        md:text-[22px]

                        lg:text-[27px]
                      "
                    >
                      {String(title)}
                    </h3>

                    <p
                      className="
                        mt-2

                        text-[13px]
                        leading-5

                        text-white/60

                        lg:text-[16px]
                        lg:leading-6
                        lg:text-white/75
                      "
                    >
                      {String(text)}
                    </p>
                  </motion.div>
                );
              },
            )}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          6. FEATURED JURISDICTIONS
      ====================================================== */}

      {/* =====================================================
    6. FEATURED JURISDICTIONS
====================================================== */}

      <section
  className="
    relative
    overflow-hidden
    bg-[#F7F4EC]
    py-16
    md:py-24
  "
>
  <div
    aria-hidden="true"
    className="
      absolute
      inset-0
      grid-texture
      opacity-45
    "
  />

  <div className="section-shell relative">
    {/* SECTION HEADER */}
    <motion.div
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 18,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="max-w-[780px]"
    >
      <p className="section-kicker">
        FEATURED JURISDICTIONS
      </p>

      <h2 className="section-title">
        Use the right legal vehicle for the objective.
      </h2>

      <p
        className="
          section-copy

          lg:text-[18px]
          lg:leading-8
          lg:text-[#52645E]
        "
      >
        UAE is consolidated as the primary regional hub with Mainland,
        DIFC and ADGM routes inside it. BVI and Seychelles remain direct
        international jurisdiction options.
      </p>
    </motion.div>

    {/* JURISDICTION CARDS */}
    <motion.div
      variants={revealContainer}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      className="
        mt-10

        grid
        grid-cols-1
        gap-5

        md:grid-cols-2

        lg:grid-cols-3
        lg:gap-6
      "
    >
      {jurisdictionGroups.map((group, index) => {
        const Icon = group.icon;

        return (
          <motion.article
            key={group.slug}
            variants={revealCard}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              group/card
              relative

              flex
              flex-col

              overflow-hidden

              rounded-[22px]

              border
              border-[#D9DED8]

              bg-white

              p-5

              shadow-[0_10px_28px_rgba(7,40,33,.04)]

              transition-[background-color,border-color,box-shadow,transform]
              duration-300

              sm:p-6

              md:hover:-translate-y-2
              md:hover:border-[#0B5345]/40
              md:hover:bg-[#FEFFFD]
              md:hover:shadow-[0_28px_60px_rgba(7,40,33,.14)]

              lg:min-h-[455px]
              lg:p-7
            "
          >
            {/* MAIN TOP LINE - DESKTOP/TABLET ONLY */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                left-0
                top-0
                z-20

                hidden

                h-[4px]
                w-full

                origin-left
                scale-x-0

                bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_58%,#D8B867_100%)]

                transition-transform
                duration-500
                ease-out

                md:block
                md:group-hover/card:scale-x-100
              "
            />

            {/* HOVER GLOW - DESKTOP/TABLET */}
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

            {/* CARD NUMBER */}
            <span
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                right-4
                top-3

                font-serif
                text-[48px]
                leading-none

                text-[#0B5345]/[.045]

                transition-all
                duration-300

                md:group-hover/card:-translate-x-1
                md:group-hover/card:text-[#0B5345]/[.08]

                sm:text-[56px]

                lg:text-[58px]
              "
            >
              0{index + 1}
            </span>

            {/* ICON */}
            <span
              className="
                relative
                z-10

                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-full

                border
                border-[#0B5345]/15

                bg-[#EDF4F1]
                text-[#0B5345]

                transition-all
                duration-300

                md:group-hover/card:border-[#0B5345]
                md:group-hover/card:bg-[#0B5345]
                md:group-hover/card:text-white

                lg:h-12
                lg:w-12
              "
            >
              <Icon size={18} />
            </span>

            {/* KICKER */}
            <p
              className="
                relative
                z-10

                mt-5

                text-[10px]
                font-extrabold
                uppercase
                tracking-[.18em]

                text-[#0B5345]

                sm:text-[11px]

                lg:text-[12px]
              "
            >
              {group.kicker}
            </p>

            {/* TITLE */}
            <h3
              className="
                relative
                z-10

                mt-2

                font-serif
                text-[31px]
                font-normal
                leading-[1.04]

                text-[#122B24]

                transition-colors
                duration-300

                md:group-hover/card:text-[#0B5345]

                sm:text-[35px]

                lg:text-[39px]
                lg:leading-[1.02]
              "
            >
              {group.title}
            </h3>

            {/* DESCRIPTION */}
            <p
              className="
                relative
                z-10

                mt-3

                text-[14px]
                leading-6

                text-[#5E6D68]

                transition-colors
                duration-300

                md:group-hover/card:text-[#43564F]

                sm:text-[15px]
                sm:leading-6

                lg:text-[17px]
                lg:leading-7
              "
            >
              {group.description}
            </p>

            {/* BEST SUITED TO */}
            <div
              className="
                relative
                z-10

                mt-5

                border-t
                border-[#E4E7E2]

                pt-4
              "
            >
              <p
                className="
                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.15em]

                  text-[#9A7B33]

                  sm:text-[11px]
                "
              >
                Best suited to
              </p>

              <p
                className="
                  mt-1.5

                  text-[13px]
                  font-semibold
                  leading-[1.55]

                  text-[#2B3C37]

                  sm:text-[14px]

                  lg:text-[16px]
                  lg:leading-6
                "
              >
                {group.bestFor}
              </p>
            </div>

            {/* JURISDICTION OPTIONS */}
            <div
              className="
                relative
                z-10

                mt-5

                grid
                gap-2

                lg:mt-auto
                lg:pt-6
              "
            >
              {group.options.map((option) => (
                <Link
                  key={`${group.slug}-${option.label}`}
                  to={option.to}
                  className="
                    group/link
                    relative

                    flex
                    min-h-[46px]
                    w-full

                    items-center
                    justify-between
                    gap-3

                    overflow-hidden
                    rounded-xl

                    border
                    border-[#E1E5E0]

                    bg-[#F8F9F6]

                    px-4
                    py-2.5

                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.06em]

                    text-[#274039]

                    transition-all
                    duration-300

                    sm:text-[12px]

                    md:hover:translate-x-1
                    md:hover:border-[#0B5345]/25
                    md:hover:bg-[#EDF4F1]
                    md:hover:text-[#0B5345]
                    md:hover:shadow-[0_8px_20px_rgba(7,40,33,.06)]

                    lg:min-h-[48px]
                    lg:text-[14px]
                  "
                >
                  {/* INNER TOP LINE - DESKTOP/TABLET ONLY */}
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
                      ease-out

                      md:block
                      md:group-hover/link:scale-x-100
                    "
                  />

                  <span className="relative z-10 min-w-0 flex-1">
                    {option.label}
                  </span>

                  <ArrowRight
                    size={13}
                    className="
                      relative
                      z-10

                      shrink-0

                      transition-transform
                      duration-300

                      md:group-hover/link:translate-x-1
                    "
                  />
                </Link>
              ))}
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  </div>
</section>

      {/* =====================================================
          7. MARKETS
          FIXED DESKTOP + MOBILE
      ====================================================== */}

      <section
        className="
          relative
          overflow-hidden

          bg-[#08251E]

          py-16

          text-white

          md:py-20
        "
      >
        <div className="absolute inset-0 grid-texture-dark opacity-35" />

        <div className="section-shell relative">
          <div
            className="
              flex
              items-end
              justify-between
              gap-5
            "
          >
            <div>
              <p className="section-kicker-gold">
                MARKETS WE WORK ACROSS
              </p>

              <h2
                className="
                  mt-4
                  max-w-[760px]

                  font-serif
                  text-[clamp(34px,4.5vw,52px)]
                  font-normal
                  leading-[1.02]
                "
              >
                From our Dubai hub to global
                markets.
              </h2>
            </div>

            {/* DESKTOP CONTROL */}

            <button
              type="button"
              onClick={() =>
                setShowAllMarkets(
                  (value) => !value,
                )
              }
              className="
                group

                hidden
                min-h-11
                shrink-0

                items-center
                gap-2

                rounded-lg

                border
                border-[#D8B867]/35

                bg-[#D8B867]/[.06]

                px-5

                text-[11px]
                font-extrabold
                uppercase
                tracking-[.1em]

                text-[#E5CB87]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[#D8B867]
                hover:bg-[#D8B867]
                hover:text-[#071813]

                md:inline-flex

                lg:text-[12px]
              "
            >
              {showAllMarkets
                ? "Show Less"
                : "View All Markets"}

              <ArrowRight
                size={13}
                className={`
                  transition-transform
                  duration-300

                  ${
                    showAllMarkets
                      ? "-rotate-90"
                      : ""
                  }
                `}
              />
            </button>
          </div>

          {/* =================================================
              IMPORTANT:
              directly switches between 5 and ALL 16 markets.
          ================================================= */}

          <motion.div
            layout
            className="
              mt-7

              grid
              grid-cols-2
              gap-3

              sm:grid-cols-3

              lg:grid-cols-5
              lg:gap-4
            "
          >
            {(showAllMarkets
              ? markets
              : markets.slice(0, 5)
            ).map((market, index) => (
              <motion.div
                layout
                key={market.code}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 12,
                      }
                }
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.25,
                  delay: showAllMarkets
                    ? Math.min(
                        index * 0.025,
                        0.18,
                      )
                    : 0,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -5,
                        scale: 1.015,
                      }
                }
                className="
                  group

                  flex
                  min-h-[72px]

                  items-center
                  gap-3

                  rounded-xl

                  border
                  border-white/10

                  bg-white/[.045]

                  px-3.5
                  py-3

                  transition-[background-color,border-color,box-shadow]
                  duration-300

                  hover:border-[#D8B867]/40
                  hover:bg-white/[.08]
                  hover:shadow-[0_12px_30px_rgba(0,0,0,.12)]

                  md:px-4

                  lg:min-h-[82px]
                  lg:px-5
                "
              >
                <div
                  className="site-card 
                    h-8
                    w-11
                    shrink-0

                    overflow-hidden

                    rounded-[5px]

                    border
                    border-white/15

                    bg-white

                    shadow-sm

                    transition-transform
                    duration-300

                    group-hover:scale-105
                  "
                >
                  <img
                    src={market.flag}
                    alt={`${market.name} flag`}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <span
                    className="
                      block

                      text-[10px]
                      font-extrabold
                      tracking-[.14em]

                      text-[#D8B867]

                      lg:text-[11px]
                    "
                  >
                    {market.code}
                  </span>

                  <span
                    className="
                      block

                      text-[14px]
                      font-semibold
                      leading-5

                      text-white/90

                      lg:text-[16px]
                    "
                  >
                    {market.name}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* =================================================
                MOBILE CONTROL

                When collapsed:
                this is the 6th card, beside Hong Kong.

                When expanded:
                all 16 markets render + Show Less card.
            ================================================= */}

            <motion.button
              layout
              type="button"
              onClick={() =>
                setShowAllMarkets(
                  (value) => !value,
                )
              }
              whileTap={{
                scale: 0.97,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : {
                      y: -4,
                      scale: 1.015,
                    }
              }
              className="
                group

                flex
                min-h-[72px]

                items-center
                justify-between
                gap-2

                rounded-xl

                border
                border-[#D8B867]/35

                bg-[linear-gradient(135deg,rgba(216,184,103,.13),rgba(216,184,103,.045))]

                px-3.5
                py-3

                text-left

                transition-all
                duration-300

                hover:border-[#D8B867]/65
                hover:bg-[#D8B867]/15

                md:hidden
              "
            >
              <div className="min-w-0">
                <span
                  className="
                    block

                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[.13em]

                    text-[#D8B867]
                  "
                >
                  {showAllMarkets
                    ? "Markets"
                    : "Explore"}
                </span>

                <span
                  className="
                    mt-1
                    block

                    text-[13px]
                    font-bold
                    leading-[1.3]

                    text-white

                    min-[390px]:text-[14px]
                  "
                >
                  {showAllMarkets
                    ? "Show Less"
                    : "View More Markets"}
                </span>
              </div>

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[#D8B867]/25

                  bg-[#D8B867]/10

                  text-[#E5CB87]

                  transition-all
                  duration-300

                  group-hover:bg-[#D8B867]
                  group-hover:text-[#071813]
                "
              >
                <ArrowRight
                  size={13}
                  className={`
                    transition-transform
                    duration-300

                    ${
                      showAllMarkets
                        ? "-rotate-90"
                        : ""
                    }
                  `}
                />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          8. BUILT FOR TRUST
      ====================================================== */}

      <section
        className="
          bg-white

          py-16

          md:py-24
        "
      >
        <div className="section-shell">
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[.9fr_1.1fr]
              lg:items-center
              lg:gap-12
            "
          >
            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: -22,
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
                BUILT FOR TRUST
              </p>

              <h2 className="section-title">
                Institutional depth. Direct
                accountability.
              </h2>

              <p
                className="
                  section-copy

                  lg:text-[18px]
                  lg:leading-8
                  lg:text-[#51635D]
                "
              >
                Clients see one joined-up advisory
                relationship while Orpheus owns the
                architecture, workplan, execution
                control and long-term governance
                behind it.
              </p>
            </motion.div>

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 24,
                    }
              }
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              className="
                overflow-hidden

                rounded-[22px]

                border
                border-[#DEE4DE]

                bg-[#F9FAF7]
              "
            >
              {[
                [
                  "01",
                  "One accountable mandate",
                  "A clear Orpheus lead owns scope, decisions, timelines and delivery across the engagement.",
                ],
                [
                  "02",
                  "Execution discipline",
                  "Documentation, approvals, institution coordination and implementation are managed as one controlled workstream.",
                ],
                [
                  "03",
                  "Ongoing stewardship",
                  "After implementation, we stay close to governance, compliance, banking readiness and the client’s next stage.",
                ],
              ].map(
                (
                  [no, title, text],
                  index,
                ) => (
                  <div
                    key={title}
                    className={`
                      group

                      grid
                      grid-cols-[42px_1fr]
                      gap-3

                      p-4

                      transition-colors
                      duration-300

                      hover:bg-white

                      md:grid-cols-[52px_1fr]
                      md:p-5

                      lg:grid-cols-[58px_1fr]
                      lg:p-6

                      ${
                        index
                          ? "border-t border-[#DEE4DE]"
                          : ""
                      }
                    `}
                  >
                    <span
                      className="
                        font-serif
                        text-[22px]

                        text-[#C9A95D]

                        md:text-[25px]
                      "
                    >
                      {no}
                    </span>

                    <div>
                      <h3
                        className="
                          font-serif
                          text-[20px]
                          font-normal

                          transition-colors

                          group-hover:text-[#0B5345]

                          md:text-[23px]

                          lg:text-[26px]
                        "
                      >
                        {title}
                      </h3>

                      <p
                        className="
                          mt-1.5

                          text-[13px]
                          leading-5

                          text-[#65736E]

                          md:text-[14px]

                          lg:text-[16px]
                          lg:leading-6
                        "
                      >
                        {text}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </motion.div>
          </div>

          {SHOW_UAE_GUIDE_BLOCK && (
          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              mt-8

              rounded-[24px]

              border
              border-[#D8B867]/30

              bg-[#FCF8EC]

              p-5

              md:flex
              md:items-center
              md:justify-between
              md:gap-8
              md:p-7
            "
          >
            <div className="max-w-[760px]">
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]

                  text-[#9A7B33]
                "
              >
                2026 UAE STRUCTURING GUIDE
              </p>

              <h3
                className="
                  mt-2

                  font-serif
                  text-[27px]
                  font-normal
                  leading-[1.04]

                  md:text-[30px]

                  lg:text-[34px]
                "
              >
                A practical guide is being prepared
                for direct download.
              </h3>

              <p
                className="
                  mt-2

                  text-[14px]
                  leading-5

                  text-[#66736E]

                  md:text-[15px]
                  md:leading-6

                  lg:text-[17px]
                  lg:leading-7
                "
              >
                Once the approved PDF is supplied,
                this button becomes a direct file
                download.
              </p>
            </div>

            <button
              type="button"
              disabled
              className="
                mt-4

                inline-flex
                min-h-11
                w-full

                cursor-not-allowed

                items-center
                justify-center
                gap-2

                rounded-md

                bg-[#D8B867]/55

                px-5

                text-[11px]
                font-extrabold
                uppercase
                tracking-[.1em]

                text-[#5C4A20]

                sm:w-fit

                md:mt-0
              "
            >
              <Download size={13} />

              Guide coming soon
            </button>
          </motion.div>
          )}
        </div>
      </section>

      {/* =====================================================
          9. INSIGHTS
      ====================================================== */}

      <section
        className="
          bg-[#F7F4EC]

          pt-16
          pb-6

          sm:pb-8

          md:pt-24
          md:pb-8

          lg:pb-6
        "
      >
        <div className="section-shell">
          <div
            className="
              flex
              flex-col
              gap-5

              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div>
              <p className="section-kicker">
                INSIGHTS
              </p>

              <h2 className="section-title">
                Market insights & firm updates.
              </h2>

              <p
                className="
                  section-copy

                  lg:text-[18px]
                  lg:leading-8
                  lg:text-[#52645E]
                "
              >
                Practical commentary on structuring,
                banking, private markets, regulation
                and cross-border wealth.
              </p>
            </div>

            <Link
              to="/blog"
              className="
                micro-link
                whitespace-nowrap
              "
            >
              View all insights

              <ArrowRight size={13} />
            </Link>
          </div>

          <motion.div
            variants={revealContainer}
            initial={
              reduceMotion
                ? false
                : "hidden"
            }
            whileInView={
              reduceMotion
                ? undefined
                : "visible"
            }
            viewport={{
              once: true,
              amount: 0.08,
            }}
            className="
              mt-10

              grid
              gap-4

              md:grid-cols-2

              lg:grid-cols-4
              lg:gap-5
            "
          >
            {insightCards.map((item) => (
              <motion.div
                key={item.slug}
                variants={revealCard}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        y: -6,
                        scale: 1.01,
                      }
                }
              >
                <Link
                  to={`/blog/${item.slug}`}
                  className="
                    group
                    block
                    h-full

                    overflow-hidden

                    rounded-2xl

                    border
                    border-[#DDE3DE]

                    bg-white

                    transition-all

                    hover:border-[#0B5345]/30
                    hover:shadow-[0_20px_46px_rgba(7,40,33,.11)]
                  "
                >
                  <div
                    className="
                      h-2

                      bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]

                      lg:hidden
                    "
                  />

                  <div
                    className="
                      hidden
                      overflow-hidden

                      lg:block
                      lg:h-[165px]
                    "
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="
                        h-full
                        w-full
                        object-cover

                        transition-transform
                        duration-500

                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="p-6 lg:p-5">
                    <p
                      className="
                        text-[11px]
                        font-extrabold
                        uppercase
                        tracking-[.17em]

                        text-[#0B5345]
                      "
                    >
                      {item.category}
                    </p>

                    <h3
                      className="
                        mt-3

                        font-serif
                        text-[24px]
                        font-normal
                        leading-[1.08]

                        transition-colors

                        group-hover:text-[#0B5345]
                      "
                    >
                      {item.title}
                    </h3>

                    <span className="micro-link mt-7">
                      Read insight

                      <ArrowRight
                        size={12}
                        className="
                          transition-transform

                          group-hover:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {latestAnnouncement && (
            <div className="mt-8">
              <AnnouncementBanner
                announcement={
                  latestAnnouncement
                }
                variant="compact"
              />
            </div>
          )}

          {/* NEWSLETTER */}

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
              amount: 0.18,
            }}
            className="
              mt-8

              grid
              gap-7

              rounded-[24px]

              border
              border-[#D9E0D9]

              bg-white

              p-6

              shadow-[0_12px_35px_rgba(7,40,33,.04)]

              transition-shadow
              duration-300

              hover:shadow-[0_18px_45px_rgba(7,40,33,.08)]

              md:grid-cols-[1fr_.9fr]
              md:items-center
              md:p-8
            "
          >
            <div>
              <p className="section-kicker">
                MARKET INSIGHTS NEWSLETTER
              </p>

              <h3
                className="
                  mt-3

                  font-serif
                  text-[31px]
                  font-normal
                  leading-[1.04]

                  lg:text-[35px]
                "
              >
                Stay current without the noise.
              </h3>

              <p
                className="
                  mt-3
                  max-w-[620px]

                  text-[15px]
                  leading-6

                  text-[#64736D]

                  lg:text-[17px]
                  lg:leading-7
                "
              >
                Subscribe for regular Orpheus
                commentary and important firm updates.
                The signup is now an active interaction
                rather than a decorative field.
              </p>
            </div>

            <form
              onSubmit={subscribe}
              className="
                flex
                flex-col
                gap-3

                sm:flex-row
              "
            >
              <label
                htmlFor="market-insights-email"
                className="sr-only"
              >
                Email address
              </label>

              <input
                id="market-insights-email"
                type="email"
                required
                value={newsletterEmail}
                onChange={(event) =>
                  setNewsletterEmail(
                    event.target.value,
                  )
                }
                placeholder="you@company.com"
                className={`${field} flex-1`}
              />

              <button
                type="submit"
                className="
                  group

                  inline-flex
                  min-h-12

                  items-center
                  justify-center
                  gap-2

                  rounded-xl

                  bg-[#0B5345]

                  px-5

                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.1em]

                  text-white

                  transition-all

                  hover:-translate-y-0.5
                  hover:bg-[#106856]
                  hover:shadow-[0_10px_22px_rgba(11,83,69,.16)]

                  lg:px-6
                  lg:text-[12px]
                "
              >
                Subscribe

                <ArrowRight
                  size={12}
                  className="
                    transition-transform

                    group-hover:translate-x-1
                  "
                />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          10. ADVISORY CTA
          MOBILE GAP ALREADY REDUCED IN AdvisoryCTA.tsx
      ====================================================== */}

      <AdvisoryCTA
        compact
        title="Not sure what structure you need?"
        text="Tell us the commercial, banking, capital or family objective. Orpheus will help define the right solution, jurisdiction and execution path before you commit to a structure."
      />

      {/* =====================================================
          11. CONTACT
      ====================================================== */}

     

      {/* =====================================================
          12. CLOSING STRIP
      ====================================================== */}

      <section
        className="
          bg-[#071813]

          py-10

          text-white
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
              items-center
              gap-3

              text-[14px]

              text-white/60

              lg:text-[16px]
              lg:text-white/70
            "
          >
            <ShieldCheck
              size={16}
              className="text-[#D8B867]"
            />

            Dubai-based lead architecture with
            international execution capability.
          </div>

          <Link
            to="/about"
            className="
              micro-link
              !text-[#E5CB87]
            "
          >
            How Orpheus works

            <ArrowRight size={12} />
          </Link>
        </div>
      </section>
    </main>
  );
}