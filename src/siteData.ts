// Import case study images
import kfcBeforeImage1 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage.png";
import kfcBeforeImage2 from "./assets/images/kfc-pdp-redesign/kfcBeforeImage2.png";
import kfcAfterSolution from "./assets/images/kfc-pdp-redesign/KFC after-solution.jpg";
import stAfterSolution from "./assets/images/verizon-straight-talk-7day/ST after-solution.png";
import stPrototypeVideo from "./assets/images/verizon-straight-talk-7day/ST-Prototype.mp4";
import stMobileMockup from "./assets/images/verizon-straight-talk-7day/ST-Mobile-Mockup.png";
import sgAfterSolution from "./assets/images/senegence-redesign/SeneGence after-solution.png";
import type { CaseStudy } from "./types";

// Contact email - centralized for easy updates
export const CONTACT_EMAIL = "mailto:design@patlopes.com";

export const siteMeta = {
  title: "Patrick Lopes · Senior Product Designer",
  description:
    "Senior product designer with more than 10 years designing consumer products, from checkout to plan choice, for brands like KFC, SeneGence, and Verizon. I own problems from first sketch to launch.",
  ogImage: "/og.png",
};

export const caseStudies: CaseStudy[] = [
  {
    // 1. Hero Section
    slug: "senegence-redesign",
    title: "SeneGence",
    blurb:
      "Redesigning an e-commerce platform for customers and distributors, simplifying navigation, product discovery, and checkout across web and mobile.",
    tags: ["E-Commerce", "Retail", "Beauty & Cosmetics"],
    metrics: [
      { label: "conversions within 6 months", value: "80K+" },
      { label: "in revenue within 6 months of launch", value: "$7M+" },
      { label: "from top-performing product", value: "$540K" },
    ],
    imageSections: [
      {
        placement: "after-solution",
        images: [
          {
            src: sgAfterSolution,
            alt: "SeneGence redesigned checkout experience showing a streamlined cart summary, clear pricing, and confident purchase confirmation",
          },
        ],
      },
    ],

    // 2. Project Metadata
    role: "Senior Product Designer, Project Lead",
    client: "SeneGence International",
    timeline: "6 months",
    platform: "E-Commerce Web & Mobile",

    // 3. TL;DR
    tldr: [
      "80K+ conversions within six months of launch",
      "$7M+ in revenue over the same period, including $540K from the most popular product",
      "Improved consistency across devices",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I led the redesign of SeneGence's e-commerce platform for customers and distributors, simplifying navigation, product discovery, and checkout across web and mobile. I collaborated with stakeholders, developers, and the marketing team, and removed checkout friction to drive measurable business results.",
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
        title: "Difficult Product Discovery",
        description:
          "Customers struggled to find products due to poor navigation structure and overwhelming category pages.",
      },
      {
        title: "Unclear Product Information",
        description:
          "Product pages lacked clear differentiation, making it hard for customers to understand what they were buying.",
      },
      {
        title: "Inconsistent Experience",
        description:
          "The site lacked visual consistency across pages, creating friction and reducing trust during the purchase flow.",
      },
    ],

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
        label: "improvement in usability in testing",
        value: "40%",
      },
      {
        label: "of participants reported higher satisfaction",
        value: "90%",
      },
    ],
    imageSections: [
      {
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
        placement: "after-solution",
        images: [
          {
            src: kfcAfterSolution,
            alt: "KFC Mobile Mockup showing the redesigned product detail page",
          },
        ],
      },
    ],

    // 2. Project Metadata
    role: "Supporting Product Designer, Research and Testing",
    client: "KFC (via Photon)",
    timeline: "6 months",
    platform: "Desktop, Mobile Web, App",

    // 3. TL;DR
    tldr: [
      "88% task success across platforms in usability testing",
      "Reduced average task completion time by 20%",
      "Improved usability by 40% in testing",
      "I ran the research and unmoderated usability testing behind the redesign",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I was a supporting product designer on the product detail page and customization redesign. I ran the user research and unmoderated usability testing, working with the design team, product managers, and engineers. My focus was understanding where customers struggled and checking whether the changes worked.",
    coreContributions: [
      "Synthesized app store reviews, chatbot logs, and customer feedback to find where customers struggled",
      "Ran unmoderated usability testing across desktop, mobile web, and app",
      "Turned findings into proposed design improvements and presented them to stakeholders",
    ],

    // 5. The Challenge
    challenge:
      "New meal options and customization made the product detail page harder to use when customers needed clarity. Feedback highlighted three issues that slowed decision-making.",

    // 6. The Problem
    problemBreakdown: [
      {
        title: "Overwhelming Layout on Mobile",
        description:
          "The product image took over the mobile screen, pushing meal details and options below the fold.",
      },
      {
        title: "Fragmented Customization Flow",
        description:
          "Sauce choices were split across repeated sections, so customers made the same kind of choice more than once.",
      },
      {
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
          "Every extra step between picking a meal and checking out was a chance to drop off, so each one had to earn its place.",
      },
      {
        icon: "arrow-up-circle",
        title: "Surface key choices earlier",
        description:
          "Customization options moved up the page so customers could see what they could change before scrolling.",
      },
      {
        icon: "layout-grid",
        title: "Preserve familiar patterns",
        description:
          "Customers already knew how KFC ordering worked, so the redesign kept the familiar patterns and fixed what got in the way.",
      },
      {
        icon: "mobile",
        title: "Optimize for mobile first",
        description:
          "Mobile was where the layout broke down, so key options and the price had to fit on the first screen.",
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
    slug: "verizon-straight-talk-7day",
    title: "Straight Talk",
    blurb:
      "A short-term plan for prepaid customers a few days short of payday, framed as a bridge rather than a downgrade, so they could stay connected without committing to a full monthly plan.",
    tags: ["Plan Choice", "E-Commerce", "Customer Journeys"],
    metrics: [
      {
        label: "bridge plan redemptions in the first three months",
        value: "~97K",
      },
      {
        label: "unique customers redeemed at least one plan",
        value: "41K+",
      },
      {
        label: "plans per customer on average, a strong signal of recurring need",
        value: "2.3",
      },
      {
        label: "of redemptions were the higher-tier Silver bridge plan",
        value: "73%",
      },
    ],
    metricsSubtitle:
      "Launched July 2025. Results cover the first three months, through late September.",
    imageSections: [
      {
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
        placement: "after-solution",
        images: [
          {
            src: stAfterSolution,
            alt: "Straight Talk 7-Day Bridge Plan interface showing the plan selection and checkout flow",
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
      "Nearly 97K bridge plan redemptions in the first three months",
      "Over 41K unique customers, with strong repeat usage",
      "2.3 bridge plans per customer on average, a clear signal of recurring need",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I owned the UX design on web and responsive web, from framing the problem through post-launch validation. The plan had to be findable for the people who needed it and easy to ignore for everyone else. Most of my decisions came back to that balance.",
    coreContributions: [
      "Where the bridge plan lived on the refill page, so it served the right customers without deprioritizing the primary plans",
      "Holding the line on legally required broadband labels when there was pressure to move them",
      "An upsell path pointing eligible customers toward a full 30-day plan once they were back on their feet",
      "Rebuilding the flow on current design system components when the existing designs were out of date",
    ],

    // 5. The Challenge
    challenge:
      "When customers could not refill on time, the flow gave them two bad options: pay for a full month or lose service. The business wanted to offer relief, but not advertise a cheaper weekly plan that could pull revenue from its core monthly plans. The plan had to exist without being promoted. That constraint shaped everything.",

    // 6. The Problem
    problemBreakdown: [
      {
        title: "No Short-Term Option",
        description:
          "Nothing sat between a full monthly plan and losing service. All or nothing.",
      },
      {
        title: "Eligibility and Pricing Were Hard to Explain",
        description:
          "Who qualified, what it cost, and what happened after the plan ended were all easy to get wrong. Ambiguity meant drop-off.",
      },
      {
        title: "Present, But Not Promoted",
        description:
          "The plan had to be there for the customers who needed it without competing with the primary plans.",
      },
    ],

    // 7. Approach
    approach: [
      {
        title: "Placing a plan the business did not want to promote",
        paragraphs: [
          "I put the bridge plan in an accordion beneath the current plans. Collapsed by default, so it did not compete with the monthly options the business depended on. Present and reachable, so the customers who needed it could still find it.",
          "That was the whole tension. Too high on the page and it pulled focus from the primary plans. Too low and the people in a bind would never see it. The accordion held both goals at once: available, but not promoted.",
        ],
      },
      {
        title: "Getting to a source of truth",
        paragraphs: [
          "The existing brand designs were out of date, and I had no clean access to production or a current component library. So I rebuilt the flow on current design system components, cross-referencing recent work from other designers on the brand to confirm what was live. Not glamorous, but it was the difference between a prototype that matched reality and one that only looked right in Figma.",
        ],
      },
      {
        title: "Holding the line on legal",
        paragraphs: [
          "Broadband labels were legally required on the plan screen, and there was pressure to move them off the main view. I kept them where they belonged. Not fun to make, but the kind of call that keeps a feature shippable.",
        ],
      },
      {
        title: "Proposing a next step",
        paragraphs: [
          "The bridge solved the immediate gap but left an obvious question: what happens after? I proposed an upsell pointing eligible customers toward a full 30-day plan once they were stable again. It framed the bridge as temporary relief with a path forward, not a step down. Immediate buy-in.",
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
          "An affordable, time-bound way to stay connected, tucked in an accordion beneath the primary plans so it stayed available without competing with them.",
      },
      {
        icon: "shield",
        title: "Eligibility and Pricing Customers Could Parse",
        description:
          "Plan details in plain language: who qualified, the weekly cost, and what happened when the plan ended. Fewer surprises, fewer drop-offs.",
      },
      {
        icon: "lightning",
        title: "A Path Back to a Full Plan",
        description:
          "An upsell pointed eligible customers toward a 30-day plan once they were stable, framing the bridge as recovery rather than a permanent downgrade.",
      },
    ],
  },
  {
    // 1. Hero Section
    slug: "cellebrite-website",
    title: "Cellebrite",
    blurb:
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate.",
    tags: ["Marketing Site", "Public Safety & Forensics", "B2B"],
    metrics: [
      { label: "increase in page views", value: "26%" },
      { label: "reduction in bounce rate", value: "62%" },
    ],

    // 2. Project Metadata
    role: "UI/UX Designer",
    client: "Cellebrite",
    timeline: "4 months",
    platform: "Desktop, Mobile Web",

    // 3. TL;DR
    tldr: [
      "Increased page views by 26%",
      "Reduced bounce rate by 62%",
      "Improved content clarity and navigation",
      "Introduced a scalable design system that kept pages consistent",
    ],

    // 4. My Role + Core Contributions
    roleDescription:
      "I redesigned Cellebrite's corporate website, refining content hierarchy and navigation to simplify complex product information. I ran stakeholder workshops and usability tests, and worked with product marketing, content strategists, and developers to create a clearer, more navigable site structure.",
    coreContributions: [
      "Reorganized content hierarchy for clarity",
      "Simplified layouts and reduced visual noise",
      "Created clearer paths to key information",
      "Improved messaging clarity across pages",
      "Introduced a scalable design system that simplified future updates",
    ],

    // 5. The Challenge
    challenge:
      "The website had grown cluttered over time, making it hard for visitors to quickly understand the product offerings.",

    // 6. The Problem
    problemBreakdown: [
      {
        title: "Cluttered Information Architecture",
        description:
          "Years of content additions had created a confusing site structure that made it difficult for visitors to find what they needed.",
      },
      {
        title: "Complex Product Messaging",
        description:
          "Technical product descriptions were difficult to understand, causing visitors to leave before grasping the value proposition.",
      },
      {
        title: "Poor Visual Hierarchy",
        description:
          "Pages lacked clear focal points and calls to action, leading to high bounce rates and low engagement.",
      },
    ],

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
  body: "Hiring a senior product designer, or have a project in mind? Send me an email. I'm open to remote roles and happy to talk shop.",
  action: { label: "Email me", href: CONTACT_EMAIL },
};
