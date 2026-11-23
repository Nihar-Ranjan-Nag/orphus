
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Globe2,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

import { Link } from "react-router-dom";

import { getPostBySlug } from "@/data/blogPosts";
import type { BlogPost } from "@/data/blogPosts";

import { GovernanceArticleExtras } from
  "@/components/blog/GovernanceArticleExtras";

/**
 * ORPHEUS FINANCIAL
 *
 * Governance Structure Section
 *
 * Displays the original:
 * 1. Company structure and illustration
 * 2. UAE governance calendar
 * 3. Cross-border governance
 * 4. Family governance and succession
 * 5. Interactive seven-point checklist
 * 6. How Orpheus helps
 *
 * All article text is retrieved from:
 * src/data/blogPosts.ts
 *
 * Existing illustrations and interactive
 * content are reused.
 *
 * Only one topic is displayed at a time.
 * There is no nested scroll container.
 */

type GovernanceSection = BlogPost["body"][number];

/* ==========================================
   TOPIC CONFIGURATION
========================================== */

const governanceTopics = [
  {
    id: "structure",
    title: "Company Structure",
    shortTitle: "Structure",
    heading: "What a well-built structure looks like",
    description:
      "Understand how a clear corporate structure should be organised.",
    icon: Building2,
  },
  {
    id: "calendar",
    title: "Governance Calendar",
    shortTitle: "Calendar",
    heading: "The yearly governance calendar for UAE entities",
    description:
      "Review key governance and compliance obligations.",
    icon: CalendarDays,
  },
  {
    id: "cross-border",
    title: "Cross-Border Governance",
    shortTitle: "Cross-border",
    heading: "What this looks like across borders",
    description:
      "Understand governance across different jurisdictions.",
    icon: Globe2,
  },
  {
    id: "family",
    title: "Family Governance",
    shortTitle: "Family",
    heading:
      "Governance for families: when the structure has to outlive you",
    description:
      "Plan ownership, succession and family responsibilities.",
    icon: HeartHandshake,
  },
  {
    id: "checklist",
    title: "Governance Checklist",
    shortTitle: "Checklist",
    heading:
      "Is your structure running right? A two-minute check",
    description:
      "Complete a practical seven-point governance review.",
    icon: CheckCircle2,
  },
  {
    id: "orpheus",
    title: "How Orpheus Helps",
    shortTitle: "Our Approach",
    heading: "How Orpheus helps",
    description:
      "Understand how Orpheus supports governance and structuring.",
    icon: ShieldCheck,
  },
] as const;

/* ==========================================
   ORIGINAL ARTICLE TEXT
========================================== */

function OriginalSectionContent({
  section,
  isChecklist,
}: {
  section: GovernanceSection;
  isChecklist: boolean;
}) {
  /**
   * The checklist already exists inside
   * GovernanceArticleExtras.
   *
   * Its seven original statements are
   * displayed by that interactive component.
   *
   * We display the original instruction
   * and original concluding guidance here,
   * avoiding duplicate question text.
   */
  const paragraphs = isChecklist
    ? section.paragraphs.filter(
        (_paragraph, index) =>
          index === 0 ||
          index === section.paragraphs.length - 1
      )
    : section.paragraphs;

  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph, index) => {
        const isConclusion =
          isChecklist &&
          index === paragraphs.length - 1 &&
          paragraphs.length > 1;

        if (isConclusion) {
          return (
            <div
              key={index}
              className="
                rounded-xl
                border-l-[3px]
                border-[#C6A357]
                bg-[#F8F5ED]
                px-5 py-4
              "
            >
              <p
                className="
                  text-[15px]
                  leading-7
                  text-[#526357]
                "
              >
                {paragraph}
              </p>
            </div>
          );
        }

        return (
          <p
            key={index}
            className="
              whitespace-pre-line
              text-[16px]
              leading-[1.9]
              text-[#52665A]
              sm:text-[17px]
            "
          >
            {paragraph}
          </p>
        );
      })}
    </div>
  );
}

/* ==========================================
   MAIN COMPONENT
========================================== */

