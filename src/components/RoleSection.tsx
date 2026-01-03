import SectionWrapper from "./SectionWrapper";

type RoleSectionProps = {
  roleDescription: string;
};

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
            <div className="flex h-24 w-[52.641px] shrink-0 items-center justify-center">
              <p className="font-display text-[96px] leading-[96px] text-[#1d293d]">
                ?
              </p>
            </div>
            {/* Content */}
            <div className="flex flex-1 flex-col gap-[24px]">
              <h4 className="heading-h4 text-white">My role</h4>
              <p className="font-body text-[16px] font-normal leading-[24px] text-white">
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
