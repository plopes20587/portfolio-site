export type CaseStudy = {
  slug: string;
  title: string;
  blurb: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
  sections?: { heading: string; copy: string }[];
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
  "coffee enthusiast",
];

export const marqueeLogos = [
  "Honeywell",
  "Walgreens",
  "Verizon",
  "Cellebrite",
  "MedCline",
  "KFC",
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
        heading: "Clarity first",
        copy: "Simplified the decision flow with clearer configuration steps, upfront pricing, and accessible nutrition details.",
      },
      {
        heading: "Ordering made friendly",
        copy: "Optimized touch targets, quantity adjustments, and add-ons so mobile visitors could breeze through customization.",
      },
    ],
  },
  {
    slug: "photon-website",
    title: "PHOTON",
    blurb:
      "A financial analytics platform that gives users a simpler way to explore financial analytics and understand their value.",
    tags: ["Data Visualization Platform"],
    metrics: [
      { label: "UI", value: "Cleaner, more intuitive UI" },
      { label: "Alignment", value: "Stronger alignment between user needs and the platform" },
    ],
  },
  {
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "A cybersecurity solutions website that helps visitors understand complex topics and find the information they need fast.",
    tags: ["Web Site & UI/UX Audit"],
    metrics: [
      { label: "Page Loads", value: "20% faster page loads" },
      { label: "Bounce Rate", value: "25% lower bounce rate" },
    ],
  },
  {
    slug: "medcline-redesign",
    title: "SENEGENCE",
    blurb:
      "A seamless shopping experience that helps customers browse products, add them, and check out with ease.",
    tags: ["E-Commerce & Conversion Redesign"],
    metrics: [
      { label: "Conversion", value: "15% conversion rate" },
      { label: "Sales", value: "37.5% sales increase" },
    ],
  },
];

export const footerCta = {
  headline: "LET'S CONNECT",
  body: "Feel free to reach out for any collabs with, remote opportunities or to just learn about design.",
  action: { label: "Say Hello!", href: "mailto:patrick@patricklopes.com" },
};
