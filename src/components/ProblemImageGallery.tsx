type ImageItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ProblemImageGalleryProps = {
  images: ImageItem[];
};

/**
 * Component for displaying problem section images
 * Matches Figma design node 1902:1003
 *
 * Layout:
 * - Desktop: 2 images side by side with 70px gap
 * - Mobile: Images stacked vertically
 *
 * Images should include any annotations baked in from design tools
 */
const ProblemImageGallery = ({ images }: ProblemImageGalleryProps) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="flex w-full flex-col items-center gap-48 md:flex-row md:items-start md:justify-center md:gap-[70px]">
      {images.map((image, index) => (
        <figure
          key={`problem-image-${index}`}
          className="flex w-full flex-col items-center gap-16 md:w-auto md:max-w-[50%]"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-auto w-full max-w-full object-contain"
            loading="lazy"
          />
          {image.caption && (
            <figcaption className="text-center">
              <p className="text-body text-text-body-500">{image.caption}</p>
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
};

export default ProblemImageGallery;
