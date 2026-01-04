import React from "react";
import { useParams } from "react-router-dom";
import { caseStudies } from "../siteData";
import { hasItems, hasValue, hasAny } from "../lib/helpers";
import CaseStudyHero from "../components/CaseStudyHero";
import ProjectMetadata from "../components/ProjectMetadata";
import ContentSection from "../components/ContentSection";
import TLDRSection from "../components/TLDRSection";
import ProjectNavigation from "../components/ProjectNavigation";
import ImageShowcase from "../components/ImageShowcase";
import ResultsSummary from "../components/ResultsSummary";
import SectionWrapper from "../components/SectionWrapper";
import BulletList from "../components/BulletList";
import NotFound from "../components/NotFound";
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

  // Helper to render image sections by placement
  const renderImageSections = (placement: string) => {
    const sections = getImageSections(placement);
    return sections.map((section, index) => (
      <ImageShowcase
        key={`${placement}-${index}`}
        images={section.images}
        layout={section.layout}
        sectionLabel={section.sectionLabel}
        heading={section.heading}
      />
    ));
  };

  // Helper to render a standard content section with wrapper
  const renderContentSection = (heading: string, content: React.ReactNode) => (
    <SectionWrapper maxWidth="900" padding="large">
      <ContentSection heading={heading}>{content}</ContentSection>
    </SectionWrapper>
  );

  if (!study) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-ink">
      {/* 1. Overview (Hero Section) */}
      <CaseStudyHero study={study} />

      {/* Project Metadata (Role, Client, Timeline, Platforms) */}
      <ProjectMetadata study={study} />

      {/* 2. TL;DR */}
      {hasItems(study.tldr) && (
        <TLDRSection items={study.tldr} summary={study.tldrSummary} />
      )}

      {/* 3. The Problem - Combined with Images */}
      {hasValue(study.challenge) && (
        <SectionWrapper
          maxWidth="1320"
          customPadding="px-6 py-[80px] md:px-[60px]"
          className="justify-center"
        >
          <div className="flex flex-col gap-[48px]">
            {/* Problem Cards with Header */}
            {hasItems(study.problemBreakdown) ? (
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
                  <div className="font-body text-body text-white/80">
                    <p>{study.challenge}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </SectionWrapper>
      )}
      {/* 4. My Role */}
      {hasValue(study.roleDescription) && (
        <RoleSection roleDescription={study.roleDescription} />
      )}
      {/* 5. Discovery and Key Insights */}
      {hasAny(study.discoveryInputs, study.discoveryInsights) && (
        <DiscoverySection
          inputs={study.discoveryInputs}
          insights={study.discoveryInsights}
          summary={study.discoverySummary}
        />
      )}

      {/* Images after discovery section */}
      {renderImageSections("after-process")}

      {/* 6. Design Approach */}
      {hasAny(study.designApproach, study.designApproachPoints) &&
        renderContentSection(
          "Design Approach",
          <>
            {hasValue(study.designApproach) && (
              <p className="mb-6">{study.designApproach}</p>
            )}
            {hasItems(study.designApproachPoints) && (
              <BulletList items={study.designApproachPoints} />
            )}
          </>,
        )}

      {/* 7. The Solution */}
      {hasAny(study.solution, study.solutionPoints) &&
        renderContentSection(
          "The Solution",
          <>
            {hasValue(study.solution) && (
              <p className="mb-6">{study.solution}</p>
            )}
            {hasItems(study.solutionPoints) && (
              <BulletList items={study.solutionPoints} />
            )}
          </>,
        )}

      {/* Images after solution section */}
      {renderImageSections("after-solution")}

      {/* 8. Validation */}
      {hasValue(study.validation) &&
        renderContentSection("Validation", <p>{study.validation}</p>)}

      {/* 9. Impact (Metrics) */}
      {hasItems(study.metrics) && (
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
      {hasValue(study.whatILearned) &&
        renderContentSection("What I Learned", <p>{study.whatILearned}</p>)}

      {/* Project Navigation - Previous/Next */}
      <ProjectNavigation
        previousProject={previousProject}
        nextProject={nextProject}
      />
    </div>
  );
};

export default CaseStudyPage;
