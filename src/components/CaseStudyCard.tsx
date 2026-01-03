import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../siteData";

// Import project thumbnail images
import kfcThumbnail from "../assets/images/kfc-pdp-redesign/KFC Thumbnail.png";
import verizonThumbnail from "../assets/images/verizon-straight-talk-7day/Verizon Thumbnail.png";
import cellebriteThumbnail from "../assets/images/cellebrite-website/Cellebrite Thumbnail.png";
import senegenceThumbnail from "../assets/images/senegence-redesign/SeneGence Thumbnail.png";
import checkIcon from "../assets/icons/check.svg";
import externalLinkIcon from "../assets/icons/external-link.svg";

type Props = {
  study: CaseStudy;
};

// Project color configurations matching Figma design
const projectColors: Record<
  string,
  {
    // Gradient colors for card background
    gradientFrom: string;
    gradientTo: string;
    // Grid pattern overlay image (semi-transparent grid)
    gridPatternUrl: string;
    // Thumbnail image
    thumbnail: string;
  }
> = {
  "kfc-pdp-redesign": {
    gradientFrom: "#541db9",
    gradientTo: "#7f5af0",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: kfcThumbnail,
  },
  "verizon-straight-talk-7day": {
    gradientFrom: "#E31E24",
    gradientTo: "#C8102E",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: verizonThumbnail,
  },
  "cellebrite-website": {
    gradientFrom: "#006644",
    gradientTo: "#009966",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: cellebriteThumbnail,
  },
  "senegence-redesign": {
    gradientFrom: "#0052cc",
    gradientTo: "#0066ff",
    gridPatternUrl: "/images/grid-pattern.png",
    thumbnail: senegenceThumbnail,
  },
};


const CaseStudyCard = ({ study }: Props) => {
  const colors = projectColors[study.slug] || {
    gradientFrom: "#541db9",
    gradientTo: "#7f5af0",
    gridPatternUrl: "",
    thumbnail: "",
  };

  // Format category tag - uppercase with tracking
  const categoryTag = study.tags?.[0] || "";

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className="h-full"
    >
      <Link
        to={`/case/${study.slug}`}
        className="group relative flex h-full max-w-[517px] flex-col overflow-hidden rounded-[24px] p-[24px] shadow-lg"
      >
        {/* Background with gradient and grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px]">
          {/* Gradient background - from Figma: gradient from dark to light purple */}
          <div
            className="absolute inset-0 rounded-[24px]"
            style={{
              background: `linear-gradient(to bottom, ${colors.gradientFrom}, ${colors.gradientTo})`,
            }}
          />
          {/* Grid pattern overlay - matches Figma grid texture */}
          <div className="absolute inset-0 rounded-[24px] opacity-50 case-study-card-grid" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex h-full flex-col gap-[24px]">
          {/* Project Image - centered with responsive horizontal padding */}
          <div className="flex w-full items-center justify-center overflow-hidden px-4 py-0 sm:px-8 md:px-16 lg:px-[104px]">
            <div className="aspect-square w-full max-w-[300px] sm:max-w-none">
              {colors.thumbnail ? (
                <img
                  src={colors.thumbnail}
                  alt={`${study.title} mockup`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white/10">
                  <span className="text-sm text-white/30">Mockup Image</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Content - matches Figma structure */}
          <div className="flex flex-col gap-[24px]">
            {/* Top Content: Category, Title, Description */}
            <div className="flex flex-col gap-[8px]">
              {/* Category Tag - H4 style: 14px, bold, uppercase, 0.55px tracking */}
              {categoryTag && (
                <p className="font-body text-[14px] font-bold uppercase leading-[20px] tracking-[0.55px] text-white/80">
                  {categoryTag}
                </p>
              )}

              {/* Project Title - H3 style: 40px Staatliches */}
              <h3 className="font-display text-[40px] font-normal leading-none text-white">
                {study.title}
              </h3>

              {/* Description - Body style: 16px Inter */}
              <p className="font-body text-[16px] font-normal leading-[1.5] text-white">
                {study.blurb}
              </p>
            </div>

            {/* Metrics List - with checkmark icons */}
            {study.metrics && (
              <div className="flex flex-col gap-[8px]">
                {study.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center gap-[8px]">
                    {/* Checkmark circle - 20px, bg-white/20 */}
                    <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-white/20">
                      <img src={checkIcon} alt="" className="h-3 w-3" />
                    </div>
                    {/* Metric text - 16px */}
                    <span className="font-body text-[16px] font-normal leading-[1.5] text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* View Project Button - white bg, black text, with icon */}
            <span className="inline-flex w-fit items-center justify-center gap-[8px] rounded-[4px] bg-white px-[24px] py-[8px] text-[18px] font-normal leading-[1.5] text-black transition hover:bg-gray-100">
              View Project
              <img src={externalLinkIcon} alt="" className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
