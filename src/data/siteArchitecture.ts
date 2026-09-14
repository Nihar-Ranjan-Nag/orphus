import {
  Building2,
  Landmark,
  ShieldCheck,
  Gem,
  Scale,
  Banknote,
  Globe2,
  BriefcaseBusiness,
  Network,
  HandCoins,
  FileCheck2,
  UsersRound,
} from "lucide-react";

export const BRAND = {
  emerald: "#0B5345",
  emeraldDark: "#063B32",
  racingGreen: "#014421",
  forest: "#18453B",
  gold: "#C9A95D",
  goldSoft: "#E6D4A2",
  ink: "#0A1714",
  cream: "#F7F4EC",
  paper: "#FFFEFA",
};

export type ServiceBucket = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  description: string;
  outcomes: string[];
  icon: typeof Building2;
  image: string;
};

export type SolutionPillar = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  icon: typeof Building2;
  services: ServiceBucket[];
  capabilities: string[];
};

export const serviceBuckets: ServiceBucket[] = [
  {
    slug: "entity-management",
    title: "Entity Management",
    short: "Entity Management",
    eyebrow: "GLOBAL MARKET ENTRY",
    description:
      "Design, establish and maintain corporate structures across the UAE and international jurisdictions with governance built in from day one.",
    outcomes: [
      "Entity formation & restructuring",
      "Corporate secretarial & governance",
      "Holding companies & SPVs",
      "Ongoing statutory maintenance",
    ],
    icon: Building2,
    image: "/images/entity.jpg",
  },
  {
    slug: "banking-treasury",
    title: "Banking & Treasury",
    short: "Banking & Treasury",
    eyebrow: "BANKABILITY & ACCESS",
    description:
      "Navigate account opening, KYC, treasury architecture and multi-bank relationships with a dossier designed for institutional scrutiny.",
    outcomes: [
      "Corporate bank account strategy",
      "KYC & UBO dossier preparation",
      "Multi-currency treasury",
      "Bank relationship coordination",
    ],
    icon: Landmark,
    image: "/images/banking.jpg",
  },
  {
    slug: "private-credit-debt",
    title: "Private Credit & Debt",
    short: "Private Credit & Debt",
    eyebrow: "CAPITAL SOLUTIONS",
    description:
      "Structure and raise debt for acquisitions, growth, working capital and special situations through banks, private lenders and credit funds.",
    outcomes: [
      "Debt raising & refinancing",
      "Capital stack design",
      "Lender & credit-fund introductions",
      "Transaction packaging & execution",
    ],
    icon: HandCoins,
    image: "/images/credit.jpg",
  },
  {
    slug: "private-wealth",
    title: "Private Wealth",
    short: "Private Wealth",
    eyebrow: "WEALTH ARCHITECTURE",
    description:
      "Integrated private wealth architecture covering family office services, estate and succession planning, asset protection, investment coordination and global wealth management / advisory.",
    outcomes: [
      "Single & multi-family office services",
      "Estate & succession planning",
      "Global wealth management & advisory",
      "Trust, asset protection & wealth transfer",
    ],
    icon: Gem,
    image: "/images/wealth.jpg",
  },
  {
    slug: "compliance-risk",
    title: "Compliance & Risk",
    short: "Compliance & Risk",
    eyebrow: "REGULATORY CONFIDENCE",
    description:
      "Keep structures credible, compliant and operationally effective through regulatory interpretation, governance and documentation support.",
    outcomes: [
      "AML / KYC governance",
      "UBO & regulatory support",
      "Corporate governance",
      "Compliance health checks",
    ],
    icon: ShieldCheck,
    image: "/images/compliance.jpg",
  },
  {
    slug: "corporate-finance-advisory",
    title: "Corporate Finance Advisory",
    short: "Corporate Finance",
    eyebrow: "STRATEGIC EXECUTION",
    description:
      "Support founders, boards and investors through complex transactions, cross-border expansion and institutional financial decision-making.",
    outcomes: [
      "Transaction advisory",
      "Cross-border expansion",
      "Financial structuring",
      "Strategic partner coordination",
    ],
    icon: BriefcaseBusiness,
    image: "/images/advisory.jpg",
  },
];

/**
 * A concise public-facing architecture. Detailed service pages remain
 * available, but sit beneath three clear client objectives.
 */
