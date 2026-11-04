
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Scale,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
 
const changes = [
  {
    title: "Move your company without starting over",
    law: "Article 15 bis",
    paragraphs: [
      "Under the new Article 15 bis, a company can transfer its registration from one licensing authority to another: between emirates, between free zones, and between a free zone and the mainland. It does this without liquidation. The company keeps its legal personality, rights, obligations and contracts. Its licences are a separate matter: the licensed activities move only with the approval of the new authority, which may issue or amend licences under its own rules.",
    ],
    example:
      "A consultancy formed in a free zone now earns most of its revenue onshore. Before, it would have closed and re-formed, opening new bank accounts and re-signing contracts. Re-domiciliation is designed to let it move as the same company.",
    fine:
      "The move needs a special resolution or the required shareholder majority, approval from both the current and new authority, compatible registration systems, no blocks on the company's record, and publication of the decision. Procedures have been published for some transfer types but not all, and moves involving DIFC or ADGM follow their own registrar rules. Confirm the route with both authorities before planning around it.",
  },
  {
    title: "Give investors different rights from founders",
    law: "Article 76",
    paragraphs: [
      "Mainland LLCs may now issue different classes of shares, for example with different voting, dividend, redemption or liquidation rights. Before, multiple share classes were essentially limited to public joint stock companies.",
    ],
    example:
      "Two founders want growth capital. The investor wants a priority return on a sale; the founders want to keep voting control. Share classes let one company carry both arrangements.",
    fine:
      "The permitted classes and conditions are set by Cabinet decision, and each class must be recorded with the registry. Not every investor term used abroad will automatically fit. Check what your authority currently accepts before you promise terms to an investor.",
  },
  {
    title: "Agree exits before anyone needs one",
    law: "Article 14",
    paragraphs: [
      "The law now expressly recognises drag-along rights (majority owners can require minority owners to join a sale on agreed conditions) and tag-along rights (minority owners can join a sale on the same terms). LLCs can include them in the memorandum of association; private joint stock companies in their articles.",
    ],
    example:
      "A buyer wants 100% of a company. Without a drag-along clause, one small shareholder can block the deal.",
    fine:
      "Recognition in the law does not make every clause enforceable. The wording must be properly drafted, included in the constitutional documents, and, in an LLC, work alongside the statutory pre-emption rights other partners have. Many groups also back these clauses with a shareholders' agreement.",
  },
  {
    title: "Plan for a partner's death",
    law: "Article 14",
    paragraphs: [
      "LLCs and private joint stock companies can now agree in advance what happens to a shareholder's stake when they die, including a priority right for the company or the remaining partners to buy it at an agreed price. If the heirs dispute the value, it can be set through a court-appointed valuation.",
    ],
    example:
      "One of three partners passes away. Because the documents already say who may buy the shares and how the price is agreed, the remaining partners and the family start from a clear process instead of a blank page. That can reduce uncertainty, although disagreements over value or inheritance can still arise.",
    fine:
      "These clauses govern who ends up holding the shares, not who is entitled to their value. Inheritance rights under the applicable law still apply, and a dispute over valuation can take time. Pair the company clause with personal estate planning.",
  },
  {
    title: "Clear rules for free zone companies working onshore",
    law: "Articles 3, 5, 9",
    paragraphs: [
      "The law confirms that companies incorporated in UAE free zones, including financial free zones, hold UAE nationality. Where a free zone company operates on the mainland through a branch or representative office, the Commercial Companies Law applies to that onshore activity.",
    ],
    fine:
      "This does not move the whole company under mainland law. Activity inside the free zone remains governed by free zone rules. Treat it as a reason to check your onshore branch, not a change to your free zone licence.",
  },
  {
    title:
      "Raise money privately as a private joint stock company",
    law: "Articles 32, 266",
    paragraphs: [
      "Under Article 32, private joint stock companies may offer securities by private placement, under controls set by the Securities and Commodities Authority (SCA).",
      "The amendments also shortened the lock-up on founders selling shares in a private joint stock company. According to the Ministry of Economy and Tourism, that period can be reduced further or waived by ministerial decision, and it does not apply where shares are offered by private placement or listed on a UAE financial market. The exact conditions are set by the amended Article 266 and SCA rules.",
    ],
    fine:
      "The SCA sets the conditions for private placement, and law firm commentary reads the exemption narrowly, as applying where shares are both privately placed and listed. Confirm the exact conditions with counsel and the SCA before planning a raise around it.",
  },
  {
    title:
      "Convert from LLC to joint stock company more easily",
    law: "Article 275",
    paragraphs: [
      "The conversion process is simpler. The company keeps its legal personality, and its existing management can oversee the conversion unless the general assembly decides otherwise, instead of forming a separate founders' committee.",
    ],
    fine:
      "Conversion is not automatic. It still needs shareholder approval and must follow the Ministry of Economy and Tourism or SCA procedures.",
  },
];

