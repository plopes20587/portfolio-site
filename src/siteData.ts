// Import case study images
import kfcBeforeMockups from "./assets/images/kfc-pdp-redesign/KFC Before images.png";

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

export type CaseStudy = {
  slug: string;
  title: string;
  blurb: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  // Case study detail page fields
  role?: string;
  roleDescription?: string;
  client?: string;
  timeline?: string;
  platform?: string;
  industry?: string;
  overview?: string;
  challenge?: string;
  problemBreakdown?: ProblemBreakdownItem[];
  // Discovery section
  discoveryInputs?: string[];
  discoveryInsights?: string[];
  discoverySummary?: string;
  // Design approach
  designApproach?: string;
  designApproachPoints?: string[];
  // Solution
  solution?: string;
  solutionPoints?: string[];
  // Validation
  validation?: string;
  // Results
  results?: string;
  // What I learned
  whatILearned?: string;
  // New storytelling elements
  tldr?: string[];
  tldrSummary?: string;
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
    title: "Straight Talk 7-day Bridge Plan",
    blurb:
      "Designing a short-term payment flexibility experience that helps prepaid customers maintain service during temporary financial gaps.",
    tags: ["Payment Experience", "Multi-Channel", "UX Design"],
    metrics: [
      {
        label: "Plan Redemptions",
        value:
          "Tens of thousands of customers redeemed the 7-day plan after launch",
      },
      {
        label: "Repeat Usage",
        value:
          "A significant portion of users returned to purchase the plan multiple times",
      },
      {
        label: "Channel Performance",
        value:
          "Digital and customer-facing channels accounted for the majority of usage",
      },
    ],
    role: "Senior Product Designer",
    roleDescription:
      "I worked as a product designer on the Verizon Value team, contributing to the end-to-end experience for the Straight Talk 7-day Bridge Plan. My work focused on plan discovery, messaging clarity, and flow design across multiple customer touchpoints, in close collaboration with product, engineering, CX, analytics, and legal partners.",
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
    // Discovery section
    discoveryInputs: [
      "Customer service and care insights",
      "Lifecycle and suspension data",
      "Stakeholder workshops across CX, product, and analytics",
      "Existing refill and reactivation flows",
    ],
    discoveryInsights: [
      "Customers often face short-term financial gaps rather than long-term churn intent",
      "Losing service creates frustration and erodes trust quickly",
      "Existing options did not clearly communicate flexibility or next steps",
    ],
    discoverySummary:
      "These insights reframed the problem from preventing churn to supporting customers during a temporary moment of need.",
    // Design approach
    designApproach:
      "The goal was to introduce flexibility without adding complexity. AI tools supported early flow exploration and content iteration, helping teams move quickly while aligning on clarity and consistency.",
    designApproachPoints: [
      "Designing clear plan messaging that set the right expectations",
      "Supporting consistent experiences across channels",
      "Making eligibility and next steps easy to understand",
      "Balancing customer needs with operational and legal constraints",
    ],
    // Solution
    solution:
      "The 7-day Bridge Plan introduced a short-term option that allowed eligible customers to maintain service without committing to a full monthly plan. Each design decision directly addressed a core problem identified earlier. Together, these changes created a more supportive and predictable experience during a sensitive moment in the customer lifecycle.",
    solutionPoints: [
      "A Clear Short-Term Plan Option: The 7-day plan gave customers an affordable, time-bound option to stay connected during a temporary gap",
      "Straightforward Eligibility and Pricing Messaging: Plan details were clearly communicated so customers understood who qualified, how pricing worked, and how the plan could be renewed",
      "Consistent Cross-Channel Experience: The plan was supported across digital and assisted channels, allowing customers to access it in the moment and through the path most convenient to them",
    ],
    // Validation
    validation:
      "Post-launch performance and customer behavior were closely monitored in partnership with analytics and CX teams. Usage patterns, repeat purchases, and channel performance were used to validate whether the experience met both customer and business goals.",
    // Results
    results:
      "These results showed that short-term flexibility met a real customer need while helping maintain long-term subscriber relationships.",
    // What I learned
    whatILearned:
      "This project highlighted the importance of designing with empathy during moments of financial stress. Clear messaging and flexible options can build trust even when customers are facing challenges. It also reinforced how lifecycle and systems thinking are critical when designing experiences that span multiple channels and touchpoints.",
    tldr: [
      "Tens of thousands of customers used the 7-day plan shortly after launch",
      "High repeat usage showed the plan solved an ongoing need",
      "Most redemptions occurred through customer-facing digital channels",
    ],
    tldrSummary:
      "This project focused on helping customers stay connected while protecting long-term subscriber value.",
  },
  {
    slug: "kfc-pdp-redesign",
    title: "KFC",
    blurb:
      "Redesigning the online ordering experience to make meal customization easier and less frustrating across desktop, mobile web, and app.",
    tags: ["E-Commerce", "UX Research", "Mobile"],
    metrics: [
      { label: "Task Success", value: "88% task success rate across devices " },
      { label: "Faster Completion", value: "20% faster task completion time" },
      { label: "User Satisfaction", value: "90% higher user satisfaction" },
    ],
    role: "Product Designer",
    roleDescription:
      "I led the UX design for this project from research synthesis through usability testing and iteration. I worked closely with product, engineering, and stakeholders to define the problem, explore solutions, and validate changes across desktop, mobile web, and app.",
    client: "KFC (via Photon)",
    timeline: "6 Months",
    platform: "Desktop, Mobile Web, App",
    industry: "Food & Beverage",
    challenge:
      "KFC's product detail page had grown more complex over time as new meal options, sides, and sauces were added. What should have been a simple customization flow became difficult to follow, especially on smaller screens. Users were scrolling too much, repeating steps, and struggling to understand what they had selected before moving to checkout. This led to confusion and drop-off during one of the most important moments in the ordering experience.",
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
    // Discovery section
    discoveryInputs: [
      "SME interviews",
      "App store reviews",
      "Chatbot conversation logs",
      "Voice of customer data",
    ],
    discoveryInsights: [
      "Users felt overwhelmed by repeated customization sections",
      "Switching between meal types caused confusion",
      "Lack of clear feedback reduced confidence before checkout",
    ],
    discoverySummary:
      "These insights helped narrow the focus from redesigning the page broadly to reducing friction during decision making.",
    // Design approach
    designApproach:
      "The goal was not to add features, but to simplify what already existed. AI tools supported early exploration and layout variations, helping me move faster through rough concepts before refining the final designs.",
    designApproachPoints: [
      "Bringing key choices into view earlier",
      "Reducing repeated actions",
      "Grouping related options more clearly",
      "Providing consistent feedback as users made selections",
    ],
    // Solution
    solution:
      "The redesigned PDP introduced a clearer structure and a more predictable flow. Each change was small on its own, but together they made the experience easier to follow.",
    solutionPoints: [
      "A tighter layout that reduced scrolling",
      "Clear grouping of customization options",
      "Improved visual hierarchy to guide attention",
      "A persistent order summary to confirm selections",
    ],
    // Validation
    validation:
      "The redesigned flow was tested with 15 participants across desktop, mobile web, and app. Participants completed tasks such as ordering individual meals, combos, and family options. Testing uncovered minor issues around labeling and spacing, which were addressed before final delivery.",
    // Results
    results:
      "These results confirmed that simplifying structure and feedback had a meaningful impact on usability.",
    // What I learned
    whatILearned:
      "This project reinforced how quickly complexity can build up in high-traffic commerce flows. Small improvements in structure and feedback can dramatically change how confident users feel. It also highlighted the value of testing across platforms early, rather than assuming desktop patterns translate cleanly to mobile.",
    // TL;DR
    tldr: [
      "Improved task success to 88% across platforms",
      "Reduced average task completion time by 20%",
      "Simplified a high-friction customization flow used at scale",
    ],
    tldrSummary:
      "This project focused on removing unnecessary steps and helping users feel confident as they built their order.",
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
        sectionLabel: "RESEARCH",
        heading: "Journey Mapping",
        layout: "side-by-side",
        placement: "after-process",
        images: [
          {
            src: "https://cdn.prod.website-files.com/6661c4eb50f455f4ee0f7a4a/6783a5ead6b6f6e8b5dd8b3d_KFC%20Current%20State%20Map.png",
            alt: "Current state journey map showing user friction points",
            caption:
              "Current State Journey Map - Uncovered critical friction points in customization",
          },
          {
            src: "https://cdn.prod.website-files.com/6661c4eb50f455f4ee0f7a4a/6783a5ea2e32e5058dbbd7bb_KFC%20Future%20State%20Map.png",
            alt: "Future state journey map showing the improved user flow",
            caption:
              "Future State Journey Map - A seamless, intuitive process for the PDP",
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
            src: "https://cdn.prod.website-files.com/6661c4eb50f455f4ee0f7a4a/6783a11d2ed54a05cdd1e339_KFC%20Mobile%20Mockup.png",
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
      "Redesigning SeneGence's e-commerce experience to improve navigation, clarity, and conversion. Increased conversions after launch, generated meaningful post-launch revenue, and improved consistency across devices.",
    tags: ["E-Commerce", "Responsive Design"],
    metrics: [
      { label: "Conversions", value: "82K conversions" },
      { label: "Revenue", value: "$7.2M in revenue" },
    ],
    role: "Lead Product Designer",
    client: "SeneGence International",
    timeline: "6 Months",
    platform: "E-Commerce Web & Mobile",
    industry: "Beauty & Skincare",
    challenge:
      "The existing site made it difficult for customers to browse products, understand differences, and complete purchases efficiently.",
    // Discovery section
    discoveryInputs: [
      "E-commerce experience audit",
      "Analytics review",
      "User feedback analysis",
    ],
    discoveryInsights: [
      "Navigation did not scale well as the catalog grew",
      "Product information was hard to compare",
      "Mobile experience felt fragmented",
    ],
    discoverySummary:
      "These insights highlighted the need for a more scalable navigation system and clearer product presentation.",
    // Design approach
    designApproach:
      "Focused on simplifying navigation, clarifying product information, and creating a responsive system that worked across devices.",
    designApproachPoints: [
      "Reorganized product hierarchy and navigation",
      "Improved product pages for clarity and scannability",
      "Built reusable components for consistency",
      "Created responsive patterns for cross-device experience",
    ],
    // Solution
    solution:
      "The redesigned experience introduced a clearer structure with improved navigation, better product presentation, and consistent components across all devices.",
    solutionPoints: [
      "Scalable navigation system",
      "Improved product pages for clarity",
      "Reusable component library",
      "Responsive design patterns",
    ],
    // Validation
    validation:
      "Reviewed designs with stakeholders and iterated based on feedback and post-launch performance metrics.",
    // Results
    results:
      "82K conversions within six months. $7.2M in revenue post-launch. $540K generated from the top-performing product.",
    // What I learned
    whatILearned:
      "Design systems are most effective when they directly support business growth and ongoing iteration.",
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
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate. Increased page views, reduced bounce rate, and improved content clarity.",
    tags: ["Website UX", "Content Structure"],
    metrics: [
      { label: "Page Views", value: "26% more page views" },
      { label: "Bounce Rate", value: "21% lower bounce rate" },
    ],
    role: "Senior Product Designer",
    client: "Cellebrite",
    timeline: "3 Months",
    platform: "Corporate Website",
    industry: "Digital Intelligence & Security",
    challenge:
      "The website had grown cluttered over time, making it hard for visitors to quickly understand the product offerings.",
    // Discovery section
    discoveryInputs: [
      "Content audit",
      "Information architecture review",
      "User feedback analysis",
    ],
    discoveryInsights: [
      "Users struggled to find relevant information",
      "Content hierarchy did not match user intent",
      "Pages felt dense and overwhelming",
    ],
    discoverySummary:
      "These insights revealed the need for a clearer content structure and better information architecture.",
    // Design approach
    designApproach:
      "Focused on simplifying structure, clarifying messaging, and improving page flow.",
    designApproachPoints: [
      "Reorganized content hierarchy",
      "Simplified layouts and reduced visual noise",
      "Created clearer paths to key information",
      "Improved messaging clarity",
    ],
    // Solution
    solution:
      "The redesigned website introduced a clearer structure with improved content hierarchy and simplified layouts that made information easier to find and understand.",
    solutionPoints: [
      "Reorganized content hierarchy",
      "Simplified layouts",
      "Reduced visual noise",
      "Clearer paths to key information",
    ],
    // Validation
    validation:
      "Measured engagement metrics post-launch and gathered stakeholder feedback to validate improvements.",
    // Results
    results: "26% increase in page views. 21% lower bounce rate.",
    // What I learned
    whatILearned:
      "Clear structure and content hierarchy can dramatically improve engagement without major visual changes.",
    tldr: [
      "Increased page views",
      "Reduced bounce rate",
      "Improved content clarity",
    ],
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: CONTACT_EMAIL },
};
