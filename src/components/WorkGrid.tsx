import CaseStudyCard from './CaseStudyCard'
import { caseStudies } from '../siteData'

const WorkGrid = () => {
  return (
    <section id="work" className="space-y-8">
      <h2 className="text-center font-display text-3xl font-normal uppercase tracking-wide text-white sm:text-4xl" style={{ fontSize: '42px', lineHeight: 1.2, letterSpacing: '1px' }}>
        FEATURED PROJECTS
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>
    </section>
  )
}

export default WorkGrid
