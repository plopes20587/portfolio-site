import SectionWrapper from "./SectionWrapper";

type ResultsSummaryProps = {
  text: string;
  variant?: "section" | "inline";
  className?: string;
};

/**
 * Reusable component for displaying results summary text
 * Can be used as a standalone section or inline within other components
 */
const ResultsSummary = ({
  text,
  variant = "section",
  className = "",
}: ResultsSummaryProps) => {
  if (!text) return null;

  const baseClassName = "font-body text-[16px] text-white/70";
  const variantClassName = variant === "section" ? "text-center" : "";
  const textElement = (
    <p className={`${baseClassName} ${variantClassName} ${className}`.trim()}>
      {text}
    </p>
  );

  if (variant === "section") {
    return (
      <SectionWrapper maxWidth="1320" padding="small">
        {textElement}
      </SectionWrapper>
    );
  }

  return textElement;
};

export default ResultsSummary;
