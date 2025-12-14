import { footerCta } from '../siteData'

const FooterCTA = () => {
  return (
    <footer className="pt-12">
      <div className="space-y-6 text-center">
        <h2 className="font-display text-3xl font-normal uppercase tracking-wide text-white sm:text-4xl" style={{ fontSize: '42px', lineHeight: 1.2, letterSpacing: '1px' }}>
          {footerCta.headline}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-white" style={{ fontSize: '18px', lineHeight: 1.5 }}>
          {footerCta.body}
        </p>
        <a
          href={footerCta.action.href}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          {footerCta.action.label}
        </a>
      </div>
    </footer>
  )
}

export default FooterCTA
