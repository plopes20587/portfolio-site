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

// Icon mappings
const problemIcons: Record<"target" | "shield" | "lightning", string> = {
  target: targetIcon,
  shield: shieldIcon,
  lightning: lightningIcon,
};

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

  const headerElement =
    showHeader && sectionLabel && heading ? (
      <div className="flex w-full flex-col items-center gap-2">
        <h4 className="section-label">{sectionLabel}</h4>
        <h2 className="font-display text-h2 font-normal">
          {heading}
        </h2>
      </div>
    ) : null;

  const containerClassName =
    "flex w-full flex-col gap-8 md:flex-row md:items-stretch md:gap-16 lg:gap-32";

  const getIconSrc = (
    item: ProblemBreakdownItem | Metric,
    index: number,
  ): string | null => {
    if (variant === "metric") {
      return metricIcons[index % metricIcons.length];
    }
    const problemItem = item as ProblemBreakdownItem;
    const iconKey = problemItem.icon;
    if (
      iconKey === "target" ||
      iconKey === "shield" ||
      iconKey === "lightning"
    ) {
      return problemIcons[iconKey];
    }
    return null;
  };

  const cardsElement = (
    <div className={containerClassName}>
      {items.map((item, index) => {
        const iconSrc = getIconSrc(item, index);

        if (variant === "metric") {
          const metric = item as Metric;
          return (
            <div key={metric.label} className="metric-card">
              <div className="icon-container icon-container-primary">
                <img src={iconSrc!} alt="" className="icon-small" />
              </div>
              <p className="font-display text-body-lg">{metric.label}</p>
              <p className="font-body text-body">{metric.value}</p>
            </div>
          );
        }

        const problemItem = item as ProblemBreakdownItem;
        return (
          <div key={`${problemItem.title}-${index}`} className="problem-card">
            <div className="problem-card-icon-container">
              {iconSrc && <img src={iconSrc} alt="" className="icon-small" />}
            </div>
            <h3 className="font-body text-body-lg font-semibold">
              {problemItem.title}
            </h3>
            <p className="font-body text-body font-normal">
              {problemItem.description}
            </p>
          </div>
        );
      })}
    </div>
  );

  const content = (
    <>
      {headerElement}
      {cardsElement}
    </>
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
