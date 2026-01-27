// Import case study images
import kfcBeforeImage1 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage.png";
import kfcBeforeImage2 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage2.png";
import kfcAfterSolution from "./assets/images/kfc-pdp-redesign/KFC after-solution.jpg";

export type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

export type ImageSection = {
  sectionLabel?: string;
  heading?: string;
  layout?: "single" | "side-by-side" | "grid";
  images: ImageItem[];
  placement:
    | "after-problem"
    | "after-process"
    | "after-solution"
    | "before-results";
};

export type ProblemBreakdownItem = {
  icon: "target" | "shield" | "lightning" | "alert" | "chart" | "users";
  title: string;
  description: string;
};

export type DesignPrinciple = {
  icon: string;
  title: string;
  description: string;
};

export type SolutionCard = {
  icon: "target" | "shield" | "lightning";
  title: string;
  description: string;
};

export type CaseStudy = {
  // 1. Hero Section
  slug: string;
  title: string;
  blurb: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  imageSections?: ImageSection[];

  // 2. Project Metadata
  role?: string;
  client?: string;
  timeline?: string;
  platform?: string;

  // 3. TL;DR
  tldr?: string[];

  // 4. My Role + Core Contributions
  roleDescription?: string;
  coreContributions?: string[];

  // 5. The Challenge
  challenge?: string;

  // 6. The Problem
  problemBreakdown?: ProblemBreakdownItem[];

  // 7. Design Principles
  designPrinciples?: DesignPrinciple[];

  // 8. The Solution
  solution?: string;
  solutionCards?: SolutionCard[];
  solutionMetrics?: { label: string; value: string }[];
};

// Contact email - centralized for easy updates
const CONTACT_EMAIL = "mailto:patrick@patricklopes.com";

export const siteMeta = {
  title: "Patrick Lopes · Senior Product Designer",
  description:
    "Senior Product Designer focused on e-commerce and digital experiences. Crafting product pages, checkout flows, and customer journeys with clarity and a calm layer of AI support.",
  ogImage: "/og.png",
};

