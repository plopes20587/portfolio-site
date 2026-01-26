import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";
import type { ProblemBreakdownItem } from "../siteData";
import SectionWrapper from "./SectionWrapper";

type Metric = {
  label: string;
  value: string;
};

type ProblemCardsProps = {
  items: ProblemBreakdownItem[] | Metric[];
  variant?: "problem" | "metric";
  sectionLabel?: string;
  heading?: string;
  showWrapper?: boolean;
  showHeader?: boolean;
};

// Icon mappings for metrics
const metricIcons = [targetIcon, shieldIcon, lightningIcon, targetIcon];

/**
 * Reusable component for displaying problem breakdown cards or metrics
 * Supports both problem and metric variants with different styling
 */
const ProblemCards = ({
  items,
  variant = "problem",
  sectionLabel,
  heading,
  showWrapper = true,
  showHeader = true,
}: ProblemCardsProps) => {
  if (!items || items.length === 0) return null;

  /**
   * Section header matching Figma node 1867:1247
   * - Centered layout with 8px gap
   * - Label: h4 size, uppercase, primary/accent color
   * - Heading: h2 size, white
   */
  const headerElement =
    showHeader && sectionLabel && heading ? (
      <div className="flex w-[650px] max-w-full flex-col items-center gap-8 text-center">
        <p className="font-display text-h4 uppercase text-accent">
          {sectionLabel}
        </p>
        <h2 className="font-display text-h2 font-normal text-white">
          {heading}
        </h2>
      </div>
    ) : null;

  const containerClassName =
    "flex w-full flex-col items-stretch gap-24 md:flex-row md:flex-wrap md:justify-center";

  const getMetricIconSrc = (index: number): string => {
    return metricIcons[index % metricIcons.length];
  };

  const cardsElement = (
    <div className={containerClassName}>
      {items.map((item, index) => {
        if (variant === "metric") {
          const metric = item as Metric;
          const iconSrc = getMetricIconSrc(index);
          return (
            <div key={metric.label} className="metric-card">
              <div className="icon-container icon-container-primary">
                <img src={iconSrc} alt="" className="icon-small" />
              </div>
              <p className="font-display text-body-lg">{metric.label}</p>
              <p className="font-body text-body">{metric.value}</p>
            </div>
          );
        }

        const problemItem = item as ProblemBreakdownItem;
        return (
          <div key={`${problemItem.title}-${index}`} className="problem-card">
            <p className="min-w-full font-body text-body-lg font-semibold text-text-body">
              {problemItem.title}
            </p>
            <p className="min-w-full font-body text-body font-normal text-text-body">
              {problemItem.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  const content = (
    <div className="flex w-full flex-col items-center gap-40">
      {headerElement}
      {cardsElement}
    </div>
  );

  return showWrapper ? (
    <SectionWrapper maxWidth="1320" padding="large">
      {content}
    </SectionWrapper>
  ) : (
    content
  );
};

export default ProblemCards;