export default function GovernanceStructureSection() {
  const [activeTopic, setActiveTopic] =
    useState(0);

  const governancePost = getPostBySlug(
    "corporate-structuring-and-governance"
  );

  if (!governancePost) {
    return null;
  }

  const currentTopic = governanceTopics[activeTopic];

  const currentSection =
    governancePost.body.find(
      (section) =>
        section.heading === currentTopic.heading
    );

  const CurrentIcon = currentTopic.icon;

  const isChecklist =
    currentTopic.id === "checklist";

  const isLastTopic =
    activeTopic === governanceTopics.length - 1;

  /* ==========================================
     CHANGE TOPIC
  ========================================== */

  const selectTopic = (index: number) => {
    setActiveTopic(index);
  };

  /* ==========================================
     PREVIOUS TOPIC
  ========================================== */

  const previousTopic = () => {
    setActiveTopic((current) =>
      Math.max(0, current - 1)
    );
  };

  /* ==========================================
     NEXT TOPIC
  ========================================== */

  const nextTopic = () => {
    setActiveTopic((current) =>
      Math.min(
        governanceTopics.length - 1,
        current + 1
      )
    );
  };

  return (
    <section
      id="governance-structure"
      aria-labelledby="governance-structure-heading"
      className="
        scroll-mt-24
        bg-[#FBFAF6]
        py-12
        sm:py-16
      "
    >
      <div
        className="
          mx-auto
          max-w-[1200px]
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* =====================================
            SECTION INTRODUCTION
        ===================================== */}

        <header className="mb-8 max-w-[850px]">
          <div className="flex items-center gap-2">
            <Building2
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
              Corporate Structure & Governance
            </p>
          </div>

          <h2
            id="governance-structure-heading"
            className="
              mt-3
              font-serif
              text-[34px]
              leading-[1.16]
              tracking-tight
              text-[#123C30]
              sm:text-[42px]
            "
          >
            What a well-built structure looks like
          </h2>

          <p
            className="
              mt-4
              max-w-[720px]
              text-[16px]
              leading-7
              text-[#66776B]
            "
          >
            Explore how effective company structures,
            governance calendars, cross-border
            responsibilities and succession planning
            work together.
          </p>
        </header>

        {/* =====================================
            MAIN READING CONTAINER
        ===================================== */}

        <div
          className="
            overflow-hidden
            rounded-2xl
            border border-[#DFE7DE]
            bg-white
            shadow-[0_8px_30px_rgba(8,45,37,0.035)]
          "
        >
          {/* =====================================
              TOPIC SELECTOR
          ===================================== */}

          <div
            className="
              border-b border-[#E4EBE3]
              bg-[#F6F8F4]
              px-4 py-4
              sm:px-6
            "
          >
            <p
              className="
                mb-3
                text-[13px]
                font-bold uppercase
                tracking-widest
                text-[#A48645]
              "
            >
              Explore by topic
            </p>

            {/* Horizontal navigation on mobile */}

            <div
              role="group"
              aria-label="Governance topics"
              className="
                flex gap-2
                overflow-x-auto
                pb-1
                [scrollbar-width:thin]
              "
            >
              {governanceTopics.map((topic, index) => {
                const active =
                  activeTopic === index;

                const Icon = topic.icon;

                return (
                  <button
                    key={topic.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() =>
                      selectTopic(index)
                    }
                    className={`
                      inline-flex
                      min-h-[46px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2
                      rounded-lg
                      border
                      px-4 py-2.5
                      text-[14px]
                      font-semibold
                      transition-colors
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                      focus-visible:outline-[#0B6450]
                      ${
                        active
                          ? `
                            border-[#0B5345]
                            bg-[#0B5345]
                            text-white
                          `
                          : `
                            border-[#DEE7DD]
                            bg-white
                            text-[#53675B]
                            hover:border-[#A7C3AE]
                            hover:text-[#0B5345]
                          `
                      }
                    `}
                  >
                    <Icon
                      size={18}
                      aria-hidden="true"
                    />

                    {topic.shortTitle}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =====================================
              SELECTED TOPIC CONTENT
          ===================================== */}

          <div
            className="
              px-5 py-7
              sm:px-8 sm:py-9
              lg:px-11 lg:py-10
            "
          >
            {/* TOPIC HEADER */}

            <div
              className="
                mb-7
                border-b border-[#E8EDE6]
                pb-6
              "
            >
              <div
                className="
                  flex items-start
                  gap-3
                "
              >
                <div
                  className="
                    flex h-11 w-11
                    shrink-0
                    items-center justify-center
                    rounded-xl
                    bg-[#EDF4ED]
                    text-[#0B6450]
                  "
                >
                  <CurrentIcon
                    size={21}
                    aria-hidden="true"
                  />
                </div>

                <div className="min-w-0">
                  <p
                    className="
                      text-[13px]
                      font-bold uppercase
                      tracking-[0.12em]
                      text-[#A48645]
                    "
                  >
                    Topic {activeTopic + 1} of{" "}
                    {governanceTopics.length}
                  </p>

                  <h3
                    className="
                      mt-1
                      font-serif
                      text-[28px]
                      leading-tight
                      text-[#173C31]
                      sm:text-[32px]
                    "
                  >
                    {currentTopic.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      text-[15px]
                      leading-6
                      text-[#748478]
                    "
                  >
                    {currentTopic.description}
                  </p>
                </div>
              </div>
            </div>

            {/* =================================
                COMPLETE ORIGINAL CONTENT
            ================================= */}

            <div
              className="
                mx-auto max-w-[950px]
                [&_p]:!text-[16px]
                sm:[&_p]:!text-[17px]
                [&_p]:!leading-[1.85]
                [&_li]:!text-[16px]
                sm:[&_li]:!text-[17px]
                [&_li]:!leading-[1.85]
                [&_h3]:!text-[26px]
                [&_h4]:!text-[25px]
                [&_td]:!text-[15px]
                [&_th]:!text-[15px]
              "
            >

              {currentSection ? (
                <div>

                  {/* ORIGINAL SECTION HEADING */}

                  {currentTopic.id !== "structure" && (
                    <h4
                    className="
                      mb-5
                      font-serif
                      text-[25px]
                      leading-[1.3]
                      text-[#173C31]
                      sm:text-[27px]
                    "
                  >
                    {currentSection.heading}
                    </h4>
                  )}

                  {/* ORIGINAL PARAGRAPHS */}

                  <OriginalSectionContent
                    section={currentSection}
                    isChecklist={isChecklist}
                  />

                  {/* =================================
                      ORIGINAL STRUCTURE IMAGE,
                      CALENDAR AND CHECKLIST
                  ================================= */}

                  {currentTopic.id !== "orpheus" && (
                    <div className="mt-6">
                      <GovernanceArticleExtras
                        heading={currentSection.heading}
                      />
                    </div>
                  )}

                  {/* =================================
                      HOW ORPHEUS HELPS CTA
                  ================================= */}

                  {currentTopic.id === "orpheus" && (
                    <div
                      className="
                        mt-7
                        flex flex-col gap-5
                        rounded-xl
                        bg-[#0B3329]
                        p-6
                        text-white
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
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

                        <h5
                          className="
                            mt-2 font-serif
                            text-[25px]
                            text-white
                          "
                        >
                          Built right. Run right.
                        </h5>

                        <p
                          className="
                            mt-2
                            text-[15px]
                            leading-6
                            text-[#D6E5DA]
                          "
                        >
                          Discuss your structure,
                          governance and long-term
                          business objectives.
                        </p>
                      </div>

                      <Link
                        to="/contact"
                        className="
                          inline-flex
                          shrink-0
                          items-center
                          justify-center gap-2
                          self-start
                          rounded-full
                          bg-[#D8B867]
                          px-5 py-3
                          text-[14px]
                          font-bold
                          text-[#092C24]
                          transition-colors
                          hover:bg-[#E7CD88]
                          sm:self-center
                        "
                      >
                        Request a private review
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  )}

                </div>
              ) : (
                <p
                  className="
                    rounded-xl
                    border border-[#E4EAE2]
                    bg-[#F7F9F5]
                    p-5
                    text-[15px]
                    text-[#68796D]
                  "
                >
                  Article section unavailable.
                  Please check the section heading
                  in blogPosts.ts.
                </p>
              )}
            </div>

            {/* =====================================
                PREVIOUS / NEXT NAVIGATION
            ===================================== */}

            <div
              className="
                mt-9
                flex flex-wrap
                items-center
                justify-between
                gap-3
                border-t
                border-[#E6ECE4]
                pt-6
              "
            >
              <button
                type="button"
                disabled={activeTopic === 0}
                onClick={previousTopic}
                className="
                  inline-flex
                  items-center gap-2
                  rounded-full
                  border border-[#DDE6DC]
                  px-5 py-2.5
                  text-[14px]
                  font-semibold
                  text-[#0B6450]
                  transition-colors
                  hover:bg-[#F2F6F0]
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                <ArrowLeft size={18} />
                Previous
              </button>

              <p
                className="
                  hidden
                  text-[14px]
                  text-[#809085]
                  sm:block
                "
              >
                {activeTopic + 1} of{" "}
                {governanceTopics.length} topics
              </p>

              {!isLastTopic ? (
                <button
                  type="button"
                  onClick={nextTopic}
                  className="
                    inline-flex
                    items-center gap-2
                    rounded-full
                    bg-[#0B5345]
                    px-5 py-2.5
                    text-[14px]
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#146D58]
                  "
                >
                  Next topic
                  <ArrowRight size={18} />
                </button>
              ) : (
                <a
                  href="#blog-questions"
                  className="
                    inline-flex
                    items-center gap-2
                    rounded-full
                    bg-[#0B5345]
                    px-5 py-2.5
                    text-[14px]
                    font-semibold
                    text-white
                    transition-colors
                    hover:bg-[#146D58]
                  "
                >
                  Common questions
                  <ChevronRight size={16} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* =====================================
            EDITORIAL NOTE
        ===================================== */}

        <p
          className="
            mt-5
            max-w-[900px]
            text-[14px]
            leading-6
            text-[#78877C]
          "
        >
          Information is based on the original
          October 2026 article. Requirements may
          differ by jurisdiction, company structure
          and licensing authority. Verify applicable
          laws and deadlines before acting.
        </p>
      </div>
    </section>
  );
}