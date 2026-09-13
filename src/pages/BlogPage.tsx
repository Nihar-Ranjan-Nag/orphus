import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  Bell,
  BookOpen,
  CalendarDays,
  Clock3,
  FileText,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";

import { SmartImage } from "@/components/ui/SmartImage";
import { announcements } from "@/data/announcements";
import { blogPosts } from "@/data/blogPosts";

/* =========================================================
   BLOG IMAGE HELPERS
   Each blog slug has its own unique local image.
   No rotating fallbacks = no repeated images.
========================================================= */

const blogImages: Record<string, string> = {
  "bvi-vs-seychelles-which-offshore-jurisdiction-is-best":
    "/images/bvi.jpg",

  "documents-required-for-business-loan-in-uae":
    "/images/compliance.jpg",

  "why-your-uae-business-bank-account-application-got-rejected":
    "/images/bank-account-rejected.jpg",

  "why-dubai-companies-choose-vision-bank":
    "/images/vision-bank-corporate-accounts.jpg",

  "why-uae-banks-freeze-accounts-and-how-to-avoid-it":
    "/images/entity.jpg",

  "open-business-account-with-mashreq-bank-dubai":
    "/images/open-business-account-with-mashreq-bank-dubai.jpg",

  "private-debt-explained":
    "/images/private-debt-explained.jpg",

  "what-is-offshore-banking-and-how-does-it-work":
    "/images/what-is-offshore-banking-and-how-does-it-work.jpg",

  "best-financial-advisors-in-dubai":
    "/images/best-financial-advisors-in-dubai.jpg",

  "offshore-business-in-seychelles":
    "/images/offshore-business-in-seychelles.jpg",

  "how-to-start-your-business-in-dubai-for-under-aed-6000":
    "/images/how-to-start-your-business-in-dubai-for-under-aed-6000.jpg",

  "how-to-buy-a-home-in-dubai-or-abu-dhabi":
    "/images/buy-home-dubai-abu-dhabi.jpg",
};

function getPostImage(slug: string) {
  return blogImages[slug] ?? "/images/entity.jpg";
}

/* =========================================================
   BLOG PAGE
========================================================= */

