import SectionWrapper from "./SectionWrapper";

type ChallengeSectionProps = {
  challenge: string;
};

/**
 * "The Challenge" callout card: a single bordered card with heading and paragraph.
 */
const ChallengeSection = ({ challenge }: ChallengeSectionProps) => {
  return (
    <SectionWrapper>
      <div
        className="flex w-full flex-col items-center justify-center rounded-[14px] border border-borders-primary-default p-48"
        style={{ backgroundColor: "var(--color-role-card-bg)" }}
      >
        <div className="flex w-full max-w-[1080px] flex-col gap-24">
          <h4>THE CHALLENGE</h4>
          <p>{challenge}</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChallengeSection;
