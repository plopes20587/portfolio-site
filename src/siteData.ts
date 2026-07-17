// Import case study images
import kfcBeforeImage1 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage.png";
import kfcBeforeImage2 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage2.png";
import kfcAfterSolution from "./assets/images/kfc-pdp-redesign/KFC after-solution.jpg";
import stAfterSolution from "./assets/images/verizon-straight-talk-7day/ST after-solution.png";
import stPrototypeVideo from "./assets/images/verizon-straight-talk-7day/ST-Prototype.mp4";
import stMobileMockup from "./assets/images/verizon-straight-talk-7day/ST-Mobile-Mockup.png";
import sgAfterSolution from "./assets/images/senegence-redesign/SeneGence after-solution.png";

export type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
  type?: "image" | "video";
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
  customPadding?: string;
  imageMaxWidth?: string;
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

export type ApproachStep = {
  title: string;
  /** Each string renders as its own paragraph */
  paragraphs: string[];
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
  // Optional context line shown above the metrics row in SolutionSection.
  // Omit it and no subtitle renders for that case study.
  metricsSubtitle?: string;
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

  // 7. Approach (replaces Design Principles as case studies are rewritten)
  approach?: ApproachStep[];

  // 7b. Design Principles (legacy — remove once all case studies use Approach)
  designPrinciples?: DesignPrinciple[];

  // 8. The Solution
  solution?: string;
  solutionCards?: SolutionCard[];
};

