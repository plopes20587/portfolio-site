type ImageItem = {
  src: string
  alt: string
  caption?: string
}

type Props = {
  images: ImageItem[]
  layout?: 'single' | 'side-by-side' | 'grid'
  sectionLabel?: string
  heading?: string
}

const ImageShowcase = ({ images, layout = 'single', sectionLabel, heading }: Props) => {
  if (!images || images.length === 0) return null

  const gridClass = 
    layout === 'side-by-side' 
      ? 'grid gap-6 md:grid-cols-2' 
      : layout === 'grid' 
        ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' 
        : 'flex flex-col gap-6'

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        {/* Optional Section Header */}
        {(sectionLabel || heading) && (
          <div className="mb-12 text-center">
            {sectionLabel && (
              <span className="mb-4 inline-block font-body text-[14px] font-semibold uppercase tracking-[0.1em] text-primary">
                {sectionLabel}
              </span>
            )}
            {heading && (
              <h2 className="font-display text-[32px] font-normal leading-[1.2] text-white md:text-[42px]">
                {heading}
              </h2>
            )}
          </div>
        )}

        {/* Image Grid */}
        <div className={gridClass}>
          {images.map((image, index) => (
            <figure key={index} className="group overflow-hidden rounded-[16px] border border-white/10 bg-white/5">
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
                  <p className="font-body text-[14px] text-white/70">
                    {image.caption}
                  </p>
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageShowcase
