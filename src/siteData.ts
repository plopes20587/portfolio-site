export type ProcessStep = {
  phase: string;
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
  client?: string;
  timeline?: string;
  platform?: string;
  industry?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  results?: string;
  researchStats?: { label: string; value: string }[];
  processTimeline?: ProcessStep[];
  galleryImages?: string[];
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

export const rotatingKeywords = [
  "Product designer",
  "UX strategist",
  "AI-driven designer",
  "Coffee enthusiast",
];

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
      "A redesigned product detail page that makes it easier for people to customize and order their meals online.",
    tags: ["E-Commerce Platform"],
    metrics: [
      { label: "Completion", value: "20% faster task completion time" },
      { label: "Satisfaction", value: "90% higher user satisfaction" },
      { label: "Success", value: "88% task success rate across devices" },
    ],
    sections: [
      {
        heading: "Discovery and Insights",
        copy: "Users felt overwhelmed by repeated customization sections. Switching between meal types caused confusion. Lack of clear feedback reduced confidence before checkout.",
      },
      {
        heading: "Design Approach",
        copy: "Focused on reducing cognitive load by simplifying structure, surfacing key choices earlier, and providing clearer feedback as users customized their meals.",
      },
      {
        heading: "Validation",
        copy: "Tested redesigned flows with users across desktop, mobile web, and app. Iterated based on feedback around labeling and layout clarity.",
      },
      {
        heading: "What I Learned",
        copy: "Small changes in structure and feedback can have a big impact on complex flows, especially when tested early across devices.",
      },
    ],
    role: "Product Designer",
    client: "Kentucky Fried Chicken",
    timeline: "6 Months",
    platform: "Desktop, Mobile Web, App",
    industry: "B2C, Food & Beverage",
    overview:
      "Redesigning the online ordering experience to make meal customization easier across desktop, mobile web, and app. Improved task success across devices, reduced friction during meal customization, and increased confidence during checkout.",
    challenge:
      "As customization options grew, the product detail page became harder to use. Users struggled with scrolling, repeated selections, and unclear feedback while building their orders.",
    solution:
      "Streamlined customization flow with clearer grouping. Reduced scrolling by tightening layout and hierarchy. Added persistent order feedback to confirm selections.",
    results:
      "88% task success rate across platforms. 20% reduction in task completion time. 90% of participants reported higher satisfaction.",
    processTimeline: [
      { phase: "01", title: "Discovery", description: "Stakeholder interviews, app store review analysis, and chatbot log review" },
      { phase: "02", title: "Research", description: "User journey mapping, pain point identification, and competitive analysis" },
      { phase: "03", title: "Design", description: "Wireframing, prototyping, and iterative design refinement" },
      { phase: "04", title: "Testing", description: "Usability testing across desktop, mobile web, and app" },
      { phase: "05", title: "Iteration", description: "Design refinement based on user feedback and metrics" },
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
      { phase: "01", title: "Audit", description: "E-commerce experience audit and analytics review" },
      { phase: "02", title: "Strategy", description: "Navigation restructure and conversion optimization planning" },
      { phase: "03", title: "Design System", description: "Component library and responsive pattern development" },
      { phase: "04", title: "Implementation", description: "Phased rollout with performance monitoring" },
    ],
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
    results:
      "26% increase in page views. 62% reduction in bounce rate.",
    processTimeline: [
      { phase: "01", title: "Analysis", description: "Content audit and information architecture review" },
      { phase: "02", title: "Strategy", description: "Messaging hierarchy and user flow optimization" },
      { phase: "03", title: "Design", description: "Page redesign with simplified layouts" },
      { phase: "04", title: "Launch", description: "Phased deployment with metric tracking" },
    ],
  },
  {
    slug: "photon-website",
    title: "PHOTON",
    blurb:
      "A refreshed website experience that gives users a simpler way to explore Photon's services and understand their value.",
    tags: ["Research and UX"],
    metrics: [
      { label: "Content", value: "Clearer content hierarchy" },
      { label: "Alignment", value: "Stronger alignment between user needs and the brand message" },
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
      { phase: "01", title: "Discovery", description: "Stakeholder interviews and brand alignment review" },
      { phase: "02", title: "Content Strategy", description: "Messaging refinement and storytelling approach" },
      { phase: "03", title: "Design", description: "Visual hierarchy and layout improvements" },
      { phase: "04", title: "Review", description: "Internal feedback and iterative refinement" },
    ],
  },
];

export const footerCta = {
  headline: "Let's Connect",
  body: "Feel free to reach out for any collab work, remote opportunities or to just talk about design.",
  action: { label: "Get in touch", href: "mailto:patrick@patricklopes.com" },
};
