
import { useId, useMemo, useState } from "react";

import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  HelpCircle,
  RotateCcw,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

import { governanceFaqs } from
  "@/components/blog/governanceData";

import { getPostBySlug } from "@/data/blogPosts";

/**
 * ORPHEUS FINANCIAL
 *
 * Blog FAQ Section
 *
 * Features:
 * - All 15 original FAQs
 * - 8 Corporate Governance FAQs
 * - 7 UAE Company Law FAQs
 * - Instant question / answer search
 * - Category filtering
 * - One question open at a time
 * - Expand all / Collapse all
 * - Original complete disclaimer
 * - Responsive layout
 *
 * Data is preserved in:
 * components/blog/governanceData.ts
 * data/blogPosts.ts
 */

type FAQCategory =
  | "all"
  | "governance"
  | "uae-law";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "all">;
}

/* ==========================================
   FAQ CATEGORY CONFIGURATION
========================================== */

const FAQ_CATEGORIES = [
  {
    id: "all",
    label: "All questions",
  },
  {
    id: "governance",
    label: "Corporate Governance",
  },
  {
    id: "uae-law",
    label: "UAE Company Law",
  },
] as const;

/**
 * Original data:
 *
 * First 8 = Corporate Governance
 * Last 7 = UAE Company Law
 *
 * No answers are rewritten here.
 */

const ALL_FAQS: FAQItem[] =
  governanceFaqs.map((faq, index) => ({
    id: index,
    question: faq.question,
    answer: faq.answer,
    category:
      index < 8
        ? "governance"
        : "uae-law",
  }));

/* ==========================================
   INDIVIDUAL FAQ COMPONENT
========================================== */

interface FAQAccordionItemProps {
  item: FAQItem;
  expanded: boolean;
  onToggle: () => void;
  idPrefix: string;
}

function FAQAccordionItem({
  item,
  expanded,
  onToggle,
  idPrefix,
}: FAQAccordionItemProps) {
  const questionId =
    `${idPrefix}-question-${item.id}`;

  const answerId =
    `${idPrefix}-answer-${item.id}`;

  const categoryLabel =
    item.category === "governance"
      ? "Corporate Governance"
      : "UAE Company Law";

  return (
    <article
      className={`
        overflow-hidden
        rounded-xl
        border bg-white
        transition-colors
        duration-200

        ${
          expanded
            ? `
              border-[#B9D4C1]
              shadow-[0_5px_18px_rgba(8,45,37,.04)]
            `
            : `
              border-[#DFE7DD]
              hover:border-[#C6D9CA]
            `
        }
      `}
    >
      {/* =====================================
          FAQ QUESTION
      ===================================== */}

      <h3>
        <button
          type="button"
          id={questionId}
          aria-expanded={expanded}
          aria-controls={answerId}
          onClick={onToggle}
          className="
            flex w-full
            items-start gap-4
            px-5 py-4
            text-left
            transition-colors
            hover:bg-[#F8FAF6]
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-[-2px]
            focus-visible:outline-[#0B6450]
            sm:px-6 sm:py-5
          "
        >
          {/* Question icon */}

          <span
            className={`
              flex h-9 w-9
              shrink-0 items-center
              justify-center
              rounded-lg

              ${
                expanded
                  ? "bg-[#0B5345] text-white"
                  : "bg-[#EFF4ED] text-[#0B6450]"
              }
            `}
          >
            <HelpCircle
              size={18}
              aria-hidden="true"
            />
          </span>

          {/* Question content */}

          <span className="min-w-0 flex-1">
            <span
              className="
                block text-[12px]
                font-bold uppercase
                tracking-[0.12em]
                text-[#A48645]
              "
            >
              {categoryLabel}
            </span>

            <span
              className="
                mt-1.5 block
                text-[17px]
                font-semibold
                leading-[1.55]
                text-[#173C31]
                sm:text-[19px]
              "
            >
              {item.question}
            </span>
          </span>

          {/* Expand icon */}

          <ChevronDown
            size={18}
            aria-hidden="true"
            className={`
              mt-2 shrink-0
              text-[#6C8072]
              transition-transform
              duration-200

              ${expanded ? "rotate-180" : ""}
            `}
          />
        </button>
      </h3>

      {/* =====================================
          COMPLETE ORIGINAL ANSWER
      ===================================== */}

      {expanded && (
        <div
          id={answerId}
          role="region"
          aria-labelledby={questionId}
          className="
            border-t border-[#E8EEE7]
            bg-[#FAFBF8]
            px-5 pb-6 pt-5
            sm:px-6
          "
        >
          <div className="flex items-start gap-3">
            <div
              className="
                mt-1 h-5 w-[3px]
                shrink-0
                rounded-full
                bg-[#C4A358]
              "
            />

            <p
              className="
                whitespace-pre-line
                text-[16px]
                leading-[1.85]
                text-[#52665A]
                sm:text-[17px]
              "
            >
              {item.answer}
            </p>
          </div>
        </div>
      )}
    </article>
  );
}

/* ==========================================
   MAIN BLOG FAQ SECTION
========================================== */

export default function BlogFAQSection() {
  const idPrefix = useId().replace(/:/g, "");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [activeCategory, setActiveCategory] =
    useState<FAQCategory>("all");

  /**
   * Set of expanded question IDs.
   *
   * Default:
   * All questions are collapsed to
   * keep the landing page compact.
   */
  const [expandedIds, setExpandedIds] =
    useState<Set<number>>(
      () => new Set()
    );

  /* ==========================================
     ORIGINAL DISCLAIMER
  ========================================== */

  const governancePost = getPostBySlug(
    "corporate-structuring-and-governance"
  );

  const disclaimer = governancePost?.body.find(
    (section) =>
      section.heading.trim().toLowerCase() ===
      "disclaimer"
  );

  /* ==========================================
     SEARCH AND FILTER
  ========================================== */

  const filteredFAQs = useMemo(() => {
    const query =
      searchQuery.trim().toLowerCase();

    return ALL_FAQS.filter((item) => {
      const matchesCategory =
        activeCategory === "all" ||
        item.category === activeCategory;

      /**
       * Search both question and answer.
       */
      const searchableText = [
        item.question,
        item.answer,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        query.length === 0 ||
        searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  /* ==========================================
     CATEGORY COUNTS
  ========================================== */

  const governanceCount =
    ALL_FAQS.filter(
      (item) =>
        item.category === "governance"
    ).length;

  const lawCount =
    ALL_FAQS.filter(
      (item) =>
        item.category === "uae-law"
    ).length;

  /* ==========================================
     EXPANSION HELPERS
  ========================================== */

  const allVisibleExpanded =
    filteredFAQs.length > 0 &&
    filteredFAQs.every((item) =>
      expandedIds.has(item.id)
    );

  const toggleFAQ = (id: number) => {
    setExpandedIds((previous) => {
      /**
       * Keep one question expanded
       * at a time during normal use.
       *
       * Expand All is available below.
       */
      if (previous.has(id)) {
        const next = new Set(previous);
        next.delete(id);
        return next;
      }

      return new Set([id]);
    });
  };

  const toggleAll = () => {
    if (allVisibleExpanded) {
      setExpandedIds(new Set());
      return;
    }

    setExpandedIds(
      new Set(
        filteredFAQs.map((item) => item.id)
      )
    );
  };

  const changeCategory = (
    category: FAQCategory
  ) => {
    setActiveCategory(category);
    setExpandedIds(new Set());
  };

  const changeSearch = (value: string) => {
    setSearchQuery(value);
    setExpandedIds(new Set());
  };

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory("all");
    setExpandedIds(new Set());
  };

  /* ==========================================
     MAIN RENDER
  ========================================== */

  return (
    <section
      id="blog-questions"
      aria-labelledby="blog-faq-heading"
      className="
        scroll-mt-24
        bg-[#F5F7F2]
        py-12
        sm:py-16
      "
    >
       <div
  className="
    mx-auto
    w-full max-w-[1200px]
    px-5
    sm:px-8
    lg:px-10
  "
>
        {/* =====================================
            SECTION HEADER
        ===================================== */}

        <header className="mb-8">
          <div className="flex items-center gap-2">
            <BookOpen
              size={17}
              className="text-[#A48645]"
              aria-hidden="true"
            />

            <p
              className="
                text-[13px]
                font-bold uppercase
                tracking-[0.16em]
                text-[#A48645]
              "
            >
              Knowledge & Guidance
            </p>
          </div>

          <h2
            id="blog-faq-heading"
            className="
              mt-3
              font-serif
              text-[34px]
              leading-[1.2]
              tracking-tight
              text-[#123C30]
              sm:text-[42px]
            "
          >
            Frequently Asked Questions
          </h2>

          <p
            className="
              mt-4
              max-w-[740px]
              text-[16px]
              leading-8
              text-[#66776B]
            "
          >
            Find clear answers to common questions
            about corporate governance, company
            ownership, UAE company law, and
            business succession.
          </p>
        </header>

        {/* =====================================
            MAIN FAQ CONTAINER
        ===================================== */}

        <div
          className="
            rounded-2xl
            border border-[#DFE7DE]
            bg-white
            p-4
            shadow-[0_8px_30px_rgba(8,45,37,.035)]
            sm:p-6
          "
        >
          {/* =====================================
              SEARCH
          ===================================== */}

          <div
            className="
              flex flex-col gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <div className="min-w-0">
              <h3
                className="
                  font-serif
                  text-[26px]
                  text-[#173C31]
                "
              >
                Explore your questions
              </h3>

              <p
                className="
                  mt-1
                  text-[15px]
                  leading-7
                  text-[#79887D]
                "
              >
                Search or browse all{" "}
                {ALL_FAQS.length} questions.
              </p>
            </div>

            {/* Search input */}

            <div className="w-full sm:max-w-[320px]">
              <label
                htmlFor="governance-faq-search"
                className="sr-only"
              >
                Search frequently asked questions
              </label>

              <div
                className="
                  flex h-12
                  items-center gap-3
                  rounded-xl
                  border border-[#DDE6DC]
                  bg-[#FAFBF9]
                  px-4
                  focus-within:border-[#0B6450]
                  focus-within:ring-2
                  focus-within:ring-[#0B6450]/10
                "
              >
                <Search
                  size={17}
                  className="
                    shrink-0 text-[#7F9183]
                  "
                />

                <input
                  id="governance-faq-search"
                  type="search"
                  autoComplete="off"
                  value={searchQuery}
                  onChange={(event) =>
                    changeSearch(event.target.value)
                  }
                  placeholder="Search questions..."
                  className="
                    min-w-0 flex-1
                    bg-transparent
                    text-[15px]
                    text-[#173C31]
                    outline-none
                    placeholder:text-[#92A095]
                  "
                />

                {searchQuery.length > 0 && (
                  <button
                    type="button"
                    aria-label="Clear FAQ search"
                    onClick={() => changeSearch("")}
                    className="
                      rounded-full p-1
                      text-[#7E8D81]
                      hover:bg-[#E9EFE7]
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
              mt-6
              flex flex-wrap
              items-center gap-2
            "
            role="group"
            aria-label="FAQ categories"
          >
            {FAQ_CATEGORIES.map((category) => {
              const active =
                activeCategory === category.id;

              const count =
                category.id === "all"
                  ? ALL_FAQS.length
                  : category.id === "governance"
                    ? governanceCount
                    : lawCount;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    changeCategory(category.id)
                  }
                  className={`
                    inline-flex
                    min-h-[44px]
                    items-center gap-2
                    rounded-full
                    border
                    px-4 py-2
                    text-[14px]
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
                          border-[#DFE7DE]
                          bg-[#F8FAF7]
                          text-[#52665A]
                          hover:border-[#B4CDBC]
                        `
                    }
                  `}
                >
                  {category.label}

                  <span
                    className={`
                      rounded-full
                      px-1.5 py-0.5
                      text-[12px]

                      ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-[#EAF0E8] text-[#65776A]"
                      }
                    `}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =====================================
              RESULTS AND EXPAND CONTROLS
          ===================================== */}

          <div
            className="
              mt-6
              flex flex-wrap
              items-center
              justify-between
              gap-3
              border-b
              border-[#E7EDE5]
              pb-4
            "
          >
            <p
              aria-live="polite"
              className="
                text-[14px]
                text-[#76867A]
              "
            >
              Showing{" "}
              <strong className="text-[#173C31]">
                {filteredFAQs.length}
              </strong>{" "}
              {filteredFAQs.length === 1
                ? "question"
                : "questions"}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {(searchQuery ||
                activeCategory !== "all") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="
                    inline-flex
                    items-center gap-1.5
                    text-[14px]
                    font-semibold
                    text-[#64776A]
                    hover:text-[#0B6450]
                  "
                >
                  <RotateCcw size={14} />
                  Reset
                </button>
              )}

              {filteredFAQs.length > 0 && (
                <button
                  type="button"
                  onClick={toggleAll}
                  className="
                    inline-flex
                    items-center gap-1.5
                    text-[14px]
                    font-semibold
                    text-[#0B6450]
                    hover:text-[#A48645]
                  "
                >
                  {allVisibleExpanded
                    ? "Collapse all"
                    : "Expand all"}

                  <ChevronDown
                    size={15}
                    className={
                      allVisibleExpanded
                        ? "rotate-180"
                        : ""
                    }
                  />
                </button>
              )}
            </div>
          </div>

          {/* =====================================
              FAQ LIST
          ===================================== */}

          {filteredFAQs.length > 0 ? (
            <div className="mt-5 space-y-3">
              {filteredFAQs.map((item) => (
                <FAQAccordionItem
                  key={item.id}
                  item={item}
                  expanded={expandedIds.has(item.id)}
                  onToggle={() =>
                    toggleFAQ(item.id)
                  }
                  idPrefix={idPrefix}
                />
              ))}
            </div>
          ) : (
            /* =================================
                EMPTY SEARCH STATE
            ================================= */

            <div
              className="
                mt-5
                flex flex-col
                items-center
                justify-center
                rounded-xl
                bg-[#F7F9F5]
                px-6 py-12
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
                  text-[26px]
                  text-[#173C31]
                "
              >
                No matching questions
              </h3>

              <p
                className="
                  mt-2 max-w-sm
                  text-[15px]
                  leading-7
                  text-[#748478]
                "
              >
                Try another keyword or select
                a different category.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="
                  mt-5
                  rounded-full
                  bg-[#0B5345]
                  px-5 py-2.5
                  text-[14px]
                  font-semibold
                  text-white
                  hover:bg-[#146D58]
                "
              >
                Show all questions
              </button>
            </div>
          )}
        </div>

        {/* =====================================
            ORIGINAL DISCLAIMER
        ===================================== */}

        {disclaimer && (
          <aside
            aria-labelledby="faq-disclaimer-title"
            className="
              mt-8
              rounded-xl
              border border-[#E0E7DD]
              bg-[#F0F3EC]
              px-5 py-5
              sm:px-7
            "
          >
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={19}
                className="
                  mt-1 shrink-0
                  text-[#0B6450]
                "
                aria-hidden="true"
              />

              <div className="min-w-0">
                <h3
                  id="faq-disclaimer-title"
                  className="
                    text-[16px]
                    font-bold
                    text-[#173C31]
                  "
                >
                  Disclaimer
                </h3>

                {disclaimer.paragraphs.map(
                  (paragraph, index) => (
                    <p
                      key={index}
                      className="
                        mt-2
                        text-[14px]
                        leading-7
                        text-[#6D7C70]
                      "
                    >
                      {paragraph}
                    </p>
                  )
                )}
              </div>
            </div>
          </aside>
        )}

        {/* =====================================
            CONTACT CTA
        ===================================== */}

        <div
          className="
            mt-8
            flex flex-col
            gap-5
            rounded-2xl
            bg-[#0B3329]
            px-6 py-7
            text-white
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8
          "
        >
          <div>
            <p
              className="
                text-[13px]
                font-bold uppercase
                tracking-widest
                text-[#D8B867]
              "
            >
              Orpheus Financial
            </p>

            <h3
              className="
                mt-2
                font-serif
                text-[27px]
                text-white
                sm:text-[30px]
              "
            >
              Still have questions?
            </h3>

            <p
              className="
                mt-2
                max-w-[580px]
                text-[16px]
                leading-7
                text-[#D2E2D6]
              "
            >
              Discuss your company's structure,
              governance, banking or financial
              objectives with our team.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              inline-flex
              min-h-[43px]
              shrink-0
              items-center
              justify-center
              gap-2
              self-start
              rounded-full
              bg-[#D8B867]
              px-5 py-3
              text-[15px]
              font-bold
              text-[#092C24]
              transition-colors
              hover:bg-[#E8CC83]
              sm:self-center
            "
          >
            Speak with our team
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}