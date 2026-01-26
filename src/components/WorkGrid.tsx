import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../siteData'
import SectionWrapper from './SectionWrapper'
import { SECTION_HEADING_BASE } from '../lib/styles'

const WorkGrid = () => {
  return (
    <SectionWrapper id="work" maxWidth="1320" padding="large">
      {/* Section Title - centered, H2 style from Figma */}
      <div className="flex w-full items-center justify-center">
        <h2 className={SECTION_HEADING_BASE}>
          FEATURED PROJECTS
        </h2>
      </div>
      
      {/* Card Grid - 1 column mobile, 2 columns tablet+ */}
      <div className="mx-auto mt-12 grid max-w-[1050px] auto-rows-fr items-stretch justify-items-center gap-40 md:mt-[90px] lg:grid-cols-2">
        {caseStudies.map((study) => (
          <div key={study.slug} className="flex w-full max-w-[517px]">
            <CaseStudyCard study={study} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default WorkGrid
