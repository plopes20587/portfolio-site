// Import case study images
import kfcBeforeMockups from "./assets/images/kfc-pdp-redesign/KFC Before images.png";
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
  slug: string;
  title: string;
  blurb: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  // Case study detail page fields
  role?: string;
  roleDescription?: string;
  coreContributions?: string[];
  client?: string;
  timeline?: string;
  platform?: string;
  industry?: string;
  overview?: string;
  challenge?: string;
  problemBreakdown?: ProblemBreakdownItem[];
  // Design principles
  designPrinciples?: DesignPrinciple[];
  // Solution
  solution?: string;
  solutionPoints?: string[];
  solutionCards?: SolutionCard[];
  // Results
  results?: string;
  // New storytelling elements
  tldr?: string[];
  imageSections?: ImageSection[];
};

// Contact email - centralized for easy updates
const CONTACT_EMAIL = "mailto:patrick@patricklopes.com";

export const siteMeta = {
  title: "Patrick Lopes · Senior Product Designer",
  description:
    "Senior Product Designer focused on e-commerce and digital experiences. Crafting product pages, checkout flows, and customer journeys with clarity and a calm layer of AI support.",
  ogImage: "/og.png",
};

export const heroContent = {
  title: "PRODUCT DESIGNER",
  subHeadline:
    "Good design happens when the experience speaks the customer's language. With the right balance of structure, research, and a bit of AI in the early stages, the journey becomes smoother and easier to follow.",
  primaryCta: { label: "Lets talk", href: CONTACT_EMAIL },
  secondaryCta: {
    label: "Get in touch",
    href: CONTACT_EMAIL,
  },
};

