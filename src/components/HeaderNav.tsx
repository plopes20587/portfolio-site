import { useState } from "react";
import { Link } from "react-router-dom";
import menuIcon from "../assets/icons/menu.svg";
import closeIcon from "../assets/icons/close.svg";

type NavLink = {
  href: string;
  label: string;
  download?: boolean;
};

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "/resume.pdf", label: "Resume", download: true },
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
              download={link.download || undefined}
              target={link.download ? "_blank" : undefined}
              rel={link.download ? "noopener noreferrer" : undefined}
              className="font-body text-[16px] font-medium text-white transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button - rounded-[4px], bg-primary */}
          <a href="mailto:patrick@patricklopes.com" className="nav-button">
            Lets talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-white md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <img 
            src={mobileMenuOpen ? closeIcon : menuIcon} 
            alt="" 
            className="h-6 w-6" 
          />
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
                download={link.download || undefined}
                target={link.download ? "_blank" : undefined}
                rel={link.download ? "noopener noreferrer" : undefined}
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
              className="nav-button mt-6"
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
