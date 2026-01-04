import { footerCta } from "../siteData";

const FooterCTA = () => {
  return (
    <footer className="border-t border-white/10 bg-ink px-[60px] py-[100px]">
      <div className="flex w-full flex-col items-center gap-[16px] text-center">
        {/* H2: Staatliches, 42px, weight 400, lineHeight 1.2, letterSpacing 1px */}
        <h2 className="font-display text-h2 font-normal text-white">
          {footerCta.headline}
        </h2>
        {/* Body: Inter, 16px, weight 400, lineHeight 1.5 */}
        <p className="font-body text-body text-white">
          {footerCta.body}
        </p>
        {/* Button: using Figma design system */}
        <a
          href={footerCta.action.href}
          className="button-primary"
        >
          {footerCta.action.label}
        </a>
      </div>
    </footer>
  );
};

export default FooterCTA;
