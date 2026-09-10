import {
  Banknote,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Coins,
  Gem,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  TrendingUp,
  UsersRound,
} from "lucide-react";

export type CapabilityService = {
  slug: string;
  title: string;
  pillar: string;
  eyebrow: string;
  summary: string;
  description: string;
  outcomes: string[];
  approach: string[];
  icon: typeof Building2;
};

export const capabilityServices: CapabilityService[] = [
  {
    slug: "corporate-business-advisory",
    title: "Corporate & Business Advisory",
    pillar: "Corporate Structuring & Governance",
    eyebrow: "BUILD & GOVERN",
    summary: "Practical advisory for founders, boards and international businesses making structural, ownership and expansion decisions.",
    description: "Orpheus helps clients turn commercial objectives into workable corporate structures, governance frameworks and implementation plans. The emphasis is on decisions that remain credible with banks, regulators, investors and counterparties after execution.",
    outcomes: ["Business and group structure review", "Ownership and governance architecture", "Cross-border expansion planning", "Implementation coordination"],
    approach: ["Clarify the commercial objective", "Map ownership, risk and governance", "Design the operating structure", "Coordinate execution and ongoing actions"],
    icon: BriefcaseBusiness,
  },
  {
    slug: "cross-border-structuring",
    title: "Cross-Border Structuring",
    pillar: "Corporate Structuring & Governance",
    eyebrow: "BUILD & GOVERN",
    summary: "Entity, holding and ownership structures designed around international operations, banking and long-term control.",
    description: "We assess jurisdiction, activity, ownership, banking, tax and governance considerations together so the resulting structure works as one connected architecture rather than a collection of disconnected entities.",
    outcomes: ["Holding and operating structures", "SPVs and investment vehicles", "Jurisdiction selection support", "Corporate implementation roadmap"],
    approach: ["Map countries and activities", "Assess ownership and control", "Select appropriate structural routes", "Lead documentation and implementation"],
    icon: Network,
  },
  {
    slug: "tax-trust-structuring",
    title: "Tax, Trust & Structuring",
    pillar: "Corporate Structuring & Governance",
    eyebrow: "BUILD & GOVERN",
    summary: "Coordinated structuring for ownership, preservation and succession where tax, trust and corporate considerations overlap.",
    description: "Orpheus leads the overall structuring mandate and coordinates the required tax, legal and fiduciary specialists so that ownership, governance and implementation remain aligned with the client objective.",
    outcomes: ["Ownership architecture", "Trust and foundation coordination", "Succession-oriented structuring", "Specialist implementation management"],
    approach: ["Define family or commercial objectives", "Identify tax and fiduciary dependencies", "Design the ownership architecture", "Coordinate specialists and implementation"],
    icon: Scale,
  },
  {
    slug: "compliance-governance",
    title: "Compliance & Governance",
    pillar: "Corporate Structuring & Governance",
    eyebrow: "BUILD & GOVERN",
    summary: "Governance and compliance support that keeps structures credible, documented and operational after formation.",
    description: "We help clients maintain clear governance, statutory discipline and practical compliance processes across their structures, with particular attention to AML, KYC, UBO and board-level requirements.",
    outcomes: ["AML / KYC governance", "UBO and statutory support", "Board and governance processes", "Compliance health checks"],
    approach: ["Review current obligations", "Identify documentation gaps", "Implement governance controls", "Maintain an ongoing action plan"],
    icon: ShieldCheck,
  },
  {
    slug: "corporate-finance",
    title: "Corporate Finance",
    pillar: "Banking & Capital",
    eyebrow: "ACCESS & FUNDING",
    summary: "Financial structuring and transaction support for growth, acquisitions, refinancing and strategic corporate activity.",
    description: "Orpheus works with founders, boards and investors to shape a financeable transaction, prepare the required materials and lead coordination across lenders, investors and specialist advisers.",
    outcomes: ["Transaction and funding strategy", "Financial structuring", "Capital provider coordination", "Execution support"],
    approach: ["Define funding requirement", "Shape the transaction", "Prepare the institutional case", "Coordinate counterparties through execution"],
    icon: ChartNoAxesCombined,
  },
  {
    slug: "alternative-private-markets",
    title: "Alternative & Private Markets",
    pillar: "Banking & Capital",
    eyebrow: "ACCESS & FUNDING",
    summary: "Access and execution support across private credit, private equity and alternative capital solutions.",
    description: "We help clients assess suitable private-market funding routes, position the opportunity clearly and coordinate relevant capital providers. The mandate is execution-led rather than limited to introductions.",
    outcomes: ["Private credit and debt solutions", "Alternative capital assessment", "Capital stack design", "Investor and lender coordination"],
    approach: ["Assess the capital requirement", "Select viable funding routes", "Package the opportunity", "Lead provider engagement and execution"],
    icon: Coins,
  },
  {
    slug: "institutional-investment-solutions",
    title: "Institutional Investment Solutions",
    pillar: "Banking & Capital",
    eyebrow: "ACCESS & FUNDING",
    summary: "Institutional-grade investment structuring and coordination for sophisticated investors, businesses and family capital.",
    description: "Orpheus supports clients that require a more structured approach to investment access, counterparties, documentation and cross-border implementation across public and private market opportunities.",
    outcomes: ["Investment structure design", "Institutional counterparty coordination", "Due-diligence preparation", "Cross-border implementation support"],
    approach: ["Clarify investment mandate", "Assess structure and access requirements", "Coordinate providers and diligence", "Support implementation and ongoing review"],
    icon: TrendingUp,
  },
  {
    slug: "treasury-liquidity",
    title: "Treasury & Liquidity",
    pillar: "Banking & Capital",
    eyebrow: "ACCESS & FUNDING",
    summary: "Banking and treasury architecture for operating liquidity, multi-currency needs and stronger financial control.",
    description: "We design treasury arrangements around operating flows, banking relationships, currencies and liquidity needs so clients have a practical banking setup rather than isolated account openings.",
    outcomes: ["Banking relationship strategy", "Multi-currency treasury", "Liquidity planning", "KYC and onboarding coordination"],
    approach: ["Map flows and currencies", "Define banking requirements", "Prepare the bankability dossier", "Coordinate onboarding and treasury setup"],
    icon: Landmark,
  },
  {
    slug: "wealth-management",
    title: "Wealth Management",
    pillar: "Private Wealth",
    eyebrow: "PROTECT & TRANSFER",
    summary: "Global wealth planning and management coordination for internationally connected families and entrepreneurs.",
    description: "Orpheus brings wealth architecture, investment coordination, ownership structures and family objectives into one coherent mandate with an emphasis on long-term control and practical implementation.",
    outcomes: ["Comprehensive wealth planning", "Asset allocation coordination", "Risk and liquidity planning", "Global wealth advisory"],
    approach: ["Map assets and objectives", "Define risk, liquidity and control needs", "Coordinate investment and structural solutions", "Review as family circumstances evolve"],
    icon: Gem,
  },
  {
    slug: "investment-advisory",
    title: "Investment Advisory",
    pillar: "Private Wealth",
    eyebrow: "PROTECT & TRANSFER",
    summary: "Investment advisory coordination across listed, fixed-income and private-market opportunities.",
    description: "We help clients frame the investment mandate, evaluate suitable solutions and coordinate specialist providers across public and private markets while keeping the wider wealth architecture in view.",
    outcomes: ["Investment mandate design", "Portfolio and product review", "Alternative investment coordination", "Ongoing investment oversight"],
    approach: ["Define objectives and constraints", "Assess available investment routes", "Coordinate due diligence and providers", "Maintain consolidated oversight"],
    icon: Banknote,
  },
  {
    slug: "family-office",
    title: "Family Office",
    pillar: "Private Wealth",
    eyebrow: "PROTECT & TRANSFER",
    summary: "Single and multi-family office support that brings governance, reporting, investments and administration together.",
    description: "Orpheus supports families that need a structured operating model around their wealth, entities, investments and reporting. We can coordinate a family-office framework without adding unnecessary complexity.",
    outcomes: ["Single and multi-family office design", "Family governance", "Consolidated reporting coordination", "Next-generation planning"],
    approach: ["Assess current family infrastructure", "Define governance and reporting needs", "Design the operating model", "Coordinate providers and ongoing administration"],
    icon: UsersRound,
  },
  {
    slug: "estate-succession-planning",
    title: "Estate & Succession Planning",
    pillar: "Private Wealth",
    eyebrow: "PROTECT & TRANSFER",
    summary: "Ownership and succession planning designed to support continuity, control and inter-generational wealth transfer.",
    description: "We coordinate the corporate, fiduciary and specialist inputs required to build a succession architecture that reflects family intentions, ownership realities and cross-border considerations.",
    outcomes: ["Succession architecture", "Estate planning coordination", "Trust and ownership structures", "Inter-generational wealth transfer"],
    approach: ["Document family and ownership objectives", "Map assets and jurisdictions", "Coordinate legal and fiduciary design", "Implement and periodically review"],
    icon: Building2,
  },
];

export const capabilityServiceByTitle = Object.fromEntries(
  capabilityServices.map((item) => [item.title, item])
) as Record<string, CapabilityService>;
