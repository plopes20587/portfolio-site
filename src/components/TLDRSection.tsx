type Props = {
  items: string[]
  summary?: string
}

const TLDRSection = ({ items, summary }: Props) => {
  if (!items || items.length === 0) return null

  return (
    <section className="border-y border-white/10 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 px-6 py-12 md:px-[60px]">
      <div className="mx-auto max-w-[900px]">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
          {/* TL;DR Label */}
          <div className="shrink-0">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-2 font-display text-[14px] font-bold uppercase tracking-wider text-primary">
              TL;DR
            </span>
          </div>

          {/* Summary Points */}
          <div className="flex flex-1 flex-col gap-4">
            <ul className="flex flex-col gap-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="font-body text-[18px] leading-[1.6] text-white">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {summary && (
              <p className="font-body text-[16px] leading-[1.6] text-white/70">
                {summary}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TLDRSection
