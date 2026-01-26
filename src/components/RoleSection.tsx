import SectionWrapper from "./SectionWrapper";
import checkIcon from "../assets/icons/check.svg";

type RoleSectionProps = {
  roleDescription: string;
  coreContributions?: string[];
};

/**
 * Component for displaying the "My Role" section in case studies
 * Matches Figma design node 1867:1233
 * Two-column layout: Left column with title + description, Right column with Core Contributions card
 */
const RoleSection = ({
  roleDescription,
  coreContributions,
}: RoleSectionProps) => {
  const hasContributions = coreContributions && coreContributions.length > 0;

  return (
    <SectionWrapper
      maxWidth="1320"
      customPadding="px-6 py-[var(--spacing-80)] md:px-[60px]"
    >
      <div className="flex w-full items-center justify-center">
        <div
          className={`flex w-full max-w-[1094px] flex-col items-center gap-[var(--spacing-32)] ${hasContributions ? "lg:flex-row lg:items-stretch" : ""}`}
        >
          {/* Left Column - My Role Content */}
          <div className="flex min-h-px min-w-px flex-1 flex-col gap-[var(--spacing-32)]">
            <div className="flex w-full flex-col gap-[var(--spacing-8)]">
              <h3 className="font-display text-h3 leading-[var(--line-height-h3)] text-[var(--color-text-heading)]">
                My role
              </h3>
              <p className="min-w-full font-body text-body font-normal leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                {roleDescription}
              </p>
            </div>
          </div>

          {/* Right Column - Core Contributions Card */}
          {hasContributions && (
            <div
              className="flex min-h-px min-w-px flex-1 flex-col gap-[var(--spacing-24)] overflow-clip rounded-[var(--radius-16)] border p-[33px]"
              style={{
                backgroundColor: "var(--color-tldr-section-bg)",
                borderColor: "var(--color-tldr-section-border)",
              }}
            >
              {/* Heading with lightbulb icon */}
              <div className="flex items-center gap-[var(--spacing-8)]">
                <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 1.25C6.27208 1.25 3.25 4.27208 3.25 8C3.25 10.3333 4.47708 12.3854 6.33333 13.5417V15.4167C6.33333 16.1083 6.89167 16.6667 7.58333 16.6667H12.4167C13.1083 16.6667 13.6667 16.1083 13.6667 15.4167V13.5417C15.5229 12.3854 16.75 10.3333 16.75 8C16.75 4.27208 13.7279 1.25 10 1.25Z"
                      stroke="#F5A623"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.5 18.75H12.5"
                      stroke="#F5A623"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="font-body text-body-lg font-semibold leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                  Core Contributions
                </p>
              </div>

              {/* Contributions List */}
              <div className="flex flex-col gap-[20px]">
                {coreContributions.map((contribution, index) => (
                  <div
                    key={`contribution-${index}`}
                    className="flex w-full items-center gap-[var(--spacing-8)]"
                  >
                    {/* Cyan checkmark circle */}
                    <div
                      className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full"
                      style={{ backgroundColor: "rgba(0, 184, 219, 0.1)" }}
                    >
                      <img
                        src={checkIcon}
                        alt=""
                        className="h-[16px] w-[16px]"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(77%) sepia(52%) saturate(1000%) hue-rotate(130deg) brightness(95%) contrast(90%)",
                        }}
                      />
                    </div>
                    <p className="min-h-px min-w-px flex-1 font-body text-body font-normal leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                      {contribution}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RoleSection;
