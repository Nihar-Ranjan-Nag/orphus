
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import { SmartImage } from "@/components/ui/SmartImage";
import { announcements } from "@/data/announcements";
import { blogPosts } from "@/data/blogPosts";
import CorporateGovernanceArticle from "@/components/blog/CorporateGovernanceArticle";

/* =========================================================
   BLOG IMAGE CONFIGURATION
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
   GOVERNANCE ARTICLE IDENTIFICATION
========================================================= */

function isGovernancePost(post: {
  slug: string;
  title: string;
}) {
  const slug = post.slug.toLowerCase();
  const title = post.title.toLowerCase();

  return (
    slug.includes("corporate-structuring-and-governance") ||
    (title.includes("corporate structuring") &&
      title.includes("governance"))
  );
}

/* =========================================================
   MAIN BLOG PAGE
========================================================= */

export default function BlogPage() {
  const reduceMotion = useReducedMotion();

  const [activeCategory, setActiveCategory] =
    useState("All insights");

  const activeAnnouncements = announcements.filter(
    (announcement) => announcement.active
  );

  const [selectedAnnouncementId, setSelectedAnnouncementId] =
    useState(activeAnnouncements[0]?.id ?? "");

  const selectedAnnouncement =
    activeAnnouncements.find(
      (announcement) =>
        announcement.id === selectedAnnouncementId
    ) ?? activeAnnouncements[0];

  const regularPosts = blogPosts.filter(
    (post) => !isGovernancePost(post)
  );

  const categories = [
    "All insights",
    ...Array.from(
      new Set(
        regularPosts
          .filter(
            (post) =>
              post.category.trim().toLowerCase() !==
              "corporate structuring"
          )
          .map((post) => post.category)
      )
    ),
  ];

  const visiblePosts =
    activeCategory === "All insights"
      ? regularPosts
      : regularPosts.filter(
          (post) => post.category === activeCategory
        );

  const selectedAnnouncementIndex = Math.max(
    0,
    activeAnnouncements.findIndex(
      (item) => item.id === selectedAnnouncement?.id
    )
  );

  const navigateToGovernance = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (activeCategory !== "All insights") {
      event.preventDefault();
      setActiveCategory("All insights");

      window.setTimeout(() => {
        document
          .getElementById("corporate-governance-content")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 0);
    }
  };

  return (
    <main
      className="
        w-full min-w-0 overflow-x-clip
        bg-white pt-[76px] text-[#0A1714]
      "
    >
      {/* =====================================================
          SECTION 1 — EDITORIAL HERO
      ===================================================== */}

      <section
        id="insights-hero"
        aria-labelledby="insights-hero-heading"
        className="
          relative isolate w-full
          overflow-hidden bg-[#082D25] text-white
        "
      >
        {/* BACKGROUND GRID */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0
            opacity-[.055]
            [background-image:linear-gradient(rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)]
            [background-size:64px_64px]
          "
        />

        {/* DECORATIVE CIRCLES */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-32 -top-48
            h-[400px] w-[400px]
            rounded-full
            border border-[#D8B867]/15
            sm:right-0 sm:h-[440px] sm:w-[440px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-48 -top-56
            h-[540px] w-[540px]
            rounded-full
            border border-[#D8B867]/10
            sm:h-[620px] sm:w-[620px]
          "
        />

        <div
          className="
            relative z-10
            mx-auto w-full max-w-[1320px]
            px-5 py-10
            sm:px-7 sm:py-12
            lg:px-10 lg:py-14
            xl:px-12
            xl:py-[64px]
          "
        >
          <div
            className="
              grid min-w-0 items-center
              gap-9
              lg:grid-cols-[minmax(0,1.55fr)_minmax(280px,.6fr)]
              lg:gap-12
            "
          >
            {/* LEFT HERO CONTENT */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 20 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
              }}
              className="min-w-0"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 shrink-0 bg-[#D8B867]" />

                <span
                  className="
                    text-[10px] font-extrabold
                    uppercase tracking-[.18em]
                    text-[#E0C477]
                    sm:text-[11px]
                  "
                >
                  Orpheus Financial / Insights
                </span>
              </div>

              <h1
                id="insights-hero-heading"
                className="
                  max-w-[920px]
                  break-words font-serif
                  text-[38px]
                  font-normal
                  leading-[1.09]
                  tracking-[-.04em]
                  sm:text-[50px]
                  md:text-[60px]
                  xl:text-[68px]
                "
              >
                Perspectives that
                <span className="block italic text-[#E0BF68]">
                  move you forward.
                </span>
              </h1>

              <p
                className="
                  mt-5 max-w-[720px]
                  text-[14px]
                  leading-[1.85]
                  text-[#D5E4DD]/85
                  sm:text-[16px]
                "
              >
                Ideas and practical perspectives on corporate
                structuring, international banking, governance
                and capital — helping businesses and investors
                make informed decisions.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#insights"
                  className="
                    inline-flex min-h-[46px]
                    items-center justify-center gap-2
                    rounded-full
                    bg-[#D8B867]
                    px-5 py-3
                    text-[11px] font-extrabold
                    uppercase tracking-[.1em]
                    text-[#082D25]
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#EAD08A]
                    sm:px-6
                  "
                >
                  Explore insights
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#corporate-governance-content"
                  onClick={navigateToGovernance}
                  className="
                    inline-flex min-h-[46px]
                    items-center justify-center gap-2
                    rounded-full
                    border border-white/25
                    px-5 py-3
                    text-[11px] font-bold
                    uppercase tracking-[.08em]
                    text-white
                    transition-colors
                    hover:border-[#D8B867]
                    hover:bg-white/[.06]
                  "
                >
                  Governance guide
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>

            {/* RIGHT FEATURED PERSPECTIVE */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: 20 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: 0.1,
              }}
              className="
                relative min-w-0
                border-l-2 border-[#D8B867]/70
                pl-5
                sm:pl-7
                lg:ml-auto
                lg:max-w-[350px]
              "
            >
              <span
                className="
                  mb-4 inline-flex h-11 w-11
                  items-center justify-center
                  rounded-xl
                  border border-[#D8B867]/25
                  bg-[#D8B867]/10
                  text-[#D8B867]
                "
              >
                <BookOpen size={22} strokeWidth={1.7} />
              </span>

              <p
                className="
                  text-[10px] font-extrabold
                  uppercase tracking-[.18em]
                  text-[#D8B867]
                "
              >
                Featured perspective
              </p>

              <h2
                className="
                  mt-3 font-serif
                  text-[27px] font-normal
                  leading-[1.18]
                  text-white
                  sm:text-[30px]
                "
              >
                Built right.
                <span className="block italic text-[#D8B867]">
                  Run right.
                </span>
              </h2>

              <p className="mt-3 text-[14px] leading-7 text-white/70">
                Why effective governance matters just as much
                as a well-designed corporate structure.
              </p>

              <a
                href="#corporate-governance-content"
                onClick={navigateToGovernance}
                className="
                  mt-5 inline-flex items-center gap-2
                  text-[11px] font-extrabold
                  uppercase tracking-[.1em]
                  text-[#E0C477]
                  hover:text-white
                "
              >
                Explore the guide
                <ArrowRight size={15} />
              </a>
            </motion.div>
          </div>

          {/* HERO FOOTER */}

          <div
            className="
              mt-9 flex flex-col gap-3
              border-t border-white/10 pt-5
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                text-[10px] font-semibold
                uppercase tracking-[.14em]
                text-white/50
              "
            >
              Knowledge for informed decisions
            </p>

            <div
              className="
                flex items-center gap-2
                text-[10px] font-semibold
                uppercase tracking-[.1em]
                text-white/55
              "
            >
              <ShieldCheck
                size={14}
                className="shrink-0 text-[#D8B867]"
              />
              Corporate · Banking · Governance
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 2 — WIDE RESPONSIVE SPLIT ANNOUNCEMENTS
      ===================================================== */}

       
{/* =====================================================
    SECTION 2 — COMPACT RESPONSIVE SPLIT ANNOUNCEMENTS
===================================================== */}

{activeAnnouncements.length > 0 &&
  selectedAnnouncement && (
    <section
      id="announcements"
      aria-labelledby="orpheus-announcements-heading"
      className="
        scroll-mt-24
        border-b border-[#E1E7E1]
        bg-[#F8F6F0]
        py-4 sm:py-5 lg:py-6
      "
    >
      <div
        className="
          mx-auto w-full
          max-w-[1320px]
          px-5 sm:px-7 lg:px-10 xl:px-12
        "
      >
        <div
          className="
            grid min-w-0
            overflow-hidden
            rounded-[18px]
            border border-[#D9E2DA]
            bg-white
            shadow-[0_12px_35px_rgba(7,40,33,.045)]
            md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]
            xl:grid-cols-[minmax(280px,1fr)_minmax(0,1.65fr)_minmax(240px,.85fr)]
          "
        >
          {/* =================================================
              LEFT PANEL — GREEN HEADING
          ================================================= */}

          <div
            className="
              relative flex min-w-0
              flex-col justify-center
              overflow-hidden
              bg-[linear-gradient(135deg,#06271F,#0C5847)]
              px-5 py-5
              text-white
              sm:px-7 sm:py-6
              xl:px-8 xl:py-7
            "
          >
            {/* DECORATIVE CIRCLES */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-24 -right-24
                h-52 w-52 rounded-full
                border border-[#D8B867]/20
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute -bottom-14 -right-14
                h-36 w-36 rounded-full
                border border-[#D8B867]/15
              "
            />

            <div className="relative z-10">
              {/* SMALL LABEL */}

              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-7 shrink-0 bg-[#D8B867]" />

                <span
                  className="
                    text-[10px] font-extrabold
                    uppercase tracking-[.16em]
                    text-[#E0BF68]
                    sm:text-[11px]
                  "
                >
                  Firm announcements
                </span>
              </div>

              {/* HEADING */}

              <h2
                id="orpheus-announcements-heading"
                className="
                  max-w-[400px]
                  font-serif
                  text-[30px]
                  font-normal
                  leading-[1.12]
                  tracking-[-.035em]
                  sm:text-[36px]
                  xl:text-[38px]
                "
              >
                Latest updates

                <span className="block italic text-[#E0BF68]">
                  from Orpheus.
                </span>
              </h2>

              {/* DESCRIPTION */}

              <p
                className="
                  mt-3
                  max-w-[370px]
                  text-[14px]
                  leading-[1.65]
                  text-white/75
                  sm:text-[15px]
                "
              >
                Key developments, partnerships and insights
                from our team.
              </p>
            </div>
          </div>

          {/* =================================================
              CENTER PANEL — SELECTED ANNOUNCEMENT
          ================================================= */}

          <div
            className="
              flex min-w-0
              flex-col justify-center
              px-5 py-5
              sm:px-7 sm:py-6
              lg:px-8
              xl:px-9 xl:py-7
            "
          >
            {/* UPDATE NUMBER AND DATE */}

            <div className="flex flex-wrap items-center gap-2.5">
              <span
                className="
                  text-[11px]
                  font-extrabold
                  uppercase tracking-[.12em]
                  text-[#A7802D]
                  sm:text-[12px]
                "
              >
                Update{" "}
                {String(
                  selectedAnnouncementIndex + 1
                ).padStart(2, "0")}
              </span>

              <span className="text-[#C1C9C2]">
                •
              </span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase tracking-[.08em]
                  text-[#84918A]
                  sm:text-[12px]
                "
              >
                {selectedAnnouncement.date}
              </span>
            </div>

            {/* ANNOUNCEMENT CATEGORY */}

            {selectedAnnouncement.eyebrow && (
              <p
                className="
                  mt-2
                  text-[11px]
                  font-bold uppercase
                  tracking-[.1em]
                  text-[#0B5345]
                  sm:text-[12px]
                "
              >
                {selectedAnnouncement.eyebrow}
              </p>
            )}

            {/* ANNOUNCEMENT TITLE */}

            <h3
              className="
                mt-2
                max-w-[760px]
                break-words
                font-serif
                text-[25px]
                font-normal
                leading-[1.17]
                tracking-[-.025em]
                text-[#0A2A22]
                sm:text-[30px]
                lg:text-[32px]
                xl:text-[34px]
              "
            >
              {selectedAnnouncement.title}
            </h3>

            {/* ANNOUNCEMENT SUMMARY */}

            <p
              className="
                mt-2
                max-w-[750px]
                text-[14px]
                leading-[1.65]
                text-[#65756C]
                sm:text-[15px]
                xl:text-[16px]
              "
            >
              {selectedAnnouncement.summary}
            </p>

            {/* READ UPDATE BUTTON */}

            {selectedAnnouncement.href && (
              <Link
                to={selectedAnnouncement.href}
                className="
                  group mt-3
                  inline-flex w-fit
                  items-center gap-3
                  text-[11px]
                  font-extrabold
                  uppercase tracking-[.08em]
                  text-[#0B5345]
                  hover:text-[#A7802D]
                  sm:text-[12px]
                "
              >
                {selectedAnnouncement.linkLabel ??
                  "Read update"}

                <span
                  className="
                    flex h-9 w-9
                    items-center justify-center
                    rounded-full
                    bg-[#D8B867]
                    text-[#092D24]
                    transition-transform
                    group-hover:translate-x-1
                  "
                >
                  <ArrowRight size={16} />
                </span>
              </Link>
            )}
          </div>

          {/* =================================================
              RIGHT PANEL — ALL ANNOUNCEMENTS
          ================================================= */}

          <div
            className="
              min-w-0
              border-t border-[#E4E9E3]
              bg-[#FBFCFA]
              px-4 py-4
              sm:px-5 sm:py-5
              md:col-span-2
              xl:col-span-1
              xl:border-l
              xl:border-t-0
              xl:px-5 xl:py-5
            "
          >
            {/* RIGHT PANEL HEADING */}

            <div className="mb-2 flex items-center justify-between gap-3">
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase tracking-[.12em]
                  text-[#A7802D]
                "
              >
                All updates
              </p>

              <span
                className="
                  rounded-full
                  bg-[#EDF2EC]
                  px-2.5 py-1
                  text-[11px]
                  font-bold
                  text-[#0B5345]
                "
              >
                {activeAnnouncements.length}
              </span>
            </div>

            {/* ANNOUNCEMENT NAVIGATION */}

            <div
              role="group"
              aria-label="Choose an announcement"
              className="
                flex min-w-0 gap-2
                overflow-x-auto
                overscroll-x-contain
                pb-2
                [scrollbar-width:none]
                [&::-webkit-scrollbar]:hidden
                xl:flex-col
                xl:overflow-x-hidden
                xl:overflow-y-auto
                xl:pb-0
              "
            >
              {activeAnnouncements.map(
                (announcement, index) => {
                  const selected =
                    announcement.id ===
                    selectedAnnouncement.id;

                  return (
                    <button
                      key={announcement.id}
                      type="button"
                      onClick={() =>
                        setSelectedAnnouncementId(
                          announcement.id
                        )
                      }
                      aria-pressed={selected}
                      aria-label={`Show announcement: ${announcement.title}`}
                      className={`
                        group flex
                        min-w-[220px]
                        flex-1 items-start
                        gap-2
                        rounded-[10px]
                        border
                        px-3 py-2.5
                        text-left
                        transition-all duration-200
                        focus-visible:outline
                        focus-visible:outline-2
                        focus-visible:outline-offset-2
                        focus-visible:outline-[#0B5345]
                        md:min-w-[240px]
                        xl:w-full
                        xl:min-w-0
                        ${
                          selected
                            ? "border-[#D5E2D8] bg-[#EAF1EC]"
                            : "border-transparent bg-white hover:border-[#E0E8DF] hover:bg-[#F0F4EF]"
                        }
                      `}
                    >
                      {/* NUMBER */}

                      <span
                        className={`
                          shrink-0
                          text-[12px]
                          font-bold
                          ${
                            selected
                              ? "text-[#A7802D]"
                              : "text-[#99A49C]"
                          }
                        `}
                      >
                        {String(index + 1).padStart(
                          2,
                          "0"
                        )}
                      </span>

                      {/* TITLE */}

                      <span
                        className={`
                          min-w-0
                          text-[13px]
                          leading-[1.45]
                          sm:text-[14px]
                          ${
                            selected
                              ? "font-semibold text-[#0A3026]"
                              : "text-[#65766C] group-hover:text-[#0B5345]"
                          }
                        `}
                      >
                        {announcement.title}
                      </span>
                    </button>
                  );
                }
              )}
            </div>

            {/* MOBILE SCROLL INDICATOR */}

            {activeAnnouncements.length > 1 && (
              <p
                className="
                  mt-2
                  text-[10px]
                  text-[#87968B]
                  xl:hidden
                "
              >
                Swipe sideways to browse more updates →
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )}


      {/* =====================================================
          SECTION 3 — INSIGHTS LIBRARY
      ===================================================== */}

      <section
        id="insights"
        className="
          scroll-mt-24
          bg-[#F8F6F0]
          py-10 sm:py-12 lg:py-14
        "
      >
        <div
          className="
            mx-auto w-full max-w-[1320px]
            px-5 sm:px-7 lg:px-10 xl:px-12
          "
        >
          {/* LIBRARY HEADING */}

          <div
            className="
              flex min-w-0 flex-col
              gap-4
              md:flex-row
              md:items-end
              md:justify-between
              md:gap-8
            "
          >
            <div className="min-w-0">
              <p
                className="
                  text-[11px]
                  font-extrabold
                  uppercase tracking-[.15em]
                  text-[#A7802D]
                  sm:text-[12px]
                "
              >
                Insights library
              </p>

              <h2
                className="
                  mt-3
                  break-words
                  font-serif
                  text-[32px]
                  font-normal
                  leading-[1.1]
                  tracking-[-.03em]
                  sm:text-[40px]
                  lg:text-[46px]
                "
              >
                Explore our latest thinking.
              </h2>
            </div>

            <p
              className="
                max-w-[470px]
                text-[14px]
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

          {/* =================================================
              CATEGORY FILTERS
          ================================================= */}

          <div
            role="group"
            aria-label="Filter insights by category"
            className="
              mt-7
              flex min-w-0 gap-2.5
              overflow-x-auto
              overscroll-x-contain
              border-b border-[#D7DED9]
              pb-5
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              lg:flex-wrap
              lg:overflow-visible
            "
          >
            {categories.map((category) => {
              const isActive =
                activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  aria-pressed={isActive}
                  className={`
                    shrink-0
                    whitespace-nowrap
                    rounded-full
                    border
                    px-4 py-3
                    text-[11px]
                    font-extrabold
                    uppercase
                    tracking-[.09em]
                    transition-all
                    sm:px-5 sm:text-[12px]
                    ${
                      isActive
                        ? "border-[#0B5345] bg-[#0B5345] text-white shadow-[0_5px_16px_rgba(11,83,69,.14)]"
                        : "border-[#CCD4CF] bg-white text-[#53645E] hover:border-[#0B5345]/40 hover:text-[#0B5345]"
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* =================================================
              BLOG CARDS
          ================================================= */}

          {visiblePosts.length > 0 ? (
            <motion.div
              key={activeCategory}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 12 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.4,
              }}
              className="
                mt-7
                grid min-w-0
                grid-cols-1
                gap-5
                sm:grid-cols-2
                lg:gap-6
                xl:grid-cols-3
              "
            >
              {visiblePosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="
                    group/card
                    flex min-w-0 flex-col
                    overflow-hidden
                    rounded-[18px]
                    border border-[#D6DDD8]
                    bg-white
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#0B5345]/25
                    hover:shadow-[0_14px_36px_rgba(7,40,33,.075)]
                    focus-visible:outline
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-[#0B5345]
                  "
                >
                  {/* ARTICLE IMAGE */}

                  <div
                    className="
                      relative aspect-[16/9]
                      overflow-hidden
                      bg-[#DFE7E2]
                    "
                  >
                    <SmartImage
                      src={getPostImage(post.slug)}
                      alt={post.title}
                      className="
                        h-full w-full
                        object-cover
                        transition-transform duration-700
                        group-hover/card:scale-[1.035]
                      "
                    />

                    <span
                      className="
                        absolute left-3 top-3
                        max-w-[calc(100%-1.5rem)]
                        rounded-full
                        bg-[#0B5345]/90
                        px-3 py-1.5
                        text-[10px]
                        font-bold
                        uppercase tracking-[.09em]
                        text-white
                        backdrop-blur-md
                        sm:text-[11px]
                      "
                    >
                      {post.category}
                    </span>
                  </div>

                  {/* ARTICLE CONTENT */}

                  <div
                    className="
                      flex flex-1 flex-col
                      p-5 sm:p-6
                    "
                  >
                    {/* DATE AND READING TIME */}

                    <div
                      className="
                        flex flex-wrap items-center
                        gap-x-2 gap-y-1.5
                        text-[11px]
                        font-bold uppercase
                        tracking-[.08em]
                        text-[#7B8883]
                        sm:text-[12px]
                      "
                    >
                      <CalendarDays
                        size={13}
                        className="shrink-0 text-[#A7802D]"
                      />

                      <span>{post.date}</span>

                      <span className="text-[#BBC1BE]">
                        •
                      </span>

                      <Clock3
                        size={13}
                        className="shrink-0 text-[#A7802D]"
                      />

                      <span>{post.readTime}</span>
                    </div>

                    {/* TITLE */}

                    <h3
                      className="
                        mt-4
                        break-words
                        font-serif
                        text-[24px]
                        font-normal
                        leading-[1.15]
                        tracking-[-.02em]
                        text-[#0A2A22]
                        sm:text-[26px]
                        lg:text-[28px]
                      "
                    >
                      {post.title}
                    </h3>

                    {/* EXCERPT */}

                    <p
                      className="
                        mt-4
                        line-clamp-3
                        text-[14px]
                        leading-[1.8]
                        text-[#64736D]
                        sm:text-[15px]
                      "
                    >
                      {post.excerpt}
                    </p>

                    {/* ARTICLE LINK INDICATOR */}

                    <span
                      className="
                        mt-auto inline-flex
                        items-center gap-2
                        pt-6
                        text-[12px]
                        font-extrabold
                        uppercase tracking-[.09em]
                        text-[#0B5345]
                      "
                    >
                      Read article

                      <ArrowRight
                        size={15}
                        className="
                          transition-transform
                          group-hover/card:translate-x-1
                        "
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <div
              className="
                mt-7 rounded-[18px]
                border border-[#D7DED8]
                bg-white
                p-6 text-center
                text-[15px]
                text-[#66756F]
                sm:p-10
              "
            >
              No insights are available in this category.
            </div>
          )}

          {/* =================================================
              SECTION 4 — COMPLETE GOVERNANCE ARTICLE
              ALWAYS EXPANDED WHEN ALL INSIGHTS SELECTED
          ================================================= */}

          <div
              id="corporate-governance-content"
              className="
                mt-12
                min-w-0
                scroll-mt-28
                border-t border-[#D7DED9]
                pt-10
                sm:mt-16
                sm:pt-12
                [&_img]:max-w-full
                [&_img]:h-auto
                [&_table]:max-w-full
                [&_pre]:max-w-full
                [&_pre]:overflow-x-auto
              "
            >
              <CorporateGovernanceArticle />
            </div>
        </div>
      </section>
    </main>
  );
}