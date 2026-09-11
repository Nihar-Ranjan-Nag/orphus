import {
  ArrowRight,
  Building2,
  Check,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion, useReducedMotion } from "framer-motion";

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
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

const advisoryAreas = [
  "Corporate Structuring",
  "Banking Advisory",
  "Capital Advisory",
  "Private Wealth",
  "Compliance",
  "Not Sure Yet",
];

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "info@orpheusfinancial.com",
    text: "Share your requirement and our advisory team will respond.",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+971 000 000 000",
    text: "Speak with our team for urgent or time-sensitive enquiries.",
  },
  {
    icon: MapPin,
    title: "Office",
    value: "Dubai, United Arab Emirates",
    text: "Regional base with an international advisory outlook.",
  },
];

export default function ContactPage() {
  const reduceMotion = useReducedMotion();

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
            py-12

            sm:py-14

            lg:min-h-[430px]
            lg:grid-cols-[.92fr_1.08fr]
            lg:gap-12
            lg:py-16

            xl:gap-16
          "
        >
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
            <p className="section-kicker">CONTACT ORPHEUS</p>

            <h1
              className="
                mt-4
                max-w-[760px]
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
              Let’s start with{" "}
              <span className="italic text-[#0B5345]">
                what you want to achieve.
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-[640px]
                text-[16px]
                leading-7
                text-[#53655F]

                sm:text-[17px]

                lg:mt-6
                lg:text-[18px]
                lg:leading-8
              "
            >
              Share your objective, requirement or business challenge. Our
              advisory team will help identify the right structure, pathway and
              next step.
            </p>
          </motion.div>

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
              relative
              overflow-hidden
              rounded-[24px]
              border
              border-[#DDE3DE]
              bg-white/70
              p-6
              shadow-[0_20px_55px_rgba(7,40,33,.09)]

              sm:p-8

              lg:rounded-[28px]
              lg:p-9
            "
          >
            <div
              aria-hidden="true"
              className="
                absolute
                -right-16
                -top-16
                h-48
                w-48
                rounded-full
                bg-[#0B5345]/10
                blur-[70px]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                -bottom-16
                -left-16
                h-44
                w-44
                rounded-full
                bg-[#D8B867]/14
                blur-[70px]
              "
            />

            <div className="relative">
              <span
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E5F0EC]
                  text-[#0B5345]
                "
              >
                <MessageCircle size={20} />
              </span>

              <h2
                className="
                  mt-6
                  max-w-[460px]
                  font-serif
                  text-[32px]
                  font-normal
                  leading-[1.05]
                  tracking-[-.03em]

                  sm:text-[38px]
                  lg:text-[44px]
                "
              >
                A confidential conversation is the first step.
              </h2>

              <p
                className="
                  mt-4
                  max-w-[520px]
                  text-[15px]
                  leading-7
                  text-[#5D6F68]

                  sm:text-[16px]
                "
              >
                Whether you already know the service required or need help
                defining the right approach, send us a short note and we will
                guide the next conversation.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Objective-led review",
                  "Confidential handling",
                  "Cross-border perspective",
                  "Clear next steps",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-[#F7F4EC]
                      px-4
                      py-3
                      text-[14px]
                      font-semibold
                      text-[#40514B]
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
                      "
                    >
                      <Check size={12} />
                    </span>

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          2. TELL US HOW WE CAN HELP
          This section is now physically before Global Reach
      ====================================================== */}

      <section
        id="tell-us-how-we-can-help"
        className="
          relative
          bg-white
          py-14

          md:py-18
          lg:py-20
        "
      >
        <div className="section-shell">
          <div
            className="
              grid
              gap-9

              lg:grid-cols-[.75fr_1.25fr]
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
                duration: 0.65,
              }}
            >
              <p className="section-kicker">TELL US HOW WE CAN HELP</p>

              <h2
                className="
                  mt-4
                  max-w-[560px]
                  font-serif
                  text-[35px]
                  font-normal
                  leading-[1.02]
                  tracking-[-.035em]

                  sm:text-[42px]
                  lg:text-[52px]
                "
              >
                Start a conversation with our advisory team.
              </h2>

              <p
                className="
                  mt-5
                  max-w-[540px]
                  text-[16px]
                  leading-7
                  text-[#52645E]

                  sm:text-[17px]

                  lg:text-[18px]
                  lg:leading-8
                "
              >
                Tell us about your requirement, target jurisdiction, banking
                need, corporate structure, capital objective or private wealth
                matter. We will review it and respond with the appropriate next
                step.
              </p>

              <div
                className="
                  mt-7
                  rounded-[22px]
                  border
                  border-[#DDE3DE]
                  bg-[#F7F4EC]
                  p-5

                  sm:p-6
                "
              >
                <div className="flex items-start gap-3">
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E5F0EC]
                      text-[#0B5345]
                    "
                  >
                    <ShieldCheck size={17} />
                  </span>

                  <div>
                    <p
                      className="
                        font-serif
                        text-[23px]
                        leading-tight
                        text-[#172821]
                      "
                    >
                      Confidential by design.
                    </p>

                    <p
                      className="
                        mt-2
                        text-[15px]
                        leading-6
                        text-[#667570]
                      "
                    >
                      Please avoid sharing highly sensitive documents in the
                      first message. Our team will confirm the right channel for
                      confidential material.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.form
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 24,
                      scale: 0.985,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.12,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                rounded-[26px]
                border
                border-[#DDE3DE]
                bg-[#FAFBF8]
                p-5
                shadow-[0_18px_45px_rgba(7,40,33,.07)]

                sm:p-7

                lg:rounded-[30px]
                lg:p-8
              "
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.14em]
                      text-[#53655F]
                    "
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DDE3DE]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#172821]
                      outline-none
                      transition-colors
                      placeholder:text-[#8A9691]
                      focus:border-[#0B5345]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.14em]
                      text-[#53655F]
                    "
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DDE3DE]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#172821]
                      outline-none
                      transition-colors
                      placeholder:text-[#8A9691]
                      focus:border-[#0B5345]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.14em]
                      text-[#53655F]
                    "
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+971 / +91"
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DDE3DE]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#172821]
                      outline-none
                      transition-colors
                      placeholder:text-[#8A9691]
                      focus:border-[#0B5345]
                    "
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[.14em]
                      text-[#53655F]
                    "
                  >
                    Service Required
                  </label>

                  <select
                    id="service"
                    defaultValue=""
                    className="
                      mt-2
                      h-12
                      w-full
                      rounded-xl
                      border
                      border-[#DDE3DE]
                      bg-white
                      px-4
                      text-[15px]
                      text-[#172821]
                      outline-none
                      transition-colors
                      focus:border-[#0B5345]
                    "
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {advisoryAreas.map((area) => (
                      <option key={area} value={area}>
                        {area}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[.14em]
                    text-[#53655F]
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us how we can help..."
                  className="
                    mt-2
                    w-full
                    resize-none
                    rounded-xl
                    border
                    border-[#DDE3DE]
                    bg-white
                    px-4
                    py-3
                    text-[15px]
                    leading-6
                    text-[#172821]
                    outline-none
                    transition-colors
                    placeholder:text-[#8A9691]
                    focus:border-[#0B5345]
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  group
                  mt-5
                  inline-flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#0B5345]
                  px-6
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[.1em]
                  text-white
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#106856]
                  hover:shadow-[0_12px_28px_rgba(11,83,69,.18)]

                  sm:w-fit
                "
              >
                Submit Enquiry

                <ArrowRight
                  size={13}
                  className="
                    transition-transform
                    group-hover:translate-x-1
                  "
                />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. GLOBAL REACH
          Now below Tell Us section
      ====================================================== */}

      <section
        id="global-reach"
        className="
          bg-[#F7F4EC]
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
                    y: 24,
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
              grid
              overflow-hidden
              rounded-[26px]
              border
              border-[#DDE3DE]
              bg-[#FBFCF9]
              shadow-[0_16px_45px_rgba(7,40,33,.06)]

              lg:grid-cols-[.9fr_1.1fr]
              lg:rounded-[30px]
            "
          >
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
              <p className="section-kicker">GLOBAL REACH</p>

              <h2
                className="
                  mt-4
                  max-w-[520px]
                  font-serif
                  text-[35px]
                  font-normal
                  leading-[1.03]
                  tracking-[-.035em]

                  sm:text-[42px]
                  lg:text-[49px]
                "
              >
                A Dubai base with an international advisory outlook.
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
                Dubai places Orpheus at the intersection of GCC commerce,
                international banking, global capital and private wealth.
              </p>

              <div className="mt-6 grid gap-3">
                {[
                  {
                    icon: Globe2,
                    text: "International advisory perspective",
                  },
                  {
                    icon: Building2,
                    text: "Corporate and institutional coordination",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Confidential client communication",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="
                      flex
                      min-h-[50px]
                      items-center
                      gap-3
                      rounded-xl
                      bg-white
                      px-4
                      py-2.5
                      text-[15px]
                      font-semibold
                      text-[#40514B]
                      shadow-[0_5px_18px_rgba(7,40,33,.04)]
                    "
                  >
                    <span
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#E5F0EC]
                        text-[#0B5345]
                      "
                    >
                      <Icon size={13} />
                    </span>

                    {text}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="
                relative
                min-h-[360px]
                overflow-hidden
                bg-[#071813]

                lg:min-h-[520px]
              "
            >
              <div className="absolute inset-0 grid-texture-dark opacity-25" />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-72
                  w-72
                  rounded-full
                  bg-[#0B5345]/35
                  blur-[100px]
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  -bottom-20
                  -left-20
                  h-72
                  w-72
                  rounded-full
                  bg-[#D8B867]/20
                  blur-[100px]
                "
              />

              <div
                className="
                  relative
                  flex
                  h-full
                  min-h-[360px]
                  flex-col
                  justify-end
                  p-6
                  text-white

                  sm:p-8

                  lg:min-h-[520px]
                  lg:p-10
                "
              >
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D8B867]/25
                    bg-[#D8B867]/10
                    text-[#E2C47D]
                  "
                >
                  <MapPin size={20} />
                </span>

                <h3
                  className="
                    mt-5
                    max-w-[520px]
                    font-serif
                    text-[34px]
                    font-normal
                    leading-[1.04]

                    sm:text-[42px]
                  "
                >
                  Orpheus Financial
                </h3>

                <p
                  className="
                    mt-3
                    max-w-[520px]
                    text-[16px]
                    leading-7
                    text-white/70

                    sm:text-[17px]
                  "
                >
                  Dubai, United Arab Emirates
                </p>

                <div
                  className="
                    mt-6
                    rounded-[20px]
                    border
                    border-white/10
                    bg-white/[.06]
                    p-5
                    backdrop-blur-sm
                  "
                >
                  <p
                    className="
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[.15em]
                      text-[#E2C47D]
                    "
                  >
                    Regional presence
                  </p>

                  <p
                    className="
                      mt-2
                      text-[15px]
                      leading-6
                      text-white/68
                    "
                  >
                    Built for international business, capital, banking and
                    advisory coordination.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          4. CONTACT METHODS
      ====================================================== */}

      <section
        className="
          bg-[#F7F4EC]
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
              amount: 0.2,
            }}
            className="
              mx-auto
              max-w-[760px]
              text-center
            "
          >
            <p className="section-kicker">CONTACT DETAILS</p>

            <h2
              className="
                mt-4
                font-serif
                text-[35px]
                font-normal
                leading-[1.03]
                tracking-[-.035em]

                sm:text-[42px]
                lg:text-[52px]
              "
            >
              Reach the right advisory desk.
            </h2>

            <p
              className="
                mt-4
                text-[16px]
                leading-7
                text-[#52645E]

                sm:text-[17px]
              "
            >
              Use the channel that best matches the nature and urgency of your
              enquiry.
            </p>
          </motion.div>

          <motion.div
            variants={revealContainer}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={{
              once: true,
              amount: 0.12,
            }}
            className="
              mt-9
              grid
              gap-4

              md:grid-cols-3
            "
          >
            {contactMethods.map(({ icon: Icon, title, value, text }) => (
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
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-[#DCE2DC]
                  bg-white
                  p-6
                  shadow-[0_12px_32px_rgba(7,40,33,.05)]
                  transition-all
                  duration-300

                  hover:border-[#0B5345]/25
                  hover:shadow-[0_18px_42px_rgba(7,40,33,.08)]
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

                <span
                  className="
                    flex
                    h-11
                    w-11
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
                  <Icon size={18} />
                </span>

                <h3
                  className="
                    mt-5
                    font-serif
                    text-[25px]
                    font-normal
                    leading-tight
                    text-[#172821]
                    transition-colors

                    group-hover/card:text-[#0B5345]
                  "
                >
                  {title}
                </h3>

                <p
                  className="
                    mt-2
                    text-[15px]
                    font-semibold
                    leading-6
                    text-[#0B5345]
                  "
                >
                  {value}
                </p>

                <p
                  className="
                    mt-3
                    text-[15px]
                    leading-6
                    text-[#5D6F68]
                  "
                >
                  {text}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          5. FINAL CTA
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
          <div className="flex items-start gap-3">
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

          <a
            href="#tell-us-how-we-can-help"
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

            <span className="relative z-10">Tell Us How We Can Help</span>

            <ArrowRight
              size={12}
              className="
                relative
                z-10
                transition-transform

                md:group-hover/btn:translate-x-1
              "
            />
          </a>
        </div>
      </section>
    </main>
  );
}