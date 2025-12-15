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
        <div className="mx-auto mt-12 grid max-w-[1050px] justify-items-center gap-[16px] md:mt-[90px] lg:grid-cols-2">
          {caseStudies.map((study) => (
            <div key={study.slug} className="w-full max-w-[517px]">
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkGrid
