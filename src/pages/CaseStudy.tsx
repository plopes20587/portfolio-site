import { Link, useParams } from 'react-router-dom'
import { caseStudies } from '../siteData'
import CaseStudyHero from '../components/CaseStudyHero'
import ProjectMetadata from '../components/ProjectMetadata'
import ContentSection from '../components/ContentSection'
import ProcessTimeline from '../components/ProcessTimeline'

// Arrow icon for back button
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 10H4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const study = caseStudies.find((item) => item.slug === slug)

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6">
        <h1 className="font-display text-[48px] text-white">Case Study Not Found</h1>
        <p className="font-body text-[18px] text-white/70">
          The case study you're looking for doesn't exist.
        </p>
        <Link 
          to="/#work" 
          className="inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 font-body text-[16px] font-medium text-white transition hover:bg-primary/90"
        >
          <ArrowLeftIcon />
          Back to Work
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ink">
      {/* Hero Section */}
      <CaseStudyHero study={study} />

      {/* Project Metadata */}
      <ProjectMetadata study={study} />

      {/* Main Content */}
      <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-16">
          {/* The Problem */}
          {study.challenge && (
            <ContentSection heading="The Problem">
              <p>{study.challenge}</p>
            </ContentSection>
          )}
        </div>
      </section>

      {/* Design Process Timeline */}
      {study.processTimeline && study.processTimeline.length > 0 && (
        <ProcessTimeline steps={study.processTimeline} />
      )}

      {/* Continue Main Content */}
      <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-16">
          {/* Sections from data - Discovery, Design Approach, Validation, What I Learned */}
          {study.sections && study.sections.length > 0 && (
            <div className="flex flex-col gap-16">
              {study.sections.map((section) => (
                <ContentSection key={section.heading} heading={section.heading}>
                  <p>{section.copy}</p>
                </ContentSection>
              ))}
            </div>
          )}

          {/* The Solution */}
          {study.solution && (
            <ContentSection heading="Solution">
              <p>{study.solution}</p>
            </ContentSection>
          )}

          {/* Key Metrics - Impact */}
          {study.metrics && study.metrics.length > 0 && (
            <ContentSection heading="Impact">
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex flex-col items-center gap-2 rounded-[16px] border border-white/10 bg-white/5 p-6 text-center"
                  >
                    <p className="font-display text-[36px] text-primary">
                      {metric.value}
                    </p>
                    <p className="font-body text-[14px] text-white/70">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </ContentSection>
          )}

          {/* Results/Outcome Section */}
          {study.results && (
            <ContentSection heading="Results">
              <p>{study.results}</p>
            </ContentSection>
          )}
        </div>
      </section>

      {/* Back to Work */}
      <section className="border-t border-white/10 px-6 py-16 md:px-[60px]">
        <div className="mx-auto max-w-[900px]">
          <Link
            to="/#work"
            className="inline-flex items-center gap-3 font-body text-[18px] font-medium text-primary transition hover:text-primary/80"
          >
            <ArrowLeftIcon />
            Back to all projects
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudyPage
