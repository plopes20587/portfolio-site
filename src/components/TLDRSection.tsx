import SectionWrapper from "./SectionWrapper";
import BulletList from "./BulletList";

type TLDRSectionProps = {
  items: string[];
  summary?: string;
};

const TLDRSection = ({ items, summary }: TLDRSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <SectionWrapper
      maxWidth="900"
      padding="small"
      centerContent={false}
      className="tldr-section-bg flex items-center justify-center border-y border-white/10 py-[60px]"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
        {/* TL;DR Label */}
        <div className="shrink-0">
          <span className="inline-block rounded-full bg-[var(--color-surface-card)] px-2 py-2 font-display text-body font-bold uppercase text-primary">
            TL;DR
          </span>
        </div>

        {/* Summary Points */}
        <div className="flex flex-1 flex-col gap-4">
          <BulletList
            items={items}
            className="gap-3"
            itemClassName="text-white"
          />
          {summary && (
            <p className="font-body text-body text-white/70">{summary}</p>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TLDRSection;
