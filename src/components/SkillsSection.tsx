const SkillsSection = () => {
  const techStack = [
    {
      name: 'Design Tools',
      iconPath: '/src/assets/icons/tech-stack/design-tools.svg',
      color: 'bg-purple',
      items: ['Figma', 'Framer', 'Protopie', 'Webflow'],
    },
    {
      name: 'Development',
      iconPath: '/src/assets/icons/tech-stack/development.svg',
      color: 'bg-blue',
      items: ['HTML', 'CSS', 'React', 'Javascript'],
    },
    {
      name: 'Research & Testing',
      iconPath: '/src/assets/icons/tech-stack/research.svg',
      color: 'bg-green',
      items: ['User Testing', 'User Research', 'A/B Test'],
    },
    {
      name: 'AI Stack',
      iconPath: '/src/assets/icons/tech-stack/ai-stack.svg',
      color: 'bg-orange',
      items: ['Claude', 'ChatGPT', 'Copilot'],
    },
  ]

  return (
    <section id="skills" className="space-y-6 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-normal uppercase tracking-wide text-white sm:text-4xl" style={{ fontSize: '42px', lineHeight: 1.2, letterSpacing: '1px' }}>
            TECH STACK
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white" style={{ fontSize: '18px', lineHeight: 1.5 }}>
            My toolkit spans design, development, and AI—everything I use to take ideas from concept to code.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack) => (
            <div key={stack.name} className="rounded-lg border border-white/10 bg-ink-900 p-6">
              <div className={`mb-4 inline-block rounded-lg ${stack.color} p-3`}>
                <img 
                  src={stack.iconPath} 
                  alt={`${stack.name} icon`}
                  className="h-7 w-7"
                  onError={(e) => {
                    // Fallback to placeholder div if icon not found
                    e.currentTarget.style.display = 'none'
                    if (!e.currentTarget.nextElementSibling) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'h-7 w-7 rounded bg-white/20'
                      e.currentTarget.parentElement?.appendChild(placeholder)
                    }
                  }}
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {stack.name}
              </h3>
              <ul className="space-y-2 text-white">
                {stack.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection
