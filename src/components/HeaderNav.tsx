import { useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../lib/iconMappings";
import logo from "../assets/images/logo.png";
import { CONTACT_EMAIL } from "../siteData";

type NavLink = {
  href: string;
  label: string;
  download?: boolean;
};

const navLinks: NavLink[] = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "/Patrick%20Lopes%20Resume.pdf", label: "Resume", download: true },
];

/** Download links (the resume) also open in a new tab */
const getLinkAttributes = (link: NavLink) =>
  link.download
    ? { download: true, target: "_blank", rel: "noopener noreferrer" }
    : {};

const HeaderNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-24 py-24">
        {/* Logo */}
        <Link to="/" className="transition hover:opacity-80">
          <img src={logo} alt="Patrick Lopes" className="w-[200px]" />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-24 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...getLinkAttributes(link)}
              className="font-medium transition-colors hover:text-white/80"
            >
              {link.label}
            </a>
          ))}

          <a href={CONTACT_EMAIL} className="button-primary">
            Let's talk
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <img
            src={mobileMenuOpen ? icons.close : icons.menu}
            alt=""
            className="h-6 w-6"
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full min-h-screen border-t border-surface-card-border bg-panel md:hidden">
          <nav className="flex flex-col px-24 py-24 md:px-64">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...getLinkAttributes(link)}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-surface-card-border py-16 font-medium transition-colors hover:text-white/80"
              >
                {link.label}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href={CONTACT_EMAIL}
              onClick={() => setMobileMenuOpen(false)}
              className="button-primary mt-6"
            >
              Let's talk
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNav;
