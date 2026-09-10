export interface Announcement {
  id: string;
  eyebrow: string;
  title: string;
  homeSummary: string;
  summary: string;
  details: string[];
  highlights: string[];
  date: string;
  active: boolean;
  href?: string;
  linkLabel?: string;
}

/*
 * Edit this array whenever a new announcement needs to be published.
 * Set active to false to keep an announcement in the code without showing it.
 */
export const announcements: Announcement[] = [
  {
    id: "advisory-desk-updates",
    eyebrow: "Firm announcement",
    title: "Important updates from the Orpheus advisory desk.",
    homeSummary:
      "Follow the latest firm, service and market updates from Orpheus Financial.",
    summary:
      "Orpheus has introduced a dedicated announcement area to make important firm news, service developments and market notices easier for clients to find.",
    details: [
      "The homepage will provide a concise notice whenever an important update is published. Clients can then open the Insights page to review the complete announcement and its relevant context.",
      "This creates one consistent source for timely information while keeping the main website focused, clear and easy to navigate.",
    ],
    highlights: [
      "Firm and advisory updates",
      "New service developments",
      "Important market notices",
    ],
    date: "September 2, 2026",
    active: true,
    href: "/contact",
    linkLabel: "Speak with our team",
  },
  {
    id: "bvi-seychelles-jurisdiction-briefing",
    eyebrow: "New jurisdiction briefing",
    title: "BVI or Seychelles? A practical comparison for international companies.",
    homeSummary:
      "A new comparison covering credibility, compliance, banking and annual administration.",
    summary:
      "Our latest jurisdiction briefing compares the British Virgin Islands and Seychelles for founders, investors and internationally active businesses evaluating an offshore structure.",
    details: [
      "The briefing examines how the two jurisdictions differ in international reputation, common-law positioning, reporting obligations, economic substance expectations and typical annual administration costs.",
      "It also explains why the right choice depends on the commercial objective, expected banking relationships, investor profile and the countries in which the company will operate.",
    ],
    highlights: [
      "Banking and credibility",
      "Compliance expectations",
      "Cost and administration",
    ],
    date: "March 21, 2026",
    active: true,
    href: "/blog/bvi-vs-seychelles-which-offshore-jurisdiction-is-best",
    linkLabel: "Read the comparison",
  },
  {
    id: "uae-business-loan-documentation-guide",
    eyebrow: "New financing guide",
    title: "The 2026 UAE business loan documentation guide is now available.",
    homeSummary:
      "Understand the corporate, financial and banking documents UAE lenders commonly request.",
    summary:
      "Orpheus has published a practical guide to the documentation businesses should prepare before approaching a UAE bank for working capital, expansion finance or other corporate borrowing.",
    details: [
      "The guide covers core corporate records, ownership and UBO documents, trade licences, bank statements, audited accounts and the supporting commercial information generally expected during credit assessment.",
      "Preparing a structured information pack before the first lender conversation can reduce avoidable delays and help management present the funding requirement more clearly.",
    ],
    highlights: [
      "Corporate document checklist",
      "Financial information pack",
      "Bank-readiness preparation",
    ],
    date: "March 10, 2026",
    active: true,
    href: "/blog/documents-required-for-business-loan-in-uae",
    linkLabel: "Open the guide",
  },
  {
    id: "uae-bank-account-rejection-guide",
    eyebrow: "Corporate banking update",
    title: "A new guide explains why UAE business bank account applications are rejected.",
    homeSummary:
      "Review the common compliance, substance and transaction-profile issues that affect applications.",
    summary:
      "Our corporate banking update outlines the most common reasons UAE business account applications encounter delays or rejection and the preparation steps that can improve banking readiness.",
    details: [
      "The guide looks at unclear business activities, weak evidence of commercial substance, incomplete source-of-funds information, complex ownership structures and transaction profiles that do not match the stated business model.",
      "It also sets out a practical approach to preparing a clearer KYC pack, supporting the commercial rationale and selecting institutions whose risk appetite is better aligned with the business.",
    ],
    highlights: [
      "Application risk factors",
      "KYC pack preparation",
      "Bank selection strategy",
    ],
    date: "January 9, 2026",
    active: true,
    href: "/blog/why-your-uae-business-bank-account-application-got-rejected",
    linkLabel: "Read banking guide",
  },
];