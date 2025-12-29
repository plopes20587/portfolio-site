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
      {sectionLabel && (
        <span className="mb-4 inline-block font-body text-[14px] font-semibold uppercase tracking-[0.1em] text-primary">
          {sectionLabel}
        </span>
      )}
      <h2
        className={`font-display text-[32px] font-normal leading-[1.2] text-white md:text-[42px] ${headingClassName}`}
      >
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeader;

