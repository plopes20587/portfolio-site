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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-64 py-32">
        {/* Logo - underlined style from Figma */}
        <Link
          to="/"
          className="font-body text-body font-semibold underline decoration-white/80 underline-offset-4 transition hover:decoration-white"
        >
          Patrick Lopes
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-24 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              download={link.download || undefined}
              target={link.download ? "_blank" : undefined}
              rel={link.download ? "noopener noreferrer" : undefined}
              className="font-body text-body font-medium transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button - using Figma design system */}
          <a href="mailto:patrick@patricklopes.com" className="button-primary">
            Lets talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
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
        <div className="bg-ink/95 absolute left-0 right-0 top-full border-t border-surface-card-border backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-24 py-24 md:px-64">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download={link.download || undefined}
                target={link.download ? "_blank" : undefined}
                rel={link.download ? "noopener noreferrer" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-surface-card-border py-4 font-body text-body font-medium text-text-body transition-colors hover:text-text-body/80"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="mailto:patrick@patricklopes.com"
              onClick={() => setMobileMenuOpen(false)}
              className="button-primary mt-6"
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
