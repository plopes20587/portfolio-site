/**
 * Reusable Tag component
 * Used for displaying tags/badges with consistent styling
 * Supports primary and secondary variants matching Figma design system
 */

type TagProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/**
 * Tag component for displaying labels/badges
 * Matches Figma design system with proper spacing, padding, and variant colors
 * @param children - The text content of the tag
 * @param variant - Visual variant: "primary" (default) uses royal purple, "secondary" uses cyan
 * @param className - Additional CSS classes
 */
const Tag = ({ children, variant = "primary", className = "" }: TagProps) => {
  // Base container styles - matches Figma structure
  const containerBaseStyles =
    "flex shrink-0 items-center justify-center rounded-[8px] border border-solid";

  // Padding: px-[16px] py-[4px] per Figma design system
  const containerStyles = `${containerBaseStyles} px-16 py-4 ${className}`;

  // Text styles - matches Figma typography
  const textBaseStyles =
    "font-body text-[16px] font-normal leading-[24px] text-nowrap relative shrink-0 tracking-[0px]";

  // Variant styles from Figma design system
  const variantStyles = {
    primary: {
      container: {
        borderColor: "rgba(127, 90, 240, 0.25)", // Color/Elements/Pills/primary-border
        backgroundColor: "rgba(127, 90, 240, 0.05)", // Color/Elements/Pills/primary-background
      },
      text: {
        color: "#b29cf6", // Colors/Royal Purple/300
      },
    },
    secondary: {
      container: {
        borderColor: "rgba(0, 211, 242, 0.25)", // Color/Elements/Pills/secondary-border
        backgroundColor: "rgba(0, 211, 242, 0.05)", // Color/Elements/Pills/secondary-background
      },
      text: {
        color: "#38efe9", // Color/Elements/Icons/cyan
      },
    },
  };

  const styles = variantStyles[variant];

  return (
    <div className={containerStyles} style={styles.container}>
      <p className={textBaseStyles} style={styles.text}>
        {children}
      </p>
    </div>
  );
};

export default Tag;
