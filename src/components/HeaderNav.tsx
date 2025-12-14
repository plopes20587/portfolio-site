import { Link } from 'react-router-dom'

const HeaderNav = () => {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-[64px] py-[32px]">
        {/* Logo - underlined style from Figma */}
        <Link 
          to="/" 
          className="font-body text-[18px] font-semibold text-white underline decoration-white/80 underline-offset-4 transition hover:decoration-white"
        >
          Patrick Lopes
        </Link>
        
        {/* Navigation Links */}
        <nav className="hidden items-center gap-[24px] sm:flex">
          <a
            href="#work"
            className="font-body text-[16px] font-medium text-white transition-colors hover:text-white/80"
          >
            Work
          </a>
          <a
            href="#about"
            className="font-body text-[16px] font-medium text-white transition-colors hover:text-white/80"
          >
            About
          </a>
          <a
            href="#resume"
            className="font-body text-[16px] font-medium text-white transition-colors hover:text-white/80"
          >
            Resume
          </a>
          
          {/* CTA Button - rounded-[4px], bg-primary */}
          <a
            href="mailto:patrick@patricklopes.com"
            className="rounded-[4px] bg-primary px-[24px] py-[8px] font-body text-[16px] font-medium text-white transition hover:bg-primary/90"
          >
            Lets talk
          </a>
        </nav>
      </div>
    </header>
  )
}

export default HeaderNav
