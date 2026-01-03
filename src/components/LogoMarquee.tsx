import { SECTION_HEADING_WITH_TRACKING } from '../lib/styles'
import { handleImageErrorTextFallback } from '../lib/imageUtils'

// Company logos from Figma design
const logos = [
  { name: "SeneGence", path: "/images/brands/senegence.png" },
  { name: "Walgreens", path: "/images/brands/walgreens.png" },
  { name: "Verizon", path: "/images/brands/verizon.png" },
  { name: "Cellebrite", path: "/images/brands/cellebrite.png" },
  { name: "Medline", path: "/images/brands/medline.png" },
  { name: "KFC", path: "/images/brands/kfc.png" },
];

// Duplicate logos for seamless loop
const duplicatedLogos = [...logos, ...logos];

const LogoMarquee = () => {
  return (
    <section className="px-0 py-[100px]">
      {/* Section Title - centered, H2 style from Figma */}
      <div className="flex w-full items-center justify-center">
        <h2 className={SECTION_HEADING_WITH_TRACKING}>
          Brands I've worked with
        </h2>
      </div>

      {/* Logo Marquee Container */}
      <div className="relative mt-[40px] overflow-hidden">
        {/* Gradient fade on left edge */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[100px] bg-gradient-to-r from-ink to-transparent" />
        {/* Gradient fade on right edge */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[100px] bg-gradient-to-l from-ink to-transparent" />

        {/* Animated marquee track */}
        <div className="flex w-max animate-marquee-slow gap-[48px]">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="logo-marquee-card">
              <img
                src={logo.path}
                loading="lazy"
                alt={logo.name}
                className="h-auto max-h-[33px] w-full object-contain"
                onError={(e) => handleImageErrorTextFallback(e, logo.name)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
