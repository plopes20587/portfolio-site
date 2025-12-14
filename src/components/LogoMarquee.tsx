import { marqueeLogos } from '../siteData'

const LogoMarquee = () => {
  const getLogoPath = (logoName: string) => {
    const normalizedName = logoName.toLowerCase().replace(/\s+/g, '-')
    return `/images/brands/${normalizedName}.svg`
  }

  return (
    <section className="space-y-6">
      <h2 className="text-center font-display text-2xl font-normal uppercase tracking-wide text-white sm:text-3xl" style={{ fontSize: '42px', lineHeight: 1.2, letterSpacing: '1px' }}>
        BRANDS I'VE WORKED WITH
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {marqueeLogos.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="flex items-center justify-center"
          >
            <img 
              src={getLogoPath(logo)} 
              alt={logo}
              className="h-8 max-w-[120px] object-contain opacity-80 transition hover:opacity-100"
              onError={(e) => {
                // Fallback to text if logo not found
                e.currentTarget.style.display = 'none'
                const text = document.createElement('span')
                text.className = 'text-lg font-medium text-white'
                text.textContent = logo
                e.currentTarget.parentElement?.appendChild(text)
              }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default LogoMarquee
