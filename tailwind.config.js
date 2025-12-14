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
      colors: {
        ink: '#18151f',
        'ink-900': '#1e1e1e',
        panel: '#18151f',
        accent: '#7f5af0',
        primary: '#7f5af0',
        purple: '#804df0',
        orange: '#ff9900',
        green: '#009966',
        blue: '#0066ff',
        lilac: '#c2b7ff',
        neon: '#76ffc4',
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
      },
    },
  },
  plugins: [],
}
