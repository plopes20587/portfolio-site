import { footerCta } from "../siteData";

const FooterCTA = () => {
  return (
    <footer className="border-t border-surface-card-border bg-ink px-60 py-100">
      <div className="flex w-full flex-col items-center gap-16 text-center">
        {/* H2: Staatliches, 42px, weight 400, lineHeight 1.2, letterSpacing 1px */}
        <h2>{footerCta.headline}</h2>
        <p>{footerCta.body}</p>
        {/* Button: using Figma design system */}
        <a href={footerCta.action.href} className="button-primary">
          {footerCta.action.label}
        </a>
      </div>
    </footer>
  );
};

export default FooterCTA;
