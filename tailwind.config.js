/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Lora', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0d0d0d',
          900: '#1a1a1a',
          800: '#2d2d2d',
          700: '#404040',
          600: '#525252',
          500: '#737373',
          400: '#a3a3a3',
          300: '#d4d4d4',
          200: '#e5e5e5',
          100: '#f5f5f5',
          50:  '#fafafa',
        },
        amber: {
          warm: '#D4791A',
          light: '#F59E0B',
          pale:  '#FEF3C7',
        },
        teal: {
          deep: '#0F4C5C',
          mid:  '#1B7A8A',
          soft: '#E0F4F7',
        },
        parchment: '#FAF7F2',
        cream: '#FDF9F3',
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'Lora, Georgia, serif',
          },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'line-grow': 'lineGrow 1.2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { height: '0' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [],
}
