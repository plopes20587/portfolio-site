export type ProcessStep = {
  phase: string;
  title: string;
  description: string;
};

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
  sections?: { heading: string; copy: string }[];
  // Case study detail page fields
  heroImage?: string;
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
  researchStats?: { label: string; value: string }[];
  processTimeline?: ProcessStep[];
  galleryImages?: string[];
  // New storytelling elements
  tldr?: string[];
  tldrSummary?: string;
  pullQuote?: { quote: string; attribution?: string };
  imageSections?: ImageSection[];
};

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
  primaryCta: { label: "Lets talk", href: "mailto:patrick@patricklopes.com" },
  secondaryCta: {
    label: "Get in touch",
    href: "mailto:patrick@patricklopes.com",
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
    slug: "kfc-pdp-redesign",
    title: "KFC",
    blurb:
      "Redesigning the online ordering experience to make meal customization easier and less frustrating across desktop, mobile web, and app.",
    tags: ["E-Commerce", "UX Research", "Mobile"],
    metrics: [
      { label: "Task Success", value: "88%" },
      { label: "Faster Completion", value: "20%" },
      { label: "User Satisfaction", value: "90%" },
    ],
    role: "Product Designer",
    roleDescription:
      "I led the UX design for this project from research synthesis through usability testing and iteration. I worked closely with product, engineering, and stakeholders to define the problem, explore solutions, and validate changes across desktop, mobile web, and app.",
    client: "KFC (via Photon)",
    timeline: "6 Months",
    platform: "Desktop, Mobile Web, App",
    industry: "Food & Beverage",
    overview:
      "Redesigning the online ordering experience to make meal customization easier and less frustrating across desktop, mobile web, and app.",
    challenge:
      "KFC's product detail page had grown more complex over time as new meal options, sides, and sauces were added. What should have been a simple customization flow became difficult to follow, especially on smaller screens. Users were scrolling too much, repeating steps, and struggling to understand what they had selected before moving to checkout. This led to confusion and drop-off during one of the most important moments in the ordering experience.",
    problemBreakdown: [
      {
        icon: "chart",
        title: "Complexity Growth",
        description:
          "The product detail page became increasingly complex as new meal options, sides, and sauces were added over time, making what should have been a simple customization flow difficult to navigate.",
      },
      {
        icon: "alert",
        title: "Mobile Usability",
        description:
          "The experience became especially challenging on smaller screens, where users struggled with excessive scrolling and unclear visual hierarchy.",
      },
      {
        icon: "users",
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
            src: "https://cdn.prod.website-files.com/6661c4eb50f455f4ee0f7a4a/6783a11d0fda9e97f48b1a24_KFC%20Before%20Mockups.png",
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
      "A smoother shopping experience that helps customers browse products, learn about them, and check out with less friction.",
    tags: ["E-Commerce", "Responsive Design"],
    metrics: [
      { label: "Conversions", value: "82K conversions" },
      { label: "Revenue", value: "$7.2M in revenue" },
    ],
    sections: [
      {
        heading: "Discovery and Insights",
        copy: "Navigation did not scale well as the catalog grew. Product information was hard to compare. Mobile experience felt fragmented.",
      },
      {
        heading: "Design Approach",
        copy: "Focused on simplifying navigation, clarifying product information, and creating a responsive system that worked across devices.",
      },
      {
        heading: "Validation",
        copy: "Reviewed designs with stakeholders and iterated based on feedback and post-launch performance.",
      },
      {
        heading: "What I Learned",
        copy: "Design systems are most effective when they directly support business growth and ongoing iteration.",
      },
    ],
    role: "Lead Product Designer",
    client: "SeneGence International",
    timeline: "6 Months",
    platform: "E-Commerce Web & Mobile",
    industry: "Beauty & Skincare",
    overview:
      "Redesigning SeneGence's e-commerce experience to improve navigation, clarity, and conversion. Increased conversions after launch, generated meaningful post-launch revenue, and improved consistency across devices.",
    challenge:
      "The existing site made it difficult for customers to browse products, understand differences, and complete purchases efficiently.",
    solution:
      "Reorganized product hierarchy and navigation. Improved product pages for clarity and scannability. Built reusable components for consistency.",
    results:
      "82K conversions within six months. $7.2M in revenue post-launch. $540K generated from the top-performing product.",
    processTimeline: [
      {
        phase: "01",
        title: "Audit",
        description: "E-commerce experience audit and analytics review",
      },
      {
        phase: "02",
        title: "Strategy",
        description:
          "Navigation restructure and conversion optimization planning",
      },
      {
        phase: "03",
        title: "Design System",
        description: "Component library and responsive pattern development",
      },
      {
        phase: "04",
        title: "Implementation",
        description: "Phased rollout with performance monitoring",
      },
    ],
    tldr: [
      "Increased conversions after launch",
      "Generated meaningful post-launch revenue",
      "Improved consistency across devices",
    ],
    pullQuote: {
      quote:
        "Design systems are most effective when they directly support business growth and ongoing iteration.",
    },
  },
  {
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "A clearer and more structured website that helps visitors understand Cellebrite's tools and find the information they need faster.",
    tags: ["Website UX", "Content Structure"],
    metrics: [
      { label: "Page Views", value: "26% more page views" },
      { label: "Bounce Rate", value: "21% lower bounce rate" },
    ],
    sections: [
      {
        heading: "Discovery and Insights",
        copy: "Users struggled to find relevant information. Content hierarchy did not match user intent. Pages felt dense and overwhelming.",
      },
      {
        heading: "Design Approach",
        copy: "Focused on simplifying structure, clarifying messaging, and improving page flow.",
      },
      {
        heading: "Validation",
        copy: "Measured engagement metrics post-launch and gathered stakeholder feedback.",
      },
      {
        heading: "What I Learned",
        copy: "Clear structure and content hierarchy can dramatically improve engagement without major visual changes.",
      },
    ],
    role: "Senior Product Designer",
    client: "Cellebrite",
    timeline: "3 Months",
    platform: "Corporate Website",
    industry: "Digital Intelligence & Security",
    overview:
      "Improving Cellebrite's website to make complex offerings easier to understand and navigate. Increased page views, reduced bounce rate, and improved content clarity.",
    challenge:
      "The website had grown cluttered over time, making it hard for visitors to quickly understand the product offerings.",
    solution:
      "Reorganized content hierarchy. Simplified layouts and reduced visual noise. Created clearer paths to key information.",
    results: "26% increase in page views. 62% reduction in bounce rate.",
    processTimeline: [
      {
        phase: "01",
        title: "Analysis",
        description: "Content audit and information architecture review",
      },
      {
        phase: "02",
        title: "Strategy",
        description: "Messaging hierarchy and user flow optimization",
      },
      {
        phase: "03",
        title: "Design",
        description: "Page redesign with simplified layouts",
      },
      {
        phase: "04",
        title: "Launch",
        description: "Phased deployment with metric tracking",
      },
    ],
    tldr: [
      "Increased page views",
      "Reduced bounce rate",
      "Improved content clarity",
    ],
    pullQuote: {
      quote:
        "Clear structure and content hierarchy can dramatically improve engagement without major visual changes.",
    },
  },
  {
    slug: "photon-website",
    title: "PHOTON",
    blurb:
      "A refreshed website experience that gives users a simpler way to explore Photon's services and understand their value.",
    tags: ["Research and UX"],
    metrics: [
      { label: "Content", value: "Clearer content hierarchy" },
      {
        label: "Alignment",
        value: "Stronger alignment between user needs and the brand message",
      },
    ],
    sections: [
      {
        heading: "Discovery and Insights",
        copy: "Messaging felt generic and product-heavy. Users struggled to understand what Photon offered. Navigation did not guide exploration well.",
      },
      {
        heading: "Design Approach",
        copy: "Shifted focus toward clarity, storytelling, and a more approachable structure.",
      },
      {
        heading: "Validation",
        copy: "Reviewed designs with internal teams and iterated based on feedback.",
      },
      {
        heading: "What I Learned",
        copy: "Balancing business goals with user needs leads to clearer, more trustworthy experiences.",
      },
    ],
    role: "Product Designer",
    client: "Photon",
    timeline: "4 Months",
    platform: "Website",
    industry: "Technology Services",
    overview:
      "Refreshing Photon's website to better communicate their services and values. Improved clarity of messaging, better alignment with brand values, and easier navigation for users.",
    challenge:
      "The site leaned heavily on sales messaging and lacked a clear, user-centered structure.",
    solution:
      "Simplified navigation and page layouts. Reworked content to focus on relationships and outcomes. Improved visual hierarchy.",
    results:
      "Improved engagement and clarity. Stronger alignment between brand and user experience.",
    processTimeline: [
      {
        phase: "01",
        title: "Discovery",
        description: "Stakeholder interviews and brand alignment review",
      },
      {
        phase: "02",
        title: "Content Strategy",
        description: "Messaging refinement and storytelling approach",
      },
      {
        phase: "03",
        title: "Design",
        description: "Visual hierarchy and layout improvements",
      },
      {
        phase: "04",
        title: "Review",
        description: "Internal feedback and iterative refinement",
      },
    ],
    tldr: [
      "Improved clarity of messaging",
      "Better alignment with brand values",
      "Easier navigation for users",
    ],
    pullQuote: {
      quote:
        "Balancing business goals with user needs leads to clearer, more trustworthy experiences.",
    },
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: "mailto:patrick@patricklopes.com" },
};
