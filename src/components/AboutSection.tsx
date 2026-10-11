import profilePhoto from "../assets/images/AboutImage.png";
import { icons } from "../lib/iconMappings";
import SectionWrapper from "./SectionWrapper";

type AboutStat = {
  iconSrc: string;
  value: string;
  label: string;
};

const AboutSection = () => {
  const aboutStats: AboutStat[] = [
    {
      iconSrc: icons["years-experience"],
      value: "10+",
      label: "Years designing products",
    },
    {
      iconSrc: icons["bridge-link"],
      value: "~97K",
      label: "Verizon bridge plan redemptions in 3 months",
    },
    {
      iconSrc: icons["arrow-up-circle"],
      value: "$7.2M",
      label: "SeneGence e-commerce revenue in 6 months",
    },
    {
      iconSrc: icons.lightning,
      value: "20%",
      label: "Less time to complete a KFC order",
    },
  ];

  return (
    <SectionWrapper id="about">
      {/* Section Header */}
      <div className="mb-[var(--spacing-40)] text-center">
        <h2>About me</h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid items-start gap-[var(--spacing-40)] md:grid-cols-2">
        {/* Profile Image with Purple Background Effect */}
        <div className="relative inline-grid w-full max-w-[571px] items-start justify-items-start">
          {/* Purple Background Layer */}
          <div
            className="col-[1] row-[1] ml-[11px] mt-[12px] aspect-[571/668] w-full rounded-[var(--radius-16)] bg-[var(--color-primary)]"
            style={{ gridColumn: 1, gridRow: 1 }}
          />
          {/* Image Layer with Shadow */}
          <div
            className="col-[1] row-[1] ml-0 mt-0 aspect-[571/668] w-full overflow-hidden rounded-[var(--radius-16)] shadow-[5px_5px_5px_3px_rgba(6,22,22,0.25)]"
            style={{ gridColumn: 1, gridRow: 1 }}
          >
            <img
              src={profilePhoto}
              alt="Patrick Lopes - Senior Product Designer"
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col gap-[var(--spacing-28)]">
          {/* Bio Text */}
          <div className="flex flex-col gap-4">
            <p>
              Right now I'm at Verizon, designing how customers across its value
              brands shop, pay, and get back on track when money is tight.
              Before that I was a lead product designer at Photon, where I
              redesigned KFC's ordering flow and SeneGence's e-commerce
              platform.
            </p>
            <br />
            <div>
              <p className="mb-0">
                I start by mapping how people move through a flow today, before
                I redesign anything. After that, most of the work is tradeoffs.
                A plan the business doesn't want to promote but some customers
                really need. A legal label someone wants moved off the main
                screen. The job is making those calls and getting the team
                behind them. I also mentor junior designers.
              </p>
              <br />
              <p>
                When I'm not designing, I'm probably traveling, working remotely
                from somewhere warm, training MMA or playing video games.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid w-full grid-cols-2 gap-[var(--spacing-24)]">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-row items-center gap-[var(--spacing-16)] rounded-[var(--radius-16)] border border-solid border-[var(--color-elements-pills-primary-border)] bg-[var(--color-elements-pills-primary-background)] p-[var(--spacing-24)]"
              >
                {/* Icon Container */}
                <div className="flex size-[48px] shrink-0 items-center justify-center rounded-full border border-solid border-[var(--color-elements-pills-primary-border)] bg-[var(--color-transparent-royal-purple-25)]">
                  {/* Decorative: the label next to it already says what the stat is */}
                  <img
                    src={stat.iconSrc}
                    alt=""
                    className="size-[24px] brightness-0 invert"
                  />
                </div>
                {/* Stat Text - value stacked over label, right of the icon */}
                <div className="flex flex-col gap-[var(--spacing-4)]">
                  {/* Stat Value */}
                  <p className="text-[20px] font-semibold leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                    {stat.value}
                  </p>
                  {/* Stat Label */}
                  <p className="text-[16px] leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
