/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Staatliches"',
          "Inter",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      fontSize: {
        // Typography from Figma design system - exact matches
        h1: [
          "64px",
          { lineHeight: "64px", letterSpacing: "0px", fontWeight: 400 },
        ], // Typography/Font size/Heading/h1: 64, lineHeight: 64
        h2: [
          "48px",
          { lineHeight: "52px", letterSpacing: "0px", fontWeight: 400 },
        ], // Typography/Font size/Heading/h2: 48, lineHeight: 52
        h3: [
          "40px",
          { lineHeight: "44px", letterSpacing: "0px", fontWeight: 400 },
        ], // Typography/Font size/Heading/h3: 40, lineHeight: 44
        h4: [
          "14px",
          { lineHeight: "20px", letterSpacing: "0.55px", fontWeight: 700 },
        ], // H4: Inter, 14px, lineHeight: 20, letterSpacing: 0.55, bold
        body: [
          "16px",
          { lineHeight: "24px", letterSpacing: "0px", fontWeight: 400 },
        ], // Typography/Font size/Body/md: 16, lineHeight: 24
        "body-lg": [
          "20px",
          { lineHeight: "30px", letterSpacing: "0px", fontWeight: 400 },
        ], // Typography/Font size/Body/lg: 20
      },
      colors: {
        // Base backgrounds - from Figma design system
        ink: "#000000", // Color/Surface/Background/default
        "ink-light": "#18151f",
        "ink-900": "#1e1e1e",
        panel: "#0a0a0f",

        // Primary brand colors - from Figma
        primary: "#7f5af0", // Color/Borders/Primary/primary, Color/Surface/Buttons/button-primary
        accent: "#7f5af0",

        // Project card colors - from Figma
        purple: {
          DEFAULT: "#7f5af0",
          dark: "#541db9",
          light: "#9d7ff5",
        },
        orange: {
          DEFAULT: "#ff9900",
          dark: "#cc7a00",
        },
        green: {
          DEFAULT: "#009966",
          dark: "#006644",
        },
        blue: {
          DEFAULT: "#0066ff",
          dark: "#0052cc",
        },

        // Accent colors
        lilac: "#c2b7ff",
        neon: "#76ffc4",
        pink: "#ff3cac",
        cyan: {
          DEFAULT: "#38efe9", // Color/Elements/Icons/cyan
          300: "#38efe9",
        },

        // Surface colors - from Figma
        surface: {
          card: "rgba(255, 255, 255, 0.05)",
          "card-border": "rgba(255, 255, 255, 0.1)",
          button: {
            primary: "#7f5af0", // Color/Surface/Buttons/button-primary
            secondary: "#ffffff", // Color/Surface/Buttons/button-secondary
          },
        },
      },
      spacing: {
        // Spacing scale from Figma design system
        none: "0", // Sizes/Spacing/none
        0: "0", // Scale/0
        4: "4px",
        8: "8px", // Sizes/Spacing/sp-8
        16: "16px", // Sizes/Spacing/sp-16
        24: "24px", // Sizes/Spacing/sp-24
        28: "28px", // Sizes/Spacing/sp-28
        40: "40px", // Sizes/Spacing/sp-40
        80: "80px", // Sizes/Spacing/sp-80
      },
      borderRadius: {
        // Border radius from Figma design system
        none: "0", // Sizes/Border/none
        8: "8px", // Sizes/Radius/rd-8
        16: "16px", // Sizes/Radius/rd-16
      },
      boxShadow: {
        glow: "0 0 40px rgba(125, 232, 255, 0.3)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at 80% 30%, rgba(118,255,196,0.08), transparent 30%)",
      },
      animation: {
        "float-slow": "float 12s ease-in-out infinite",
        "marquee-slow": "marquee 20s linear infinite",
        "marquee-slower": "marquee 26s linear infinite",
        "pulse-soft": "pulseSoft 6s ease-in-out infinite",
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.45 },
          "50%": { opacity: 0.9 },
        },
        meteor: {
          "0%": {
            transform: "rotate(var(--angle)) translateX(0)",
            opacity: "1",
          },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(var(--angle)) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [],
};
