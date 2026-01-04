type ContentSectionProps = {
  heading: string;
  children: React.ReactNode;
};

const ContentSection = ({ heading, children }: ContentSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-h4 font-normal text-white md:text-h2">
        {heading}
      </h2>
      <div className="flex flex-col gap-[24px] font-body text-body text-white/80">
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
