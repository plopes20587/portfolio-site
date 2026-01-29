import profilePhoto from "../assets/images/AboutImage.png";
import { icons } from "../lib/iconMappings";
import SectionWrapper from "./SectionWrapper";

type AboutStat = {
  iconSrc: string;
  value: string;
  label: string;
  gridArea: string;
  iconColor?: "royal-purple" | "cyan" | "default";
};

const AboutSection = () => {
  const aboutStats: AboutStat[] = [
    {
      iconSrc: icons["years-experience"],
      value: "12+",
      label: "Years of Experience",
      gridArea: "1 / 1",
      iconColor: "default",
    },
    {
      iconSrc: icons["projects-completed"],
      value: "150+",
      label: "Projects Delivered",
      gridArea: "1 / 2",
      iconColor: "default",
    },
    {
      iconSrc: icons["happy-clients"],
      value: "50+",
      label: "Happy Clients",
      gridArea: "2 / 1",
      iconColor: "default",
    },
    {
      iconSrc: icons["products-launched"],
      value: "20+",
      label: "Products Launched",
      gridArea: "2 / 2",
      iconColor: "default",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      maxWidth="1320"
      padding="large"
      className="py-[var(--spacing-80)]"
    >
      {/* Section Header */}
      <div className="mb-[var(--spacing-40)] text-center">
        <h2>a bit About me</h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid items-start gap-[var(--spacing-40)] md:grid-cols-2">
        {/* Profile Image with Purple Background Effect */}
        <div className="relative inline-grid h-[710px] w-full items-start justify-items-start">
          {/* Purple Background Layer */}
          <div
            className="col-[1] row-[1] ml-[11px] mt-[12px] h-[668px] w-[571px] rounded-[var(--radius-16)] bg-[var(--color-primary)]"
            style={{ gridColumn: 1, gridRow: 1 }}
          />
          {/* Image Layer with Shadow */}
          <div
            className="col-[1] row-[1] ml-0 mt-0 h-[668px] w-[571px] overflow-hidden rounded-[var(--radius-16)] shadow-[5px_5px_5px_3px_rgba(6,22,22,0.25)]"
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
              I'm a senior product designer with a focus on e-commerce and
              digital shopping. Over the past ten years, I've worked on product
              pages, checkout flows, and customer journeys for brands like
              Verizon, KFC, and SeneGence.
            </p>
            <br />
            <div>
              <p className="mb-0">
                I like keeping things simple. My approach usually starts with
                understanding how people shop or move through a flow, then
                figuring out how to make that experience feel smoother and more
                predictable. AI has become a helpful part of my workflow. It
                lets me explore directions faster, play with variations, and get
                clearer on what will actually help users.
              </p>
              <br />
              <p>
                When I'm not working, I'm probably traveling, working remotely
                somewhere warm, or finding a good coffee spot.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid h-full w-full grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] gap-[var(--spacing-24)]">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-start gap-[var(--spacing-8)] rounded-[var(--radius-16)] border border-solid border-[var(--color-elements-pills-primary-border)] bg-[var(--color-elements-pills-primary-background)] p-[var(--spacing-24)]"
                style={{ gridArea: stat.gridArea }}
              >
                {/* Icon Container */}
                <div className="flex size-[48px] items-center justify-center rounded-full border border-solid border-[var(--color-elements-pills-primary-border)] bg-[var(--color-transparent-royal-purple-25)]">
                  <img
                    src={stat.iconSrc}
                    alt={stat.label}
                    className="size-[24px]"
                    style={{
                      filter:
                        stat.iconColor === "cyan"
                          ? "brightness(0) saturate(100%) invert(79%) sepia(45%) saturate(1234%) hue-rotate(130deg) brightness(95%) contrast(95%)"
                          : stat.iconColor === "default"
                            ? "brightness(0) saturate(100%) invert(100%)"
                            : "brightness(0) saturate(100%) invert(48%) sepia(95%) saturate(1779%) hue-rotate(235deg) brightness(97%) contrast(93%)",
                    }}
                  />
                </div>
                {/* Stat Value */}
                <p className="text-[20px] font-semibold leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                  {stat.value}
                </p>
                {/* Stat Label */}
                <p className="text-[16px] leading-[var(--line-height-body)] text-[var(--color-text-body)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
