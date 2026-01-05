import type { CaseStudy } from "../siteData";
import Tag from "./Tag";
import { getProjectThumbnail, getProjectGradient } from "../lib/projectConfig";
import { hasItems } from "../lib/helpers";

type CaseStudyHeroProps = {
  study: CaseStudy;
};

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
        {/* Left Content - First on mobile, left on desktop */}
        <div className="order-1 flex flex-col gap-6 lg:order-1">
          {/* Tags */}
          {hasItems(study.tags) && (
            <div className="flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <Tag key={tag} variant="primary">
                  {tag}
                </Tag>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-h2 font-normal text-white md:text-h1">
            {study.title}
          </h1>

          {/* Description with accent border */}
          <div className="border-l-4 border-primary pl-6">
            <p className="font-body text-body text-white/80">{study.blurb}</p>
          </div>
        </div>

        {/* Right - Hero Image - Second on mobile, right on desktop */}
        <div className="relative order-2 lg:order-2">
          <div className="overflow-hidden rounded-[12px] shadow-2xl">
            {heroImage ? (
              <img
                src={heroImage}
                alt={`${study.title} project preview`}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center bg-surface-card">
                <span className="text-white/30">Project Image</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;
