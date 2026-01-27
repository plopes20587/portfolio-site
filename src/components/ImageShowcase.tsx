import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";

type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageShowcaseProps = {
  images: ImageItem[];
  layout?: "single" | "side-by-side" | "grid";
  sectionLabel?: string;
  heading?: string;
};

const ImageShowcase = ({
  images,
  layout = "single",
  sectionLabel,
  heading,
}: ImageShowcaseProps) => {
  if (!images || images.length === 0) return null;

  const gridClass =
    layout === "side-by-side"
      ? "grid gap-6 md:grid-cols-2"
      : layout === "grid"
        ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        : "flex flex-col gap-6";

  return (
    <SectionWrapper maxWidth="1320" padding="large">
      {/* Optional Section Header */}
      {heading && (
        <SectionHeader
          sectionLabel={sectionLabel}
          heading={heading}
          className="text-center"
        />
      )}

      {/* Image Grid */}
      <div className={gridClass}>
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="group overflow-hidden rounded-[16px] border border-white/10 bg-surface-card"
          >
            <div className="overflow-hidden">
              <img
                src={image.src}
                alt={image.alt}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>
            {image.caption && (
              <figcaption className="border-t border-white/10 bg-ink-900/50 px-6 py-4">
                <p className="text-h4-small text-white/70">
                  {image.caption}
                </p>
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ImageShowcase;
