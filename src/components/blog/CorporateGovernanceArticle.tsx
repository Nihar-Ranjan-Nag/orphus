
import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

import { GovernanceArticleExtras } from "./GovernanceArticleExtras";

/* =========================================================
   ARTICLE STYLING COMPONENTS
========================================================= */

const contents = [
  { label: "The story", target: "the-email-that-arrived-on-a-tuesday" },
  { label: "Corporate structuring", target: "what-is-corporate-structuring" },
  { label: "Corporate governance", target: "what-is-corporate-governance" },
  { label: "Why both matter", target: "why-the-two-must-work-together" },
  { label: "Three critical moments", target: "the-three-moments-where-structures-break" },
  { label: "UAE governance calendar", target: "the-yearly-governance-calendar-for-uae-entities" },
  { label: "Across borders", target: "what-this-looks-like-across-borders" },
  { label: "Family governance", target: "governance-for-families-when-the-structure-has-to-outlive-you" },
  { label: "The outcome", target: "how-karims-story-ended" },
  { label: "How Orpheus helps", target: "how-orpheus-helps" },
];

function SectionHeading({ children }: { children: ReactNode }) {
  const title = typeof children === "string" ? children : "";
  const id = title.trim().toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-");
  return (
    <h3
      id={id}
      className="group relative mt-7 scroll-mt-7 font-serif text-[27px] font-normal leading-[1.16] tracking-[-.025em] text-[#092F25] sm:mt-9 sm:text-[35px]"
    >
      {children}
    </h3>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h4 className="mt-8 flex items-start gap-3 text-[19px] font-semibold leading-[1.35] text-[#0B5345] sm:text-[22px]">
      <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#CCA950]" />
      <span>{children}</span>
    </h4>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="mt-4 text-[15px] leading-[1.85] text-[#41574D] sm:text-[16px] sm:leading-[1.95]">
      {children}
    </p>
  );
}

