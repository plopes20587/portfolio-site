import SectionWrapper from "./SectionWrapper";
import type { DesignPrinciple } from "../types";
import { getIconSrc } from "../lib/iconMappings";

type DesignPrinciplesSectionProps = {
  principles: DesignPrinciple[];
};

/**
 * Legacy design principles 2x2 grid, kept for case studies that have not
 * moved to ApproachSection yet. Card styles live in index.css
 * (.design-principle-card-secondary, .design-principle-icon-container).
 */
const DesignPrinciplesSection = ({
  principles,
}: DesignPrinciplesSectionProps) => {
  if (!principles || principles.length === 0) return null;

  return (
    <SectionWrapper>
      <div className="flex w-full flex-col gap-48">
        <div className="flex w-full flex-col items-center gap-8">
          <h2>Design principles</h2>
        </div>

        {/* Principles Grid - 2x2 on desktop */}
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
