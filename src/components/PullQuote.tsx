type Props = {
  quote: string
  attribution?: string
}

const PullQuote = ({ quote, attribution }: Props) => {
  return (
    <div className="relative my-12 px-6 md:px-0">
      {/* Quote mark decoration */}
      <div className="absolute -left-4 -top-4 font-display text-[120px] leading-none text-primary/10 md:-left-12">
        "
      </div>

      <blockquote className="relative z-10 border-l-4 border-primary pl-6 md:pl-8">
        <p className="font-body text-[24px] font-normal italic leading-[1.5] text-white md:text-[28px]">
          {quote}
        </p>
        {attribution && (
          <cite className="mt-4 block font-body text-[16px] not-italic text-white/60">
            — {attribution}
          </cite>
        )}
      </blockquote>
    </div>
  )
}

export default PullQuote
