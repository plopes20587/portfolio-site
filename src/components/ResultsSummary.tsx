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

  const textElement = (
    <p
      className={`font-body text-[18px] text-white/70 ${
        variant === "section" ? "text-center" : ""
      } ${className}`}
    >
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
