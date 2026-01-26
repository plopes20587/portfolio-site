type TLDRSectionProps = {
  items: string[];
};

/**
 * TL;DR Section Component
 * Displays a quick summary of key points with cyan bullet points
 * Matches Figma design node 1994:8442
 */
const TLDRSection = ({ items }: TLDRSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <section
      className="flex w-full flex-col items-center justify-center px-[var(--spacing-1)] py-[var(--spacing-40)]"
      style={{
        backgroundColor: "var(--color-tldr-section-bg)",
        borderTop: "1px solid var(--color-tldr-section-border)",
        borderBottom: "1px solid var(--color-tldr-section-border)",
      }}
    >
      <div className="w-full max-w-[1320px] px-6 md:px-[60px]">
        <div className="flex flex-col items-center">
          <div className="flex w-full max-w-[650px] items-start gap-[var(--spacing-16)]">
            {/* TL;DR Badge - 48x48 circular pill with secondary styling */}
            <div
              className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[var(--radius-24)]"
              style={{
                backgroundColor:
                  "var(--color-elements-pills-secondary-background)",
                border:
                  "1px solid var(--color-elements-pills-secondary-border)",
              }}
            >
              <p
                className="font-body text-[12px] font-normal leading-none"
                style={{ color: "var(--color-link-default)" }}
              >
                TL;DR
              </p>
            </div>

            {/* Bullet List with cyan bullets */}
            <div className="flex flex-col gap-[var(--spacing-8)]">
              {items.map((item, index) => (
                <div
                  key={`tldr-item-${index}`}
                  className="flex items-center gap-[var(--spacing-8)]"
                >
                  {/* Cyan bullet - 8x8 circle */}
                  <div
                    className="h-[8px] w-[8px] shrink-0 rounded-full"
                    style={{ backgroundColor: "var(--color-cyan)" }}
                  />
                  <p className="font-body text-body font-normal leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TLDRSection;
