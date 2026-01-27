import { motion } from "framer-motion";
import HeroStarfieldCanvas from "./HeroStarfieldCanvas";
import Meteors from "./meteors";
import { icons } from "../lib/iconMappings";

const Hero = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      iconSrc: icons.linkedin,
      href: "https://www.linkedin.com/in/patlopes/",
    },
    {
      name: "Instagram",
      iconSrc: icons.instagram,
      href: "https://www.instagram.com/designby_pat",
    },
    {
      name: "Github",
      iconSrc: icons.github,
      href: "https://github.com/plopes20587",
    },
    { name: "Email", iconSrc: icons.email, href: "mailto:design@patlopes.com" },
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
              className="leading-none"
            >
              PRODUCT DESIGNER
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="max-w-[792px]"
            >
              Good design happens when the experience speaks the customer's
              language. With the right balance of structure, research, and a bit
              of AI in the early stages, the journey becomes smoother and easier
              to follow.
            </motion.p>
          </div>

          {/* CTA Button - using Figma design system */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex h-[50px] items-start"
          >
            <a
              href="mailto:patrick@patricklopes.com"
              className="button-primary h-[50px]"
            >
              Lets talk
              <img src={icons["arrow-right"]} alt="" className="h-5 w-5" />
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
                <img src={social.iconSrc} alt="" className="h-5 w-5" />
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
          className="flex h-[32px] w-[32px] items-center justify-center"
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
