import SectionWrapper from "./SectionWrapper";
import type { DesignPrinciple } from "../siteData";
import { getIconSrc } from "../lib/iconMappings";

type DesignPrinciplesSectionProps = {
  principles: DesignPrinciple[];
  /** Optional description text below the heading */
  description?: string;
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
}: DesignPrinciplesSectionProps) => {
  if (!principles || principles.length === 0) return null;

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex w-full flex-col gap-48">
        {/* Section Header - max-width 650px, gap 8px */}
        <div className="flex max-w-[650px] flex-col gap-8">
          <h2>Design principles</h2>
        </div>

        {/* Principles Grid - 2x2 layout, 32px gap */}
        <div className="grid w-full grid-cols-1 gap-48 md:grid-cols-2">
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
                <div className="flex flex-1 flex-col gap-8">
                  <p className="text-body-lg font-semibold">
                    {principle.title}
                  </p>
                  <p>{principle.description}</p>
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
