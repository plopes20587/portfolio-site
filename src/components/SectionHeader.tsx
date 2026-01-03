import { SECTION_HEADING_BASE } from '../lib/styles'

type SectionHeaderProps = {
  sectionLabel?: string;
  heading: string;
  className?: string;
  headingClassName?: string;
};

/**
 * Reusable component for section headers with label and heading
 * Used across multiple components for consistent styling
 */
const SectionHeader = ({
  sectionLabel,
  heading,
  className = "",
  headingClassName = "",
}: SectionHeaderProps) => {
  return (
    <div className={`mb-0 ${className}`}>
      {sectionLabel && <h4 className="section-label">{sectionLabel}</h4>}
      <h2 className={`${SECTION_HEADING_BASE} ${headingClassName}`}>
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;