const overview = [
  [
    "Re-domiciliation",
    "Article 15 bis",
    "Depends on authority procedures",
    "Groups across several authorities",
  ],
  [
    "LLC share classes",
    "Article 76",
    "Depends on Cabinet rules",
    "Founders raising capital, family businesses",
  ],
  [
    "Drag and tag rights",
    "Article 14",
    "In force; drafting matters",
    "Joint ventures, investor-backed companies",
  ],
  [
    "Buy-out on a partner's death",
    "Article 14",
    "In force; drafting matters",
    "Family and multi-founder businesses",
  ],
  [
    "Free zone companies onshore",
    "Articles 3, 5, 9",
    "In force",
    "Free zone companies with mainland branches",
  ],
  [
    "Private placement for private JSCs",
    "Articles 32, 266",
    "Depends on SCA rules",
    "Companies planning a funding round",
  ],
  [
    "LLC to JSC conversion",
    "Article 275",
    "In force; procedures apply",
    "Companies preparing for a listing",
  ],
];

const checklists = [
  {
    title: "If you have investors, or plan to raise",
    items: [
      "Review your memorandum for exit clauses and how they sit with pre-emption rights",
      "Ask whether share classes are available for your company yet",
    ],
  },
  {
    title: "If you run a family business or have several founders",
    items: [
      "Add a buy-out clause for a partner's death",
      "Align it with each partner's personal estate planning",
    ],
  },
  {
    title: "If you are a free zone company with mainland clients",
    items: [
      "Check your onshore branch or office against mainland requirements",
      "Ask both authorities whether re-domiciliation is available for your route",
    ],
  },
  {
    title: "For every company",
    items: [
      "Map every entity, its authority and its purpose on one page",
      "Confirm your corporate tax registration and filings with the Federal Tax Authority",
    ],
  },
];