// Contact email - centralized for easy updates
const CONTACT_EMAIL = "mailto:design@patlopes.com";

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
      "Introducing a short-term bridge plan for prepaid customers facing temporary financial gaps, framed as a bridge rather than a downgrade, so they could stay connected without committing to a full monthly plan.",
    tags: ["B2C", "eCommerce", "Customer Journeys"],
    metrics: [
      {
        label: "bridge plan redemptions in the first three months",
        value: "~97K",
      },
      {
        label: "unique customers used the plan, with strong repeat usage",
        value: "41K+",
      },
      {
        label: "bridge plans purchased per customer on average",
        value: "2.3",
      },
      {
        label: "of redemptions chose the higher-tier Silver bridge plan",
        value: "73%",
      },
    ],
    metricsSubtitle:
      "Launched July 2025. Results below cover the first three months, through late September.",
    imageSections: [
      {
        sectionLabel: "PROTOTYPE",
        heading: "The Bridge Plan in Motion",
        layout: "single",
        placement: "after-problem",
        images: [
          {
            src: stPrototypeVideo,
            alt: "Mobile prototype walking through the Straight Talk 7-Day Bridge Plan flow",
            caption:
              "Mobile prototype of the 7-day Bridge Plan selection and checkout flow",
            type: "video",
          },
        ],
      },
      {
        layout: "single",
        placement: "after-process",
        customPadding: "px-24 pt-0 pb-80 md:px-60",
        imageMaxWidth: "max-w-[1146px]",
        images: [
          {
            src: stMobileMockup,
            alt: "Final mobile presentation mockup of the Straight Talk 7-Day Bridge Plan experience",
            caption:
              "Final mobile design of the 7-day Bridge Plan experience",
          },
        ],
      },
      {
        sectionLabel: "THE SOLUTION",
        heading: "The Bridge Plan Experience",
        layout: "single",
        placement: "after-solution",
        images: [
          {
            src: stAfterSolution,
            alt: "Straight Talk 7-Day Bridge Plan interface showing the plan selection and checkout flow",
            caption:
              "The bridge plan experience provides clear eligibility, pricing, and next-step messaging across all channels",
          },
        ],
      },
    ],

    // 2. Project Metadata
    role: "Senior Product Designer",
    client: "Straight Talk (Verizon Value Organization)",
    timeline: "Multi-phase rollout · Launched July 2025",
    platform: "Web, Responsive Web",

    // 3. TL;DR
    tldr: [
      "Nearly 97K bridge plan redemptions in the first three months after launch",
      "Over 41K unique customers used the plan, with strong repeat usage",
      "Customers purchased about 2.3 bridge plans on average, which pointed to a real, recurring need",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I owned the UX design for the 7-Day Bridge Plan on web and responsive web, from framing the problem through supporting validation after launch. I worked with product, engineering, CX, analytics, and legal to align on eligibility, messaging, and how the plan showed up in the refill experience. The work was less about adding a feature and more about placing one carefully. The plan had to be findable for the people who needed it and easy to ignore for everyone else. Most of my decisions came back to that balance.",
    coreContributions: [
      "Deciding where the bridge plan lived on the refill page, so it served the right customers without deprioritizing the primary plans",
      "Holding the line on including legally required broadband labels on the plan screen when there was pressure to move them",
      "Proposing an upsell path that pointed eligible customers toward a full 30-day plan once they were back on their feet",
      "Rebuilding the flow on current design system components when the existing designs were out of date and there was no clean source of truth",
    ],

    // 5. The Challenge
    challenge:
      "When customers could not refill on time, the existing flow gave them two bad options: pay for a full month or lose service. Feedback from care and digital channels kept surfacing the same thing. People were frustrated, and the business was losing customers during short windows of financial hardship that did not need to end in churn. The business wanted to offer relief, but it also did not want to advertise a cheaper weekly plan that could pull revenue away from its core monthly plans. The plan needed to exist without being promoted. That constraint shaped the entire design.",

    // 6. The Problem
    problemBreakdown: [
      {
        icon: "target",
        title: "No Short-Term Option",
        description:
          "Customers had nothing between a full monthly plan and losing service. It was all or nothing.",
      },
      {
        icon: "shield",
        title: "Eligibility and Pricing Were Hard to Explain",
        description:
          "Who qualified, what it cost, and what happened after the plan ended were all easy to get wrong. Ambiguity here meant drop-off.",
      },
      {
        icon: "lightning",
        title: "Present Without Being Promoted",
        description:
          "The plan needed to be there for the customers who required it, without competing with the primary monthly plans or pulling focus from the rest of the refill page.",
      },
    ],

    // 7. Approach
    approach: [
      {
        title: "Placing a plan the business did not want to promote",
        paragraphs: [
          "The hardest design decision was where to put the bridge plan on the refill page.",
          "If it sat too high, it would compete with the primary plans and pull attention away from the monthly options the business depended on. If it sat too low or got buried, the customers who actually needed it would never find it. I was designing for two audiences with opposite needs on the same screen: the customer in a bind who needed the plan to be there, and the business that needed it to stay quiet.",
          "I placed the bridge plan inside an accordion beneath the current plans. Collapsed by default, so it did not compete visually or pull focus from the monthly options. Present and reachable, so a customer looking for a cheaper short-term path would find it right where it made sense. The accordion did the work of holding both goals at once. It kept the plan available without turning it into something the page was selling.",
        ],
      },
      {
        title: "Getting to a source of truth",
        paragraphs: [
          "A quieter challenge ran underneath the whole project. The existing designs for this brand were out of date, and I did not have clean access to production or a current component library to build from. Working off the old files would have shipped something inconsistent with what customers actually saw.",
          "So I rebuilt the flow on current design system components and spent real time cross-referencing recent work from other designers on the same brand to confirm what was actually live. A lot of back and forth to piece together a reliable starting point. It was not glamorous work, but it was the difference between a prototype that matched reality and one that only looked right in Figma.",
        ],
      },
      {
        title: "Holding the line on legal",
        paragraphs: [
          "Broadband labels were a legal requirement on the plan screen. There was pressure to move them off the main view to keep things clean. I pushed back and kept them where they were required to be. Not the fun kind of design decision, but the kind that keeps a feature shippable and keeps the team out of trouble later.",
        ],
      },
      {
        title: "Proposing a next step",
        paragraphs: [
          "The bridge plan solved the immediate gap, but it left an obvious question: what happens after? I proposed an upsell component that pointed eligible customers back toward a full 30-day plan once they were stable again. It reinforced the plan as temporary relief with a clear path forward, rather than a permanent step down. That got immediate buy-in from stakeholders.",
        ],
      },
    ],

    // 8. The Solution
    solution:
      "The 7-day Bridge Plan introduced a short-term option that allowed eligible customers to maintain service without committing to a full monthly plan.",
    solutionCards: [
      {
        icon: "target",
        title: "A Short-Term Plan, Placed With Intent",
        description:
          "The bridge plan gave customers an affordable, time-bound way to stay connected. Tucked in an accordion beneath the primary plans, it stayed available to the people who needed it without competing with the monthly options.",
      },
      {
        icon: "shield",
        title: "Eligibility and Pricing Customers Could Actually Parse",
        description:
          "Plan details were surfaced in plain language, so customers understood who qualified, what it cost per week, and what would happen when the plan ended. Fewer surprises meant fewer drop-offs.",
      },
      {
        icon: "lightning",
        title: "A Path Back to a Full Plan",
        description:
          "An upsell component pointed eligible customers toward a full 30-day plan once they were stable again, framing the bridge as a step toward recovery rather than a permanent downgrade.",
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
  },
  {
    // 1. Hero Section
    slug: "senegence-redesign",
    title: "SENEGENCE",
    blurb:
      "Redesigning the e-commerce experience to improve product discovery, clarify product information, and streamline the purchase flow.",
    tags: ["Retail", "E-Commerce", "Beauty & Cosmetics"],
    metrics: [
      { label: "conversions within 6 months", value: "82K" },
      { label: "in revenue impact post launch", value: "$7.2M" },
      { label: "from top-performing product", value: "$540K" },
    ],
    imageSections: [
      {
        sectionLabel: "THE SOLUTION",
        heading: "The Redesigned Checkout Experience",
        layout: "single",
        placement: "after-solution",
        images: [
          {
            src: sgAfterSolution,
            alt: "SeneGence redesigned checkout experience showing a streamlined cart summary, clear pricing, and confident purchase confirmation",
            caption:
              "The redesigned checkout flow clarifies pricing, reduces friction at review, and builds trust with consistent patterns across devices.",
          },
        ],
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
  },
  {
    // 1. Hero Section
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate.",
    tags: ["Public Safety & Forensics", "B2B"],
    metrics: [
      { label: "increase in page views", value: "26%" },
      { label: "reduction in bounce rate", value: "21%" },
      {
        label: "improvement in engagement",
        value: "Significant",
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
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: CONTACT_EMAIL },
};
