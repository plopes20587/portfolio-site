import SectionWrapper from "./SectionWrapper";
import ContentSection from "./ContentSection";
import BulletList from "./BulletList";

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

  return (
    <SectionWrapper maxWidth="900" padding="large">
      <ContentSection heading="Discovery and Key Insights">
        {inputs && inputs.length > 0 && (
          <div className="mb-8">
            <h4 className="tracking-0 mb-4 font-display text-[32px] font-normal uppercase leading-[36px] text-primary">
              Inputs
            </h4>
            <BulletList items={inputs} />
          </div>
        )}
        {insights && insights.length > 0 && (
          <div className="mb-6">
            <h4 className="tracking-0 mb-4 font-display text-[32px] font-normal uppercase leading-[36px] text-primary">
              Key Insights
            </h4>
            <BulletList items={insights} />
          </div>
        )}
        {summary && (
          <p className="mt-6 font-body text-[16px] leading-[1.6] text-white/80">
            {summary}
          </p>
        )}
      </ContentSection>
    </SectionWrapper>
  );
};

export default DiscoverySection;
