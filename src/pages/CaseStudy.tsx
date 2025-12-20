import { useParams } from 'react-router-dom'
import { caseStudies } from '../siteData'
import CaseStudyHero from '../components/CaseStudyHero'
import ProjectMetadata from '../components/ProjectMetadata'
import ContentSection from '../components/ContentSection'
import TLDRSection from '../components/TLDRSection'
import ProjectNavigation from '../components/ProjectNavigation'
import MetricsGrid from '../components/MetricsGrid'
import ImageShowcase from '../components/ImageShowcase'
import { Link } from 'react-router-dom'

// Arrow icon for back button
const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.8333 10H4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 15.8333L4.16667 10L10 4.16667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Bullet list component for reuse
const BulletList = ({ items }: { items: string[] }) => (
  <ul className="mt-4 flex flex-col gap-2">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
        <span className="font-body text-[18px] leading-[1.6] text-white/80">{item}</span>
      </li>
    ))}
  </ul>
)

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug)
  const study = studyIndex !== -1 ? caseStudies[studyIndex] : null

  // Get previous and next projects for navigation
  const previousProject = studyIndex > 0 ? caseStudies[studyIndex - 1] : undefined
  const nextProject = studyIndex < caseStudies.length - 1 ? caseStudies[studyIndex + 1] : undefined

  // Helper to get image sections by placement
  const getImageSections = (placement: string) => 
    study?.imageSections?.filter(section => section.placement === placement) || []

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
      {/* 1. Hero Section (Overview) */}
      <CaseStudyHero study={study} />

      {/* Project Metadata */}
      <ProjectMetadata study={study} />

      {/* 2. TL;DR Section */}
      {study.tldr && study.tldr.length > 0 && (
        <TLDRSection items={study.tldr} summary={study.tldrSummary} />
      )}

      {/* 3. The Problem */}
      <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
        <div className="mx-auto flex max-w-[900px] flex-col gap-16">
          {study.challenge && (
            <ContentSection heading="The Problem">
              <p>{study.challenge}</p>
            </ContentSection>
          )}
        </div>
      </section>

      {/* Images after problem section */}
      {getImageSections('after-problem').map((section, index) => (
        <ImageShowcase
          key={`after-problem-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 4. My Role */}
      {study.roleDescription && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="My Role">
              <p>{study.roleDescription}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* 5. Discovery and Key Insights */}
      {(study.discoveryInputs || study.discoveryInsights) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="Discovery and Key Insights">
              {study.discoveryInputs && study.discoveryInputs.length > 0 && (
                <div className="mb-8">
                  <h4 className="mb-4 font-body text-[14px] font-semibold uppercase tracking-wider text-primary">
                    Inputs
                  </h4>
                  <BulletList items={study.discoveryInputs} />
                </div>
              )}
              {study.discoveryInsights && study.discoveryInsights.length > 0 && (
                <div>
                  <h4 className="mb-4 font-body text-[14px] font-semibold uppercase tracking-wider text-primary">
                    Key Insights
                  </h4>
                  <BulletList items={study.discoveryInsights} />
                </div>
              )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* Images after process/discovery section */}
      {getImageSections('after-process').map((section, index) => (
        <ImageShowcase
          key={`after-process-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 6. Design Approach */}
      {(study.designApproach || study.designApproachPoints) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="Design Approach">
              {study.designApproach && <p className="mb-6">{study.designApproach}</p>}
              {study.designApproachPoints && study.designApproachPoints.length > 0 && (
                <BulletList items={study.designApproachPoints} />
              )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* 7. The Solution */}
      {(study.solution || study.solutionPoints) && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="The Solution">
              {study.solution && <p className="mb-6">{study.solution}</p>}
              {study.solutionPoints && study.solutionPoints.length > 0 && (
                <BulletList items={study.solutionPoints} />
              )}
            </ContentSection>
          </div>
        </section>
      )}

      {/* Images after solution section */}
      {getImageSections('after-solution').map((section, index) => (
        <ImageShowcase
          key={`after-solution-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* 8. Validation */}
      {study.validation && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="Validation">
              <p>{study.validation}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* 9. Impact (Metrics) */}
      {study.metrics && study.metrics.length > 0 && (
        <MetricsGrid 
          metrics={study.metrics} 
          sectionLabel="RESULTS" 
          heading="Impact" 
        />
      )}

      {/* Images before results section */}
      {getImageSections('before-results').map((section, index) => (
        <ImageShowcase
          key={`before-results-${index}`}
          images={section.images}
          layout={section.layout}
          sectionLabel={section.sectionLabel}
          heading={section.heading}
        />
      ))}

      {/* Results text if provided */}
      {study.results && (
        <section className="px-6 py-8 md:px-[60px]">
          <div className="mx-auto max-w-[900px]">
            <p className="text-center font-body text-[18px] text-white/70">{study.results}</p>
          </div>
        </section>
      )}

      {/* 10. What I Learned */}
      {study.whatILearned && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            <ContentSection heading="What I Learned">
              <p>{study.whatILearned}</p>
            </ContentSection>
          </div>
        </section>
      )}

      {/* Fallback to old sections structure for backward compatibility */}
      {!study.discoveryInputs && !study.designApproach && study.sections && study.sections.length > 0 && (
        <section className="px-6 py-16 md:px-[60px] md:py-[100px]">
          <div className="mx-auto flex max-w-[900px] flex-col gap-16">
            {study.sections.map((section) => (
              <ContentSection key={section.heading} heading={section.heading}>
                <p>{section.copy}</p>
              </ContentSection>
            ))}
          </div>
        </section>
      )}

      {/* Project Navigation - Previous/Next */}
      <ProjectNavigation 
        previousProject={previousProject} 
        nextProject={nextProject} 
      />
    </div>
  )
}

export default CaseStudyPage
