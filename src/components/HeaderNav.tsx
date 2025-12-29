import { useState } from "react";
import { Link } from "react-router-dom";

// Hamburger menu icon
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Close icon
const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#resume", label: "Resume" },
  ];

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

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-[24px] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[16px] font-medium text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button - rounded-[4px], bg-primary */}
          <a
            href="mailto:patrick@patricklopes.com"
            className="rounded-[4px] bg-primary px-[24px] py-[8px] font-body text-[16px] font-medium text-white transition hover:bg-primary/90"
          >
            Lets talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-t border-white/10 bg-ink/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-6 md:px-[64px]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-white/10 py-4 font-body text-[18px] font-medium text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="mailto:patrick@patricklopes.com"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-[4px] bg-primary px-[24px] py-[12px] font-body text-[16px] font-medium text-white transition hover:bg-primary/90"
            >
              Lets talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
