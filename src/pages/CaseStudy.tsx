import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import ContentSection from "../components/ContentSection";
import TLDRSection from "../components/TLDRSection";
import ProjectNavigation from "../components/ProjectNavigation";
import ImageShowcase from "../components/ImageShowcase";
import ResultsSummary from "../components/ResultsSummary";
import SectionWrapper from "../components/SectionWrapper";
import BulletList from "../components/BulletList";
import { ArrowLeftIcon } from "../components/icons/ArrowIcons";
import { Link } from "react-router-dom";
import ProblemCards from "../components/ProblemCards";
import ProblemImageGallery from "../components/ProblemImageGallery";
import SectionHeader from "../components/SectionHeader";
import RoleSection from "../components/RoleSection";
import DiscoverySection from "../components/DiscoverySection";

const CaseStudyPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const studyIndex = caseStudies.findIndex((item) => item.slug === slug);
  const study = studyIndex !== -1 ? caseStudies[studyIndex] : null;

  // Get previous and next projects for navigation
  const previousProject =
    studyIndex > 0 ? caseStudies[studyIndex - 1] : undefined;
  const nextProject =
    studyIndex < caseStudies.length - 1
      ? caseStudies[studyIndex + 1]
      : undefined;

  // Helper to get image sections by placement
  const getImageSections = (placement: string) =>
    study?.imageSections?.filter(
      (section) => section.placement === placement,
    ) || [];

  if (!study) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-ink px-6">
        <h1 className="font-display text-[48px] text-white">
          Case Study Not Found
        </h1>
        <p className="font-body text-[16px] text-white/70">
          The case study you're looking for doesn't exist.
        </p>
        <Link
          to="/#work"
          className="hover:bg-primary/90 inline-flex items-center gap-2 rounded-[4px] bg-primary px-6 py-3 font-body text-[16px] font-medium text-white transition"
        >
          <ArrowLeftIcon />
          Back to Work
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink">
      {/* 1. Overview (Hero Section) */}
      <CaseStudyHero study={study} />

      {/* Project Metadata (Role, Client, Timeline, Platforms) */}
      <ProjectMetadata study={study} />

      {/* 2. TL;DR */}
      {study.tldr && study.tldr.length > 0 && (
        <TLDRSection items={study.tldr} summary={study.tldrSummary} />
      )}

      {/* 3. The Problem - Combined with Images */}
      {study.challenge && (
        <SectionWrapper
          maxWidth="1320"
          customPadding="px-6 py-[80px] md:px-[60px]"
          className="justify-center"
        >
          <div className="flex flex-col gap-[48px]">
            {/* Problem Cards with Header */}
            {study.problemBreakdown && study.problemBreakdown.length > 0 ? (
              <>
                <ProblemCards
                  items={study.problemBreakdown}
                  sectionLabel="OBSTACLES"
                  heading="The problem"
                  showWrapper={false}
                  showHeader={true}
                />

                {/* Images Section */}
                {getImageSections("after-problem").map((section, index) => (
                  <ProblemImageGallery
                    key={`after-problem-${index}`}
                    images={section.images}
                  />
                ))}
              </>
            ) : (
              <>
                <SectionHeader
                  sectionLabel="OBSTACLES"
                  heading="THE PROBLEM"
                  className="text-center"
                  headingClassName="uppercase"
                />
                <div className="max-w-[900px]">
                  <div className="font-body text-[16px] font-normal leading-[1.6] text-white/80">
                    <p>{study.challenge}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </SectionWrapper>
      )}
      {/* 4. My Role */}
      {study.roleDescription && (
        <RoleSection roleDescription={study.roleDescription} />
      )}
      {/* 5. Discovery and Key Insights */}
      {(study.discoveryInputs || study.discoveryInsights) && (
        <DiscoverySection
          inputs={study.discoveryInputs}
          insights={study.discoveryInsights}
          summary={study.discoverySummary}
        />
      )}

      {/* Images after discovery section */}
      {getImageSections("after-process").map((section, index) => (
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
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="Design Approach">
            {study.designApproach && (
              <p className="mb-6">{study.designApproach}</p>
            )}
            {study.designApproachPoints &&
              study.designApproachPoints.length > 0 && (
                <BulletList items={study.designApproachPoints} />
              )}
          </ContentSection>
        </SectionWrapper>
      )}

      {/* 7. The Solution */}
      {(study.solution || study.solutionPoints) && (
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="The Solution">
            {study.solution && <p className="mb-6">{study.solution}</p>}
            {study.solutionPoints && study.solutionPoints.length > 0 && (
              <BulletList items={study.solutionPoints} />
            )}
          </ContentSection>
        </SectionWrapper>
      )}

      {/* Images after solution section */}
      {getImageSections("after-solution").map((section, index) => (
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
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="Validation">
            <p>{study.validation}</p>
          </ContentSection>
        </SectionWrapper>
      )}

      {/* 9. Impact (Metrics) */}
      {study.metrics && study.metrics.length > 0 && (
        <ProblemCards
          items={study.metrics}
          variant="metric"
          sectionLabel="RESULTS"
          heading="Impact"
        />
      )}

      {/* Results summary text */}
      <ResultsSummary text={study.results || ""} />

      {/* 10. What I Learned */}
      {study.whatILearned && (
        <SectionWrapper maxWidth="900" padding="large">
          <ContentSection heading="What I Learned">
            <p>{study.whatILearned}</p>
          </ContentSection>
        </SectionWrapper>
      )}

      {/* Project Navigation - Previous/Next */}
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default CaseStudyPage;