export default function UAELawArticle() {
  return (
    <article
      id="uae-company-law-guide"
      aria-labelledby="uae-company-law-title"
      className="scroll-mt-28 overflow-hidden rounded-[22px] border border-[#D9E2DA] bg-white shadow-[0_16px_45px_rgba(7,40,33,.055)]"
    >
      {/* ARTICLE HEADER */}

      <header className="relative overflow-hidden bg-[#092C24] px-6 py-10 text-white sm:px-9 sm:py-12 lg:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full border border-[#D8B867]/20"
        />

        <p className="relative text-[11px] font-extrabold uppercase tracking-[.16em] text-[#D8B867]">
          Insights · UAE Company Law
        </p>

        
<h2
  id="uae-company-law-title"
  className="
    relative mt-4 w-full
    font-serif text-[32px]
    leading-[1.12] tracking-[-.035em]
    sm:text-[42px] lg:text-[54px]
  "
>
  The UAE changed its company law.

  <span
    className="
      mt-3 block
      text-[24px] italic text-[#D8B867]
      leading-[1.2]
      sm:text-[32px]
      lg:whitespace-nowrap lg:text-[38px]
      xl:text-[42px]
    "
  >
    7 things you can now do with your business
  </span>
</h2>


        <p className="relative mt-5 text-[12px] font-semibold text-[#D5E4DD]">
          By Orpheus Financial · Updated 30 October 2026
        </p>
      </header>

      <div className="mx-auto max-w-[1000px] space-y-9 px-5 py-9 text-[15px] leading-[1.85] text-[#394F46] sm:px-9 lg:px-12">
        {/* INTRODUCTION */}

        <section
          className="space-y-4"
          aria-label="Introduction"
        >
          <p>
            A free zone company grows. Most of its clients
            are now on the mainland. The founders want to
            bring in an investor, and one of them is quietly
            thinking about what happens to his shares if
            something happens to him.
          </p>

          <p>
            For years, each of those questions had an
            awkward answer in the UAE. Moving meant closing
            one company and forming another. Investor rights
            in an LLC were hard to tailor. Succession was
            often left to chance.
          </p>

          <p>
            <strong className="text-[#10382C]">
              Federal Decree-Law No. 20 of 2025
            </strong>{" "}
            changed that. It amends the UAE Commercial
            Companies Law (Federal Decree-Law No. 32 of 2021),
            was issued on 1 October 2025 and published in the
            Federal Gazette on 14 October 2025. Here is what
            it lets your business do, and where the fine
            print still matters.
          </p>
        </section>

        {/* SHORT SUMMARY */}

        <section
          className="border-l-4 border-[#0B634F] bg-[#F4F4EE] px-5 py-5 sm:px-7"
          aria-label="The short version"
        >
          <h3 className="mb-3 font-serif text-[25px] text-[#10382C]">
            The short version
          </h3>

          <ul className="list-disc space-y-2 pl-5">
            <li>
              Companies can move their registration between
              emirates, free zones and the mainland while
              keeping the same legal identity, where both
              authorities allow it.
            </li>
            <li>
              Mainland LLCs can create different share
              classes, within rules set by the Cabinet.
            </li>
            <li>
              Drag-along, tag-along and buy-out rights on a
              partner's death can now be written into
              company documents.
            </li>
            <li>
              Free zone companies operating onshore follow
              mainland company law for that onshore activity.
            </li>
            <li>
              Several changes depend on further rules from
              the Cabinet, the securities regulator or your
              licensing authority.
            </li>
          </ul>
        </section>

        {/* NAVIGATION */}

        <nav
          aria-label="Article sections"
          className="flex flex-wrap gap-2"
        >
          {changes.map((change, i) => (
            <a
              key={change.title}
              href={`#uae-law-change-${i + 1}`}
              className="rounded-full border border-[#D7E2D8] px-3 py-1.5 text-[12px] font-bold text-[#0B5345] transition-colors hover:bg-[#EDF5ED]"
            >
              {String(i + 1).padStart(2, "0")}
              {" · "}
              {change.law}
            </a>
          ))}
        </nav>

       
{/* =====================================================
    SEVEN COMPANY LAW CHANGES
    COLLAPSIBLE ARTICLE ACCORDION
===================================================== */}

<section
  aria-label="Seven UAE company law changes"
  className="space-y-3"
>
  {changes.map((change, i) => (
    <details
      key={change.title}
      id={`uae-law-change-${i + 1}`}
      className="
        group min-w-0
        scroll-mt-28
        overflow-hidden
        rounded-[16px]
        border border-[#DCE5DE]
        bg-white
        transition-all duration-300
        open:border-[#B9D4C5]
        open:shadow-[0_12px_32px_rgba(8,45,37,.07)]
      "
    >
      {/* COLLAPSED HEADER — ALWAYS VISIBLE */}

      <summary
        className="
          flex cursor-pointer
          list-none items-center
          gap-3 p-4
          transition-colors duration-200
          hover:bg-[#F6F8F4]
          focus-visible:outline
          focus-visible:outline-2
          focus-visible:outline-[#0B5345]
          group-open:bg-[#F4F7F2]
          sm:gap-5 sm:px-6 sm:py-5
          [&::-webkit-details-marker]:hidden
        "
      >
        {/* ARTICLE NUMBER */}

        <span
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-xl
            bg-[#0B5345]
            text-[13px] font-bold
            text-[#E0C477]
            sm:h-12 sm:w-12
            sm:text-[14px]
          "
        >
          {String(i + 1).padStart(2, "0")}
        </span>

        {/* TITLE AND ARTICLE REFERENCE */}

        <span className="min-w-0 flex-1">
          <span
            className="
              mb-1 block
              text-[10px] font-extrabold
              uppercase tracking-[.13em]
              text-[#A7802D]
              sm:text-[11px]
            "
          >
            {change.law}
          </span>

          <span
            className="
              block font-serif
              text-[20px] font-normal
              leading-[1.2]
              tracking-[-.02em]
              text-[#0A3026]
              sm:text-[25px]
              lg:text-[27px]
            "
          >
            {change.title}
          </span>
        </span>

        {/* DROPDOWN ARROW */}

        <span
          className="
            flex h-10 w-10 shrink-0
            items-center justify-center
            rounded-full
            border border-[#D4E1D7]
            bg-white
            text-[#0B5345]
            transition-all duration-300
            group-hover:border-[#0B5345]
            group-hover:bg-[#EAF2EC]
          "
          aria-hidden="true"
        >
          <ChevronDown
            size={20}
            strokeWidth={2}
            className="
              transition-transform duration-300
              group-open:rotate-180
            "
          />
        </span>
      </summary>

      {/* EXPANDED ARTICLE DETAILS */}

      <div
        className="
          border-t border-[#E2E9E2]
          px-5 pb-7 pt-6
          sm:px-8 sm:pb-8
        "
      >
        {/* MAIN ARTICLE EXPLANATION */}

        <div
          className="
            space-y-4
            text-[15px]
            leading-[1.85]
            text-[#394F46]
            sm:text-[16px]
          "
        >
          {change.paragraphs.map((paragraph, j) => (
            <p key={j}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* PRACTICAL EXAMPLE */}

        {change.example && (
          <div
            className="
              mt-5
              rounded-xl
              border border-[#E5EAE1]
              bg-[#FAFBF8]
              px-5 py-4
            "
          >
            <p
              className="
                text-[15px]
                leading-[1.85]
                text-[#394F46]
                sm:text-[16px]
              "
            >
              <strong className="font-bold text-[#0B5345]">
                Picture this:{" "}
              </strong>

              {change.example}
            </p>
          </div>
        )}

        {/* THE FINE PRINT */}

        <div
          className="
            mt-5
            border-l-4
            border-[#0B634F]
            bg-[#F5F5F0]
            px-5 py-5
            sm:px-6
          "
        >
          <div
            className="
              mb-2 flex
              items-center gap-2
              text-[15px]
              font-bold
              text-[#0B5345]
              sm:text-[16px]
            "
          >
            <Scale
              size={18}
              strokeWidth={1.8}
            />

            The fine print
          </div>

          <p
            className="
              text-[15px]
              leading-[1.85]
              text-[#394F46]
              sm:text-[16px]
            "
          >
            {change.fine}
          </p>
        </div>
      </div>
    </details>
  ))}
</section>


        {/* NON-PROFIT COMPANIES */}

        <section className="rounded-2xl border border-[#D9E5DB] bg-[#F6F8F4] p-5 sm:p-7">
          <div className="mb-2 flex items-center gap-2 text-[#0B5345]">
            <BookOpen size={20} />
            <span className="text-[11px] font-extrabold uppercase tracking-[.12em]">
              Also in the law
            </span>
          </div>

          <h3 className="font-serif text-[27px] text-[#0A3026]">
            Non-profit companies
          </h3>

          <p className="mt-3">
            The amendments introduce a mainland non-profit
            company, which reinvests its profits into its
            objectives instead of distributing them. Its
            permitted activities, governance and exemptions
            are set by Cabinet decision, so check the
            current rules before choosing this form.
          </p>
        </section>

    

        {/* REVIEW CHECKLIST */}

        <section aria-labelledby="uae-review-now">
          <h3
            id="uae-review-now"
            className="mb-5 font-serif text-[29px] text-[#0A3026]"
          >
            What to review now
          </h3>

          <div className="grid gap-4 md:grid-cols-2">
            {checklists.map((group) => (
              <div
                key={group.title}
                className="rounded-xl border border-[#DFE7DE] bg-[#FAFBF8] p-5"
              >
                <h4 className="mb-3 text-[15px] font-bold text-[#0B5345]">
                  {group.title}
                </h4>

                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] leading-6"
                    >
                      <CheckCircle2
                        size={17}
                        className="mt-1 shrink-0 text-[#B18B39]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

           
        </section>
 
 
 
{/* =====================================================
    SOURCES & REFERENCES — COMPACT ACCORDION
===================================================== */}

<section
  aria-labelledby="uae-sources"
  className="
    mt-8 overflow-hidden rounded-2xl
    border border-[#DCE5DE]
    bg-white
    shadow-[0_6px_20px_rgba(8,45,37,.04)]
  "
>
  {/* COMPACT HEADER */}

  <div className="border-b border-[#E2E8E1] bg-[#F6F8F4] px-5 py-5 sm:px-7">
    <div className="flex items-center gap-3">
      <BookOpen
        size={22}
        className="shrink-0 text-[#0B5345]"
      />

      <div className="min-w-0 flex-1">
        <h3
          id="uae-sources"
          className="font-serif text-[24px] leading-tight text-[#0A3026] sm:text-[28px]"
        >
          Sources & references
        </h3>

        <p className="mt-1 text-[14px] leading-6 text-[#607167] sm:text-[15px]">
          UAE legislation and professional legal commentary.
        </p>
      </div>

      <span className="hidden shrink-0 rounded-full bg-[#E8EFE8] px-3 py-1 text-[12px] font-semibold text-[#0B5345] sm:inline-flex">
        7 sources
      </span>
    </div>
  </div>

  {/* OFFICIAL SOURCES */}

  <details className="group border-b border-[#E2E8E1]">
    <summary
      className="
        flex cursor-pointer list-none items-center gap-3
        px-5 py-4 transition-colors
        hover:bg-[#F7F9F5]
        sm:px-7
        [&::-webkit-details-marker]:hidden
      "
    >
      <BookOpen size={18} className="shrink-0 text-[#0B5345]" />

      <span className="flex-1 text-[15px] font-semibold text-[#123E32] sm:text-[16px]">
        Official sources
        <span className="ml-2 text-[13px] font-normal text-[#7A897F]">
          (2)
        </span>
      </span>

      <span className="text-[#0B5345] transition-transform duration-200 group-open:rotate-180">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </summary>

    <div className="space-y-4 bg-[#FBFCFA] px-5 pb-5 pt-2 sm:px-7">
      <div className="border-l-[3px] border-[#0B5345] pl-4">
        <p className="text-[15px] font-semibold text-[#123E32] sm:text-[16px]">
          Federal Decree-Law No. 32 of 2021
        </p>
        <p className="mt-1 text-[15px] leading-[1.75] text-[#52665B] sm:text-[16px]">
          UAE Commercial Companies Law, as amended by
          Federal Decree-Law No. 20 of 2025, published in
          Federal Gazette No. 809 on 14 October 2025.
        </p>
      </div>

      <div className="border-l-[3px] border-[#0B5345] pl-4">
        <p className="text-[15px] font-semibold text-[#123E32] sm:text-[16px]">
          UAE Ministry of Economy and Tourism
        </p>
        <p className="mt-1 text-[15px] leading-[1.75] text-[#52665B] sm:text-[16px]">
          Review of Commercial Companies Law amendments,
          published on 6 January 2026.
        </p>
      </div>
    </div>
  </details>

  {/* LAW FIRM COMMENTARY */}

  <details className="group">
    <summary
      className="
        flex cursor-pointer list-none items-center gap-3
        px-5 py-4 transition-colors
        hover:bg-[#F7F9F5]
        sm:px-7
        [&::-webkit-details-marker]:hidden
      "
    >
      <Scale size={18} className="shrink-0 text-[#A7802D]" />

      <span className="flex-1 text-[15px] font-semibold text-[#123E32] sm:text-[16px]">
        Law firm commentary
        <span className="ml-2 text-[13px] font-normal text-[#7A897F]">
          (5)
        </span>
      </span>

      <span className="text-[#0B5345] transition-transform duration-200 group-open:rotate-180">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </span>
    </summary>

    <div className="bg-[#FBFCFA] px-5 pb-5 pt-2 sm:px-7">
      <ul className="space-y-3">
        {[
          {
            name: "Baker McKenzie",
            description: "Recent amendments to the Commercial Companies Law",
          },
          {
            name: "Gibson Dunn",
            description: "Recent amendments to the UAE Commercial Companies Law",
          },
          {
            name: "Cleary Gottlieb",
            description: "UAE Companies Law Update 2025",
          },
          {
            name: "Clyde & Co",
            description: "UAE Companies Law amendments 2025",
          },
          {
            name: "Galadari",
            description: "Federal Decree-Law No. 20 of 2025 key points",
          },
        ].map((source) => (
          <li
            key={source.name}
            className="border-l-[3px] border-[#C5A04C] pl-4"
          >
            <span className="text-[15px] font-semibold text-[#123E32] sm:text-[16px]">
              {source.name}
            </span>
            <p className="text-[15px] leading-[1.75] text-[#52665B] sm:text-[16px]">
              {source.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </details>

  {/* SMALL EDITORIAL NOTE */}

  <div className="border-t border-[#E2E8E1] bg-[#F6F8F4] px-5 py-3 sm:px-7">
    <p className="text-[13px] leading-6 text-[#66786D]">
      <strong className="text-[#0B5345]">Note:</strong>{" "}
      Regulations and implementing guidance may change.
      Verify current requirements and seek independent legal advice.
    </p>
  </div>
</section>


      </div>
    </article>
  );
}
