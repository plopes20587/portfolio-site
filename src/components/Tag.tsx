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
 * Uses CSS variables and semantic component classes
 * @param children - The text content of the tag
 * @param variant - Visual variant: "primary" (default) uses royal purple, "secondary" uses cyan
 * @param className - Additional CSS classes
 */
const Tag = ({ children, variant = "primary", className = "" }: TagProps) => {
  return (
    <div className={`tag tag-${variant} ${className}`}>
      <p>{children}</p>
    </div>
  );
};

export default Tag;
