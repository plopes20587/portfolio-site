type BulletListProps = {
  items: string[];
  className?: string;
  itemClassName?: string;
};

/**
 * Reusable component for displaying bullet lists
 * Used across multiple components for consistent styling
 */
const BulletList = ({
  items,
  className = "",
  itemClassName = "",
}: BulletListProps) => {
  if (!items || items.length === 0) return null;

  return (
    <ul className={`flex flex-col gap-2 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className={`flex items-start gap-3 ${itemClassName}`}>
          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
          <span
            className={`font-body text-[18px] leading-[1.6] text-white/80 ${itemClassName}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;

