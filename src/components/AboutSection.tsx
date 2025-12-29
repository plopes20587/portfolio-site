// Import assets
import profilePhoto from "../assets/images/AboutmeImage.jpg";
import yearsExperienceIcon from "../assets/icons/years-experience.svg";
import projectsCompletedIcon from "../assets/icons/projects-completed.svg";
import happyClientsIcon from "../assets/icons/happy-clients.svg";
import productsLaunchedIcon from "../assets/icons/products-launched.svg";
import SectionWrapper from "./SectionWrapper";

type AboutStat = {
  iconSrc: string;
  value: string;
  label: string;
  gridArea: string;
};

const AboutSection = () => {
  const aboutStats: AboutStat[] = [
    {
      iconSrc: yearsExperienceIcon,
      value: "12+",
      label: "Years of Experience",
      gridArea: "1 / 1",
    },
    {
      iconSrc: projectsCompletedIcon,
      value: "150+",
      label: "Projects Delivered",
      gridArea: "1 / 2",
    },
    {
      iconSrc: happyClientsIcon,
      value: "50+",
      label: "Happy Clients",
      gridArea: "2 / 1",
    },
    {
      iconSrc: productsLaunchedIcon,
      value: "20+",
      label: "Products Launched",
      gridArea: "2 / 2",
    },
  ];

  return (
    <SectionWrapper
      id="about"
      maxWidth="1320"
      padding="large"
      className="py-[80px]"
    >
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="font-display text-[48px] font-normal leading-[52px] tracking-[0.48px] text-white">
          a bit About me
        </h2>
      </div>

      {/* Two Column Layout */}
      <div className="grid items-start gap-x-10 gap-y-0 md:grid-cols-2">
        {/* Profile Image */}
        <div className="h-[710px] w-full overflow-hidden rounded-[16px]">
          <img
            src={profilePhoto}
            alt="Patrick Lopes - Senior Product Designer"
            className="aspect-[837/1488] h-full w-full object-cover object-top"
          />
        </div>

        {/* Content Column */}
        <div className="flex flex-col gap-7">
          {/* Bio Text */}
          <div className="flex flex-col gap-4">
            <p className="w-[592px] font-body text-[16px] font-normal leading-[24px] text-white">
              I'm a senior product designer with a focus on e-commerce and
              digital shopping. Over the past ten years, I've worked on product
              pages, checkout flows, and customer journeys for brands like
              Verizon, KFC, and SeneGence.
            </p>
            <div className="w-[590px] font-body text-[16px] font-normal leading-[24px] text-white">
              <p className="mb-0">
                I like keeping things simple. My approach usually starts with
                understanding how people shop or move through a flow, then
                figuring out how to make that experience feel smoother and more
                predictable. AI has become a helpful part of my workflow. It
                lets me explore directions faster, play with variations, and get
                clearer on what will actually help users.
              </p>
              <p>
                When I'm not working, I'm probably traveling, working remotely
                somewhere warm, or finding a good coffee spot.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid h-full w-full grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_fit-content(100%))] gap-[24px]">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex h-full w-full flex-col items-start justify-center gap-2 rounded-[14px] border border-white/10 px-[16px] py-[16px]"
                style={{
                  gridArea: stat.gridArea,
                  backgroundImage:
                    "linear-gradient(156.176deg, rgba(127, 90, 240, 0.1) 0%, rgba(157, 127, 245, 0.1) 100%)",
                }}
              >
                {/* Icon Container */}
                <div
                  className="flex shrink-0 items-center justify-center rounded-[8px] p-[8px]"
                  style={{
                    backgroundColor: "rgba(0,211,242,0.05)",
                    border: "1px solid rgba(0,211,242,0.25)",
                  }}
                >
                  <img
                    src={stat.iconSrc}
                    alt={stat.label}
                    className="size-[24px]"
                  />
                </div>
                {/* Stat Value */}
                <p className="font-body text-[20px] font-semibold leading-[24px] tracking-[0px] text-white">
                  {stat.value}
                </p>
                {/* Stat Label */}
                <p className="text-nowrap font-body text-[16px] font-normal leading-[24px] text-white">
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
