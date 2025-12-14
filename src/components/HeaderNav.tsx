import { Link } from 'react-router-dom'
import { footerCta } from '../siteData'

const HeaderNav = () => {
  return (
    <header className="sticky top-4 z-40 mb-12">
      <div className="flex items-center justify-between bg-ink px-6 py-4">
        <Link to="/" className="text-lg font-semibold text-white">
          Patrick Lopes
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-white sm:flex">
          <a
            href="#top"
            className="transition-colors hover:text-primary"
          >
            Home
          </a>
          <a
            href="#about"
            className="transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#resume"
            className="transition-colors hover:text-primary"
          >
            Resume
          </a>
        </nav>
        <a
          href={footerCta.action.href}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
        >
          Let's Talk
        </a>
      </div>
    </header>
  )
}

export default HeaderNav
