import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";
import type { ProblemBreakdownItem } from "../siteData";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

type ProblemCardsProps = {
  items: ProblemBreakdownItem[];
  sectionLabel?: string;
  heading?: string;
};

/**
 * Reusable component for displaying problem breakdown cards
 */
const ProblemCards = ({ items, sectionLabel, heading }: ProblemCardsProps) => {
  if (!items || items.length === 0) return null;

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      {/* Section Label and Heading */}
      {sectionLabel && heading && (
        <SectionHeader sectionLabel={sectionLabel} heading={heading} />
      )}
      {/* Card Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 rounded-[16px] border border-[#1D293D] bg-[#0F172B]/40 p-6 backdrop-blur-sm transition hover:border-primary/30 hover:bg-[#0F172B]/60"
          >
            {/* Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
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
            <h3 className="font-display text-[20px] font-semibold leading-[1.2] text-white">
              {item.title}
            </h3>
            {/* Description */}
            <p className="font-body text-[16px] font-normal leading-[1.5] text-white/80">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProblemCards;
