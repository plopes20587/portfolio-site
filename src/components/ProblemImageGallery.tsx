type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProblemImageGalleryProps = {
  images: ImageItem[];
};

/**
 * Component for displaying images after the problem section
 * Uses a specific layout that differs from ImageShowcase
 */
const ProblemImageGallery = ({ images }: ProblemImageGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-start justify-center gap-6 md:flex-row md:gap-[70px]">
      {images.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="group overflow-hidden">
          <div className="overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          {image.caption && (
            <figcaption className="px-6 py-4">
              <p className="font-body text-h4-small text-white/70">
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
