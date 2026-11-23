
import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Megaphone,
  Newspaper,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

import { announcements } from "@/data/announcements";

/**
 * ORPHEUS FINANCIAL
 * Animated Announcements Section
 *
 * Theme:
 * - Deep green
 * - Muted gold
 * - Warm cream
 *
 * Features:
 * - Compact initial state
 * - Smooth dropdown animation
 * - Interactive chronological timeline
 * - One announcement open at a time
 * - Full original content preserved
 * - Reduced-motion support
 */

export default function AnnouncementsSection() {
  const [showAnnouncements, setShowAnnouncements] =
    useState(false);

  const [openId, setOpenId] =
    useState<string | null>(null);

  const activeAnnouncements = announcements.filter(
    (item) => item.active
  );

  if (activeAnnouncements.length === 0) {
    return null;
  }

  const toggleAnnouncements = () => {
    setShowAnnouncements((previous) => !previous);
    setOpenId(null);
  };

  return (
    <section
      id="announcements"
      aria-labelledby="announcements-heading"
      className="
        scroll-mt-24
        bg-[#FBFAF6]
        py-8 sm:py-10
      "
    >
      <div
        className="
          mx-auto
          w-full max-w-[1120px]
          px-5 sm:px-8 lg:px-0
        "
      >
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <header className="mb-6">
          <div className="flex items-center gap-2">
            <span
              className="
                h-[2px] w-7
                rounded-full
                bg-[#C7A253]
              "
            />

            <span
              className="
                text-[11px]
                font-bold uppercase
                tracking-[0.18em]
                text-[#B08A42]
              "
            >
              ORPHEUS NEWSROOM
            </span>
          </div>

          <div
            className="
              mt-3 flex
              items-start justify-between
              gap-4
            "
          >
            <div>
              <h2
                id="announcements-heading"
                className="
                  font-serif
                  text-[30px]
                  leading-tight
                  text-[#123C30]
                  sm:text-[38px]
                "
              >
                News & Announcements
              </h2>

              <p
                className="
                  mt-2
                  max-w-[760px]
                  text-[15px]
                  leading-7
                  text-[#68796D]
                "
              >
                Important developments, business
                insights and updates from
                Orpheus Financial.
              </p>
            </div>

            <span
              className="
                hidden h-12 w-12
                shrink-0
                items-center justify-center
                rounded-xl
                border border-[#DCE8DE]
                bg-[#EAF2EA]
                text-[#0B6450]
                sm:flex
              "
            >
              <Newspaper size={23} />
            </span>
          </div>
        </header>

        {/* =====================================
            ANIMATED ANNOUNCEMENTS TRIGGER
        ===================================== */}

        <button
          type="button"
          onClick={toggleAnnouncements}
          aria-expanded={showAnnouncements}
          aria-controls="announcements-timeline"
          className="
            group relative
            flex w-full
            items-center
            justify-between
            gap-4
            overflow-hidden
            rounded-xl
            border border-[#DCE7DD]
            bg-white
            px-5 py-4
            text-left
            shadow-[0_3px_12px_rgba(8,45,37,0.025)]
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:border-[#A7C8B1]
            hover:bg-[#FCFDFC]
            hover:shadow-[0_10px_28px_rgba(8,45,37,0.07)]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-2
            focus-visible:outline-[#0B6450]
            motion-reduce:transform-none
            motion-reduce:transition-none
            sm:px-6
          "
        >
          {/* LEFT GOLD ACCENT */}

          <span
            aria-hidden="true"
            className="
              absolute bottom-0 left-0 top-0
              w-[3px]
              bg-[#C7A253]
              transition-all duration-300
              group-hover:w-[5px]
            "
          />

          <span
            className="
              flex min-w-0
              items-center gap-4
            "
          >
            {/* MAIN ICON */}

            <span
              className="
                relative flex
                h-12 w-12 shrink-0
                items-center justify-center
                rounded-xl
                bg-[#EAF2EA]
                text-[#0B6450]
                transition-colors duration-300
                group-hover:bg-[#DCECE0]
              "
            >
              <Megaphone
                size={23}
                strokeWidth={1.8}
                className="
                  transition-transform
                  duration-300
                  group-hover:-rotate-12
                  motion-reduce:transform-none
                "
              />

              <span
                aria-hidden="true"
                className="
                  absolute -right-1 -top-1
                  h-2.5 w-2.5
                  rounded-full
                  border-2 border-white
                  bg-[#D7B66A]
                "
              />
            </span>

            {/* TITLE AND DESCRIPTION */}

            <span className="min-w-0">
              <span
                className="
                  flex flex-wrap
                  items-center gap-2
                "
              >
                <span
                  className="
                    text-[17px]
                    font-bold
                    text-[#123C30]
                    sm:text-[19px]
                  "
                >
                  {showAnnouncements
                    ? "Hide Announcements"
                    : "Latest Announcements"}
                </span>

                {/* COUNT BADGE */}

                <span
                  className="
                    rounded-full
                    border border-[#D6E8D9]
                    bg-[#EBF4EC]
                    px-2.5 py-1
                    text-[11px]
                    font-bold uppercase
                    tracking-wide
                    text-[#0B6450]
                  "
                >
                  {activeAnnouncements.length} Updates
                </span>
              </span>

              <span
                className="
                  mt-1 block
                  text-[13px]
                  leading-5
                  text-[#718174]
                  sm:text-[14px]
                "
              >
                {showAnnouncements
                  ? "Click to close the latest updates"
                  : "Explore our latest news and important updates"}
              </span>
            </span>
          </span>

          {/* ANIMATED ARROW */}

          <span
            className="
              flex h-11 w-11
              shrink-0
              items-center justify-center
              rounded-full
              bg-[#0B5345]
              text-white
              shadow-[0_4px_12px_rgba(11,83,69,0.12)]
              transition-all duration-300
              group-hover:bg-[#14715B]
              group-hover:shadow-[0_6px_18px_rgba(11,83,69,0.22)]
              motion-reduce:transition-none
            "
          >
            <ChevronDown
              size={22}
              className={`
                transition-transform duration-500
                motion-reduce:transition-none
                ${
                  showAnnouncements
                    ? "rotate-180"
                    : ""
                }
              `}
            />
          </span>
        </button>

        {/* =====================================
            ANIMATED TIMELINE CONTAINER
        ===================================== */}

        <div
          id="announcements-timeline"
          aria-hidden={!showAnnouncements}
          inert={!showAnnouncements}
          className={`
            grid
            transition-[grid-template-rows,opacity,visibility]
            duration-500 ease-in-out
            motion-reduce:transition-none
            ${
              showAnnouncements
                ? "visible grid-rows-[1fr] opacity-100"
                : "invisible grid-rows-[0fr] opacity-0"
            }
          `}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="pt-7">

              {/* TIMELINE INTRO */}

              <div
                className="
                  mb-6 flex
                  items-center justify-between
                  gap-3
                "
              >
                <div className="flex items-center gap-2">
                  <Sparkles
                    size={17}
                    className="text-[#C7A253]"
                  />

                  <h3
                    className="
                      text-[17px]
                      font-semibold
                      text-[#173C31]
                    "
                  >
                    Recent Updates
                  </h3>
                </div>

                <span
                  className="
                    text-[13px]
                    text-[#879589]
                  "
                >
                  {activeAnnouncements.length} announcements
                </span>
              </div>

              {/* =================================
                  TIMELINE ITEMS
              ================================= */}

              {activeAnnouncements.map((item, index) => {
                const isOpen = openId === item.id;

                const parsedDate = new Date(item.date);

                const validDate = !Number.isNaN(
                  parsedDate.getTime()
                );

                const day = validDate
                  ? parsedDate.toLocaleDateString(
                      "en-GB",
                      { day: "2-digit" }
                    )
                  : "—";

                const month = validDate
                  ? parsedDate.toLocaleDateString(
                      "en-GB",
                      { month: "short" }
                    )
                  : "";

                const year = validDate
                  ? parsedDate.getFullYear()
                  : "";

                return (
                  <article
                    key={item.id}
                    className="
                      grid
                      grid-cols-[60px_1fr]
                      gap-4
                      sm:grid-cols-[90px_1fr]
                      sm:gap-7
                    "
                  >
                    {/* DATE COLUMN */}

                    <div
                      className="
                        flex flex-col
                        items-center
                      "
                    >
                      <span
                        className="
                          font-serif
                          text-[34px]
                          leading-none
                          text-[#0B5345]
                          sm:text-[40px]
                        "
                      >
                        {day}
                      </span>

                      <span
                        className="
                          mt-1 text-[13px]
                          font-bold uppercase
                          tracking-wide
                          text-[#B08A42]
                        "
                      >
                        {month}
                      </span>

                      <span
                        className="
                          mt-1 text-[12px]
                          text-[#829185]
                        "
                      >
                        {year}
                      </span>

                      {index <
                        activeAnnouncements.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="
                            mt-4 min-h-[35px]
                            w-px flex-1
                            bg-[#D9E4DA]
                          "
                        />
                      )}
                    </div>

                    {/* ANNOUNCEMENT CONTENT */}

                    <div
                      className={`
                        min-w-0
                        ${
                          index <
                          activeAnnouncements.length - 1
                            ? `
                              mb-6 border-b
                              border-[#E0E8DF]
                              pb-6
                            `
                            : "pb-2"
                        }
                      `}
                    >
                      {/* CATEGORY */}

                      <p
                        className="
                          text-[12px]
                          font-bold uppercase
                          tracking-[0.12em]
                          text-[#B08A42]
                        "
                      >
                        {item.eyebrow}
                      </p>

                      {/* TITLE */}

                      <h4
                        className="
                          mt-2
                          font-serif
                          text-[20px]
                          leading-[1.35]
                          text-[#173C31]
                          sm:text-[23px]
                        "
                      >
                        {item.title}
                      </h4>

                      {/* READ MORE BUTTON */}

                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`announcement-${item.id}`}
                        onClick={() =>
                          setOpenId(
                            isOpen ? null : item.id
                          )
                        }
                        className="
                          group mt-3 inline-flex
                          items-center gap-2
                          text-[15px]
                          font-semibold
                          text-[#0B6450]
                          transition-colors
                          hover:text-[#B08A42]
                        "
                      >
                        {isOpen
                          ? "Show less"
                          : "Read more"}

                        {isOpen ? (
                          <ChevronUp size={17} />
                        ) : (
                          <ArrowRight
                            size={17}
                            className="
                              transition-transform
                              duration-200
                              group-hover:translate-x-1
                              motion-reduce:transform-none
                            "
                          />
                        )}
                      </button>

                      {/* =============================
                          ANIMATED DETAILS
                      ============================= */}

                      <div
                        id={`announcement-${item.id}`}
                        aria-hidden={!isOpen}
                        inert={!isOpen}
                        className={`
                          grid
                          transition-[grid-template-rows,opacity,visibility]
                          duration-300 ease-in-out
                          motion-reduce:transition-none
                          ${
                            isOpen
                              ? "visible grid-rows-[1fr] opacity-100"
                              : "invisible grid-rows-[0fr] opacity-0"
                          }
                        `}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div
                            className="
                              mt-5 rounded-xl
                              border border-[#E0E8DE]
                              bg-white
                              p-5 sm:p-6
                            "
                          >
                            {/* SUMMARY */}

                            <p
                              className="
                                text-[16px]
                                leading-8
                                text-[#53675B]
                              "
                            >
                              {item.summary}
                            </p>

                            {/* ORIGINAL DETAILS */}

                            {item.details?.map(
                              (detail, i) => (
                                <p
                                  key={i}
                                  className="
                                    mt-4
                                    text-[15px]
                                    leading-8
                                    text-[#53675B]
                                  "
                                >
                                  {detail}
                                </p>
                              )
                            )}

                            {/* ORIGINAL HIGHLIGHTS */}

                            {item.highlights?.length >
                              0 && (
                              <div
                                className="
                                  mt-5 grid
                                  gap-3
                                  rounded-xl
                                  bg-[#F4F8F3]
                                  p-4
                                  sm:grid-cols-2
                                "
                              >
                                {item.highlights.map(
                                  (highlight) => (
                                    <div
                                      key={highlight}
                                      className="
                                        flex items-start
                                        gap-3
                                      "
                                    >
                                      <CheckCircle2
                                        size={18}
                                        className="
                                          mt-1
                                          shrink-0
                                          text-[#0B6450]
                                        "
                                      />

                                      <span
                                        className="
                                          text-[15px]
                                          leading-7
                                          text-[#496252]
                                        "
                                      >
                                        {highlight}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                            {/* ARTICLE LINK */}

                            {item.href && (
                              <Link
                                to={item.href}
                                className="
                                  mt-5 inline-flex
                                  items-center gap-2
                                  text-[15px]
                                  font-semibold
                                  text-[#0B6450]
                                  transition-colors
                                  hover:text-[#B08A42]
                                "
                              >
                                {item.linkLabel ||
                                  "Learn more"}

                                <ArrowRight size={17} />
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* COLLAPSE ALL BUTTON */}

              <div
                className="
                  mt-4 flex
                  justify-center
                  border-t
                  border-[#E2EAE1]
                  pt-6
                "
              >
                <button
                  type="button"
                  onClick={toggleAnnouncements}
                  className="
                    inline-flex
                    items-center gap-2
                    rounded-full
                    border border-[#DCE6DC]
                    bg-white
                    px-5 py-2.5
                    text-[14px]
                    font-semibold
                    text-[#0B6450]
                    transition-colors
                    hover:bg-[#F2F7F1]
                  "
                >
                  <ChevronUp size={17} />
                  Collapse Announcements
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
