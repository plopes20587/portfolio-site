// Shapes of the case study content in siteData.ts

export type ImageItem = {
  src: string;
  alt: string;
  /** Shown under after-problem and after-process images */
  caption?: string;
  type?: "image" | "video";
};

export type ImageSection = {
  placement: "after-problem" | "after-process" | "after-solution";
  images: ImageItem[];
  // The fields below only apply to "after-process" sections (ImageShowcase)
  sectionLabel?: string;
  heading?: string;
  layout?: "single" | "side-by-side" | "grid";
  customPadding?: string;
  imageMaxWidth?: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type ProblemBreakdownItem = {
  /** Not rendered. Remove once the DO migration case study (which still sets it) is merged. */
  icon?: "target" | "shield" | "lightning" | "alert" | "chart" | "users";
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
  // Card + hero
  slug: string;
  title: string;
  blurb: string;
  /** First tag doubles as the card's category label */
  tags?: string[];
  /** Shown on the home page card and in the Solution metrics row */
  metrics?: Metric[];
  /** Optional context line above the Solution metrics row */
  metricsSubtitle?: string;
  imageSections?: ImageSection[];

  // Project metadata bar
  role?: string;
  client?: string;
  timeline?: string;
  platform?: string;

  // Case study sections, in page order
  tldr?: string[];
  roleDescription?: string;
  coreContributions?: string[];
  challenge?: string;
  problemBreakdown?: ProblemBreakdownItem[];
  /** Replaces designPrinciples as case studies are rewritten */
  approach?: ApproachStep[];
  /** Legacy: remove once every case study uses approach */
  designPrinciples?: DesignPrinciple[];
  solution?: string;
  solutionCards?: SolutionCard[];
};
