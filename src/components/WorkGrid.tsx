import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../siteData'

const WorkGrid = () => {
  return (
    <section id="work" className="px-6 py-16 md:px-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1320px]">
        {/* Section Title - centered, H2 style from Figma */}
        <div className="flex w-full items-center justify-center">
          <h2 className="font-display text-[32px] font-normal leading-[1.2] tracking-[0.42px] text-white md:text-[42px]">
            FEATURED PROJECTS
          </h2>
        </div>
        
        {/* Card Grid - 1 column mobile, 2 columns tablet+ */}
        <div className="mt-12 grid gap-4 md:mt-[90px] md:gap-[16px] lg:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.slug} className="w-full">
            <CaseStudyCard study={study} />
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