export const solutionPillars: SolutionPillar[] = [
  {
    slug: "corporate-structuring",
    title: "Corporate Structuring & Governance",
    eyebrow: "BUILD & GOVERN",
    description:
      "Establish credible cross-border entities and keep their governance, compliance and statutory obligations working in practice.",
    icon: Building2,
    services: serviceBuckets.filter((service) =>
      ["entity-management", "compliance-risk"].includes(service.slug),
    ),
    capabilities: [
      "Corporate & Business Advisory",
      "Cross-Border Structuring",
      "Tax, Trust & Structuring",
      "Compliance & Governance",
    ],
  },
  {
    slug: "banking-capital",
    title: "Banking & Capital",
    eyebrow: "ACCESS & FUNDING",
    description:
      "Build bankable operating structures, treasury relationships and practical funding strategies for growth, transactions and special situations.",
    icon: Landmark,
    services: serviceBuckets.filter((service) =>
      [
        "banking-treasury",
        "private-credit-debt",
        "corporate-finance-advisory",
      ].includes(service.slug),
    ),
    capabilities: [
      "Corporate Finance",
      "Alternative & Private Markets",
      "Institutional Investment Solutions",
      "Treasury & Liquidity",
    ],
  },
  {
    slug: "private-wealth",
    title: "Private Wealth",
    eyebrow: "PROTECT & TRANSFER",
    description:
      "Family office services, estate and succession planning, asset protection and global wealth management / advisory for internationally connected families and entrepreneurs.",
    icon: Gem,
    services: serviceBuckets.filter(
      (service) => service.slug === "private-wealth",
    ),
    capabilities: [
      "Wealth Management",
      "Investment Advisory",
      "Family Office",
      "Estate & Succession Planning",
    ],
  },
];

export const processSteps = [
  {
    no: "01",
    title: "Understand",
    text:
      "We work directly with the client to map the commercial, ownership, capital, family and cross-border objective.",
  },
  {
    no: "02",
    title: "Architect",
    text:
      "Our team designs the structure, jurisdiction, banking, capital and governance roadmap around that objective.",
  },
  {
    no: "03",
    title: "Execute",
    text:
      "Orpheus leads documentation and implementation, coordinating required institutions and specialists while retaining ownership of delivery.",
  },
  {
    no: "04",
    title: "Manage",
    text:
      "We remain involved after implementation so the structure stays compliant, bankable, useful and aligned with the client’s next stage.",
  },
];

export const jurisdictions = [
  {
    slug: "uae",
    title: "UAE",
    kicker: "MARKET ENTRY",
    description:
      "Mainland, free-zone and holding structures for operating businesses, investors and international groups entering the GCC.",
    image: "/images/uae.jpg",
    bestFor: "Operating companies, GCC market entry & regional holdings",
    context: "Mainland & free-zone ecosystem",
  },
  {
    slug: "difc",
    title: "DIFC",
    kicker: "DUBAI FINANCIAL CENTRE",
    description:
      "Institutional-grade structures for investment, holding, financing and regulated financial activity in Dubai.",
    image: "/images/difc.jpg",
    bestFor: "Investment structures, regulated finance & sophisticated holdings",
    context: "Common-law financial centre",
  },
  {
    slug: "adgm",
    title: "ADGM",
    kicker: "ABU DHABI FINANCIAL CENTRE",
    description:
      "Common-law structuring for SPVs, funds, family wealth and sophisticated cross-border ownership arrangements.",
    image: "/images/adgm.jpg",
    bestFor: "SPVs, funds, family wealth & institutional ownership",
    context: "Common-law international centre",
  },
  {
    slug: "bvi",
    title: "BVI",
    kicker: "INTERNATIONAL STRUCTURING",
    description:
      "Widely used international business companies for holdings, investment structures and cross-border transactions.",
    image: "/images/bvi.jpg",
    bestFor: "International holdings, investments & cross-border transactions",
    context: "International business company",
  },
  {
    slug: "seychelles",
    title: "Seychelles",
    kicker: "INTERNATIONAL STRUCTURING",
    description:
      "Flexible international structures where simplicity, ownership architecture and international activity are key considerations.",
    image: "/images/seychelles.jpg",
    bestFor: "Flexible international ownership and commercial structures",
    context: "International structuring jurisdiction",
  },
];

