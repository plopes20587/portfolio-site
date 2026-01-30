import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { CaseStudy } from "../siteData";
import { getProjectConfig } from "../lib/projectConfig";
import { handleImageErrorHide } from "../lib/imageUtils";
import { icons } from "../lib/iconMappings";
import BulletList from "./BulletList";

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
        className="case-study-card group relative flex h-full max-w-[635px] flex-col overflow-hidden rounded-[24px] shadow-lg md:aspect-[635/775]"
        style={
          {
            "--case-study-gradient-from": config.gradientFrom,
            "--case-study-gradient-to": config.gradientTo,
          } as React.CSSProperties
        }
      >
        {/* Background with gradient and grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-[24px]">
          {/* Gradient background - from Figma: gradient from dark to light purple */}
          <div className="case-study-card-gradient absolute inset-0 rounded-[24px]" />
          {/* Grid pattern overlay - matches Figma grid texture */}
          <div className="case-study-card-grid absolute inset-0 rounded-[24px] opacity-50" />
        </div>

        {/* Card Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Project Image - full width, 415px height per Figma */}
          <div className="case-study-card-image-container">
            {config.thumbnail ? (
              <img
                src={config.thumbnail}
                alt={`${study.title} mockup`}
                className="case-study-card-image"
                loading="lazy"
                onError={handleImageErrorHide}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center rounded-lg bg-surface-card-border">
                <span className="text-sm text-white/30">Mockup Image</span>
              </div>
            )}
          </div>

          {/* Project Content - matches Figma structure with 12px gap from image */}
          <div className="case-study-card-content">
            {/* Project Container - groups TopContent and ListItems with gap-24 */}
            <div className="case-study-card-project-container">
              {/* Top Content: Category, Title, Description */}
              <div className="case-study-card-top-content">
                {/* Category Tag - H4 style: 14px, bold, uppercase */}
                {categoryTag && (
                  <p className="case-study-card-category">{categoryTag}</p>
                )}

                {/* Project Title - H3 style: 40px Staatliches */}
                <h3 className="case-study-card-title">{study.title}</h3>

                {/* Description - Body style: 16px Inter */}
                <p className="case-study-card-description">{study.blurb}</p>
              </div>

              {/* Metrics List - with checkmark icons */}
              {study.metrics && (
                <BulletList
                  items={study.metrics.map((metric) => metric.value)}
                  bulletStyle="checkmark"
                  bulletColor="white"
                  gap="gap-2"
                  className="case-study-card-metrics-list"
                  itemClassName="case-study-card-metric-item"
                />
              )}
            </div>

            {/* View Project Button - secondary button style from Figma */}
            <span className="button-secondary">
              View Project
              <img src={icons["external-link"]} alt="" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;
