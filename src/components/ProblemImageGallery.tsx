type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProblemImageGalleryProps = {
  images: ImageItem[];
};

/**
 * Component for displaying annotated images after the problem section
 * Matches Figma design node 1902:1003 with phone mockups and callout annotations
 * Images should include annotations baked in for complex callout designs
 */
const ProblemImageGallery = ({ images }: ProblemImageGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center justify-center gap-48">
      {images.map((image, index) => (
        <figure
          key={`${image.src}-${index}`}
          className="flex w-full flex-col items-center gap-24"
        >
          {/* Image container - full width for annotated mockups */}
          <div className="flex w-full items-center justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto max-w-full object-contain"
              loading="lazy"
            />
          </div>
          {/* Caption centered below image */}
          {image.caption && (
            <figcaption className="max-w-[800px] text-center">
              <p className="font-body text-body font-normal text-white/70">
                {image.caption}
              </p>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default ProblemImageGallery;
