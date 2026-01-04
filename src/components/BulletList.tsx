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
        <li key={`item-${index}`} className={`bullet-list-item ${itemClassName}`}>
          <span className="bullet-list-bullet" />
          <span
            className={`font-body text-body text-white/80 ${itemClassName}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default BulletList;
