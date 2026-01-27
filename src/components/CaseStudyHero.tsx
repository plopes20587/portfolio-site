import type { CaseStudy } from "../siteData";
import { getProjectThumbnail, getProjectGradient } from "../lib/projectConfig";
import { hasItems } from "../lib/helpers";

type CaseStudyHeroProps = {
  study: CaseStudy;
};

/**
 * Case Study Hero Component
 * Displays project overview card on left and overlapping phone mockups on right
 * Matches Figma design node 1870:1423 with purple card, cyan tags, and left-bordered description
 */
const CaseStudyHero = ({ study }: CaseStudyHeroProps) => {
  const heroImage = getProjectThumbnail(study.slug);
  const gradient = getProjectGradient(study.slug);

  return (
    <section className="relative z-0 min-h-[660px] overflow-hidden bg-ink px-24 py-32 md:px-60">
      {/* Background gradient accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 100% 50%, ${gradient.to}, transparent 70%)`,
        }}
      />

      {/* Container - Figma mobile: image first, then card. Desktop: card left, image right */}
      <div className="relative z-0 mx-auto flex max-w-[1320px] flex-col items-start gap-32 lg:flex-row lg:items-center">
        {/* Image Wrapper - Figma mobile: comes first (order-1), desktop: comes second (order-2) */}
        {/* Figma mobile: h-[558px] w-[342px], desktop: h-[650px] w-[554px] */}
        <div className="relative order-1 flex h-[558px] w-full items-center justify-center p-[10px] lg:order-2 lg:h-[650px] lg:w-[554px]">
          {heroImage ? (
            <img
              src={heroImage}
              alt={`${study.title} project preview - phone mockups`}
              className="h-auto max-h-full w-full max-w-full object-contain lg:max-h-[650px] lg:max-w-[554px]"
              style={{
                filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))",
              }}
              loading="eager"
              fetchPriority="high"
            />
          ) : (
            <div className="flex h-[400px] items-center justify-center bg-surface-card">
              <span className="text-text-body/30">Project Image</span>
            </div>
          )}
        </div>

        {/* Content Card - Figma mobile: comes second (order-2), desktop: comes first (order-1) */}
        {/* Figma mobile: w-[342px] h-[464px], desktop: w-[578px] */}
        <div
          className="order-2 flex w-full flex-col gap-8 rounded-16 border p-24 lg:order-1 lg:w-[578px] lg:shrink-0"
          style={{
            backgroundColor: "var(--color-hero-card-bg)",
            borderColor: "var(--color-hero-card-border)",
            borderWidth: "1px",
          }}
        >
          {/* Top section - Figma: gap-[8px] for tags + title */}
          <div className="flex w-full flex-col gap-8">
            {/* Tags - Secondary (cyan) style */}
            {hasItems(study.tags) && (
              <div className="flex flex-wrap gap-8">
                {study.tags.map((tag) => (
                  <div key={tag} className="tag tag-secondary">
                    {tag}
                  </div>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 className="w-full text-h2 md:text-h1">{study.title}</h1>
          </div>

          {/* Description with left cyan border accent - Figma: border-l-2 px-[16px] */}
          <div
            className="flex w-full items-center justify-between border-l-2 px-16"
            style={{
              borderColor: "var(--color-elements-secondary)",
            }}
          >
            <p className="min-h-px min-w-px flex-1">{study.blurb}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
