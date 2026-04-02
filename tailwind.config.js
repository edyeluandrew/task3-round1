/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B0F',
          surface: '#14141A',
          card: '#1C1C24',
          border: '#2A2A35',
        },
        primary: {
          base: '#C62828',
          hover: '#E53935',
        },
        accent: '#F59E0B',
        text: {
          light: '#F8F7F4',
          muted: '#A1A1AA',
        },
        light: {
          section: '#F5F1EB',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['48px', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['40px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-xl': ['32px', { lineHeight: '1.25', fontWeight: '700' }],
        'heading-lg': ['28px', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-md': ['24px', { lineHeight: '1.35', fontWeight: '600' }],
      },
      spacing: {
        safe: 'max(1rem, env(safe-area-inset-left))',
      },
      boxShadow: {
        premium: '0 20px 40px rgba(0, 0, 0, 0.4)',
        card: '0 8px 24px rgba(0, 0, 0, 0.3)',
        hover: '0 12px 32px rgba(198, 40, 40, 0.2)',
      },
      borderRadius: {
        'xl-premium': '12px',
        '2xl-premium': '16px',
      },
    },
  },
  plugins: [],
}

