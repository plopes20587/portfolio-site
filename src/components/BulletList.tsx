import { icons } from "../lib/iconMappings";

type BulletStyle = "dot" | "checkmark";
type BulletColor = "primary" | "cyan" | "white";

type BulletListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  /** Style of bullet: "dot" (default) or "checkmark" */
  bulletStyle?: BulletStyle;
  /** Color of bullet: "primary" (purple, default), "cyan", or "white" */
  bulletColor?: BulletColor;
  /** Custom gap between items (Tailwind gap class) */
  gap?: string;
};

/**
 * Reusable component for displaying bullet lists
 * Supports both dot and checkmark bullet styles
 * Used across TLDRSection, RoleSection, and other components
 */
const BulletList = ({
  items,
  className = "",
  itemClassName = "",
  bulletStyle = "dot",
  bulletColor = "primary",
  gap = "gap-2",
}: BulletListProps) => {
  if (!items || items.length === 0) return null;

  const renderBullet = () => {
    if (bulletStyle === "checkmark") {
      // Apply white filter to checkmark when bulletColor is white
      const filterClass = bulletColor === "white" ? "brightness-0 invert" : "";
      return (
        <img
          src={icons.selected}
          alt=""
          className={`h-6 w-6 shrink-0 ${filterClass}`}
        />
      );
    }

    // Default: dot bullet
    // Use design system CSS variable for white, or Tailwind classes for other colors
    const bgColorClass =
      bulletColor === "white"
        ? "bg-[var(--color-elements-icons-default)]"
        : bulletColor === "cyan"
        ? "bg-cyan"
        : "bg-primary";

    return (
      <span
        className={`mt-2 h-[8px] w-[8px] shrink-0 rounded-full ${bgColorClass}`}
      />
    );
  };

  return (
    <ul className={`flex flex-col ${gap} ${className}`}>
      {items.map((item, index) => (
        <li
          key={`item-${index}`}
          className={`flex items-start gap-8 ${itemClassName}`}
        >
          {renderBullet()}
          <span className="text-white/80">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
