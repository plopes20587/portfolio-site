import { footerCta } from '../siteData'

// Arrow icon for button
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33334 8H12.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.66666 4L12.6667 8L8.66666 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FooterCTA = () => {
  return (
    <footer 
      className="border-t border-white/10 bg-black/50 px-[60px] py-[100px]"
    >
      <div className="flex w-full flex-col items-center gap-[16px] text-center">
        <h2 className="font-display text-[42px] font-normal leading-[1.2] tracking-[0.42px] text-white">
          {footerCta.headline}
        </h2>
        <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
          {footerCta.body}
        </p>
        <a
          href={footerCta.action.href}
          className="inline-flex h-[50px] items-center justify-center gap-[8px] rounded-[4px] bg-primary px-[24px] py-[8px] font-body text-[18px] font-normal text-white transition hover:bg-primary/90"
        >
          {footerCta.action.label}
          <ArrowIcon />
        </a>
      </div>
    </footer>
  )
}

export default FooterCTA
