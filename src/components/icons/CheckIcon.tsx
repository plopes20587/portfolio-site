type CheckIconProps = {
  className?: string;
  size?: "sm" | "md";
};

/**
 * Reusable check/checkmark icon component
 * Uses currentColor for dynamic styling via text-* classes
 */
export const CheckIcon = ({ className = "", size = "sm" }: CheckIconProps) => {
  const sizeClass = size === "sm" ? "w-3 h-3" : "w-4 h-4";

  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      className={`${sizeClass} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
