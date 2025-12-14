const AboutSection = () => {
  return (
    <section id="about" className="space-y-8 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-normal uppercase tracking-wide text-white sm:text-4xl" style={{ fontSize: '42px', lineHeight: 1.2, letterSpacing: '1px' }}>
            A BIT ABOUT ME
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img 
              src="/src/assets/images/profile-photo.jpg" 
              alt="Patrick Lopes"
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to placeholder if image not found
                e.currentTarget.style.display = 'none'
                if (!e.currentTarget.nextElementSibling) {
                  const placeholder = document.createElement('div')
                  placeholder.className = 'h-96 w-full bg-white/10 flex items-center justify-center'
                  const text = document.createElement('span')
                  text.className = 'text-white/30 text-sm'
                  text.textContent = 'Profile Photo'
                  placeholder.appendChild(text)
                  e.currentTarget.parentElement?.appendChild(placeholder)
                }
              }}
            />
          </div>

          <div className="space-y-6">
            <div className="space-y-4 text-base leading-relaxed text-white" style={{ fontSize: '18px', lineHeight: 1.5 }}>
              <p>
                I'm a senior product designer with a focus on e-commerce and
                digital shopping. Over the past ten years, I've worked on product
                pages, checkout flows, and customer journeys for brands like
                Verizon, KFC, and SeneGence.
              </p>
              <p>
                I like keeping things simple. My approach usually starts with
                understanding how people shop or move through a flow, then
                figuring out how to make that experience feel smoother and more
                predictable. AI has become a helpful part of my workflow — it
                lets me explore directions faster, play with variations, and get
                clearer on what will actually help users.
              </p>
              <p>
                When I'm not working, I'm probably traveling, working remotely
                somewhere warm, or finding a good coffee spot.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-white/10 bg-ink-900 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20">
                    <span className="text-primary text-sm">10+</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">10+</p>
                    <p className="text-sm text-white/70">Years of Experience</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20">
                    <span className="text-primary text-sm">100+</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">100+</p>
                    <p className="text-sm text-white/70">Projects Delivered</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20">
                    <span className="text-primary text-sm">50+</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">50+</p>
                    <p className="text-sm text-white/70">Happy Clients</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-ink-900 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20">
                    <span className="text-primary text-sm">2M+</span>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">2M+</p>
                    <p className="text-sm text-white/70">Revenue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
