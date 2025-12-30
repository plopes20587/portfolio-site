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
        <h2 className="font-display text-[32px] font-normal leading-[1.2] tracking-[0.42px] text-white md:text-[42px]">
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
            <div
              key={`${logo.name}-${index}`}
              className="flex h-[98px] w-[192px] shrink-0 items-center justify-center rounded-[10px] border border-white/10 bg-white/5 px-[22px] py-[32px]"
            >
              <img
                src={logo.path}
                loading="lazy"
                alt={logo.name}
                className="h-auto max-h-[33px] w-full object-contain"
                onError={(e) => {
                  // Fallback to text if logo not found
                  e.currentTarget.style.display = "none";
                  const text = document.createElement("span");
                  text.className = "text-sm font-medium text-white/80";
                  text.textContent = logo.name;
                  e.currentTarget.parentElement?.appendChild(text);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoMarquee;
