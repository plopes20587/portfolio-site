import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";
import type { ProblemBreakdownItem } from "../siteData";
import SectionWrapper from "./SectionWrapper";

type ProblemCardsProps = {
  items: ProblemBreakdownItem[];
  sectionLabel?: string;
  heading?: string;
  showWrapper?: boolean;
  showHeader?: boolean;
};

/**
 * Reusable component for displaying problem breakdown cards
 * Uses Figma design styling as default
 */
const ProblemCards = ({
  items,
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
        <h2 className="font-display text-h2 font-normal leading-[52px] text-white">
          {heading}
        </h2>
      </div>
    ) : null;

  const cardsElement = (
    <div
      className="flex w-full flex-col gap-32 md:flex-row"
      style={{ gap: "32px" }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 flex-col gap-2 rounded-16 border p-6"
          style={{
            borderColor: "rgba(127, 90, 240, 0.25)",
            backgroundColor: "rgba(127, 90, 240, 0.05)",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Icon */}
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full border"
            style={{
              borderColor: "rgba(127, 90, 240, 0.25)",
              backgroundColor: "rgba(127, 90, 240, 0.25)",
            }}
          >
            {item.icon === "target" && (
              <img src={targetIcon} alt="" className="h-6 w-6" />
            )}
            {item.icon === "shield" && (
              <img src={shieldIcon} alt="" className="h-6 w-6" />
            )}
            {item.icon === "lightning" && (
              <img src={lightningIcon} alt="" className="h-6 w-6" />
            )}
          </div>
          {/* Title */}
          <h3 className="font-body text-body-lg font-semibold text-white">
            {item.title}
          </h3>
          {/* Description */}
          <p className="font-body text-body font-normal text-white">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );

  if (showWrapper) {
    return (
      <SectionWrapper maxWidth="1320" padding="large">
        {headerElement}
        {cardsElement}
      </SectionWrapper>
    );
  }

  return (
    <>
      {headerElement}
      {cardsElement}
    </>
  );
};

export default ProblemCards;
