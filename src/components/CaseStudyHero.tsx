import type { CaseStudy } from "../siteData";

// Import case study thumbnails as hero images
import kfcThumbnail from "../assets/images/kfc-pdp-redesign/KFC Thumbnail.png";
import verizonThumbnail from "../assets/images/verizon-straight-talk-7day/Verizon Thumbnail.png";
import cellebriteThumbnail from "../assets/images/cellebrite-website/Cellebrite Thumbnail.png";
import senegenceThumbnail from "../assets/images/senegence-redesign/SeneGence Thumbnail.png";

type Props = {
  study: CaseStudy;
};

// Map slugs to hero images
const heroImages: Record<string, string> = {
  "kfc-pdp-redesign": kfcThumbnail,
  "verizon-straight-talk-7day": verizonThumbnail,
  "cellebrite-website": cellebriteThumbnail,
  "senegence-redesign": senegenceThumbnail,
};

// Project gradient colors matching the cards
const projectGradients: Record<string, { from: string; to: string }> = {
  "kfc-pdp-redesign": { from: "#541db9", to: "#7f5af0" },
  "verizon-straight-talk-7day": { from: "#E31E24", to: "#C8102E" },
  "cellebrite-website": { from: "#006644", to: "#009966" },
  "senegence-redesign": { from: "#0052cc", to: "#0066ff" },
};

const CaseStudyHero = ({ study }: Props) => {
  const heroImage = heroImages[study.slug] || "";
  const gradient = projectGradients[study.slug] || {
    from: "#541db9",
    to: "#7f5af0",
  };

  return (
    <section className="relative min-h-[600px] overflow-hidden bg-ink px-6 py-16 md:px-[60px] md:py-[100px]">
      {/* Background gradient accent */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-20"
        style={{
          background: `radial-gradient(ellipse at 100% 50%, ${gradient.to}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-[1320px] items-center gap-12 lg:grid-cols-2">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          {/* Tags */}
          {study.tags && study.tags.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-body text-[14px] font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="font-display text-[48px] font-normal leading-[1.1] text-white md:text-[64px]">
            {study.title}
          </h1>

          {/* Description with accent border */}
          <div className="border-l-4 border-primary pl-6">
            <p className="font-body text-[18px] font-normal leading-[1.6] text-white/80">
              {study.blurb}
            </p>
          </div>
        </div>

        {/* Right - Hero Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-[24px] shadow-2xl">
            {heroImage ? (
              <img
                src={heroImage}
                alt={`${study.title} project preview`}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <div className="flex h-[400px] items-center justify-center bg-white/5">
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
