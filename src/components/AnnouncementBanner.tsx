import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Megaphone,
} from "lucide-react";

import { Link } from "react-router-dom";

import type { Announcement } from "@/data/announcements";

interface AnnouncementBannerProps {
  announcement: Announcement;
  variant?: "compact" | "featured";
  announcementOptions?: Announcement[];
  onAnnouncementChange?: (announcementId: string) => void;
}

export function AnnouncementBanner({
  announcement,
  variant = "compact",
  announcementOptions,
  onAnnouncementChange,
}: AnnouncementBannerProps) {
  const reduceMotion = useReducedMotion();

  const options =
    announcementOptions && announcementOptions.length > 0
      ? announcementOptions
      : [announcement];

  /* =====================================================
     COMPACT HOMEPAGE ANNOUNCEMENT

     MOBILE:
     Original layout unchanged.

     DESKTOP:
     - larger typography
     - better spacing
     - larger icon
     - more readable CTA
     - compact overall banner height
  ===================================================== */

  if (variant === "compact") {
    return (
      <motion.article
        initial={
          reduceMotion
            ? false
            : {
                opacity: 0,
                x: -30,
              }
        }
        whileInView={
          reduceMotion
            ? undefined
            : {
                opacity: 1,
                x: 0,
              }
        }
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group
          relative
          w-full
          min-w-0
          overflow-hidden

          rounded-[20px]

          border
          border-[#D8B867]/35

          bg-[#07251E]

          text-white

          shadow-[0_18px_55px_rgba(7,40,33,.16)]

          sm:rounded-[22px]
        "
      >
        {/* LEFT ACCENT */}

        <div
          aria-hidden="true"
          className="
            absolute
            inset-y-0
            left-0

            w-1.5

            bg-[linear-gradient(180deg,#F1D98F,#B98B31,#6CB8A3)]
          "
        />

        {/* GLOW */}

        <motion.div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-16
            -top-24

            h-64
            w-64

            rounded-full

            bg-[#D8B867]/15

            blur-[70px]
          "
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: [1, 1.12, 1],
                  opacity: [0.45, 0.75, 0.45],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CONTENT */}

        <div
          className="
            relative

            flex
            min-w-0
            flex-col

            gap-4

            px-5
            py-5

            sm:px-7

            md:flex-row
            md:items-center
            md:gap-6
            md:py-6

            lg:gap-8
            lg:px-8
            lg:py-5

            xl:px-9
            xl:py-6
          "
        >
          {/* LEFT CONTENT */}

          <div
            className="
              flex
              min-w-0
              flex-1

              items-start
              gap-4

              lg:items-center
              lg:gap-5
            "
          >
            {/* ICON */}

            <span
              className="
                relative
                mt-0.5

                flex
                h-11
                w-11
                shrink-0

                items-center
                justify-center

                rounded-full

                bg-[#D8B867]

                text-[#071813]

                shadow-[0_10px_28px_rgba(216,184,103,.22)]

                lg:mt-0
                lg:h-12
                lg:w-12

                xl:h-[52px]
                xl:w-[52px]
              "
            >
              <Megaphone
                size={18}
                className="
                  lg:size-[20px]
                  xl:size-[21px]
                "
              />

              <motion.span
                aria-hidden="true"
                className="
                  absolute
                  -right-0.5
                  -top-0.5

                  h-3
                  w-3

                  rounded-full

                  border-2
                  border-[#07251E]

                  bg-[#72D6B8]

                  lg:h-3.5
                  lg:w-3.5
                "
                animate={
                  reduceMotion
                    ? undefined
                    : {
                        scale: [1, 1.35, 1],
                        opacity: [1, 0.65, 1],
                      }
                }
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />
            </span>

            {/* TEXT */}

            <div className="min-w-0">
              {/* EYEBROW + DATE */}

              <div
                className="
                  flex
                  flex-wrap
                  items-center

                  gap-x-3
                  gap-y-1.5

                  lg:gap-x-4
                "
              >
                <p
                  className="
                    text-[8px]
                    font-extrabold
                    uppercase
                    tracking-[.2em]

                    text-[#E7CC83]

                    lg:text-[10px]

                    xl:text-[10.5px]
                  "
                >
                  {announcement.eyebrow}
                </p>

                <span
                  className="
                    h-1
                    w-1

                    rounded-full

                    bg-white/25
                  "
                />

                <span
                  className="
                    text-[9px]
                    font-semibold

                    text-white/42

                    lg:text-[11px]
                    lg:text-white/55

                    xl:text-[11.5px]
                  "
                >
                  {announcement.date}
                </span>
              </div>

              {/* TITLE */}

              <h2
                className="
                  mt-1.5

                  font-serif
                  text-[clamp(21px,2.5vw,29px)]
                  font-normal
                  leading-[1.08]
                  tracking-[-.02em]

                  text-white

                  lg:mt-2
                  lg:text-[30px]
                  lg:leading-[1.08]

                  xl:text-[32px]
                "
              >
                {announcement.title}
              </h2>

              {/* SUMMARY */}

              <p
                className="
                  mt-2
                  max-w-[760px]

                  text-[12px]
                  leading-5

                  text-white/58

                  md:text-[13px]

                  lg:mt-2.5
                  lg:max-w-[900px]
                  lg:text-[15px]
                  lg:leading-6
                  lg:text-white/68

                  xl:text-[15.5px]
                  xl:leading-7
                "
              >
                {announcement.homeSummary}
              </p>
            </div>
          </div>

          {/* CTA */}

          <Link
            to={`/blog#announcement-${announcement.id}`}
            className="
              inline-flex
              min-h-11
              w-full
              shrink-0

              items-center
              justify-center
              gap-2

              self-start

              rounded-xl

              border
              border-[#D8B867]/30

              bg-[#D8B867]/10

              px-4

              text-[9px]
              font-extrabold
              uppercase
              tracking-[.12em]

              text-[#F0D88F]

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:border-[#D8B867]/60
              hover:bg-[#D8B867]
              hover:text-[#071813]

              sm:w-auto

              md:self-center

              lg:min-h-12
              lg:px-5
              lg:text-[10px]

              xl:px-6
              xl:text-[10.5px]
            "
          >
            View details

            <ArrowRight
              size={12}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1

                lg:size-[13px]
              "
            />
          </Link>
        </div>
      </motion.article>
    );
  }

  /* =====================================================
     FEATURED / BLOG ANNOUNCEMENT
  ===================================================== */

  return (
    <motion.article
      id={`announcement-${announcement.id}`}
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 34,
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
        amount: 0.15,
      }}
      transition={{
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        min-w-0

        scroll-mt-28

        overflow-hidden

        rounded-[22px]

        border
        border-[#D8DED8]

        bg-[#F8F6F0]

        shadow-[0_28px_80px_rgba(7,40,33,.1)]

        sm:rounded-[30px]
      "
    >
      <div
        className="
          grid

          lg:grid-cols-[320px_minmax(0,1fr)]
        "
      >
        {/* =================================================
            HIGHLIGHTED ANNOUNCEMENT RAIL
        ================================================= */}

        <motion.aside
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  x: -24,
                }
          }
          whileInView={
            reduceMotion
              ? undefined
              : {
                  opacity: 1,
                  x: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.12,
          }}
          className="
            relative
            min-w-0
            overflow-hidden

            bg-[#06251E]

            p-5

            text-white

            sm:p-8

            lg:min-h-full
            lg:p-9
          "
        >
          {/* GRID */}

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0

              opacity-[0.08]
            "
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)",
              backgroundSize: "52px 52px",
            }}
          />

          {/* GLOW */}

          <motion.div
            aria-hidden="true"
            className="
              absolute
              -bottom-20
              -right-20

              h-56
              w-56

              rounded-full

              bg-[#D8B867]/20

              blur-[70px]
            "
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.15, 1],
                    opacity: [0.45, 0.8, 0.45],
                  }
            }
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div
            className="
              relative
              z-10

              flex
              h-full
              flex-col
            "
          >
            {/* ICON */}

            <motion.span
              className="
                flex
                h-14
                w-14

                items-center
                justify-center

                rounded-full

                bg-[linear-gradient(145deg,#F2D98F,#C49940)]

                text-[#071813]

                shadow-[0_14px_38px_rgba(216,184,103,.28)]
              "
              animate={
                reduceMotion
                  ? undefined
                  : {
                      y: [0, -4, 0],
                    }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Megaphone size={22} />
            </motion.span>

            {/* ANNOUNCEMENT LIST */}

            <div className="mt-8">
              <p
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[.22em]

                  text-[#E8CE87]
                "
              >
                Browse announcements
              </p>

              <p
                className="
                  mt-2

                  text-[11px]
                  leading-5

                  text-white/45
                "
              >
                Select a date to view the complete update.
              </p>

              <div
                className="
                  -mx-1
                  mt-5

                  flex
                  snap-x
                  snap-mandatory
                  gap-2

                  overflow-x-auto

                  px-1
                  pb-3

                  [scrollbar-width:none]

                  [&::-webkit-scrollbar]:hidden

                  lg:mx-0
                  lg:flex-col
                  lg:overflow-visible
                  lg:px-0
                  lg:pb-0
                "
              >
                {options.map((option) => {
                  const selected =
                    option.id === announcement.id;

                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      onClick={() =>
                        onAnnouncementChange?.(option.id)
                      }
                      whileTap={
                        reduceMotion
                          ? undefined
                          : {
                              scale: 0.98,
                            }
                      }
                      className={`
                        min-w-[210px]
                        max-w-[calc(100vw-82px)]

                        snap-start

                        rounded-xl

                        border

                        px-4
                        py-3

                        text-left

                        transition-all
                        duration-300

                        lg:min-w-0
                        lg:max-w-none

                        ${
                          selected
                            ? "border-[#D8B867]/55 bg-[#D8B867] text-[#071813] shadow-[0_12px_30px_rgba(216,184,103,.18)]"
                            : "border-white/10 bg-white/[.045] text-white hover:border-white/20 hover:bg-white/[.075]"
                        }
                      `}
                    >
                      <span
                        className={`
                          flex
                          items-center
                          gap-2

                          text-[9px]
                          font-extrabold
                          uppercase
                          tracking-[.12em]

                          ${
                            selected
                              ? "text-[#0B5345]"
                              : "text-[#8DC6B5]"
                          }
                        `}
                      >
                        <CalendarDays size={12} />

                        {option.date}
                      </span>

                      <span
                        className={`
                          mt-2

                          block

                          line-clamp-2

                          font-serif
                          text-[15px]
                          leading-[1.2]

                          ${
                            selected
                              ? "text-[#071813]"
                              : "text-white/72"
                          }
                        `}
                      >
                        {option.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* PUBLISHER */}

            <div
              className="
                mt-8

                border-t
                border-white/10

                pt-6

                lg:mt-auto
              "
            >
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[.18em]

                  text-white/35
                "
              >
                Published by
              </p>

              <p
                className="
                  mt-2

                  font-serif
                  text-[20px]

                  text-white
                "
              >
                Orpheus Advisory Desk
              </p>
            </div>
          </div>
        </motion.aside>

        {/* =================================================
            ANNOUNCEMENT CONTENT PANEL
        ================================================= */}

        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <motion.div
            key={announcement.id}
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
            exit={
              reduceMotion
                ? undefined
                : {
                    opacity: 0,
                    x: -14,
                  }
            }
            transition={{
              duration: reduceMotion ? 0 : 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-w-0

              p-5

              sm:p-9

              lg:p-11

              xl:p-14
            "
          >
            {/* GOLD TOP LINE */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-0

                h-1
                w-2/3

                bg-[linear-gradient(90deg,transparent,#D8B867)]
              "
            />

            {/* HEADER */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
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
              }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
            >
              <p className="section-kicker">
                {announcement.eyebrow}
              </p>

              <h2
                className="
                  mt-4
                  max-w-[850px]

                  break-words

                  font-serif
                  text-[clamp(30px,4.6vw,58px)]
                  font-normal
                  leading-[1]
                  tracking-[-.035em]

                  text-[#0A1714]

                  sm:tracking-[-.04em]
                "
              >
                {announcement.title}
              </h2>

              <p
                className="
                  mt-6
                  max-w-[850px]

                  border-l-2
                  border-[#D8B867]

                  pl-4

                  text-[14px]
                  leading-7

                  text-[#465A53]

                  sm:pl-5

                  md:text-[17px]
                  md:leading-8
                "
              >
                {announcement.summary}
              </p>
            </motion.div>

            {/* DETAILS */}

            <div className="mt-8 space-y-4">
              {announcement.details.map(
                (paragraph, index) => (
                  <motion.p
                    key={paragraph}
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 14,
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
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.27 + index * 0.08,
                    }}
                    className="
                      max-w-[870px]

                      text-[14px]
                      leading-7

                      text-[#64736E]
                    "
                  >
                    {paragraph}
                  </motion.p>
                ),
              )}
            </div>

            {/* HIGHLIGHTS */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 18,
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
              }}
              transition={{
                duration: 0.6,
                delay: 0.36,
              }}
              className="
                mt-9

                rounded-[22px]

                border
                border-[#D9E0DB]

                bg-white

                p-5

                sm:p-6
              "
            >
              <p
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]

                  text-[#A7802D]
                "
              >
                What you can expect
              </p>

              <div
                className="
                  mt-4

                  grid
                  gap-3

                  md:grid-cols-3
                "
              >
                {announcement.highlights.map(
                  (highlight) => (
                    <div
                      key={highlight}
                      className="
                        flex
                        items-center
                        gap-3

                        rounded-xl

                        bg-[#EDF4F1]

                        px-4
                        py-3

                        text-[12px]
                        font-semibold

                        text-[#29443B]
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

                          bg-[#0B5345]

                          text-white
                        "
                      >
                        <Check size={12} />
                      </span>

                      {highlight}
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            {/* CTA */}

            <Link
              to={announcement.href ?? "/contact"}
              className="
                mt-8

                inline-flex
                min-h-12
                w-full

                items-center
                justify-center
                gap-2

                rounded-xl

                bg-[#0B5345]

                px-5

                text-center
                text-[9px]
                font-extrabold
                uppercase
                tracking-[.13em]

                text-white

                shadow-[0_12px_30px_rgba(11,83,69,.18)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-[#0E6757]
                hover:shadow-[0_18px_38px_rgba(11,83,69,.25)]

                sm:w-auto
              "
            >
              {announcement.linkLabel ?? "Learn more"}

              <ArrowRight size={13} />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.article>
  );
}