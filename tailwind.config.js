/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: [
          '"Staatliches"',
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
        body: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      fontSize: {
        'h1': ['80px', { lineHeight: 1, letterSpacing: '2px', fontWeight: 400 }],
        'h2': ['42px', { lineHeight: 1.2, letterSpacing: '1px', fontWeight: 400 }],
        'h3': ['36px', { lineHeight: 1, letterSpacing: '0px', fontWeight: 400 }],
        'h4': ['14px', { lineHeight: '20px', letterSpacing: '0.55px', fontWeight: 700 }],
        'body': ['18px', { lineHeight: 1.5, letterSpacing: '0px', fontWeight: 400 }],
      },
      colors: {
        // Base backgrounds - from Figma design
        ink: '#0a0a0f',
        'ink-light': '#18151f',
        'ink-900': '#1e1e1e',
        panel: '#0a0a0f',
        
        // Primary brand colors
        primary: '#7f5af0',
        accent: '#7f5af0',
        
        // Project card colors - from Figma
        purple: {
          DEFAULT: '#7f5af0',
          dark: '#541db9',
          light: '#9d7ff5',
        },
        orange: {
          DEFAULT: '#ff9900',
          dark: '#cc7a00',
        },
        green: {
          DEFAULT: '#009966',
          dark: '#006644',
        },
        blue: {
          DEFAULT: '#0066ff',
          dark: '#0052cc',
        },
        
        // Accent colors
        lilac: '#c2b7ff',
        neon: '#76ffc4',
        pink: '#ff3cac',
        cyan: {
          DEFAULT: '#87f5f1',
          300: '#87f5f1',
        },
        
        // Surface colors
        surface: {
          card: 'rgba(255, 255, 255, 0.05)',
          'card-border': 'rgba(255, 255, 255, 0.1)',
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(125, 232, 255, 0.3)',
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 25%), radial-gradient(circle at 80% 30%, rgba(118,255,196,0.08), transparent 30%)',
      },
      animation: {
        'float-slow': 'float 12s ease-in-out infinite',
        'marquee-slow': 'marquee 20s linear infinite',
        'marquee-slower': 'marquee 26s linear infinite',
        'pulse-soft': 'pulseSoft 6s ease-in-out infinite',
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.9 },
        },
        meteor: {
          '0%': { transform: 'rotate(var(--angle)) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'rotate(var(--angle)) translateX(-500px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