export type JurisdictionGroup = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  bestFor: string;
  icon: typeof Building2;
  jurisdictions: typeof jurisdictions;
  options: { label: string; to: string }[];
};

/**
 * DIFC and ADGM are presented as UAE structuring routes rather than separate
 * top-level pillars. Their individual detail pages are retained.
 */
export const jurisdictionGroups: JurisdictionGroup[] = [
  {
    slug: "uae",
    title: "UAE",
    kicker: "REGIONAL OPERATING HUB",
    description:
      "Choose between UAE Mainland, DIFC and ADGM according to operating activity, ownership, regulation, banking and long-term strategy.",
    bestFor:
      "GCC market entry, regional operations, holdings, SPVs and regulated structures",
    icon: Building2,
    jurisdictions: jurisdictions.filter((jurisdiction) =>
      ["uae", "difc", "adgm"].includes(jurisdiction.slug),
    ),
    options: [
      {
        label: "UAE Mainland",
        to: "/jurisdictions/uae",
      },
      {
        label: "DIFC",
        to: "/jurisdictions/difc",
      },
      {
        label: "ADGM",
        to: "/jurisdictions/adgm",
      },
    ],
  },
  {
    slug: "bvi",
    title: "BVI",
    kicker: "INTERNATIONAL HOLDINGS",
    description:
      "Established international business company structures for holdings, investments and cross-border transactions.",
    bestFor:
      "International holdings, investment structures and cross-border transactions",
    icon: Globe2,
    jurisdictions: jurisdictions.filter(
      (jurisdiction) => jurisdiction.slug === "bvi",
    ),
    options: [
      {
        label: "BVI Business Company",
        to: "/jurisdictions/bvi",
      },
      {
        label: "Holding Company",
        to: "/jurisdictions/bvi",
      },
      {
        label: "Investment / SPV Structure",
        to: "/jurisdictions/bvi",
      },
    ],
  },
  {
    slug: "seychelles",
    title: "Seychelles",
    kicker: "FLEXIBLE INTERNATIONAL STRUCTURES",
    description:
      "Straightforward international ownership structures where flexibility, simplicity and practical administration matter.",
    bestFor: "Flexible international ownership and commercial structures",
    icon: Network,
    jurisdictions: jurisdictions.filter(
      (jurisdiction) => jurisdiction.slug === "seychelles",
    ),
    options: [
      {
        label: "Seychelles IBC",
        to: "/jurisdictions/seychelles",
      },
      {
        label: "Holding Structure",
        to: "/jurisdictions/seychelles",
      },
      {
        label: "International SPV",
        to: "/jurisdictions/seychelles",
      },
    ],
  },
];

export const trustPillars = [
  {
    icon: Globe2,
    title: "Cross-Border Expertise",
    text:
      "Structures designed with multiple markets, banks and counterparties in mind.",
  },
  {
    icon: Landmark,
    title: "Institutional Access",
    text:
      "Banking-aware, compliance-aware execution built for real scrutiny.",
  },
  {
    icon: Scale,
    title: "Regulatory Guidance",
    text:
      "Clear interpretation of obligations, governance and documentation.",
  },
  {
    icon: UsersRound,
    title: "Accountable Execution",
    text:
      "One lead advisory relationship from architecture through implementation and ongoing support.",
  },
];

export const insightCards = [
  {
    slug: "why-uae-banks-freeze-accounts-and-how-to-avoid-it",
    category: "BANKING",
    title: "Why UAE Banks Freeze Business Accounts — and How to Avoid It",
    image: "/images/entity.jpg",
  },
  {
    slug: "documents-required-for-business-loan-in-uae",
    category: "LENDING",
    title: "Documents Required for a Business Loan in the UAE",
    image: "/images/compliance.jpg",
  },
  {
    slug: "bvi-vs-seychelles-which-offshore-jurisdiction-is-best",
    category: "JURISDICTION",
    title: "BVI vs Seychelles: Which Offshore Jurisdiction Is Best?",
    image: "/images/bvi.jpg",
    bestFor: "International holdings, investments & cross-border transactions",
    context: "International business company",
  },
  {
    slug: "best-financial-advisors-in-dubai",
    category: "FOUNDER INSIGHT",
    title: "Best Financial Advisors in Dubai",
    image: "/images/best-financial-advisors-in-dubai.jpg",
  },
];