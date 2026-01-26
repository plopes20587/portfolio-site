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
    <section className="relative z-0 min-h-[600px] overflow-hidden bg-ink px-6 pb-16 pt-32 md:px-[60px] md:pb-[100px] md:pt-[100px]">
      {/* Background gradient accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 100% 50%, ${gradient.to}, transparent 70%)`,
        }}
      />

      <div className="relative z-0 mx-auto grid max-w-[1320px] gap-12 lg:grid-cols-2 lg:items-center">
        {/* Left Content - Primary Card - First on mobile, left on desktop */}
        <div className="order-1 flex flex-col gap-6 lg:order-1">
          {/* Primary Card Container matching Figma node 1870:1423 */}
          <div
            className="flex w-full flex-col gap-8 rounded-16 border p-24"
            style={{
              backgroundColor: "var(--color-elements-pills-primary-background)",
              borderColor: "var(--color-elements-pills-primary-border)",
              borderWidth: "1px",
            }}
          >
            {/* Top section with tags and title */}
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
              <h1 className="w-full font-display text-h2 font-normal text-text-heading md:text-h1">
                {study.title}
              </h1>
            </div>

            {/* Description with left cyan border accent */}
            <div
              className="flex w-full items-center justify-between border-l-2 px-16"
              style={{
                borderColor: "var(--color-elements-secondary)",
              }}
            >
              <p className="min-h-px min-w-px flex-1 font-body text-body font-normal text-text-body">
                {study.blurb}
              </p>
            </div>
          </div>
        </div>

        {/* Right - Phone Mockups - Second on mobile, right on desktop */}
        <div className="relative order-2 flex items-center justify-center lg:order-2">
          {heroImage ? (
            <div className="relative w-full max-w-[600px]">
              {/* Phone Mockups - Image already contains two overlapping phones */}
              <div
                className="relative w-full"
                style={{
                  filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4))",
                }}
              >
                <img
                  src={heroImage}
                  alt={`${study.title} project preview - phone mockups`}
                  className="h-auto w-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          ) : (
            <div className="flex h-[400px] items-center justify-center bg-surface-card">
              <span className="text-white/30">Project Image</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
