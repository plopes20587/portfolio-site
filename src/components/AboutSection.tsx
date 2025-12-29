// Import assets
import profilePhoto from "../assets/images/AboutmeImage.jpg";
import yearsExperienceIcon from "../assets/icons/years-experience.svg";
import projectsCompletedIcon from "../assets/icons/projects-completed.svg";
import happyClientsIcon from "../assets/icons/happy-clients.svg";
import productsLaunchedIcon from "../assets/icons/products-launched.svg";

type AboutStat = {
  iconSrc: string;
  value: string;
  label: string;
};

const AboutSection = () => {
  const aboutStats: AboutStat[] = [
    {
      iconSrc: yearsExperienceIcon,
      value: "10+",
      label: "Years of Experience",
    },
    {
      iconSrc: projectsCompletedIcon,
      value: "50+",
      label: "Projects Completed",
    },
    {
      iconSrc: happyClientsIcon,
      value: "50+",
      label: "Happy Clients",
    },
    {
      iconSrc: productsLaunchedIcon,
      value: "25+",
      label: "Products Launched",
    },
  ];

  return (
    <section id="about" className="px-6 py-16 md:px-[60px] md:py-[100px]">
      <div className="mx-auto max-w-[1320px]">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-display text-[32px] font-normal uppercase leading-[1.2] tracking-[0.42px] text-white md:text-[42px]">
            A BIT ABOUT ME
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid items-start gap-x-10 gap-y-0 md:grid-cols-2">
          {/* Profile Image */}
          <div className="w-full overflow-hidden rounded-[16px]">
            <img
              src={profilePhoto}
              alt="Patrick Lopes - Senior Product Designer"
              className="h-full w-full object-cover object-top"
            />
          </div>

          {/* Content Column */}
          <div className="flex flex-col gap-7">
            {/* Bio Text */}
            <div className="flex flex-col gap-4">
              <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
                I'm a senior product designer with a focus on e-commerce and
                digital shopping. Over the past ten years, I've worked on
                product pages, checkout flows, and customer journeys for brands
                like Verizon, KFC, and SeneGence.
              </p>
              <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
                I like keeping things simple. My approach usually starts with
                understanding how people shop or move through a flow, then
                figuring out how to make that experience feel smoother and more
                predictable. AI has become a helpful part of my workflow — it
                lets me explore directions faster, play with variations, and get
                clearer on what will actually help users.
              </p>
              <p className="font-body text-[18px] font-normal leading-[1.5] text-white">
                When I'm not working, I'm probably traveling, working remotely
                somewhere warm, or finding a good coffee spot.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid h-full w-full gap-4 sm:grid-cols-2">
              {aboutStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex h-full w-full flex-col gap-2 rounded-[16px] border border-white/10 bg-white/5 p-4"
                >
                  <div className="flex items-center gap-[16px]">
                    {/* Icon Container */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-primary/20">
                      <img
                        src={stat.iconSrc}
                        alt={stat.label}
                        className="h-6 w-6"
                      />
                    </div>
                    {/* Stat Content */}
                    <div className="flex min-w-0 flex-col gap-[4px]">
                      <p className="font-display text-[24px] font-normal leading-[1.2] text-white">
                        {stat.value}
                      </p>
                      <p className="font-body text-[16px] font-normal leading-[1.5] text-white/70">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
