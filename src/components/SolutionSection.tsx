import SectionWrapper from "./SectionWrapper";
import type { SolutionCard, ImageSection } from "../siteData";
import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";

type Metric = {
  label: string;
  value: string;
};

type SolutionSectionProps = {
  /** Description text below the heading */
  description?: string;
  /** Solution cards with icons */
  cards: SolutionCard[];
  /** Image to display in the showcase */
  image?: ImageSection;
  /** Metrics to display at the bottom */
  metrics?: Metric[];
};

// Icon mappings for solution cards
const solutionIcons: Record<string, string> = {
  target: targetIcon,
  shield: shieldIcon,
  lightning: lightningIcon,
};

/**
 * Solution Section component matching Figma node 1867:1284
 * Displays:
 * - Centered header with "OUTCOME" label and "The Solution" heading
 * - 3 solution cards in a horizontal row with icons
 * - Large image showcase
 * - 3 metrics at the bottom
 */
const SolutionSection = ({
  description,
  cards,
  image,
  metrics,
}: SolutionSectionProps) => {
  if (!cards || cards.length === 0) return null;

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex w-full flex-col items-center gap-[var(--spacing-48)]">
        {/* Section Header - Centered */}
        <div className="flex max-w-[646px] flex-col items-center gap-[var(--spacing-8)] text-center">
          <p className="font-display text-[length:var(--font-size-h4)] uppercase leading-[var(--line-height-h3)] text-accent">
            Outcome
          </p>
          <h2 className="tracking-[0.48px]">The Solution</h2>
          {description && (
            <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)]">
              {description}
            </p>
          )}
        </div>

        {/* Solution Cards - 3 columns */}
        <div className="flex w-full flex-col items-center justify-center gap-[var(--spacing-32)] md:flex-row">
          {cards.map((card, index) => {
            const iconSrc = solutionIcons[card.icon];
            return (
              <div key={`solution-card-${index}`} className="solution-card">
                {/* Icon Wrapper */}
                {iconSrc && (
                  <div className="solution-card-icon-wrapper">
                    <img
                      src={iconSrc}
                      alt=""
                      className="h-[var(--icon-size-small)] w-[var(--icon-size-small)]"
                    />
                  </div>
                )}
                {/* Card Content */}
                <p className="text-[length:var(--font-size-body-lg)] font-semibold leading-[var(--line-height-body)]">
                  {card.title}
                </p>
                <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Image Showcase */}
        {image && image.images.length > 0 && (
          <div className="flex w-full flex-col items-center gap-[var(--spacing-48)]">
            {/* Image Container */}
            <div className="overflow-hidden rounded-[var(--radius-16)] border border-[var(--color-elements-pills-secondary-border)]">
              <img
                src={image.images[0].src}
                alt={image.images[0].alt}
                className="h-auto max-h-[860px] w-full max-w-[1146px] object-cover"
              />
            </div>

            {/* Metrics Row */}
            {metrics && metrics.length > 0 && (
              <div className="flex w-full flex-col items-center justify-center gap-[var(--spacing-32)] md:flex-row">
                {metrics.map((metric, index) => (
                  <div key={`metric-${index}`} className="solution-metric">
                    <p className="text-[length:var(--font-size-h4)] font-bold leading-[var(--line-height-body)]">
                      {metric.value}
                    </p>
                    <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)] text-[var(--color-text-body-500)]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;
