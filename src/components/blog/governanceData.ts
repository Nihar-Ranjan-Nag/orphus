
export interface GovernanceFaq {
  question: string;
  answer: string;
}

export interface GovernanceCalendarItem {
  obligation: string;
  details: string;
  frequency: string;
}

/**
 * One combined Frequently Asked Questions section.
 * 8 Corporate Governance FAQs
 * 7 UAE Company Law FAQs
 * Total: 15 questions
 */
export const governanceFaqs: GovernanceFaq[] = [
  {
    question:
      "What is the difference between corporate structuring and corporate governance?",
    answer:
      "Corporate structuring is how your entities are arranged and owned. Corporate governance is how they are run and kept compliant each year. Structuring happens mostly at the start; governance never stops.",
  },
  {
    question:
      "Is corporate governance a legal requirement for UAE companies?",
    answer:
      "Yes. Every UAE company has statutory duties, including keeping registers current, renewing its licence, maintaining accounting records and filing corporate tax returns.",
  },
  {
    question:
      "Do holding companies and SPVs need governance if they have no staff?",
    answer:
      "Yes. An entity with no employees still needs documented decisions, current registers, a valid licence and its annual tax filings. Quiet entities are the ones most often missed.",
  },
  {
    question:
      "How often do banks review corporate accounts in the UAE?",
    answer:
      "Banks review corporate clients periodically, and more often for groups with owners or entities in several countries. Being able to produce current registers, recent resolutions and evidence of activity quickly makes these reviews routine.",
  },
  {
    question:
      "What is a beneficial owner register?",
    answer:
      "It is a record of the individuals who ultimately own or control a company. UAE companies must keep it up to date and report changes to their registrar within the set deadline.",
  },
  {
    question:
      "Can one provider manage governance for entities in several countries?",
    answer:
      "Yes, and it is usually the safest approach. One owner and one calendar across the whole structure prevents deadlines falling between different advisers.",
  },
  {
    question:
      "When should a family add a foundation to its structure?",
    answer:
      "When the main question shifts from how the business is run to what happens to it after the founder. A foundation separates ownership from any one person's estate and sets succession rules in advance.",
  },
  {
    question:
      "How long does it take to fix a structure with governance gaps?",
    answer:
      "It depends on how many entities are involved and how far records have drifted. Fixing it before a bank or regulator asks is always faster and cheaper than fixing it under a deadline.",
  },

  // UAE COMPANY LAW — SEVEN QUESTIONS

  {
    question:
      "Can I move my free zone company to the mainland?",
    answer:
      "The law now allows it, where both the free zone and the mainland authority approve and their procedures support the transfer. Ask both authorities about your specific route first.",
  },
  {
    question:
      "Does my company keep its legal identity if it re-domiciles?",
    answer:
      "Yes. A re-domiciled company keeps its legal personality, rights, obligations and contracts. Its licences need approval from the new authority and do not transfer automatically.",
  },
  {
    question:
      "Do shareholders need to approve a re-domiciliation?",
    answer:
      "Yes. It needs a special resolution or the required majority of shareholders, as well as approval from both authorities.",
  },
  {
    question:
      "Can a UAE LLC have preferred shares?",
    answer:
      "LLCs can now have different share classes, which can include preference-type rights. The permitted classes are set by Cabinet decision, so confirm what is available before agreeing terms.",
  },
  {
    question:
      "How can minority investors protect their exit?",
    answer:
      "A tag-along clause lets them sell on the same terms as the majority. It must be written into the memorandum or articles and drafted to work with pre-emption rights.",
  },
  {
    question:
      "Can my partners buy my shares if I die?",
    answer:
      "Yes, if the company documents give them or the company a priority right to buy. Your heirs remain entitled to the value under the applicable inheritance law.",
  },
  {
    question:
      "Do I need to amend my memorandum now?",
    answer:
      "Not necessarily. Existing documents stay valid. Amend them if you want to use the new options, such as exit clauses, share classes or succession buy-outs.",
  },
];

/**
 * Existing Corporate Governance Calendar.
 * Preserved without removing any records.
 */
export const governanceCalendar: GovernanceCalendarItem[] = [
  {
    obligation: "Licence renewal",
    details:
      "Renew trade or commercial licence, registered office and any regulatory permissions",
    frequency: "Every year",
  },
  {
    obligation: "Shareholder and board decisions",
    details:
      "Hold and minute annual general meeting and record major decisions",
    frequency:
      "At least yearly and for every major decision",
  },
  {
    obligation: "Beneficial owner register",
    details:
      "Maintain beneficial owner register; report changes to registrar",
    frequency: "Within 15 days of any change",
  },
  {
    obligation: "Corporate tax",
    details:
      "Register each entity; file tax return and pay any tax due",
    frequency:
      "Within 9 months of tax period end",
  },
  {
    obligation: "Accounting records",
    details:
      "Maintain books and supporting documents",
    frequency:
      "Retain for at least 7 years",
  },
  {
    obligation: "Audited financial statements",
    details:
      "Required for qualifying free zone persons, large-revenue companies and some free zones",
    frequency:
      "Annually, where applicable",
  },
  {
    obligation: "Transfer pricing",
    details:
      "Arm's-length related-party transactions and disclosures",
    frequency:
      "Annually, where applicable",
  },
  {
    obligation: "VAT",
    details:
      "Register above AED 375,000 taxable supplies and file returns",
    frequency: "Usually quarterly",
  },
  {
    obligation: "E-invoicing",
    details:
      "Appoint accredited provider and adopt structured e-invoices",
    frequency: "Phased from 2027",
  },
];
