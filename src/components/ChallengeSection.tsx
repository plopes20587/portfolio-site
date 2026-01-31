import SectionWrapper from "./SectionWrapper";

type ChallengeSectionProps = {
  challenge: string;
};

/**
 * Component for displaying "The Challenge" section with question mark icon
 * Similar to RoleSection but with question mark instead
 */
const ChallengeSection = ({ challenge }: ChallengeSectionProps) => {
  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex w-full flex-col items-center justify-center rounded-[14px] border border-borders-primary-default p-48"
          style={{ backgroundColor: "var(--color-role-card-bg)" }}
        >
          <div className="flex w-full max-w-[1080px] items-center gap-48">
            {/* Content */}
            <div className="flex flex-1 flex-col gap-24">
              <h4>THE CHALLENGE</h4>
              <p>{challenge}</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChallengeSection;
