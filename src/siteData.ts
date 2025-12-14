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
    "Good design happens when the experiment ignites the customer's delight. With the right balance of expertise, research, and a bit of art in the early stages, the journey becomes smoother and easier to follow.",
  primaryCta: { label: "Learn More", href: "#work" },
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
      "A loyalty/pre-product MVP that makes it easier for people to customize and order their meals online.",
    tags: ["E-commerce Platform"],
    metrics: [
      { label: "Completion", value: "20% faster user completions" },
      { label: "Satisfaction", value: "50% higher user satisfaction" },
      { label: "Data-driven", value: "100% data-driven UX activities/decisions" },
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
      "A headless website experience that gives users a simple way to explore Photon's services and understand their value.",
    tags: ["Data Visualization"],
    metrics: [
      { label: "Taxonomy", value: "Cleaner, intuitive taxonomy" },
      { label: "Alignment", value: "Stronger alignment between user needs and the business/usage." },
    ],
  },
  {
    slug: "cellebrite-website",
    title: "CELLEBRITE",
    blurb:
      "A corporate website that helps visitors understand Cellebrite's story and find the information they need fast!",
    tags: ["Marketing/Corporate Website"],
    metrics: [
      { label: "Page Loads", value: "25% lower page loads" },
      { label: "Bounce Rate", value: "21% lower bounce rate" },
    ],
  },
  {
    slug: "senegence-redesign",
    title: "SEMESENCE",
    blurb:
      "A seamless shopping experience that helps users discover products, learn about them, and check out with ease from any device.",
    tags: ["E-commerce/Beauty Brand"],
    metrics: [
      { label: "UX Speed", value: "20% faster UX" },
      { label: "Revenue", value: "1.7M+ revenue" },
    ],
  },
];

export const footerCta = {
  headline: "LET'S CONNECT",
  body: "Feel free to reach out for any collab with, remote opportunities or to just chat about design.",
  action: { label: "Get in touch!", href: "mailto:patrick@patricklopes.com" },
};
