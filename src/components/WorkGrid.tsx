import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../siteData'

const WorkGrid = () => {
  return (
    <section id="work" className="px-[60px] py-[100px]">
      {/* Section Title - centered, H2 style from Figma */}
      <div className="flex w-full items-center justify-center">
        <h2 className="font-display text-[42px] font-normal leading-[1.2] tracking-[0.42px] text-white">
          FEATURED PROJECTS
        </h2>
      </div>
      
      {/* Card Grid - 2 columns, 16px gap, max-width 1320px */}
      <div className="mx-auto mt-[90px] grid max-w-[1320px] gap-[16px] sm:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.slug} className="h-[781px] w-full">
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkGrid
