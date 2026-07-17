import SectionWrapper from "./SectionWrapper";
import type { ApproachStep } from "../siteData";

type ApproachSectionProps = {
  steps: ApproachStep[];
};

/**
 * Component for displaying the Approach section as narrative two-column rows:
 * step title on the left, prose paragraphs on the right, stacking on mobile.
 * Replaces DesignPrinciplesSection as case studies migrate to Approach content.
 */
const ApproachSection = ({ steps }: ApproachSectionProps) => {
  if (!steps || steps.length === 0) return null;

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex w-full flex-col gap-48">
        {/* Section Header */}
        <div className="flex w-full flex-col items-center gap-8">
          <h2>Approach</h2>
        </div>

        {/* Approach Rows - title left, prose right, divider between rows */}
        <div className="mx-auto flex w-full max-w-[1000px] flex-col">
          {steps.map((step, index) => (
            <div
              key={`approach-step-${index}`}
              className={`grid grid-cols-1 gap-16 py-32 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-48 md:py-48 ${
                index === 0
                  ? "pt-0 md:pt-0"
                  : "border-t border-[var(--color-tldr-section-border)]"
              } ${index === steps.length - 1 ? "pb-0 md:pb-0" : ""}`}
            >
              <p className="text-body-lg font-semibold text-white">
                {step.title}
              </p>
              <div className="flex flex-col gap-16">
                {step.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={`approach-step-${index}-p-${paragraphIndex}`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ApproachSection;
