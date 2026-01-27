type ContentSectionProps = {
  heading: string;
  children: React.ReactNode;
};

const ContentSection = ({ heading, children }: ContentSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-h4 md:text-h2">{heading}</h2>
      <div className="flex flex-col gap-[24px] text-white/80">
        {children}
      </div>
    </div>
  );
};

export default ContentSection;
