import SectionWrapper from "./SectionWrapper";
import ContentSection from "./ContentSection";
import BulletList from "./BulletList";
import { hasItems, hasValue } from "../lib/helpers";

type DiscoverySectionProps = {
  inputs?: string[];
  insights?: string[];
  summary?: string;
};

/**
 * Component for displaying the Discovery and Key Insights section
 * Consolidates inputs, insights, and summary with consistent styling
 */
const DiscoverySection = ({
  inputs,
  insights,
  summary,
}: DiscoverySectionProps) => {
  if (!inputs && !insights) return null;

  const headingClassName =
    "tracking-0 mb-4 font-display text-[32px] font-normal uppercase leading-[36px] text-primary";

  return (
    <SectionWrapper maxWidth="900" padding="large">
      <ContentSection heading="Discovery and Key Insights">
        {hasItems(inputs) && (
          <div className="mb-8">
            <h4 className={headingClassName}>Inputs</h4>
            <BulletList items={inputs} />
          </div>
        )}
        {hasItems(insights) && (
          <div className="mb-6">
            <h4 className={headingClassName}>Key Insights</h4>
            <BulletList items={insights} />
          </div>
        )}
        {hasValue(summary) && (
          <p className="mt-6 font-body text-[16px] leading-[1.6] text-white/80">
            {summary}
          </p>
        )}
      </ContentSection>
    </SectionWrapper>
  );
};

export default DiscoverySection;
