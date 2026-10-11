type SectionWrapperProps = {
  children: React.ReactNode;
  /** Replaces the default "px-24 py-80 md:px-60" padding */
  customPadding?: string;
  className?: string;
  id?: string;
  centerContent?: boolean;
};

/**
 * Reusable wrapper component for consistent section layout
 * Handles padding, max-width, and container styling
 */
const SectionWrapper = ({
  children,
  customPadding = "px-24 py-80 md:px-60",
  className = "",
  id,
  centerContent = true,
}: SectionWrapperProps) => {
  const marginClass = centerContent ? "mx-auto" : "m-0";

  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-start ${customPadding} ${className}`}
    >
      <div
        className={`flex w-full max-w-[1320px] flex-col gap-48 ${marginClass}`}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
