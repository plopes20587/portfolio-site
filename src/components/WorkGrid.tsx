import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../siteData'
import SectionWrapper from './SectionWrapper'

const WorkGrid = () => {
  return (
    <SectionWrapper id="work" maxWidth="1320" padding="large">
      {/* Section Title - centered, H2 style from Figma */}
      <div className="flex w-full items-center justify-center">
        <h2 className="font-display text-[32px] font-normal leading-[1.2] tracking-[0.42px] text-white md:text-[42px]">
          FEATURED PROJECTS
        </h2>
      </div>
      
      {/* Card Grid - 1 column mobile, 2 columns tablet+ */}
      <div className="mx-auto mt-12 grid max-w-[1050px] justify-items-center gap-[40px] md:mt-[90px] lg:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.slug} className="w-full max-w-[517px]">
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default WorkGrid
