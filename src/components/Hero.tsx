import { motion } from "framer-motion";
import HeroStarfieldCanvas from "./HeroStarfieldCanvas";
import Meteors from "./meteors";

// Social icons - inline SVG components for reliability
const LinkedInIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 3C3.67 3 3 3.67 3 4.5C3 5.33 3.67 6 4.5 6C5.33 6 6 5.33 6 4.5C6 3.67 5.33 3 4.5 3ZM3 8V17H6V8H3ZM8 8V17H11V12.5C11 11.12 12.12 10 13.5 10C14.05 10 14.5 10.45 14.5 11V17H17.5V10.5C17.5 8.57 15.93 7 14 7C12.62 7 11.44 7.8 11 9V8H8Z"
      fill="currentColor"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2C12.717 2 13.056 2.01 14.122 2.06C15.187 2.11 15.912 2.277 16.55 2.525C17.21 2.779 17.766 3.123 18.322 3.678C18.8305 4.1779 19.224 4.78259 19.475 5.45C19.722 6.087 19.89 6.813 19.94 7.878C19.987 8.944 20 9.283 20 12C20 14.717 19.99 15.056 19.94 16.122C19.89 17.187 19.722 17.912 19.475 18.55C19.2247 19.2178 18.8311 19.8226 18.322 20.322C17.822 20.8303 17.2173 21.2238 16.55 21.475C15.913 21.722 15.187 21.89 14.122 21.94C13.056 21.987 12.717 22 10 22C7.283 22 6.944 21.99 5.878 21.94C4.813 21.89 4.088 21.722 3.45 21.475C2.78233 21.2245 2.17753 20.8309 1.678 20.322C1.16941 19.8222 0.775931 19.2175 0.525 18.55C0.277 17.913 0.11 17.187 0.06 16.122C0.013 15.056 0 14.717 0 12C0 9.283 0.01 8.944 0.06 7.878C0.11 6.812 0.277 6.088 0.525 5.45C0.775236 4.78218 1.1688 4.17732 1.678 3.678C2.17767 3.16923 2.78243 2.77573 3.45 2.525C4.088 2.277 4.812 2.11 5.878 2.06C6.944 2.013 7.283 2 10 2ZM10 7C8.67392 7 7.40215 7.52678 6.46447 8.46447C5.52678 9.40215 5 10.6739 5 12C5 13.3261 5.52678 14.5979 6.46447 15.5355C7.40215 16.4732 8.67392 17 10 17C11.3261 17 12.5979 16.4732 13.5355 15.5355C14.4732 14.5979 15 13.3261 15 12C15 10.6739 14.4732 9.40215 13.5355 8.46447C12.5979 7.52678 11.3261 7 10 7ZM16.5 6.75C16.5 6.41848 16.3683 6.10054 16.1339 5.86612C15.8995 5.6317 15.5815 5.5 15.25 5.5C14.9185 5.5 14.6005 5.6317 14.3661 5.86612C14.1317 6.10054 14 6.41848 14 6.75C14 7.08152 14.1317 7.39946 14.3661 7.63388C14.6005 7.8683 14.9185 8 15.25 8C15.5815 8 15.8995 7.8683 16.1339 7.63388C16.3683 7.39946 16.5 7.08152 16.5 6.75ZM10 9C10.7956 9 11.5587 9.31607 12.1213 9.87868C12.6839 10.4413 13 11.2044 13 12C13 12.7956 12.6839 13.5587 12.1213 14.1213C11.5587 14.6839 10.7956 15 10 15C9.20435 15 8.44129 14.6839 7.87868 14.1213C7.31607 13.5587 7 12.7956 7 12C7 11.2044 7.31607 10.4413 7.87868 9.87868C8.44129 9.31607 9.20435 9 10 9Z"
      fill="currentColor"
    />
  </svg>
);

const GithubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 0C4.477 0 0 4.477 0 10C0 14.42 2.865 18.166 6.839 19.489C7.339 19.579 7.521 19.271 7.521 19.005C7.521 18.763 7.512 18.044 7.508 17.094C4.726 17.696 4.139 15.776 4.139 15.776C3.685 14.628 3.029 14.319 3.029 14.319C2.121 13.693 3.098 13.706 3.098 13.706C4.101 13.777 4.629 14.745 4.629 14.745C5.521 16.273 6.97 15.836 7.54 15.579C7.629 14.94 7.889 14.503 8.175 14.251C5.955 13.997 3.62 13.155 3.62 9.373C3.62 8.294 4.01 7.414 4.649 6.727C4.546 6.473 4.203 5.473 4.747 4.132C4.747 4.132 5.587 3.861 7.497 5.121C8.295 4.896 9.15 4.784 10 4.78C10.85 4.784 11.705 4.896 12.505 5.121C14.413 3.861 15.251 4.132 15.251 4.132C15.797 5.473 15.454 6.473 15.351 6.727C15.992 7.414 16.378 8.294 16.378 9.373C16.378 13.165 14.039 13.994 11.813 14.244C12.172 14.555 12.492 15.171 12.492 16.113C12.492 17.456 12.48 18.541 12.48 19.005C12.48 19.274 12.66 19.584 13.167 19.488C17.137 18.163 20 14.418 20 10C20 4.477 15.523 0 10 0Z"
      fill="currentColor"
    />
  </svg>
);

const EmailIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 4C1.45 4 1 4.45 1 5V15C1 15.55 1.45 16 2 16H18C18.55 16 19 15.55 19 15V5C19 4.45 18.55 4 18 4H2ZM2 6L10 11L18 6V15H2V6ZM2 5.5L10 10L18 5.5V5H2V5.5Z"
      fill="currentColor"
    />
  </svg>
);

const Hero = () => {
  const socialLinks = [
    { name: "LinkedIn", icon: LinkedInIcon, href: "#" },
    { name: "Instagram", icon: InstagramIcon, href: "#" },
    { name: "Github", icon: GithubIcon, href: "#" },
    { name: "Email", icon: EmailIcon, href: "mailto:design@patlopes.com" },
  ];

  return (
    <section className="relative min-h-[1052px] overflow-hidden bg-ink">
      {/* Background with gradients, starfield, and meteors */}
      <div className="absolute inset-0">
        {/* Bottom-right purple/pink/blue galaxy glow - from Figma */}
        <div
          className="absolute bottom-0 right-0 h-[660px] w-[880px] opacity-50"
          style={{
            background: `
              radial-gradient(ellipse 400px 300px at 70% 70%, rgba(127, 90, 240, 0.4) 0%, rgba(64, 45, 120, 0.2) 25%, transparent 50%),
              radial-gradient(ellipse 350px 280px at 80% 60%, rgba(255, 60, 172, 0.3) 0%, rgba(128, 30, 86, 0.15) 20%, transparent 40%),
              radial-gradient(ellipse 300px 250px at 60% 80%, rgba(59, 130, 246, 0.5) 0%, rgba(30, 65, 123, 0.25) 15%, transparent 45%)
            `,
            filter: "blur(60px)",
          }}
        />

        {/* Top-left subtle purple glow - from Figma */}
        <div
          className="absolute -left-[200px] top-0 h-[560px] w-[670px] opacity-60"
          style={{
            background: `
              radial-gradient(ellipse 300px 250px at 30% 30%, rgba(127, 90, 240, 0.3) 0%, rgba(64, 45, 120, 0.15) 25%, transparent 50%),
              radial-gradient(ellipse 250px 200px at 20% 40%, rgba(59, 130, 246, 0.25) 0%, rgba(30, 65, 123, 0.125) 20%, transparent 40%)
            `,
            filter: "blur(70px)",
          }}
        />

        {/* Center subtle purple glow */}
        <div
          className="absolute bottom-[220px] right-[100px] h-[320px] w-[425px] opacity-30"
          style={{
            background: `radial-gradient(ellipse at center, rgba(157, 127, 245, 0.4) 0%, rgba(118, 95, 184, 0.3) 15%, rgba(79, 64, 123, 0.2) 30%, transparent 60%)`,
            filter: "blur(50px)",
          }}
        />

        {/* Starfield Canvas - background stars with twinkle */}
        <HeroStarfieldCanvas />

        {/* Meteor Shower Effect - Magic UI style (sparse and subtle) */}
        <Meteors
          number={10}
          minDelay={1}
          maxDelay={5}
          minDuration={4}
          maxDuration={10}
          angle={215}
          className="opacity-40 before:from-purple-light"
        />
      </div>

      {/* Hero Content - positioned per Figma: x=64, y=357 */}
      <div className="relative z-10 mx-auto max-w-[1320px] px-[64px] pt-[357px]">
        <div className="flex flex-col gap-[40px]">
          {/* Title Section */}
          <div className="flex flex-col gap-[16px]">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-display text-[64px] font-normal leading-none text-white"
            >
              PRODUCT DESIGNER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="max-w-[792px] font-body text-[16px] font-normal leading-[1.5] text-white"
            >
              Good design happens when the experience speaks the customer's
              language. With the right balance of structure, research, and a bit
              of AI in the early stages, the journey becomes smoother and easier
              to follow.
            </motion.p>
          </div>

          {/* CTA Button - height 50px, rounded-[4px], bg-primary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex h-[50px] items-start"
          >
            <a
              href="mailto:patrick@patricklopes.com"
              className="inline-flex h-full items-center justify-center gap-[8px] rounded-[4px] bg-primary px-[24px] py-[8px] text-[18px] font-normal leading-[1.5] text-white transition hover:bg-primary/90"
            >
              Lets talk
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L12 4M12 4H6M12 4V10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>

          {/* Social Links - 48x48 circles, 16px gap */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex h-[48px] gap-[16px]"
          >
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="social-link"
                aria-label={social.name}
              >
                <social.icon />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Arrow - centered at bottom */}
      <div className="absolute bottom-[24px] left-1/2 z-10 -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="flex h-[32px] w-[32px] items-center justify-center text-white"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 12L16 20L24 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
