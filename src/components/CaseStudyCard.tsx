import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../siteData";
import { getProjectConfig } from "../lib/projectConfig";
import { handleImageErrorHide } from "../lib/imageUtils";
import checkIcon from "../assets/icons/check.svg";
import externalLinkIcon from "../assets/icons/external-link.svg";

type CaseStudyCardProps = {
  study: CaseStudy;
};

const CaseStudyCard = ({ study }: CaseStudyCardProps) => {
  const config = getProjectConfig(study.slug);

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
              background: `linear-gradient(to bottom, ${config.gradientFrom}, ${config.gradientTo})`,
            }}
          />
          {/* Grid pattern overlay - matches Figma grid texture */}
          <div className="case-study-card-grid absolute inset-0 rounded-[24px] opacity-50" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex h-full flex-col gap-0">
          {/* Project Image - centered with responsive horizontal padding */}
          <div className="flex w-full items-center justify-center overflow-hidden px-4 py-0 sm:px-8 md:px-16 lg:px-[104px]">
            <div className="aspect-square w-full max-w-[300px] sm:max-w-none">
              {config.thumbnail ? (
                <img
                  src={config.thumbnail}
                  alt={`${study.title} mockup`}
                  className="h-[fit-content] w-full object-cover"
                  loading="lazy"
                  onError={handleImageErrorHide}
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-surface-card-border">
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
                <p className="font-body text-h4-small font-bold uppercase text-white/80">
                  {categoryTag}
                </p>
              )}

              {/* Project Title - H3 style: 40px Staatliches */}
              <h3 className="font-display text-h3 font-normal leading-none text-white">
                {study.title}
              </h3>

              {/* Description - Body style: 16px Inter */}
              <p className="font-body text-body text-white">{study.blurb}</p>
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
                    <span className="font-body text-body text-white">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* View Project Button - secondary button style from Figma */}
            <span className="button-secondary">
              View Project
              <img src={externalLinkIcon} alt="" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