export default function BlogPage() {
  const reduceMotion = useReducedMotion();

  const activeAnnouncements = announcements.filter(
    (announcement) => announcement.active,
  );

  const [selectedAnnouncementId, setSelectedAnnouncementId] = useState(
    activeAnnouncements[0]?.id ?? "",
  );

  const [activeCategory, setActiveCategory] =
    useState("All insights");

  const selectedAnnouncement =
    activeAnnouncements.find(
      (announcement) =>
        announcement.id === selectedAnnouncementId,
    ) ?? activeAnnouncements[0];

  const categories = [
    "All insights",
    ...Array.from(
      new Set(
        blogPosts.map(
          (post) => post.category,
        ),
      ),
    ),
  ];

  const visiblePosts =
    activeCategory === "All insights"
      ? blogPosts
      : blogPosts.filter(
          (post) =>
            post.category === activeCategory,
        );

  const featuredPost =
    visiblePosts[0];

  const remainingPosts =
    visiblePosts.slice(1);

  return (
    <main
      className="
        w-full
        overflow-x-hidden
        bg-white
        pt-[76px]
        text-[#0A1714]
      "
    >
      {/* =====================================================
          HERO
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
        {/* BACKGROUND GRID */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[.07]

            [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)]

            [background-size:46px_46px]
          "
        />

        {/* LEFT GLOW */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -bottom-52
            left-[5%]

            h-[430px]
            w-[430px]

            rounded-full

            bg-[#D8B867]/12

            blur-[120px]
          "
        />

        {/* RIGHT GREEN GLOW */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            -right-36
            -top-36

            h-[520px]
            w-[520px]

            rounded-full

            bg-[#14715E]/26

            blur-[130px]
          "
        />

        <div
          className="
            section-shell
            relative

            py-12

            sm:py-14

            md:py-16

            lg:py-[76px]
          "
        >
          <div
            className="
              grid
              min-w-0
              grid-cols-1

              gap-10

              lg:grid-cols-[minmax(0,1.12fr)_minmax(380px,.88fr)]
              lg:items-end
              lg:gap-16
            "
          >
            {/* ==========================
                LEFT
            ========================== */}

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
                duration:
                  reduceMotion
                    ? 0
                    : 0.7,
              }}
              className="
                min-w-0
              "
            >
              {/* BADGE */}

              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  rounded-full

                  border
                  border-[#D8B867]/28

                  bg-white/[.035]

                  px-4
                  py-2.5

                  text-[10px]
                  font-extrabold
                  uppercase
                  tracking-[.18em]

                  text-[#E4C875]

                  backdrop-blur-sm

                  sm:text-[11px]
                "
              >
                <Sparkles size={12} />

                Orpheus intelligence
              </div>

              {/* TITLE */}

              <h1
                className="
                  mt-6

                  max-w-[760px]

                  font-serif

                  text-[42px]
                  font-normal

                  leading-[.95]

                  tracking-[-.045em]

                  sm:text-[52px]

                  md:text-[62px]

                  lg:text-[70px]

                  xl:text-[76px]
                "
              >
                News that matters.

                <span
                  className="
                    mt-1
                    block
                    italic

                    text-[#83C8B7]
                  "
                >
                  Insight that helps.
                </span>
              </h1>

              {/* COPY */}

              <p
                className="
                  mt-6

                  max-w-[670px]

                  text-[15px]
                  leading-7

                  text-white/78

                  sm:text-[16px]
                  sm:leading-8

                  md:text-[17px]
                "
              >
                Firm announcements and practical financial analysis,
                organised in one focused place for founders,
                investors and finance teams.
              </p>

              {/* BUTTONS */}

              <div
                className="
                  mt-8

                  flex
                  flex-col
                  gap-3

                  sm:flex-row
                "
              >
                {activeAnnouncements.length > 0 && (
                  <a
                    href="#announcements"
                    className="
                      inline-flex

                      min-h-[50px]

                      items-center
                      justify-center
                      gap-3

                      rounded-[12px]

                      bg-[#D8B867]

                      px-5

                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[.12em]

                      text-[#06271F]

                      transition-all

                      hover:-translate-y-0.5
                      hover:bg-[#E5CD8C]

                      sm:px-6
                    "
                  >
                    View firm updates

                    <ArrowRight size={14} />
                  </a>
                )}

                <a
                  href="#insights"
                  className="
                    inline-flex

                    min-h-[50px]

                    items-center
                    justify-center
                    gap-3

                    rounded-[12px]

                    border
                    border-white/20

                    bg-white/[.055]

                    px-5

                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[.12em]

                    text-white

                    backdrop-blur-sm

                    transition-all

                    hover:-translate-y-0.5
                    hover:bg-white/[.1]

                    sm:px-6
                  "
                >
                  Browse insights

                  <BookOpen size={14} />
                </a>
              </div>
            </motion.div>

            {/* ==========================
                STATS
            ========================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      x: 30,
                    }
              }
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration:
                  reduceMotion
                    ? 0
                    : 0.7,

                delay: 0.12,
              }}
              className="
                grid
                grid-cols-2

                gap-3

                sm:gap-4

                lg:pb-1
              "
            >
              {/* UPDATE CARD */}

              <div
                className="
                  rounded-[20px]

                  border
                  border-white/12

                  bg-white/[.055]

                  p-5

                  backdrop-blur-md

                  sm:p-6
                "
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
                  "
                >
                  <Bell size={17} />
                </span>

                <p
                  className="
                    mt-7

                    font-serif

                    text-[34px]

                    leading-none

                    text-white

                    sm:text-[40px]
                  "
                >
                  {activeAnnouncements.length
                    .toString()
                    .padStart(2, "0")}
                </p>

                <p
                  className="
                    mt-3

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.15em]

                    text-white/48

                    sm:text-[11px]
                  "
                >
                  Firm updates
                </p>
              </div>

              {/* INSIGHTS CARD */}

              <div
                className="
                  rounded-[20px]

                  border
                  border-white/12

                  bg-white/[.055]

                  p-5

                  backdrop-blur-md

                  sm:p-6
                "
              >
                <span
                  className="
                    flex

                    h-11
                    w-11

                    items-center
                    justify-center

                    rounded-full

                    bg-[#8ACABA]

                    text-[#06271F]
                  "
                >
                  <FileText size={17} />
                </span>

                <p
                  className="
                    mt-7

                    font-serif

                    text-[34px]

                    leading-none

                    text-white

                    sm:text-[40px]
                  "
                >
                  {blogPosts.length
                    .toString()
                    .padStart(2, "0")}
                </p>

                <p
                  className="
                    mt-3

                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[.15em]

                    text-white/48

                    sm:text-[11px]
                  "
                >
                  Published insights
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ANNOUNCEMENTS
      ===================================================== */}

      {activeAnnouncements.length > 0 &&
        selectedAnnouncement && (
          <section
            id="announcements"
            className="
              scroll-mt-24

              border-b
              border-[#DDE3DF]

              bg-white

              py-10

              sm:py-12

              lg:py-14
            "
          >
            <div className="section-shell">
              {/* ==============================================
                  ANNOUNCEMENT HEADER
              ============================================== */}

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
                  <div
                    className="
                      flex
                      items-center
                      gap-2

                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[.15em]

                      text-[#A7802D]
                    "
                  >
                    <Bell size={14} />

                    Firm announcements
                  </div>

                  <h2
                    className="
                      mt-3

                      font-serif

                      text-[34px]
                      font-normal

                      leading-[1]

                      tracking-[-.03em]

                      sm:text-[40px]

                      md:text-[44px]
                    "
                  >
                    Latest updates from Orpheus.
                  </h2>
                </div>

                <p
                  className="
                    max-w-[440px]

                    text-[15px]
                    leading-7

                    text-[#687671]

                    sm:text-[16px]

                    md:text-right
                  "
                >
                  Important company, banking and market updates
                  presented in one focused place.
                </p>
              </div>

              {/* ==============================================
                  ANNOUNCEMENT PANEL
              ============================================== */}

              <motion.div
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        y: 16,
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
                  duration:
                    reduceMotion
                      ? 0
                      : 0.5,
                }}
                className="
                  mt-8

                  overflow-hidden

                  rounded-[24px]

                  border
                  border-[#D6DED8]

                  bg-[#FBFCFA]

                  shadow-[0_18px_50px_rgba(7,40,33,.045)]

                  lg:grid
                  lg:grid-cols-[minmax(0,1.4fr)_minmax(350px,.6fr)]
                "
              >
                {/* ==========================================
                    SELECTED CONTENT
                ========================================== */}

                <div
                  className="
                    relative

                    min-w-0

                    p-6

                    sm:p-8

                    lg:p-10
                  "
                >
                  {/* TOP LINE */}

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0

                      h-[3px]
                      w-full

                      bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]
                    "
                  />

                  {/* META */}

                  <div
                    className="
                      flex
                      flex-wrap
                      items-center
                      gap-2
                    "
                  >
                    <span
                      className="
                        rounded-full

                        bg-[#EDF5F1]

                        px-3
                        py-2

                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[.12em]

                        text-[#0B5345]

                        sm:text-[11px]
                      "
                    >
                      Announcement
                    </span>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[.12em]

                        text-[#81908A]

                        sm:text-[12px]
                      "
                    >
                      {selectedAnnouncement.date}
                    </span>
                  </div>

                  {/* EYEBROW */}

                  <p
                    className="
                      mt-5

                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[.15em]

                      text-[#A7802D]

                      sm:text-[12px]
                    "
                  >
                    {selectedAnnouncement.eyebrow}
                  </p>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-3

                      max-w-[840px]

                      break-words

                      font-serif

                      text-[31px]
                      font-normal

                      leading-[1.07]

                      tracking-[-.028em]

                      sm:text-[38px]

                      md:text-[42px]

                      lg:text-[46px]
                    "
                  >
                    {selectedAnnouncement.title}
                  </h3>

                  {/* SUMMARY */}

                  <p
                    className="
                      mt-5

                      max-w-[840px]

                      text-[15px]
                      leading-7

                      text-[#61706B]

                      sm:text-[16px]
                      sm:leading-8
                    "
                  >
                    {selectedAnnouncement.summary}
                  </p>

                  {/* CTA */}

                  {selectedAnnouncement.href && (
                    <Link
                      to={
                        selectedAnnouncement.href
                      }
                      className="
                        mt-7

                        inline-flex
                        items-center
                        gap-3

                        text-[11px]
                        font-extrabold
                        uppercase
                        tracking-[.12em]

                        text-[#0B5345]

                        sm:text-[12px]
                      "
                    >
                      {selectedAnnouncement.linkLabel ??
                        "Read update"}

                      <span
                        className="
                          flex

                          h-9
                          w-9

                          items-center
                          justify-center

                          rounded-full

                          bg-[#0B5345]

                          text-white
                        "
                      >
                        <ArrowRight size={12} />
                      </span>
                    </Link>
                  )}
                </div>

                {/* ==========================================
                    RECENT ANNOUNCEMENTS
                ========================================== */}

                <div
                  className="
                    border-t
                    border-[#DCE3DE]

                    bg-[#F4F6F2]

                    p-5

                    sm:p-6

                    lg:border-l
                    lg:border-t-0

                    lg:p-7
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-3
                    "
                  >
                    <p
                      className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[.15em]

                        text-[#74827D]

                        sm:text-[11px]
                      "
                    >
                      Recent announcements
                    </p>

                    <span
                      className="
                        rounded-full

                        bg-white

                        px-2.5
                        py-1

                        text-[10px]
                        font-bold

                        text-[#0B5345]
                      "
                    >
                      {activeAnnouncements.length}
                    </span>
                  </div>

                  {/* ======================================
                      MOBILE SWIPEABLE BUTTONS
                  ====================================== */}

                  <div
                    className="
                      mt-4

                      flex
                      w-full
                      min-w-0

                      gap-3

                      overflow-x-auto
                      overscroll-x-contain

                      pb-2

                      [scrollbar-width:none]

                      [&::-webkit-scrollbar]:hidden

                      lg:flex-col
                      lg:overflow-visible
                      lg:pb-0
                    "
                  >
                    {activeAnnouncements.map(
                      (
                        announcement,
                        index,
                      ) => {
                        const selected =
                          announcement.id ===
                          selectedAnnouncementId;

                        return (
                          <button
                            key={
                              announcement.id
                            }
                            type="button"
                            onClick={() =>
                              setSelectedAnnouncementId(
                                announcement.id,
                              )
                            }
                            className={`
                              relative

                              min-w-[270px]
                              shrink-0

                              overflow-hidden

                              rounded-[16px]

                              border

                              p-4

                              text-left

                              transition-all
                              duration-300

                              lg:min-w-0
                              lg:w-full

                              ${
                                selected
                                  ? `
                                      border-[#0B5345]/25

                                      bg-white

                                      shadow-[0_8px_24px_rgba(7,40,33,.065)]
                                    `
                                  : `
                                      border-[#DDE3DF]

                                      bg-[#F9FAF7]

                                      hover:border-[#0B5345]/20
                                      hover:bg-white
                                    `
                              }
                            `}
                          >
                            {/* ACTIVE LINE */}

                            {selected && (
                              <span
                                className="
                                  absolute

                                  bottom-0
                                  left-0
                                  top-0

                                  w-[3px]

                                  bg-[#0B5345]
                                "
                              />
                            )}

                            <div
                              className="
                                flex
                                items-start
                                gap-3
                              "
                            >
                              {/* NUMBER */}

                              <span
                                className={`
                                  flex

                                  h-9
                                  w-9

                                  shrink-0

                                  items-center
                                  justify-center

                                  rounded-full

                                  text-[10px]
                                  font-bold

                                  ${
                                    selected
                                      ? `
                                          bg-[#0B5345]
                                          text-white
                                        `
                                      : `
                                          bg-[#E8EEEA]
                                          text-[#0B5345]
                                        `
                                  }
                                `}
                              >
                                {String(
                                  index + 1,
                                ).padStart(
                                  2,
                                  "0",
                                )}
                              </span>

                              <div className="min-w-0">
                                <p
                                  className="
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[.11em]

                                    text-[#A7802D]

                                    sm:text-[11px]
                                  "
                                >
                                  {announcement.date}
                                </p>

                                <p
                                  className="
                                    mt-2

                                    line-clamp-2

                                    text-[14px]
                                    font-semibold

                                    leading-6

                                    text-[#30413C]

                                    sm:text-[15px]
                                  "
                                >
                                  {announcement.title}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      },
                    )}
                  </div>

                  {/* MOBILE SWIPE HINT */}

                  {activeAnnouncements.length > 1 && (
                    <p
                      className="
                        mt-2

                        text-[10px]
                        font-medium

                        text-[#82908B]

                        lg:hidden
                      "
                    >
                      Swipe to view more announcements →
                    </p>
                  )}
                </div>
              </motion.div>
            </div>
          </section>
        )}

      {/* =====================================================
          INSIGHTS
      ===================================================== */}

      <section
        id="insights"
        className="
          scroll-mt-24

          bg-[#F8F6F0]

          py-10

          sm:py-12

          lg:py-14
        "
      >
        <div className="section-shell">
          {/* HEADER */}

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
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase
                  tracking-[.15em]

                  text-[#A7802D]

                  sm:text-[12px]
                "
              >
                Insights library
              </p>

              <h2
                className="
                  mt-2

                  font-serif

                  text-[34px]
                  font-normal

                  leading-[1]

                  tracking-[-.03em]

                  sm:text-[40px]

                  md:text-[46px]
                "
              >
                Explore our latest thinking.
              </h2>
            </div>

            <p
              className="
                max-w-[460px]

                text-[15px]
                leading-7

                text-[#687671]

                sm:text-[16px]

                md:text-right
              "
            >
              Banking, capital, structuring and international
              business insights.
            </p>
          </div>

          {/* ==============================================
              FILTERS
          ============================================== */}

          <div
            aria-label="Filter insights by category"
            className="
              mt-6

              flex
              gap-2

              overflow-x-auto
              overscroll-x-contain

              border-b
              border-[#D7DED9]

              pb-5

              [scrollbar-width:none]

              [&::-webkit-scrollbar]:hidden

              sm:flex-wrap
              sm:overflow-visible
            "
          >
            {categories.map(
              (category) => {
                const isActive =
                  activeCategory ===
                  category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setActiveCategory(
                        category,
                      )
                    }
                    aria-pressed={
                      isActive
                    }
                    className={`
                      shrink-0

                      rounded-full

                      border

                      px-4
                      py-2.5

                      text-[11px]
                      font-extrabold
                      uppercase
                      tracking-[.10em]

                      transition-all

                      sm:text-[12px]

                      ${
                        isActive
                          ? `
                              border-[#0B5345]

                              bg-[#0B5345]

                              text-white

                              shadow-[0_5px_16px_rgba(11,83,69,.14)]
                            `
                          : `
                              border-[#CCD4CF]

                              bg-white

                              text-[#53645E]

                              hover:border-[#0B5345]/40
                              hover:text-[#0B5345]
                            `
                      }
                    `}
                  >
                    {category}
                  </button>
                );
              },
            )}
          </div>

          {/* ==============================================
              FEATURED ARTICLE
          ============================================== */}

          {featuredPost ? (
            <>
              <motion.div
                key={`featured-${featuredPost.slug}`}
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
                  duration:
                    reduceMotion
                      ? 0
                      : 0.4,
                }}
                className="
                  mt-6
                "
              >
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="
                    group/card

                    relative

                    block
                    overflow-hidden

                    rounded-[18px]

                    border
                    border-[#D6DDD8]

                    bg-white

                    transition-all
                    duration-300

                    hover:border-[#0B5345]/25

                    hover:shadow-[0_12px_34px_rgba(7,40,33,.065)]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      left-0
                      top-0

                      h-[3px]
                      w-full

                      bg-[linear-gradient(90deg,#0B5345,#69B7A1,#D8B867)]
                    "
                  />

                  <div
                    className="
                      grid
                      min-w-0
                      grid-cols-1

                      gap-6

                      p-5

                      sm:p-7

                      md:grid-cols-[minmax(0,1.3fr)_minmax(250px,.7fr)]
                      md:items-end

                      md:gap-10

                      lg:p-8
                    "
                  >
                    {/* TITLE */}

                    <div className="min-w-0">
                      <div
                        className="
                          flex
                          flex-wrap
                          items-center
                          gap-2
                        "
                      >
                        <span
                          className="
                            rounded-full

                            bg-[#EDF5F1]

                            px-2.5
                            py-1.5

                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[.12em]

                            text-[#0B5345]
                          "
                        >
                          Featured
                        </span>

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[.11em]

                            text-[#0B5345]
                          "
                        >
                          {featuredPost.category}
                        </span>

                        <span className="text-[#BBC1BE]">
                          •
                        </span>

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[.11em]

                            text-[#788580]
                          "
                        >
                          {featuredPost.date}
                        </span>

                        {featuredPost.readTime && (
                          <>
                            <span className="text-[#BBC1BE]">
                              •
                            </span>

                            <span
                              className="
                                inline-flex
                                items-center
                                gap-1.5

                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[.11em]

                                text-[#788580]
                              "
                            >
                              <Clock3 size={12} />

                              {featuredPost.readTime}
                            </span>
                          </>
                        )}
                      </div>

                      <h3
                        className="
                          mt-4

                          max-w-[820px]

                          break-words

                          font-serif

                          text-[30px]
                          font-normal

                          leading-[1.04]

                          tracking-[-.03em]

                          sm:text-[36px]

                          md:text-[40px]

                          lg:text-[44px]
                        "
                      >
                        {featuredPost.title}
                      </h3>
                    </div>

                    {/* COPY */}

                    <div
                      className="
                        min-w-0

                        md:border-l
                        md:border-[#DFE4E0]

                        md:pl-7
                      "
                    >
                      <p
                        className="
                          line-clamp-3

                          text-[15px]

                          leading-7

                          text-[#64736D]

                          sm:text-[16px]
                        "
                      >
                        {featuredPost.excerpt}
                      </p>

                      <span
                        className="
                          mt-5

                          inline-flex
                          items-center
                          gap-2

                          text-[11px]
                          font-extrabold
                          uppercase
                          tracking-[.11em]

                          text-[#0B5345]

                          sm:text-[12px]
                        "
                      >
                        Read insight

                        <span
                          className="
                            flex

                            h-8
                            w-8

                            items-center
                            justify-center

                            rounded-full

                            bg-[#0B5345]

                            text-white

                            transition-transform

                            group-hover/card:translate-x-1
                          "
                        >
                          <ArrowRight size={12} />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* ==========================================
                  OTHER POSTS
              ========================================== */}

              {remainingPosts.length > 0 && (
                <motion.div
                  key={`grid-${activeCategory}`}
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
                    duration:
                      reduceMotion
                        ? 0
                        : 0.4,

                    delay: 0.05,
                  }}
                  className="
                    mt-5

                    grid

                    gap-5

                    md:grid-cols-2

                    lg:grid-cols-3
                  "
                >
                  {remainingPosts.map((post) => (
                      <Link
                        key={post.slug}
                        to={`/blog/${post.slug}`}
                        className="
                          group/card

                          flex
                          min-w-0
                          flex-col

                          overflow-hidden

                          rounded-[18px]

                          border
                          border-[#D6DDD8]

                          bg-white

                          transition-all
                          duration-300

                          hover:-translate-y-1
                          hover:border-[#0B5345]/25

                          hover:shadow-[0_14px_36px_rgba(7,40,33,.075)]
                        "
                      >
                        {/* IMAGE */}

                        <div
                          className="
                            relative

                            aspect-[16/9]

                            overflow-hidden

                            bg-[#DFE7E2]
                          "
                        >
                          <SmartImage
                            src={getPostImage(post.slug)}
                            alt={post.title}
                            className="
                              h-full
                              w-full

                              object-cover

                              transition-transform
                              duration-700

                              group-hover/card:scale-[1.035]
                            "
                          />

                          <span
                            className="
                              absolute

                              left-3
                              top-3

                              max-w-[calc(100%-1.5rem)]

                              rounded-full

                              bg-[#0B5345]/90

                              px-3
                              py-1.5

                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[.11em]

                              text-white

                              backdrop-blur-md
                            "
                          >
                            {post.category}
                          </span>
                        </div>

                        {/* BODY */}

                        <div
                          className="
                            flex
                            flex-1
                            flex-col

                            p-5

                            sm:p-6
                          "
                        >
                          <div
                            className="
                              flex
                              flex-wrap
                              items-center
                              gap-2

                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[.1em]

                              text-[#7B8883]

                              sm:text-[12px]
                            "
                          >
                            <CalendarDays
                              size={12}
                              className="text-[#A7802D]"
                            />

                            <span>{post.date}</span>

                            <span className="text-[#BBC1BE]">
                              •
                            </span>

                            <Clock3
                              size={12}
                              className="text-[#A7802D]"
                            />

                            <span>
                              {post.readTime}
                            </span>
                          </div>

                          <h3
                            className="
                              mt-4

                              break-words

                              font-serif

                              text-[24px]
                              font-normal

                              leading-[1.1]

                              tracking-[-.02em]

                              sm:text-[26px]
                            "
                          >
                            {post.title}
                          </h3>

                          <p
                            className="
                              mt-4

                              line-clamp-3

                              text-[14px]
                              leading-6

                              text-[#64736D]

                              sm:text-[15px]
                              sm:leading-7
                            "
                          >
                            {post.excerpt}
                          </p>

                          <span
                            className="
                              mt-auto

                              inline-flex
                              items-center
                              gap-2

                              pt-5

                              text-[11px]
                              font-extrabold
                              uppercase
                              tracking-[.11em]

                              text-[#0B5345]

                              sm:text-[12px]
                            "
                          >
                            Read article

                            <ArrowRight
                              size={12}
                              className="
                                transition-transform

                                group-hover/card:translate-x-1
                              "
                            />
                          </span>
                        </div>
                      </Link>
                    ),
                  )}
                </motion.div>
              )}
            </>
          ) : (
            <div
              className="
                mt-6

                rounded-[18px]

                border
                border-[#D7DED8]

                bg-white

                p-8

                text-center

                text-[15px]

                text-[#66756F]
              "
            >
              No insights are available in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}