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
    <div className={`mb-12 ${className}`}>
      {sectionLabel && <h4 className="section-label">{sectionLabel}</h4>}
      <h2
        className={`font-display text-[32px] font-normal leading-[1.2] text-white md:text-[42px] ${headingClassName}`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;
