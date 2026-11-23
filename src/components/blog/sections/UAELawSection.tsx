
import { Scale } from "lucide-react";

import UAELawArticle from "@/components/blog/UAELawArticle";

/**
 * ORPHEUS FINANCIAL
 *
 * UAE Company Law Section
 *
 * - Complete article visible by default
 * - No dropdowns or accordions
 * - No duplicate seven-change summaries
 * - Clean editorial styling
 * - Original content preserved
 * - Responsive layout
 */

export default function UAELawSection() {
  return (
    <section
      id="uae-company-law-section"
      aria-label="UAE Company Law Insights"
      className="scroll-mt-24 bg-[#FBFAF6] py-10 sm:py-14"
    >
      <div className="mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-0">

        {/* SIMPLE EDITORIAL SECTION LABEL */}

        <div className="mb-6 flex items-center gap-3">

          <div
            className="
              flex h-11 w-11 shrink-0
              items-center justify-center
              rounded-xl bg-[#0B5345]
              text-white
            "
          >
            <Scale size={21} strokeWidth={1.7} />
          </div>

          <div>
            <p
              className="
                text-[11px] font-bold
                uppercase tracking-[0.16em]
                text-[#B08A42]
              "
            >
              Featured Legal Insight
            </p>

            <p
              className="
                mt-1 text-[13px]
                text-[#718174]
              "
            >
              Corporate & Regulatory Updates
            </p>
          </div>
        </div>

        {/* DECORATIVE ACCENT */}

        <div
          className="
            mb-7 flex items-center gap-3
          "
          aria-hidden="true"
        >
          <span className="h-[3px] w-16 rounded-full bg-[#C7A253]" />

          <span className="h-px flex-1 bg-[#DEE6DC]" />
        </div>

        {/* COMPLETE ORIGINAL ARTICLE */}

        <div
          className="
            min-w-0
            [&_img]:max-w-full
            [&_table]:w-full
          "
        >
          <UAELawArticle />
        </div>

      </div>
    </section>
  );
}