function Bullets({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-[1.85] text-[#43544E] marker:text-[#C39C38] sm:text-[16px]">
      {children}
    </ul>
  );
}

function Lesson({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 flex items-start gap-3 rounded-r-xl border-l-[3px] border-[#CCA950] bg-[#F5F0E2] px-4 py-4 text-[15px] font-medium leading-7 text-[#25453A] sm:px-5">
      <ShieldCheck size={19} className="mt-1 shrink-0 text-[#A7802D]" aria-hidden="true" />
      <div>{children}</div>
    </div>
  );
}

/* =========================================================
   COMPLETE GOVERNANCE ARTICLE
========================================================= */

export default function CorporateGovernanceArticle() {
  const readingPanelRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const chooseSection = (index: number) => {
    setActiveIndex(index);
    if (readingPanelRef.current) readingPanelRef.current.scrollTop = 0;
    // At mobile sizes the section should come into view naturally.
    if (window.matchMedia("(max-width: 1023px)").matches) {
      window.requestAnimationFrame(() => {
        document.getElementById("governance-reading-panel")?.scrollIntoView({
          behavior: "smooth", block: "start"
        });
      });
    }
  };

  return (
    <article
      id="corporate-structuring-and-governance"
      className="mx-auto w-full max-w-[1280px] min-w-0 scroll-mt-24"
    >
      {/* SECTION SELECTOR + SINGLE-SECTION READER */}
      <div className="mt-4 grid min-w-0 items-stretch gap-4 sm:gap-5 lg:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="min-w-0 lg:h-[540px]" aria-label="Article contents">
          <nav className="h-full rounded-[22px] border border-[#DCE5DE] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(8,45,37,.045)] sm:px-6 sm:py-5 lg:px-5 xl:px-6">
            <p className="mb-3 text-[12px] font-extrabold uppercase tracking-[.15em] text-[#A7802D]">On this page</p>
            <div className="grid gap-1 sm:grid-cols-2 sm:gap-2 lg:grid-cols-1 lg:gap-1.5">
              {contents.map((item, index) => (
                <button
                  key={item.target}
                  type="button"
                  onClick={() => chooseSection(index)}
                  aria-current={activeIndex === index ? "step" : undefined}
                  className={`group flex w-full items-center gap-2.5 rounded-lg border px-2.5 py-2 text-left text-[14px] leading-[1.25] transition-colors sm:text-[14px] lg:py-2.5 ${activeIndex === index ? "border-[#CFDFD4] bg-[#EAF3ED] font-semibold text-[#07382E]" : "border-transparent text-[#50665B] hover:border-[#E4EAE4] hover:bg-[#F3F7F2]"}`}
                >
                  <span className="shrink-0 font-bold text-[#AA812B]">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </nav>
        </aside>

        <div id="governance-reading-panel" className="min-w-0 scroll-mt-28 overflow-hidden rounded-[22px] border border-[#DFE7E0] bg-white shadow-[0_10px_35px_rgba(8,45,37,.045)] lg:h-[540px] lg:flex lg:flex-col">
          <div className="border-b border-[#E3EAE4] bg-[#FAFBF8] px-6 py-2.5 sm:px-10 sm:py-3 lg:px-12 lg:py-2.5 xl:px-14">
            <p className="text-[11px] font-bold uppercase tracking-[.13em] text-[#A7802D]">Chapter {String(activeIndex + 1).padStart(2, "0")} of {contents.length}</p>
            <p className="mt-0.5 font-serif text-[17px] leading-tight text-[#07382E] sm:text-[19px]">{contents[activeIndex].label}</p>
          </div>
          <div
            ref={readingPanelRef}
            role="region"
            aria-live="polite"
            aria-label={contents[activeIndex].label}
            tabIndex={0}
            className="min-w-0 px-6 pb-9 [&_section>h3:first-child]:mt-5 sm:px-10 lg:min-h-0 lg:flex-1 lg:overflow-y-auto lg:overscroll-contain lg:px-12 xl:px-14 2xl:px-16 [scrollbar-width:thin] [scrollbar-color:#BECFC3_transparent] [&_img]:max-w-full [&_img]:h-auto [&_pre]:overflow-x-auto"
          >
          {/* The article body is kept complete below. */}

          {activeIndex === 0 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 1 */}

        <SectionHeading>
          The email that arrived on a Tuesday
        </SectionHeading>

        <Paragraph>
          It came from the bank, three years after everything
          had been set up perfectly.
        </Paragraph>

        <blockquote
          className="
            my-7 rounded-r-xl border-l-4
            border-[#C7A34A]
            bg-[#F1F5F0] px-4 py-5
            text-[15px] italic
            leading-8 text-[#30443D]
            sm:px-6 sm:text-[16px]
          "
        >
          “As part of our periodic review, please provide
          updated ownership documents, board resolutions for
          the last two financial years, and evidence of the
          company's activities. Failure to respond within
          30 days may result in restrictions on the account.”
        </blockquote>

        <Paragraph>
          Let's call the founder Karim. He is a composite of
          the people we meet every month, and his story is
          common enough that you may recognise parts of it.
        </Paragraph>

        <Paragraph>
          Karim had done things properly. A UAE holding
          company. A free zone trading company beneath it.
          A separate entity for the family's Dubai apartment.
          A lawyer drew the chart, the licences arrived,
          the bank accounts opened. On paper, it was clean.
        </Paragraph>

        <Paragraph>
          Then life happened. A partner left and his shares
          were bought back, but nobody updated the register.
          Board decisions were made on WhatsApp calls from
          three countries and never written down. A licence
          renewal slipped by a few weeks. The corporate tax
          registration was done for one entity and forgotten
          for another.
        </Paragraph>

        <Paragraph>
          None of it felt urgent. Until the email.
        </Paragraph>

        <Paragraph>
          This article is about the difference between a
          structure that was <strong>built right</strong> and
          one that is <strong>run right</strong>. The first
          is corporate structuring. The second is corporate
          governance. You need both, and most people only
          pay attention to the first.
        </Paragraph>

        {/* =================================================
            SUMMARY
        ================================================= */}

        <div
          className="
            mt-9 rounded-[18px]
            border border-[#D9E5DA]
            bg-[#F3F7F1]
            px-5 py-6
            sm:px-8 sm:py-8
          "
        >
          <h3
            className="
              text-[20px]
              font-semibold
              text-[#082820]
            "
          >
            In short
          </h3>

          <ul
            className="
              mt-5 list-disc
              space-y-3 pl-5
              text-[15px]
              leading-8
              text-[#33483F]
              marker:text-[#0B5345]
            "
          >
            <li>
              <strong>Corporate structuring</strong> is how
              your companies are arranged: which entities
              exist, where they sit, and who owns what.
            </li>

            <li>
              <strong>Corporate governance</strong> is how
              those entities are run every year: decisions,
              records, filings and renewals.
            </li>

            <li>
              Structures rarely fail at setup. They drift
              afterwards, usually at three moments: the
              first filing year, the first bank review,
              and the first big life change.
            </li>

            <li>
              In the UAE, every entity carries its own
              yearly obligations, even an SPV with no staff.
            </li>

            <li>
              One owner and one calendar across the whole
              structure is what keeps it credible to banks,
              regulators and investors.
            </li>
          </ul>
        </div>


            </section>
          )}
          {activeIndex === 1 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 2 */}

        <SectionHeading>
          What is corporate structuring?
        </SectionHeading>

        <Paragraph>
          Corporate structuring is the way you arrange your
          companies so that each one has a clear job. One
          entity trades. Another holds shares. Another owns
          a property or ring-fences a single deal. Another
          protects family wealth for the next generation.
        </Paragraph>

        <Paragraph>
          A good structure answers four questions before
          a single licence is issued:
        </Paragraph>

        <ol
          className="
            mt-5 list-decimal
            space-y-4 pl-6
            text-[15px]
            leading-[1.85]
            text-[#43544E]
            marker:font-semibold
            marker:text-[#0B5345]
            sm:text-[16px]
          "
        >
          <li>
            <strong>What is each entity for?</strong>{" "}
            Operating, holding, owning an asset, or
            protecting wealth.
          </li>

          <li>
            <strong>Where should it sit?</strong>{" "}
            Chosen for banking access, treaty networks and
            substance requirements, not the headline tax
            rate alone.
          </li>

          <li>
            <strong>Who owns and controls it?</strong>{" "}
            Ownership lines a bank compliance officer can
            follow in minutes.
          </li>

          <li>
            <strong>How will it grow?</strong>{" "}
            Room for new investors, new assets or new family
            members without rebuilding everything.
          </li>
        </ol>


            </section>
          )}
          {activeIndex === 2 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 3 */}

        <SectionHeading>
          What is corporate governance?
        </SectionHeading>

        <Paragraph>
          Corporate governance is everything that keeps
          those entities credible after day one. It is the
          board meeting that gets minuted. The register
          that is updated when a shareholder changes. The
          licence renewed before it lapses. The tax return
          filed for every entity, not just the busy one.
        </Paragraph>

        <Paragraph>
          If structuring is the architecture of a building,
          governance is the maintenance. Nobody notices
          it when it is done well. Everybody notices when
          it is not.
        </Paragraph>


            </section>
          )}
          {activeIndex === 3 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 4 */}

        <SectionHeading>
          Why the two must work together
        </SectionHeading>

        <Paragraph>
          Regulators, tax authorities and especially banks
          now judge a structure by how it operates, not just
          how it was drawn. A beautifully designed group with
          missing minutes and stale registers looks, to a
          compliance team, exactly like a structure with
          something to hide. That is why Karim's email
          arrived.
        </Paragraph>


            </section>
          )}
          {activeIndex === 4 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 5 */}

        <SectionHeading>
          The three moments where structures break
        </SectionHeading>

        <Paragraph>
          Karim's structure did not fail on one day. It
          drifted, quietly, through three moments that
          almost every cross-border business goes through.
        </Paragraph>

        <SubHeading>
          Moment 1: The first filing year
        </SubHeading>

        <Paragraph>
          The excitement of setup fades and the calendar
          takes over. Each entity now has its own licence
          renewal, its own corporate tax registration and
          return, its own accounting records, and sometimes
          its own audit. They fall due on different dates,
          sometimes in different countries.
        </Paragraph>

        <Paragraph>
          Karim's accountant handled the trading company
          well. The holding company, which had no revenue,
          slipped through. “It doesn't do anything, so it
          doesn't need anything,” he assumed. In the UAE,
          that is not how it works: every juridical person
          registers and files for corporate tax, even with
          nothing to report.
        </Paragraph>

        <Lesson>
          The lesson: a quiet entity is not an exempt entity.
        </Lesson>

        <SubHeading>
          Moment 2: The first bank review
        </SubHeading>

        <Paragraph>
          Banks review corporate clients periodically, and
          more often when ownership is spread across borders.
          They want the current shareholder register, the
          ultimate beneficial owners, recent board resolutions
          and evidence that the company does what it says
          it does.
        </Paragraph>

        <Paragraph>
          This is where governance gaps become visible. The
          partner who left was still on the register. The
          decisions behind a large transfer were never
          minuted. The documents no longer matched the
          structure the bank had approved.
        </Paragraph>

        <Lesson>
          The lesson: your bank remembers the structure you
          showed it. Your records need to keep up.
        </Lesson>

        <SubHeading>
          Moment 3: The first big life change
        </SubHeading>

        <Paragraph>
          A new investor. The sale of a property. A child
          joining the business. A health scare that makes
          everyone ask, quietly, what happens next.
        </Paragraph>

        <Paragraph>
          These are the moments a structure is supposed to
          make easy. Instead, Karim discovered that nobody
          could say with certainty who controlled what,
          because the paperwork had stopped at year one.
        </Paragraph>

        <Lesson>
          The lesson: a structure's real test is not the
          day it is created. It is the day something changes.
        </Lesson>


            </section>
          )}
          {activeIndex === 5 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 7 */}

        <SectionHeading>
          The yearly governance calendar for UAE entities
        </SectionHeading>

        <Paragraph>
          This is what “running a structure right” looks
          like in practice. Every line applies per entity,
          so a group of four companies carries four sets
          of obligations.
        </Paragraph>

        <GovernanceArticleExtras
          heading="The yearly governance calendar for UAE entities"
        />


            </section>
          )}
          {activeIndex === 6 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 8 */}

        <SectionHeading>
          What this looks like across borders
        </SectionHeading>

        <Paragraph>
          Add a foreign holding company, a BVI vehicle or
          a family foundation, and each one brings its own
          registry, its own deadlines and its own regulator.
          This is where most groups lose the thread: not
          because any single obligation is hard, but because
          nobody holds all of them in one place.
        </Paragraph>


            </section>
          )}
          {activeIndex === 7 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 9 */}

        <SectionHeading>
          Governance for families: when the structure
          has to outlive you
        </SectionHeading>

        <Paragraph>
          For families, governance has a second job. It is
          not only about staying compliant. It is about
          making sure the people you care about inherit
          clarity instead of confusion.
        </Paragraph>

        <Paragraph>
          Three tools do most of the work:
        </Paragraph>

        <Bullets>
          <li>
            <strong>A foundation or trust at the top,</strong>{" "}
            so ownership does not depend on one person's
            estate. A foundation has no shareholders and
            is governed by its charter and by-laws.
          </li>

          <li>
            <strong>A written succession plan,</strong>{" "}
            covering who takes decisions if the founder
            cannot, and how shares or benefits pass to the
            next generation.
          </li>

          <li>
            <strong>A family charter or shareholder
            agreement,</strong>{" "}
            setting out how family members join the business,
            how disputes are resolved, and how value is shared.
          </li>
        </Bullets>

        <Paragraph>
          None of these work if the entities beneath them
          are out of date. A foundation that owns a holding
          company with a stale register is a clear plan
          sitting on top of an unclear group.
        </Paragraph>


            </section>
          )}
          {activeIndex === 8 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 10 */}

        <SectionHeading>
          How Karim's story ended
        </SectionHeading>

        <Paragraph>
          Karim answered the bank, eventually. It took six
          weeks, two lawyers and a great deal of stress to
          rebuild three years of missing records.
        </Paragraph>

        <Paragraph>
          Then he did what he should have done on day one.
          Every entity was mapped on one page, with a clear
          job. The registers were brought up to date. Past
          board decisions were properly ratified. One
          governance calendar now covers every licence,
          filing and renewal across the group, with one
          person accountable for it.
        </Paragraph>

        <Paragraph>
          When the next bank review arrived, it took two days.
        </Paragraph>

        <Paragraph>
          The structure did not change much. What changed
          was that it was finally being run, not just owned.
        </Paragraph>


            </section>
          )}
          {activeIndex === 9 && (
            <section className="min-w-0 pb-6">
        {/* SECTION 12 */}

        <SectionHeading>
          How Orpheus helps
        </SectionHeading>

        <Paragraph>
          Orpheus Financial designs cross-border structures
          and then stays with them. Across 18 jurisdictions,
          we establish the entities, holding companies and
          ownership structures that families, investors and
          businesses need, and we manage the governance,
          compliance and statutory obligations that keep
          them credible year after year.
        </Paragraph>

        <Paragraph>
          That means one partner who holds the whole picture:
          the structure chart, the calendar, the registers
          and the relationship with your banks.
        </Paragraph>

        <Paragraph>
          Orpheus is also the structuring partner for
          LuxuryProperty.com Wealth Management, where clients
          can access global corporate structuring and family
          office structuring alongside their property, wealth
          and succession planning.
        </Paragraph>

        <Paragraph>
          <strong>
            Built right. Run right. Request a private review
            with Orpheus.
          </strong>
        </Paragraph>

        <GovernanceArticleExtras
          heading="How Orpheus helps"
        />


            </section>
          )}
          </div>
        </div>
      </div>

      {/* Size the chart within a single desktop viewport; retain legibility on phones. */}
      <style>{`
        #governance-group-structure .governance-structure-graphic img,
        #governance-group-structure .governance-structure-graphic svg {
          display: block;
          width: auto;
          max-width: 100%;
          height: auto;
          margin-inline: auto;
          object-fit: contain;
        }
        @media (min-width: 768px) {
          #governance-group-structure .governance-structure-graphic img,
          #governance-group-structure .governance-structure-graphic svg {
            max-height: min(48vh, 420px) !important;
          }
        }
        @media (max-width: 767px) {
          #governance-group-structure .governance-structure-graphic img,
          #governance-group-structure .governance-structure-graphic svg {
            width: 100%;
            max-height: none;
          }
        }
      `}</style>

      {/* GROUP STRUCTURE — DEDICATED FULL-WIDTH SECTION */}
      <section
        id="governance-group-structure"
        className="mt-8 min-w-0 rounded-[22px] border border-[#DCE5DE] bg-white px-6 pb-8 pt-2 shadow-[0_8px_24px_rgba(8,45,37,.04)] sm:px-10 sm:pb-10 lg:px-12 xl:px-14 2xl:px-16"
      >

        {/* SECTION 6 */}

        <SectionHeading>
          What a well-built structure looks like
        </SectionHeading>

        <Paragraph>
          Here is the shape Karim's group should have had
          from day one, with each entity doing exactly
          one job.
        </Paragraph>

        {/* Keep the structure chart visible without occupying multiple desktop screens. */}
        <div className="governance-structure-graphic mt-5 w-full min-w-0 overflow-hidden rounded-xl [&_img]:mx-auto [&_img]:block [&_img]:h-auto [&_img]:max-w-full [&_svg]:mx-auto [&_svg]:block [&_svg]:max-w-full">
          <GovernanceArticleExtras
            heading="What a well-built structure looks like"
          />
        </div>

        <Paragraph>
          Control and succession sit in the foundation,
          management in the holding company, and risk in
          separate vehicles. The governance layer underneath
          is what most groups forget to build.
        </Paragraph>


      </section>

      {/* FREQUENTLY ASKED QUESTIONS — FULL WIDTH BELOW THE READER */}
      <section id="governance-faqs" className="mt-8 min-w-0 rounded-[22px] border border-[#DCE5DE] bg-white px-6 pb-8 pt-2 shadow-[0_8px_24px_rgba(8,45,37,.04)] sm:px-10 sm:pb-10 lg:px-12 xl:px-14 2xl:px-16">
        {/* SECTION 13 */}

        <SectionHeading>
          Frequently asked questions
        </SectionHeading>

        <GovernanceArticleExtras
          heading="Frequently asked questions"
        />

        {/* DISCLAIMER */}

        <div
          className="
            mt-12 rounded-xl
            border border-[#D9E0D9]
            bg-[#F8FAF7] px-4 py-5 sm:px-6
          "
        >
          <p
            className="
              text-[17px] leading-7
              text-[#738079]
            "
          >
            <strong className="text-[#365247]">
              Disclaimer:
            </strong>{" "}
            This article is for general informational
            purposes only and does not constitute legal,
            tax, or financial advice. Regulations are subject
            to change, and you should consult with a qualified
            professional regarding your specific corporate
            structure.
          </p>
        </div>

        

         
      </section>
    </article>
  );
}