export const caseStudies: CaseStudy[] = [
  {
    // 1. Hero Section
    slug: "verizon-straight-talk-7day",
    title: "Straight Talk",
    blurb:
      "Introducing short-term payment flexibility for prepaid customers facing temporary financial gaps, helping them maintain service without committing to a full monthly plan.",
    tags: ["Telecom", "B2C", "Prepaid Mobile"],
    metrics: [
      {
        label: "bridge plan redemptions shortly after launch",
        value: "100k+ bridge plan redemptions",
      },
      {
        label: "unique customers used the plan, with strong repeat usage",
        value: "40k+ unique customers",
      },
      {
        label: "bridge plans purchased on average",
        value: "2.3 bridge plans on average purchased",
      },
    ],

    // 2. Project Metadata
    role: "Senior Product Designer",
    client: "Straight Talk (Verizon Value Organization)",
    timeline: "Multi-phase rollout",
    platform: "Web, Mobile Web, App, IVR",

    // 3. TL;DR
    tldr: [
      "Nearly 100K bridge plan redemptions shortly after launch",
      "Over 40K unique customers used the plan, with strong repeat usage",
      "Customers purchased ~2.3 bridge plans on average, indicating ongoing need",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I owned the UX design for the Straight Talk 7-day Bridge Plan end-to-end, from framing the customer problem through defining the experience and supporting validation post-launch. I worked closely with product, engineering, CX, analytics, and legal teams to align on eligibility rules, messaging, and cross-channel execution while balancing customer needs with business and operational constraints.",
    coreContributions: [
      "Designing clear plan messaging that set the right expectations",
      "Supporting consistent experiences across channels",
      "Making eligibility and next steps easy to understand",
      "Balancing customer needs with operational and legal constraints",
    ],

    // 5. The Challenge
    challenge:
      "When prepaid customers were unable to refill their plan on time, existing flows forced them into full monthly commitments or service suspension. Feedback across care and digital channels highlighted confusion, frustration, and missed opportunities to retain customers during short-term financial hardship.",

    // 6. The Problem
    problemBreakdown: [
      {
        icon: "target",
        title: "No Short-Term Payment Option",
        description:
          "Customers lacked a smaller, time-bound plan to bridge the gap between refill dates, leaving them with all-or-nothing choices.",
      },
      {
        icon: "shield",
        title: "Complex Eligibility and Messaging",
        description:
          "Eligibility rules, pricing, and renewal behavior were difficult to communicate clearly, increasing confusion and drop-off.",
      },
      {
        icon: "lightning",
        title: "Fragmented Cross-Channel Journeys",
        description:
          "The experience varied depending on whether customers entered through web, app, IVR, or care, leading to inconsistent understanding and outcomes.",
      },
    ],

    // 7. Design Principles
    designPrinciples: [
      {
        icon: "bridge-link",
        title: "Design for temporary needs, not commitments",
        description:
          "Customers faced short-term financial gaps, not abandoning service. The solution framed as a bridge, not a downgrade, helped them see it as support.",
      },
      {
        icon: "rules",
        title: "Make eligibility and next steps clear",
        description:
          "Eligibility rules, pricing, and post-plan outcomes must be clear. Ambiguity increases anxiety and drop-off, so the design prioritized plain language and consistent messaging.",
      },
      {
        icon: "scale",
        title: "Design once, scale across channels",
        description:
          "The bridge plan needed to work across web, app, IVR, and care without parallel experiences. Patterns and messaging were designed to translate cleanly, ensuring customers received the same guidance.",
      },
      {
        icon: "rhythm",
        title: "Preserve familiar behaviors",
        description:
          "This experience was added to a prepaid ecosystem with established habits. The design built on familiar refill and plan patterns to minimize learning costs and avoid friction during a stressful moment.",
      },
    ],

    // 8. The Solution
    solution:
      "The 7-day Bridge Plan introduced a short-term option that allowed eligible customers to maintain service without committing to a full monthly plan.",
    solutionCards: [
      {
        icon: "target",
        title: "A Clear Short-Term Plan Option",
        description:
          "The bridge plan provided an affordable, time-bound way to stay connected during a temporary gap.",
      },
      {
        icon: "shield",
        title: "Straightforward Eligibility and Pricing Messaging",
        description:
          "Plan details were surfaced clearly so customers understood who qualified, how pricing worked, and what would happen after the plan ended.",
      },
      {
        icon: "lightning",
        title: "Consistent Cross-Channel Experience",
        description:
          "The experience was designed to work across digital and assisted channels, allowing customers to access the plan through the path most convenient to them.",
      },
    ],
    solutionMetrics: [
      {
        label: "bridge plan redemptions shortly after launch",
        value: "100k+",
      },
      {
        label: "unique customers used the plan, with strong repeat usage",
        value: "40k+",
      },
      {
        label: "bridge plans purchased on average",
        value: "2.3",
      },
    ],
  },
  {
    // 1. Hero Section
    slug: "kfc-pdp-redesign",
    title: "KFC",
    blurb:
      "Simplifying the product detail page to reduce friction in the ordering flow, making customization faster and clearer without disrupting familiar patterns.",
    tags: ["E-Commerce", "Food & Beverage", "B2C"],
    metrics: [
      {
        label: "task success rate across all platforms",
        value: "88% task success rate",
      },
      {
        label: "reduction in average task completion time",
        value: "20% reduction in average task completion time",
      },
      {
        label: "of participants reported higher satisfaction",
        value: "90% of participants reported higher satisfaction",
      },
    ],
    imageSections: [
      {
        sectionLabel: "THE PROBLEM",
        heading: "Before: The Original PDP",
        layout: "side-by-side",
        placement: "after-problem",
        images: [
          {
            src: kfcBeforeImage1,
            alt: "KFC mobile view showing image taking over entire screen real estate",
          },
          {
            src: kfcBeforeImage2,
            alt: "KFC mobile view showing repetitive sauce selection sections",
          },
        ],
      },
      {
        sectionLabel: "THE SOLUTION",
        heading: "The Redesigned PDP",
        layout: "single",
        placement: "after-solution",
        images: [
          {
            src: kfcAfterSolution,
            alt: "KFC Mobile Mockup showing the redesigned product detail page",
            caption:
              "The new PDP features clear customization steps, visible key options, and real-time feedback",
          },
        ],
      },
    ],

    // 2. Project Metadata
    role: "Product Designer",
    client: "KFC (via Photon)",
    timeline: "6 months",
    platform: "Desktop, Mobile Web, App",

    // 3. TL;DR
    tldr: [
      "Improved task success to 88% across platforms",
      "Reduced average task completion time by 20%",
      "Simplified a high-friction customization flow used at scale",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I owned the UX design for the product detail page redesign end-to-end, from framing the problem through defining the solution and validating it through usability testing. I worked closely with product managers, engineers, and stakeholders to align on priorities, navigate technical constraints, and make tradeoffs that balanced customer needs with business goals across desktop, mobile web, and app.",
    coreContributions: [
      "Bringing key decisions into view earlier in the flow",
      "Reducing repeated actions and redundant sections",
      "Grouping related options to make choices easier to scan",
      "Providing clearer feedback as users made selections",
    ],

    // 5. The Challenge
    challenge:
      "New meal options and customization made the product detail page harder to use when customers needed clarity. Feedback highlighted three issues that slowed decision-making.",

    // 6. The Problem
    problemBreakdown: [
      {
        icon: "target",
        title: "Overwhelming Layout on Mobile",
        description:
          "The layout improved by reducing image dominance and highlighting details.",
      },
      {
        icon: "shield",
        title: "Fragmented Customization Flow",
        description:
          "Sauce customization options were limited to one, making the flow confusing.",
      },
      {
        icon: "lightning",
        title: "Unclear Feedback Before Checkout",
        description:
          "Users struggled to understand their selections before checkout, causing confusion and drop-off.",
      },
    ],

    // 7. Design Principles
    designPrinciples: [
      {
        icon: "sparkle-cursor",
        title: "Reduce decision friction",
        description:
          "Streamlining user flows to minimize cognitive load and hesitation at critical interaction points.",
      },
      {
        icon: "arrow-up-circle",
        title: "Surface key choices earlier",
        description:
          "Prioritizing primary actions and essential data to reduce time-to-value for operators.",
      },
      {
        icon: "layout-grid",
        title: "Preserve familiar patterns",
        description:
          "Leveraging established mental models to flatten the learning curve for experienced users.",
      },
      {
        icon: "mobile",
        title: "Optimize for mobile first",
        description:
          "Ensuring critical command functions are accessible and responsive on portable field devices.",
      },
    ],

    // 8. The Solution
    solution:
      "Instead of introducing new features, the solution focused on a targeted set of changes designed to remove friction while maintaining consistency with existing patterns.",
    solutionCards: [
      {
        icon: "target",
        title: "A More Balanced Mobile Layout",
        description:
          "The layout improved by reducing image dominance and highlighting details.",
      },
      {
        icon: "shield",
        title: "Simplified Customization in One Place",
        description:
          "Customization options are now clearer, enabling users to select without repeating steps.",
      },
      {
        icon: "lightning",
        title: "Clearer Feedback While Ordering",
        description:
          "A stronger visual hierarchy improved feedback, making it easier for users to review selections before checkout.",
      },
    ],
    solutionMetrics: [
      {
        label: "task rate success across all platforms",
        value: "88%",
      },
      {
        label: "reduction in average task completion time",
        value: "20%",
      },
      {
        label: "of participants reported higher satisfaction",
        value: "90%",
      },
    ],
  },
  {
    // 1. Hero Section
    slug: "senegence-redesign",
    title: "SENEGENCE",
    blurb:
      "Redesigning the e-commerce experience to improve product discovery, clarify product information, and streamline the purchase flow.",
    tags: ["Retail", "E-Commerce", "Beauty & Cosmetics"],
    metrics: [
      { label: "conversions within 6 months", value: "82K conversions" },
      { label: "in revenue impact post launch", value: "$7.2M in revenue" },
      {
        label: "from top-performing product",
        value: "$540K from the top-performing product",
      },
    ],

    // 2. Project Metadata
    role: "Lead Product Designer",
    client: "SeneGence International",
    timeline: "6 Months",
    platform: "E-Commerce Web & Mobile",

    // 3. TL;DR
    tldr: [
      "Increased conversions after launch",
      "Generated meaningful post-launch revenue",
      "Improved consistency across devices",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I led the product design for SeneGence's e-commerce redesign, focusing on improving product discovery, streamlining the purchase flow, and creating a consistent design system. I collaborated with stakeholders, developers, and the marketing team to deliver a responsive experience that drove measurable business results.",
    coreContributions: [
      "Reorganized product hierarchy and navigation",
      "Improved product pages for clarity and scannability",
      "Built reusable components for consistency",
      "Created responsive patterns for cross-device experience",
    ],

    // 5. The Challenge
    challenge:
      "The existing site made it difficult for customers to browse products, understand differences, and complete purchases efficiently.",

    // 6. The Problem
    problemBreakdown: [
      {
        icon: "target",
        title: "Difficult Product Discovery",
        description:
          "Customers struggled to find products due to poor navigation structure and overwhelming category pages.",
      },
      {
        icon: "shield",
        title: "Unclear Product Information",
        description:
          "Product pages lacked clear differentiation, making it hard for customers to understand what they were buying.",
      },
      {
        icon: "lightning",
        title: "Inconsistent Experience",
        description:
          "The site lacked visual consistency across pages, creating friction and reducing trust during the purchase flow.",
      },
    ],

    // 7. Design Principles
    // (none for this case study)

    // 8. The Solution
    solution:
      "The redesigned experience introduced a clearer structure with improved navigation, better product presentation, and consistent components across all devices.",
    solutionCards: [
      {
        icon: "target",
        title: "Scalable Navigation System",
        description:
          "A reorganized product hierarchy that makes browsing intuitive and helps customers find what they need quickly.",
      },
      {
        icon: "shield",
        title: "Improved Product Pages",
        description:
          "Clearer product presentation with better imagery, descriptions, and comparison features.",
      },
      {
        icon: "lightning",
        title: "Reusable Component Library",
        description:
          "A consistent design system that ensures visual coherence and speeds up future development.",
      },
    ],
    solutionMetrics: [
      { label: "conversions within 6 months", value: "82K" },
      { label: "in revenue impact post launch", value: "$7.2M" },
      {
        label: "from the top-performing product",
        value: "$540K ",
      },
    ],
  },
  {
    // 1. Hero Section
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate.",
    tags: ["Public Safety & Forensics", "B2B"],
    metrics: [
      { label: "increase in page views", value: "26% increase in page views" },
      {
        label: "reduction in bounce rate",
        value: "21% reduction in bounce rate",
      },
      {
        label: "improvement in engagement",
        value: "Significant improvement in engagement",
      },
    ],

    // 2. Project Metadata
    role: "Senior Product Designer",
    client: "Cellebrite",
    timeline: "3 Months",
    platform: "Corporate Website",

    // 3. TL;DR
    tldr: [
      "Increased page views by 26%",
      "Reduced bounce rate by 21%",
      "Improved content clarity and navigation",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I led the redesign of Cellebrite's corporate website, focusing on simplifying complex product information and improving the overall user experience. I worked with product marketing, content strategists, and developers to create a clearer, more navigable site structure.",
    coreContributions: [
      "Reorganized content hierarchy for clarity",
      "Simplified layouts and reduced visual noise",
      "Created clearer paths to key information",
      "Improved messaging clarity across pages",
    ],

    // 5. The Challenge
    challenge:
      "The website had grown cluttered over time, making it hard for visitors to quickly understand the product offerings.",

    // 6. The Problem
    problemBreakdown: [
      {
        icon: "target",
        title: "Cluttered Information Architecture",
        description:
          "Years of content additions had created a confusing site structure that made it difficult for visitors to find what they needed.",
      },
      {
        icon: "shield",
        title: "Complex Product Messaging",
        description:
          "Technical product descriptions were difficult to understand, causing visitors to leave before grasping the value proposition.",
      },
      {
        icon: "lightning",
        title: "Poor Visual Hierarchy",
        description:
          "Pages lacked clear focal points and call-to-actions, leading to high bounce rates and low engagement.",
      },
    ],

    // 7. Design Principles
    // (none for this case study)

    // 8. The Solution
    solution:
      "The redesigned website introduced a clearer structure with improved content hierarchy and simplified layouts that made information easier to find and understand.",
    solutionCards: [
      {
        icon: "target",
        title: "Reorganized Content Hierarchy",
        description:
          "A streamlined site structure that guides visitors to relevant information quickly and intuitively.",
      },
      {
        icon: "shield",
        title: "Simplified Page Layouts",
        description:
          "Cleaner designs with reduced visual noise that help visitors focus on key messages.",
      },
      {
        icon: "lightning",
        title: "Clearer Paths to Information",
        description:
          "Improved navigation and CTAs that make it easy for visitors to find what they need.",
      },
    ],
    solutionMetrics: [
      { label: "increase in page views", value: "26%" },
      {
        label: "reduction in bounce rate",
        value: "21%",
      },
    ],
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: CONTACT_EMAIL },
};