export const marqueeLogos = [
  "Walgreens",
  "Verizon",
  "Cellebrite",
  "Medline",
  "KFC",
  "SeneGence",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "verizon-straight-talk-7day",
    title: "Verizon",
    blurb:
      "Designing a short-term payment flexibility experience that helps prepaid customers maintain service during temporary financial gaps.",
    tags: ["Telecom", "B2C", "Prepaid Mobile", "Account & Billing"],
    metrics: [
      {
        label: "redemptions in first few months",
        value: "100K",
      },
      {
        label: "unique customers with repeat usage",
        value: "40K+",
      },
      {
        label: "of redemptions from 7-day plan",
        value: "majority",
      },
    ],
    role: "Senior Product Designer",
    roleDescription:
      "I worked as a product designer on the Verizon Value team, contributing to the end-to-end experience for the Straight Talk 7-day Bridge Plan. My work focused on plan discovery, messaging clarity, and flow design across multiple customer touchpoints, in close collaboration with product, engineering, CX, analytics, and legal partners.",
    coreContributions: [
      "Designing clear plan messaging that set the right expectations",
      "Supporting consistent experiences across channels",
      "Making eligibility and next steps easy to understand",
      "Balancing customer needs with operational and legal constraints",
    ],
    client: "Straight Talk (Verizon Value Organization)",
    timeline: "4 months",
    platform: "Web, Mobile Web, App",
    industry: "Telecommunications",
    challenge:
      "Prepaid customers who missed a refill date had limited options to stay connected, even when they were willing to pay for short-term access. Together, these issues increased frustration and risked long-term customer loss during short-term financial hardship.",
    problemBreakdown: [
      {
        icon: "target",
        title: "Lack of Short-Term Flexibility",
        description:
          "Customers could not easily purchase a smaller plan to bridge the gap between refill dates, forcing them into full monthly commitments or service suspension.",
      },
      {
        icon: "shield",
        title: "Unclear Plan Eligibility and Messaging",
        description:
          "Rules around eligibility, pricing, and renewal were complex and difficult to communicate clearly across channels.",
      },
      {
        icon: "lightning",
        title: "Fragmented Customer Journeys",
        description:
          "The experience differed depending on how a customer entered the flow, whether through web, app, IVR, or care, leading to confusion and drop-off.",
      },
    ],
    // Solution
    solution:
      "The 7-day Bridge Plan introduced a short-term option that allowed eligible customers to maintain service without committing to a full monthly plan. Each design decision directly addressed a core problem identified earlier.",
    solutionCards: [
      {
        icon: "target",
        title: "A Clear Short-Term Plan Option",
        description:
          "The 7-day plan gave customers an affordable, time-bound option to stay connected during a temporary gap.",
      },
      {
        icon: "shield",
        title: "Straightforward Eligibility Messaging",
        description:
          "Plan details were clearly communicated so customers understood who qualified and how pricing worked.",
      },
      {
        icon: "lightning",
        title: "Consistent Cross-Channel Experience",
        description:
          "The plan was supported across digital and assisted channels, allowing customers to access it conveniently.",
      },
    ],
    // Results
    results:
      "These results showed that short-term flexibility met a real customer need while helping maintain long-term subscriber relationships.",
    tldr: [
      "Tens of thousands of customers used the 7-day plan shortly after launch",
      "High repeat usage showed the plan solved an ongoing need",
      "Most redemptions occurred through customer-facing digital channels",
    ],
  },
  {
    slug: "kfc-pdp-redesign",
    title: "KFC",
    blurb:
      "As KFC’s digital menu expanded, the product detail page became a bottleneck in the ordering flow. Small usability issues compounded at scale, slowing decision-making and creating uncertainty right before checkout. This work focused on simplifying that moment without disrupting familiar patterns or existing systems.",
    tags: ["E-Commerce", "Food & Beverage", "B2C"],
    metrics: [
      {
        label: "task success rate across all platforms",
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
    role: "Product Designer",
    roleDescription:
      "I owned the UX design for the product detail page redesign end-to-end, from framing the problem through defining the solution and validating it through usability testing. I worked closely with product managers, engineers, and stakeholders to align on priorities, navigate technical constraints, and make tradeoffs that balanced customer needs with business goals across desktop, mobile web, and app.",
    coreContributions: [
      "Bringing key decisions into view earlier in the flow",
      "Reducing repeated actions and redundant sections",
      "Grouping related options to make choices easier to scan",
      "Providing clearer feedback as users made selections",
    ],
    client: "KFC (via Photon)",
    timeline: "6 months",
    platform: "Desktop, Mobile Web, App",
    industry: "Food & Beverage",
    overview:
      "As KFC's digital menu expanded, the product detail page became a bottleneck in the ordering flow. Small usability issues compounded at scale, slowing decision-making and creating uncertainty right before checkout. This work focused on simplifying that moment without disrupting familiar patterns or existing systems.",
    challenge:
      "New meal options and customization made the product detail page harder to use when customers needed clarity. Feedback highlighted three issues that slowed decision-making.",
    problemBreakdown: [
      {
        icon: "target",
        title: "Complexity Growth",
        description:
          "The product detail page became increasingly complex as new meal options, sides, and sauces were added over time, making what should have been a simple customization flow difficult to navigate.",
      },
      {
        icon: "shield",
        title: "Mobile Usability",
        description:
          "The experience became especially challenging on smaller screens, where users struggled with excessive scrolling and unclear visual hierarchy.",
      },
      {
        icon: "lightning",
        title: "User Confusion",
        description:
          "Users were repeating steps and struggling to understand what they had selected before moving to checkout, leading to confusion and drop-off during a critical moment.",
      },
    ],
    // Design principles
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
    // Solution
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
    // Results
    results:
      "88 percent task success rate across all platforms. 20 percent reduction in average task completion time. 90 percent of participants reported higher satisfaction.",
    // TL;DR
    tldr: [
      "Improved task success to 88% across platforms",
      "Reduced average task completion time by 20%",
      "Simplified a high-friction customization flow used at scale",
    ],
    imageSections: [
      {
        sectionLabel: "THE PROBLEM",
        heading: "Before: The Original PDP",
        layout: "single",
        placement: "after-problem",
        images: [
          {
            src: kfcBeforeMockups,
            alt: "KFC Before mobile mockups showing the original product detail page design",
            caption:
              "The original PDP had the image taking over the entire mobile real estate, repetitive sauce sections, and an unnecessary footer nav",
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
  },
  {
    slug: "senegence-redesign",
    title: "SENEGENCE",
    blurb:
      "Redesigning SeneGence’s e-commerce experience to make it easier for customers to browse products, understand what they’re buying, and complete purchases with less friction.",
    tags: ["Retail", "E-Commerce", "Beauty & Cosmetics", "Product Discovery"],
    metrics: [
      { label: "conversions within 6 months", value: "82K" },
      { label: "in revenue impact post launch", value: "$7.2M" },
      { label: "from top-performing product", value: "$540K" },
    ],
    role: "Lead Product Designer",
    roleDescription:
      "I led the product design for SeneGence's e-commerce redesign, focusing on improving product discovery, streamlining the purchase flow, and creating a consistent design system. I collaborated with stakeholders, developers, and the marketing team to deliver a responsive experience that drove measurable business results.",
    coreContributions: [
      "Reorganized product hierarchy and navigation",
      "Improved product pages for clarity and scannability",
      "Built reusable components for consistency",
      "Created responsive patterns for cross-device experience",
    ],
    client: "SeneGence International",
    timeline: "6 Months",
    platform: "E-Commerce Web & Mobile",
    industry: "Beauty & Skincare",
    challenge:
      "The existing site made it difficult for customers to browse products, understand differences, and complete purchases efficiently.",
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
    // Solution
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
    // Results
    results:
      "82K conversions within six months. $7.2M in revenue post-launch. $540K generated from the top-performing product.",
    tldr: [
      "Increased conversions after launch",
      "Generated meaningful post-launch revenue",
      "Improved consistency across devices",
    ],
  },
  {
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate.",
    tags: ["Public Safety & Forensics", "Technology Services", "B2B"],
    metrics: [
      { label: "increase in page views", value: "26%" },
      { label: "reduction in bounce rate", value: "21%" },
      { label: "improvement in engagement", value: "significant" },
    ],
    role: "Senior Product Designer",
    roleDescription:
      "I led the redesign of Cellebrite's corporate website, focusing on simplifying complex product information and improving the overall user experience. I worked with product marketing, content strategists, and developers to create a clearer, more navigable site structure.",
    coreContributions: [
      "Reorganized content hierarchy for clarity",
      "Simplified layouts and reduced visual noise",
      "Created clearer paths to key information",
      "Improved messaging clarity across pages",
    ],
    client: "Cellebrite",
    timeline: "3 Months",
    platform: "Corporate Website",
    industry: "Digital Intelligence & Security",
    challenge:
      "The website had grown cluttered over time, making it hard for visitors to quickly understand the product offerings.",
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
    // Solution
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
    // Results
    results: "26% increase in page views. 21% lower bounce rate.",
    tldr: [
      "Increased page views by 26%",
      "Reduced bounce rate by 21%",
      "Improved content clarity and navigation",
    ],
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: CONTACT_EMAIL },
};
