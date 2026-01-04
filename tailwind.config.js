/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Font families - references CSS variables from index.css
        display: "var(--font-family-display)",
        body: "var(--font-family-body)",
      },
      fontSize: {
        // Typography - references CSS variables from index.css
        h1: [
          "var(--font-size-h1)",
          {
            lineHeight: "var(--line-height-h1)",
            letterSpacing: "var(--letter-spacing-h1)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
        h2: [
          "var(--font-size-h2)",
          {
            lineHeight: "var(--line-height-h2)",
            letterSpacing: "var(--letter-spacing-h2)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
        h3: [
          "var(--font-size-h3)",
          {
            lineHeight: "var(--line-height-h3)",
            letterSpacing: "var(--letter-spacing-h3)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
        h4: [
          "var(--font-size-h4)",
          {
            lineHeight: "var(--line-height-h4)",
            letterSpacing: "var(--letter-spacing-h4)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
        "h4-small": [
          "var(--font-size-h4-small)",
          {
            lineHeight: "var(--line-height-h4-small)",
            letterSpacing: "var(--letter-spacing-h4-small)",
            fontWeight: "var(--font-weight-bold)",
          },
        ],
        body: [
          "var(--font-size-body)",
          {
            lineHeight: "var(--line-height-body)",
            letterSpacing: "var(--letter-spacing-body)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
        "body-lg": [
          "var(--font-size-body-lg)",
          {
            lineHeight: "var(--line-height-body-lg)",
            letterSpacing: "var(--letter-spacing-body-lg)",
            fontWeight: "var(--font-weight-normal)",
          },
        ],
      },
      colors: {
        // Base backgrounds - references CSS variables from index.css
        ink: "var(--color-surface-background-default)",
        "ink-light": "var(--color-surface-background-light)",
        "ink-900": "var(--color-surface-background-900)",
        panel: "var(--color-surface-panel)",

        // Primary brand colors - references CSS variables
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",

        // Project card colors - references CSS variables
        purple: {
          DEFAULT: "var(--color-purple)",
          dark: "var(--color-purple-dark)",
          light: "var(--color-purple-light)",
        },
        orange: {
          DEFAULT: "var(--color-orange)",
          dark: "var(--color-orange-dark)",
        },
        green: {
          DEFAULT: "var(--color-green)",
          dark: "var(--color-green-dark)",
        },
        blue: {
          DEFAULT: "var(--color-blue)",
          dark: "var(--color-blue-dark)",
        },

        // Accent colors - references CSS variables
        lilac: "var(--color-lilac)",
        neon: "var(--color-neon)",
        pink: "var(--color-pink)",
        cyan: {
          DEFAULT: "var(--color-cyan)",
          300: "var(--color-cyan-300)",
        },

        // Surface colors - references CSS variables
        surface: {
          card: "var(--color-surface-card)",
          "card-border": "var(--color-surface-card-border)",
          button: {
            primary: "var(--color-surface-button-primary)",
            secondary: "var(--color-surface-button-secondary)",
            "secondary-hover": "var(--color-surface-button-secondary-hover)",
          },
        },
        // Element colors - references CSS variables
        elements: {
          pills: {
            "primary-background":
              "var(--color-elements-pills-primary-background)",
            "primary-border": "var(--color-elements-pills-primary-border)",
            "secondary-background":
              "var(--color-elements-pills-secondary-background)",
            "secondary-border": "var(--color-elements-pills-secondary-border)",
          },
          icons: {
            "royal-purple": "var(--color-elements-icons-royal-purple)",
            cyan: "var(--color-elements-icons-cyan)",
            default: "var(--color-elements-icons-default)",
          },
          secondary: "var(--color-elements-secondary)",
        },
        // Text colors - references CSS variables
        text: {
          tag: "var(--color-text-tag)",
          heading: "var(--color-text-heading)",
          body: "var(--color-text-body)",
          "body-black": "var(--color-text-body-black)",
          "body-300": "var(--color-text-body-300)",
          "body-400": "var(--color-text-body-400)",
          "body-500": "var(--color-text-body-500)",
        },
        // Link colors - references CSS variables
        link: {
          DEFAULT: "var(--color-link-default)",
        },
        // Electric Blue - references CSS variables
        "electric-blue": {
          500: "var(--color-electric-blue-500)",
        },
        // Transparent colors - references CSS variables
        transparent: {
          "royal-purple-25": "var(--color-transparent-royal-purple-25)",
        },
        // Additional design tokens - references CSS variables
        neutral: {
          white: "var(--color-neutral-white)",
        },
        // Additional Figma tokens - references CSS variables
        subtitle: "var(--color-subtitle)",
        tertiary: "var(--color-tertiary)",
      },
      spacing: {
        // Spacing scale - references CSS variables from index.css
        none: "var(--spacing-none)",
        0: "var(--spacing-0)",
        1: "var(--spacing-1)",
        4: "var(--spacing-4)",
        8: "var(--spacing-8)",
        12: "var(--spacing-12)",
        16: "var(--spacing-16)",
        24: "var(--spacing-24)",
        28: "var(--spacing-28)",
        32: "var(--spacing-32)",
        40: "var(--spacing-40)",
        48: "var(--spacing-48)",
        72: "var(--spacing-72)",
        80: "var(--spacing-80)",
      },
      borderRadius: {
        // Border radius - references CSS variables from index.css
        none: "var(--radius-none)",
        8: "var(--radius-8)",
        14: "var(--radius-14)",
        16: "var(--radius-16)",
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
