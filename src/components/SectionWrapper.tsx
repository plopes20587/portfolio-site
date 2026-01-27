type SectionWrapperProps = {
  children: React.ReactNode;
  maxWidth?: "900" | "1100" | "1320";
  padding?: "small" | "large";
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
  maxWidth = "1320",
  padding = "large",
  customPadding,
  className = "",
  id,
  centerContent = true,
}: SectionWrapperProps) => {
  const paddingClass = customPadding
    ? customPadding
    : padding === "large"
      ? "px-24 py-80 md:px-60"
      : "px-16 py-48 md:px-40";

  const maxWidthClass =
    maxWidth === "1320"
      ? "max-w-[1320px]"
      : maxWidth === "1100"
        ? "max-w-[1100px]"
        : "max-w-[900px]";

  const containerClass = centerContent
    ? `mx-auto ${maxWidthClass}`
    : `m-0 ${maxWidthClass}`;

  return (
    <section
      id={id}
      className={`flex flex-col items-center justify-start ${paddingClass} ${className}`}
    >
      <div className={`flex w-full flex-col gap-48 ${containerClass}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
