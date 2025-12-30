type Props = {
  heading: string
  children: React.ReactNode
}

const ContentSection = ({ heading, children }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-[32px] font-normal leading-[1.2] text-white md:text-[42px]">
        {heading}
      </h2>
      <div className="flex flex-col gap-[24px] font-body text-[18px] font-normal leading-[1.6] text-white/80">
        {children}
      </div>
    </div>
  )
}

export default ContentSection
