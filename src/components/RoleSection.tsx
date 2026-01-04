import SectionWrapper from "./SectionWrapper";

type RoleSectionProps = {
  roleDescription: string;
};

// Question mark icon styling constants
const QUESTION_MARK_SIZE = "text-[96px]";
const QUESTION_MARK_LINE_HEIGHT = "leading-[96px]";
const QUESTION_MARK_CONTAINER_HEIGHT = "h-24";
const QUESTION_MARK_CONTAINER_WIDTH = "w-[52.641px]";
const QUESTION_MARK_COLOR = "text-[#1d293d]";

/**
 * Component for displaying the "My Role" section in case studies
 * Features unique styling with question mark icon and special border/background
 */
const RoleSection = ({ roleDescription }: RoleSectionProps) => {
  return (
    <SectionWrapper maxWidth="1320" padding="large">
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center rounded-[14px] border border-[rgba(251,44,54,0.2)] bg-[rgba(2,6,24,0.8)] p-[48px]">
          <div className="flex w-full max-w-[1080px] items-center gap-[32px]">
            {/* Large question mark icon */}
            <div
              className={`flex ${QUESTION_MARK_CONTAINER_HEIGHT} ${QUESTION_MARK_CONTAINER_WIDTH} shrink-0 items-center justify-center`}
            >
              <p
                className={`font-display ${QUESTION_MARK_SIZE} ${QUESTION_MARK_LINE_HEIGHT} ${QUESTION_MARK_COLOR}`}
              >
                ?
              </p>
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col gap-[24px]">
              <h4 className="heading-h4 text-white">My role</h4>
              <p className="font-body text-body text-white">
                {roleDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RoleSection;
