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

import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { SmartImage } from "@/components/ui/SmartImage";
import { announcements } from "@/data/announcements";
import { blogPosts } from "@/data/blogPosts";
import { insightCards } from "@/data/siteArchitecture";

const fallbackImages = [
  "/images/entity.jpg",
  "/images/compliance.jpg",
  "/images/bvi.jpg",
  "/images/advisory.jpg",
  "/images/banking.jpg",
  "/images/credit.jpg",
];

function getPostImage(slug: string, index = 0) {
  return (
    insightCards.find((item) => item.slug === slug)?.image ??
    fallbackImages[index % fallbackImages.length]
  );
}

export default function BlogPage() {
  const reduceMotion = useReducedMotion();
  const activeAnnouncements = announcements.filter(
    (announcement) => announcement.active,
  );

  const [selectedAnnouncementId, setSelectedAnnouncementId] = useState(
    activeAnnouncements[0]?.id ?? "",
  );
  const [activeCategory, setActiveCategory] = useState("All insights");

  const selectedAnnouncement =
    activeAnnouncements.find(
      (announcement) => announcement.id === selectedAnnouncementId,
    ) ?? activeAnnouncements[0];

  const categories = [
    "All insights",
    ...Array.from(new Set(blogPosts.map((post) => post.category))),
  ];

  const visiblePosts =
    activeCategory === "All insights"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const featuredPost = visiblePosts[0];
  const remainingPosts = visiblePosts.slice(1);

  return (
    <main className="overflow-hidden bg-[#FBFAF6] pt-[76px] text-[#0A1714]">
      {/* Compact introduction for the page's two content types. */}
      <section className="relative isolate overflow-hidden bg-[#06271F] text-white">
        <div
          aria-hidden="true"
          className="absolute -right-28 -top-40 h-[520px] w-[520px] rounded-full bg-[#176B58]/35 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-56 left-[18%] h-[440px] w-[440px] rounded-full bg-[#D8B867]/15 blur-[110px]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[.08] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:46px_46px]"
        />

        <div className="section-shell relative py-14 sm:py-16 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.12fr_.88fr] lg:items-end">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D8B867]/25 bg-white/[.055] px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-[.2em] text-[#E1C778] backdrop-blur-sm">
                <Sparkles size={12} />
                Orpheus intelligence
              </div>

              <h1 className="mt-6 max-w-[860px] font-serif text-[clamp(42px,6.2vw,78px)] font-normal leading-[.96] tracking-[-.045em]">
                News that matters.
                <span className="block italic text-[#84C9B7]">
                  Insight that helps.
                </span>
              </h1>

              <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-white/62 sm:text-[18px] sm:leading-8">
                Firm announcements and practical financial analysis, organised
                in one focused place for founders, investors and finance teams.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {activeAnnouncements.length > 0 && (
                  <a
                    href="#announcements"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D8B867] px-5 text-[12px] font-extrabold uppercase tracking-[.13em] text-[#08231C] transition hover:-translate-y-0.5 hover:bg-[#E4CC8C]"
                  >
                    View firm updates
                    <ArrowRight size={14} />
                  </a>
                )}

                <a
                  href="#insights"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[.055] px-5 text-[12px] font-extrabold uppercase tracking-[.13em] text-white transition hover:-translate-y-0.5 hover:bg-white/[.1]"
                >
                  Browse insights
                  <BookOpen size={14} />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.12 }}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              <div className="rounded-[20px] border border-white/10 bg-white/[.06] p-5 backdrop-blur-md sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8B867] text-[#08231C]">
                  <Bell size={17} />
                </span>
                <p className="mt-7 font-serif text-[34px] leading-none text-white sm:text-[42px]">
                  {activeAnnouncements.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.16em] text-white/45">
                  Firm updates
                </p>
              </div>

              <div className="rounded-[20px] border border-white/10 bg-white/[.06] p-5 backdrop-blur-md sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BC7B7] text-[#08231C]">
                  <FileText size={17} />
                </span>
                <p className="mt-7 font-serif text-[34px] leading-none text-white sm:text-[42px]">
                  {blogPosts.length.toString().padStart(2, "0")}
                </p>
                <p className="mt-2 text-[11px] font-bold uppercase tracking-[.16em] text-white/45">
                  Published insights
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Firm announcements */}
      {activeAnnouncements.length > 0 && selectedAnnouncement && (
        <section
          id="announcements"
          className="scroll-mt-24 border-b border-[#DEE3DE] bg-white py-14 sm:py-16 lg:py-20"
        >
          <div className="section-shell">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: reduceMotion ? 0 : 0.55 }}
              className="mb-8 grid gap-4 border-b border-[#DFE4DF] pb-7 md:grid-cols-[1fr_auto] md:items-end"
            >
              <div>
                <p className="section-kicker">Firm announcements</p>
                <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(36px,4.8vw,56px)] font-normal leading-[1] tracking-[-.035em]">
                  Announcements and firm updates.
                </h2>
              </div>

              <p className="max-w-[410px] text-[15px] leading-6 text-[#687671] md:text-right">
                Select a date to read the complete update. The date panel stays
                fixed while only the content changes.
              </p>
            </motion.div>

            <AnnouncementBanner
              announcement={selectedAnnouncement}
              announcementOptions={activeAnnouncements}
              onAnnouncementChange={setSelectedAnnouncementId}
              variant="featured"
            />
          </div>
        </section>
      )}

      {/* One unified blog library. */}
      <section
        id="insights"
        className="scroll-mt-24 bg-[#F6F3EB] py-14 sm:py-16 lg:py-20"
      >
        <div className="section-shell">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: reduceMotion ? 0 : 0.55 }}
            className="grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
          >
            <div>
              <p className="section-kicker">Insights library</p>
              <h2 className="mt-3 max-w-[760px] font-serif text-[clamp(38px,5vw,58px)] font-normal leading-[1] tracking-[-.035em]">
                Ideas for clearer financial decisions.
              </h2>
            </div>

            <p className="max-w-[420px] text-[15px] leading-6 text-[#687671] md:text-right">
              Practical analysis covering banking, capital, corporate
              structuring and international jurisdictions.
            </p>
          </motion.div>

          <div
            aria-label="Filter insights by category"
            className="mt-8 flex flex-wrap gap-2 border-y border-[#D9DED8] py-5"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-[.12em] transition-all duration-300 ${
                    isActive
                      ? "border-[#0B5345] bg-[#0B5345] text-white shadow-[0_8px_20px_rgba(11,83,69,.18)]"
                      : "border-[#CCD5CF] bg-white text-[#53645E] hover:border-[#0B5345]/45 hover:text-[#0B5345]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {featuredPost ? (
            <>
              <motion.div
                key={`featured-${featuredPost.slug}`}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                className="mt-9"
              >
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="
                    group/card
                    relative
                    grid
                    overflow-hidden
                    rounded-[24px]
                    border
                    border-[#D7DED8]
                    bg-white
                    shadow-[0_20px_55px_rgba(7,40,33,.06)]

                    transition-all
                    duration-500

                    md:hover:-translate-y-1
                    md:hover:border-[#0B5345]/25
                    md:hover:shadow-[0_28px_70px_rgba(7,40,33,.11)]

                    lg:grid-cols-[1.08fr_.92fr]
                  "
                >
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      left-0
                      top-0
                      z-20

                      hidden
                      h-[3px]
                      w-full

                      origin-left
                      scale-x-0

                      bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                      transition-transform
                      duration-300

                      md:block
                      md:group-hover/card:scale-x-100
                    "
                  />

                  <div className="relative min-h-[280px] overflow-hidden bg-[#DFE7E2] sm:min-h-[350px] lg:min-h-[440px]">
                    <SmartImage
                      src={getPostImage(featuredPost.slug)}
                      alt={featuredPost.title}
                      className="h-full w-full object-cover transition-transform duration-700 md:group-hover/card:scale-[1.035]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(4,28,21,.68)_100%)]" />
                    <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#06271F]/85 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#E4C77D] backdrop-blur-md">
                      <Sparkles size={11} />
                      Featured insight
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-col justify-center p-6 sm:p-9 lg:p-11">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em]">
                      <span className="text-[#0B5345]">
                        {featuredPost.category}
                      </span>
                      <span className="text-[#B1B9B5]">•</span>
                      <span className="text-[#75837E]">
                        {featuredPost.date}
                      </span>
                    </div>

                    <h3 className="mt-5 break-words font-serif text-[clamp(30px,4vw,50px)] font-normal leading-[1.03] tracking-[-.035em]">
                      {featuredPost.title}
                    </h3>

                    <p className="mt-5 line-clamp-4 text-[16px] leading-7 text-[#5E6E68]">
                      {featuredPost.excerpt}
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#DEE3DF] pt-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B5345] text-[12px] font-bold text-white">
                          {featuredPost.author.initials}
                        </span>
                        <div>
                          <p className="text-[13px] font-semibold">
                            {featuredPost.author.name}
                          </p>
                          <p className="mt-0.5 text-[10px] uppercase tracking-[.12em] text-[#7B8883]">
                            {featuredPost.author.role}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#0B5345]">
                        Read insight
                        <ArrowRight
                          size={13}
                          className="transition-transform md:group-hover/card:translate-x-1"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {remainingPosts.length > 0 && (
                <motion.div
                  key={`grid-${activeCategory}`}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.45, delay: 0.06 }}
                  className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                  {remainingPosts.map((post, index) => (
                    <Link
                      to={`/blog/${post.slug}`}
                      key={post.slug}
                      className="
                        group/card
                        relative
                        flex
                        min-w-0
                        flex-col
                        overflow-hidden
                        rounded-[20px]
                        border
                        border-[#D7DED8]
                        bg-white

                        transition-all
                        duration-400

                        md:hover:-translate-y-1
                        md:hover:border-[#0B5345]/30
                        md:hover:shadow-[0_18px_44px_rgba(7,40,33,.09)]
                      "
                    >
                      <span
                        aria-hidden="true"
                        className="
                          pointer-events-none
                          absolute
                          left-0
                          top-0
                          z-20

                          hidden
                          h-[3px]
                          w-full

                          origin-left
                          scale-x-0

                          bg-[linear-gradient(90deg,#0B5345_0%,#69B7A1_60%,#D8B867_100%)]

                          transition-transform
                          duration-300

                          md:block
                          md:group-hover/card:scale-x-100
                        "
                      />

                      <div className="relative aspect-[16/9] overflow-hidden bg-[#DFE7E2]">
                        <SmartImage
                          src={getPostImage(post.slug, index + 1)}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-700 md:group-hover/card:scale-[1.04]"
                        />
                        <span className="absolute left-4 top-4 max-w-[calc(100%-2rem)] rounded-full bg-[#06271F]/88 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.13em] text-white backdrop-blur-md">
                          {post.category}
                        </span>
                      </div>

                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#7B8883]">
                          <CalendarDays size={12} className="text-[#A7802D]" />
                          <span>{post.date}</span>
                          <span className="text-[#BBC1BE]">•</span>
                          <Clock3 size={12} className="text-[#A7802D]" />
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="mt-4 break-words font-serif text-[25px] font-normal leading-[1.08] tracking-[-.025em]">
                          {post.title}
                        </h3>

                        <p className="mt-4 line-clamp-3 text-[15px] leading-6 text-[#64736D]">
                          {post.excerpt}
                        </p>

                        <span className="mt-auto inline-flex items-center gap-2 pt-6 text-[11px] font-extrabold uppercase tracking-[.13em] text-[#0B5345]">
                          Read article
                          <ArrowRight
                            size={12}
                            className="transition-transform md:group-hover/card:translate-x-1"
                          />
                        </span>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </>
          ) : (
            <div className="mt-9 rounded-[20px] border border-[#D7DED8] bg-white p-8 text-center text-[16px] text-[#66756F]">
              No insights are available in this category.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}