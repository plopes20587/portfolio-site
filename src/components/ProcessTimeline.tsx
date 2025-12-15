import type { ProcessStep } from '../siteData'

type Props = {
  steps: ProcessStep[]
}

const ProcessTimeline = ({ steps }: Props) => {
  if (!steps || steps.length === 0) return null

  return (
    <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1100px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-[32px] font-normal leading-[1.2] text-white md:text-[42px]">
            Design Process
          </h2>
          <p className="mt-4 font-body text-[18px] text-white/70">
            A structured approach from discovery to delivery
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line - visible on larger screens */}
          <div className="absolute left-[28px] top-0 hidden h-full w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          {/* Steps */}
          <div className="flex flex-col gap-8 md:gap-0">
            {steps.map((step, index) => (
              <div
                key={step.phase}
                className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 md:text-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div
                    className={`rounded-[16px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-primary/30 hover:bg-white/[0.08] ${
                      index % 2 === 0 ? 'md:ml-auto md:mr-8' : 'md:ml-8 md:mr-auto'
                    } md:max-w-[400px]`}
                  >
                    <div className="mb-2 flex items-center gap-3 md:hidden">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-display text-[14px] font-bold text-primary">
                        {step.phase}
                      </span>
                      <h3 className="font-display text-[20px] text-white">
                        {step.title}
                      </h3>
                    </div>
                    <h3 className="mb-2 hidden font-display text-[20px] text-white md:block">
                      {step.title}
                    </h3>
                    <p className="font-body text-[16px] leading-[1.6] text-white/70">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Node - visible on larger screens */}
                <div className="absolute left-1/2 top-6 hidden -translate-x-1/2 md:block">
                  <div className="relative">
                    {/* Outer glow */}
                    <div className="absolute -inset-2 rounded-full bg-primary/20 blur-md" />
                    {/* Node */}
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary bg-ink">
                      <span className="font-display text-[16px] font-bold text-primary">
                        {step.phase}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
