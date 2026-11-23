
import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { blogPosts } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

/**
 * ORPHEUS FINANCIAL
 * Blogs & Insights Section
 *
 * Features:
 * - Existing blogPosts.ts data
 * - Dynamic category filters
 * - Instant article search
 * - Responsive article cards
 * - Six articles per page
 * - Previous / Next pagination
 * - Empty state
 * - Existing blog URLs
 *
 * Corporate governance is displayed
 * separately below as the story section.
 */

const ALL_CATEGORY = "All insights";
const POSTS_PER_PAGE = 6;

/* ==========================================
   BLOG IMAGE CONFIGURATION
========================================== */

const blogImages: Record<string, string> = {
  "private-banking-for-founders-in-uae": "/images/Blog_PB_Hero_Threshold.png",

  "mena-startup-funding-october-2026":
    "/images/Blog_Hero_TwoNumbers.png",

  "corporate-structuring-and-governance":
    "/images/Orpheus_Blog_Header_Governance.jpg",

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

function getBlogImage(slug: string): string {
  return blogImages[slug] ?? "/images/entity.jpg";
}

/* ==========================================
   REUSABLE ARTICLE CARD
========================================== */

function BlogCard({ post }: { post: BlogPost }) {
  const articleUrl = `/blog/${post.slug}`;

  return (
    <article
      className="
        group flex h-full min-w-0 flex-col
        overflow-hidden rounded-2xl
        border border-[#DFE6DD]
        bg-white
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#C7D9CB]
        hover:shadow-[0_12px_30px_rgba(8,45,37,.07)]
      "
    >
      {/* ARTICLE IMAGE */}

      <Link
        to={articleUrl}
        aria-label={`Read ${post.title}`}
        className="block overflow-hidden bg-[#EEF2EB]"
      >
        <img
          src={getBlogImage(post.slug)}
          alt=""
          loading="lazy"
          decoding="async"
          onError={(event) => {
            const image = event.currentTarget;

            if (
              !image.src.endsWith("/images/entity.jpg")
            ) {
              image.src = "/images/entity.jpg";
            }
          }}
          className="
            aspect-[16/9] w-full object-cover
            transition-transform duration-500
            group-hover:scale-[1.04]
          "
        />
      </Link>

      {/* CARD CONTENT */}

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* CATEGORY */}

        <p
          className="
            text-[12px] font-bold uppercase
            tracking-[.13em] text-[#A48645]
          "
        >
          {post.category}
        </p>

        {/* TITLE */}

        <h3
          className="
            mt-3 font-serif text-[23px]
            leading-[1.3] text-[#173C31]
            sm:text-[25px]
          "
        >
          <Link
            to={articleUrl}
            className="
              transition-colors
              hover:text-[#0B6450]
            "
          >
            {post.title}
          </Link>
        </h3>

        {/* PUBLICATION DATE AND ESTIMATED READING TIME */}

        <div className="mt-4 mb-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] font-medium text-[#68796D]">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays size={15} className="shrink-0 text-[#A48645]" aria-hidden="true" />
            <span>{post.date}</span>
          </span>
          {post.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={15} className="shrink-0 text-[#A48645]" aria-hidden="true" />
              <span>{post.readTime}</span>
            </span>
          )}
        </div>

        {/* READ ARTICLE */}

        <div
          className="
            mt-auto border-t border-[#EBF0E8] pt-4
          "
        >
          <Link
            to={articleUrl}
            className="
              inline-flex items-center gap-2
              text-[15px] font-semibold
              text-[#0B6450]
              transition-colors
              hover:text-[#A48645]
            "
          >
            Read article
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ==========================================
   MAIN BLOG LIBRARY SECTION
========================================== */

export default function BlogLibrarySection() {
  const [activeCategory, setActiveCategory] =
    useState(ALL_CATEGORY);

  const [searchQuery, setSearchQuery] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  /**
   * Keep the governance article out of
   * the regular cards because its full
   * story appears in the next section.
   *
   * No article data is deleted.
   */
  const regularPosts = useMemo(
    () =>
      blogPosts.filter(
        (post) =>
          post.slug !==
          "corporate-structuring-and-governance"
      ),
    []
  );

  /* ==========================================
     DYNAMIC CATEGORIES
  ========================================== */

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        regularPosts
          .map((post) => post.category.trim())
          .filter(Boolean)
      )
    );

    return [
      ALL_CATEGORY,
      ...uniqueCategories,
    ];
  }, [regularPosts]);

  /* ==========================================
     SEARCH AND CATEGORY FILTER
  ========================================== */

  const filteredPosts = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    return regularPosts.filter((post) => {
      const matchesCategory =
        activeCategory === ALL_CATEGORY ||
        post.category === activeCategory;

      const searchableText = [
        post.title,
        post.excerpt,
        post.category,
        post.author.name,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 ||
        searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [
    regularPosts,
    activeCategory,
    searchQuery,
  ]);

  /* ==========================================
     PAGINATION
  ========================================== */

  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredPosts.length / POSTS_PER_PAGE
    )
  );

  const safePage = Math.min(
    currentPage,
    totalPages
  );

  const startIndex =
    (safePage - 1) * POSTS_PER_PAGE;

  const visiblePosts = filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const hasFilters =
    activeCategory !== ALL_CATEGORY ||
    searchQuery.trim().length > 0;

  /* ==========================================
     EVENTS
  ========================================== */

  const changeCategory = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const changeSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const resetFilters = () => {
    setActiveCategory(ALL_CATEGORY);
    setSearchQuery("");
    setCurrentPage(1);
  };

  const changePage = (page: number) => {
    const nextPage = Math.min(
      Math.max(1, page),
      totalPages
    );

    setCurrentPage(nextPage);

    document
      .getElementById("blog-library-heading")
      ?.scrollIntoView({
        behavior: window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches
          ? "auto"
          : "smooth",
        block: "start",
      });
  };

  return (
    <section
      id="insights"
      aria-labelledby="blog-library-heading"
      className="
        scroll-mt-24
        bg-[#FBFAF6]
        py-12 sm:py-14
      "
    >
      <div
        className="
          mx-auto max-w-[1200px]
          px-5 sm:px-8 lg:px-10
        "
      >

        {/* =====================================
            HEADER AND SEARCH
        ===================================== */}

        <div
          className="
            flex flex-col gap-6
            md:flex-row md:items-end
            md:justify-between
          "
        >
          <div className="max-w-[670px]">
            <p
              className="
                text-[11px] font-bold
                uppercase tracking-[.16em]
                text-[#A48645]
              "
            >
              Explore our insights
            </p>

            <h2
              id="blog-library-heading"
              className="
                mt-2 scroll-mt-28
                font-serif text-[32px]
                leading-tight text-[#123C30]
                sm:text-[38px]
              "
            >
              Latest Articles & Insights
            </h2>

            <p
              className="
                mt-3 text-[16px]
                leading-7 text-[#67786C]
              "
            >
              Practical perspectives on business,
              banking, capital and international
              opportunities.
            </p>
          </div>

          {/* SEARCH */}

          <div className="w-full md:max-w-[310px]">
            <label
              htmlFor="blog-article-search"
              className="sr-only"
            >
              Search articles
            </label>

            <div
              className="
                flex h-11 items-center gap-3
                rounded-xl border
                border-[#DDE5DB]
                bg-white px-4
                focus-within:border-[#0B6450]
                focus-within:ring-2
                focus-within:ring-[#0B6450]/10
              "
            >
              <Search
                size={17}
                className="shrink-0 text-[#849287]"
              />

              <input
                id="blog-article-search"
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  changeSearch(event.target.value)
                }
                placeholder="Search articles..."
                className="
                  min-w-0 flex-1
                  bg-transparent
                  text-[13px] text-[#173C31]
                  outline-none
                  placeholder:text-[#96A298]
                "
              />

              {searchQuery.length > 0 && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => changeSearch("")}
                  className="
                    rounded-full p-1
                    text-[#718175]
                    hover:bg-[#F0F4EE]
                  "
                >
                  <X size={15} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* =====================================
            CATEGORY FILTERS
        ===================================== */}

        <div
          className="
            mt-7 flex flex-wrap
            items-center gap-2
          "
          aria-label="Article category filters"
        >
          {categories.map((category) => {
            const active =
              activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() =>
                  changeCategory(category)
                }
                className={`
                  min-h-[37px]
                  rounded-full border
                  px-4 py-2
                  text-[12px]
                  font-semibold
                  transition-colors
                  ${
                    active
                      ? `
                        border-[#0B5345]
                        bg-[#0B5345]
                        text-white
                      `
                      : `
                        border-[#DEE6DC]
                        bg-white
                        text-[#53685A]
                        hover:border-[#0B5345]
                        hover:text-[#0B5345]
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* =====================================
            RESULT COUNT
        ===================================== */}

        <div
          className="
            mt-7 flex flex-wrap
            items-center justify-between
            gap-3 border-b
            border-[#E4EAE2] pb-4
          "
        >
          <p
            aria-live="polite"
            className="
              text-[12px] text-[#738277]
            "
          >
            Showing{" "}
            <strong className="text-[#173C31]">
              {filteredPosts.length === 0
                ? 0
                : startIndex + 1}
              {"–"}
              {Math.min(
                startIndex + POSTS_PER_PAGE,
                filteredPosts.length
              )}
            </strong>
            {" of "}
            <strong className="text-[#173C31]">
              {filteredPosts.length}
            </strong>
            {" articles"}
          </p>

          {hasFilters && (
            <button
              type="button"
              onClick={resetFilters}
              className="
                inline-flex items-center gap-2
                text-[12px] font-semibold
                text-[#0B6450]
                hover:text-[#A48645]
              "
            >
              <X size={14} />
              Clear filters
            </button>
          )}
        </div>

        {/* =====================================
            ARTICLE GRID
        ===================================== */}

        {visiblePosts.length > 0 ? (
          <div
            className="
              mt-7 grid gap-5
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {visiblePosts.map((post) => (
              <BlogCard
                key={post.slug}
                post={post}
              />
            ))}
          </div>
        ) : (
          /* =================================
              EMPTY RESULTS
          ================================= */

          <div
            className="
              mt-7 flex flex-col
              items-center justify-center
              rounded-2xl border
              border-[#DEE6DD]
              bg-white px-6 py-12
              text-center
            "
          >
            <Search
              size={28}
              className="text-[#0B6450]"
            />

            <h3
              className="
                mt-4 font-serif
                text-[23px] text-[#173C31]
              "
            >
              No articles found
            </h3>

            <p
              className="
                mt-2 max-w-sm
                text-[13px] leading-6
                text-[#728176]
              "
            >
              Try another search keyword
              or select a different category.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="
                mt-5 rounded-full
                bg-[#0B5345]
                px-5 py-2.5
                text-[12px] font-semibold
                text-white
                hover:bg-[#146D58]
              "
            >
              View all articles
            </button>
          </div>
        )}

        {/* =====================================
            PAGINATION
        ===================================== */}

        {totalPages > 1 && (
          <nav
            aria-label="Blog pagination"
            className="
              mt-9 flex flex-wrap
              items-center justify-center
              gap-3
            "
          >
            <button
              type="button"
              aria-label="Previous page"
              disabled={safePage === 1}
              onClick={() =>
                changePage(safePage - 1)
              }
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full border
                border-[#DDE6DB]
                bg-white text-[#0B5345]
                disabled:cursor-not-allowed
                disabled:opacity-40
                hover:enabled:bg-[#F1F5EF]
              "
            >
              <ChevronLeft size={18} />
            </button>

            <span
              className="
                text-[12px] font-semibold
                text-[#53675A]
              "
            >
              Page {safePage} of {totalPages}
            </span>

            <button
              type="button"
              aria-label="Next page"
              disabled={safePage === totalPages}
              onClick={() =>
                changePage(safePage + 1)
              }
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full border
                border-[#DDE6DB]
                bg-white text-[#0B5345]
                disabled:cursor-not-allowed
                disabled:opacity-40
                hover:enabled:bg-[#F1F5EF]
              "
            >
              <ChevronRight size={18} />
            </button>
          </nav>
        )}

      </div>
    </section>
  );
}