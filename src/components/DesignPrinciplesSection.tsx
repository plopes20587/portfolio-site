import SectionWrapper from "./SectionWrapper";
import type { DesignPrinciple } from "../siteData";
// Figma design principle icons (cyan stroke color #38EFE9)
import sparkleCursorIcon from "../assets/icons/sparkle-cursor.svg";
import arrowUpCircleIcon from "../assets/icons/arrow-up-circle.svg";
import layoutGridIcon from "../assets/icons/layout-grid.svg";
import mobileIcon from "../assets/icons/mobile.svg";
// Legacy icons for backward compatibility
import targetIcon from "../assets/icons/target.svg";
import shieldIcon from "../assets/icons/shield.svg";
import lightningIcon from "../assets/icons/lightning.svg";

type DesignPrinciplesSectionProps = {
  principles: DesignPrinciple[];
  /** Optional description text below the heading */
  description?: string;
};

// Icon mappings for design principles
// Maps icon names from siteData to imported SVG assets
const principleIcons: Record<string, string> = {
  // New Figma icons for design principles
  "sparkle-cursor": sparkleCursorIcon,
  "arrow-up-circle": arrowUpCircleIcon,
  "layout-grid": layoutGridIcon,
  mobile: mobileIcon,
  // Legacy icons (for backward compatibility)
  target: targetIcon,
  shield: shieldIcon,
  lightning: lightningIcon,
};

/**
 * Component for displaying design principles in a 2x2 grid layout
 * Uses dark cards with cyan accent colors, matching Figma design
 *
 * Figma tokens mapped to CSS variables:
 * - Card border: --color-elements-pills-secondary-border (rgba(0,211,242,0.25))
 * - Card bg: rgba(15,23,43,0.4) - custom value from Figma
 * - Icon container bg: --color-elements-pills-secondary-border
 * - Border radius: --radius-16 (card), --radius-8 (icon container)
 * - Gap: 20px (icon-to-text), 32px (grid gap)
 * - Padding: 25px (Figma) → 24px (using --spacing-24)
 */
const DesignPrinciplesSection = ({
  principles,
  description = "Rather than redesigning the page wholesale, I anchored the work around a small set of principles that guided every decision.",
}: DesignPrinciplesSectionProps) => {
  if (!principles || principles.length === 0) return null;

  const getIconSrc = (iconName: string): string | null => {
    return principleIcons[iconName] || null;
  };

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex w-full flex-col gap-[var(--spacing-48)]">
        {/* Section Header - max-width 650px, gap 8px */}
        <div className="flex max-w-[650px] flex-col gap-[var(--spacing-8)]">
          <h2>Design principles</h2>
          <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)]">
            {description}
          </p>
        </div>

        {/* Principles Grid - 2x2 layout, 32px gap */}
        <div className="grid w-full grid-cols-1 gap-[var(--spacing-32)] md:grid-cols-2">
          {principles.map((principle, index) => {
            const iconSrc = getIconSrc(principle.icon);
            return (
              <div
                key={`principle-${index}`}
                className="design-principle-card-secondary"
              >
                {/* Icon Container - 40x40px, 8px radius */}
                {iconSrc && (
                  <div className="design-principle-icon-container">
                    <img
                      src={iconSrc}
                      alt=""
                      className="h-[var(--icon-size-small)] w-[var(--icon-size-small)]"
                    />
                  </div>
                )}

                {/* Text Content - 8px gap between title and description */}
                <div className="flex flex-1 flex-col gap-[var(--spacing-8)]">
                  <p className="text-[length:var(--font-size-body-lg)] font-semibold leading-[var(--line-height-body)]">
                    {principle.title}
                  </p>
                  <p className="text-[length:var(--font-size-body)] leading-[var(--line-height-body)]">
                    {principle.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DesignPrinciplesSection;
