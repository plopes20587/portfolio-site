import { CheckIcon } from "./icons/CheckIcon";

type BulletStyle = "dot" | "checkmark";
type BulletColor = "primary" | "cyan";

type BulletListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
  /** Style of bullet: "dot" (default) or "checkmark" */
  bulletStyle?: BulletStyle;
  /** Color of bullet: "primary" (purple, default) or "cyan" */
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
      const bgColorClass =
        bulletColor === "cyan" ? "bg-cyan-bg-10" : "bg-elements-pills-primary-background";
      const textColorClass =
        bulletColor === "cyan" ? "text-cyan" : "text-primary";

      return (
        <div
          className={`flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full ${bgColorClass}`}
        >
          <CheckIcon className={textColorClass} size="md" />
        </div>
      );
    }

    // Default: dot bullet
    const bgColorClass =
      bulletColor === "cyan" ? "bg-cyan" : "bg-primary";

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
          <span className="font-body text-body text-white/80">{item}</span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
