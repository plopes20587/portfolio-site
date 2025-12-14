import { motion } from 'framer-motion'
import { heroContent } from '../siteData'
import HeroStarfieldCanvas from './HeroStarfieldCanvas'

const Hero = () => {
  const socialIcons = [
    { name: 'LinkedIn', iconPath: '/src/assets/icons/social/linkedin.svg', href: '#', fallback: 'in' },
    { name: 'Dribbble', iconPath: '/src/assets/icons/social/dribbble.svg', href: '#', fallback: 'db' },
    { name: 'Twitter', iconPath: '/src/assets/icons/social/twitter.svg', href: '#', fallback: 'tw' },
    { name: 'Behance', iconPath: '/src/assets/icons/social/behance.svg', href: '#', fallback: 'be' },
  ]

  return (
    <section className="relative overflow-hidden bg-ink px-6 py-16 sm:px-12 sm:py-20">
      <HeroStarfieldCanvas />
      <div className="relative z-10 space-y-8">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-display text-6xl font-normal leading-none tracking-[0.02em] text-white sm:text-7xl lg:text-8xl"
          style={{ fontSize: '80px', lineHeight: 1, letterSpacing: '2px' }}
        >
          {heroContent.title}
        </motion.h1>
        <p className="max-w-2xl text-lg leading-[1.5] text-white sm:text-xl" style={{ fontSize: '18px', lineHeight: 1.5 }}>
          {heroContent.subHeadline}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={heroContent.primaryCta.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
          >
            {heroContent.primaryCta.label}
          </a>
          <div className="flex items-center gap-3">
            {socialIcons.map((social) => (
              <a 
                key={social.name}
                href={social.href} 
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10"
                aria-label={social.name}
              >
                <img 
                  src={social.iconPath} 
                  alt={social.name}
                  className="h-5 w-5"
                  onError={(e) => {
                    // Fallback to text if icon not found
                    e.currentTarget.style.display = 'none'
                    if (!e.currentTarget.nextElementSibling) {
                      const text = document.createElement('span')
                      text.className = 'text-xs'
                      text.textContent = social.fallback
                      e.currentTarget.parentElement?.appendChild(text)
                    }
                  }}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="flex justify-center pt-8">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
