/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#04060a',
          900: '#07090e',
          850: '#0b0f17',
          800: '#101622',
          700: '#172033',
        },
        cherry: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          DEFAULT: '#e11d48',
          neon: '#ff2255',
        },
        cyber: {
          violet: '#7c3aed',
          indigo: '#6366f1',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
        cream: {
          50: '#fcfbf7',
          100: '#f6f5ee',
          200: '#eeebe1',
          300: '#ded9ca',
          DEFAULT: '#f5f4ed',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'cherry-glow': '0 0 25px rgba(225, 29, 72, 0.45)',
        'cherry-sm': '0 0 12px rgba(225, 29, 72, 0.35)',
        'cherry-lg': '0 0 45px rgba(225, 29, 72, 0.55)',
        'cyber-glow': '0 0 30px rgba(99, 102, 241, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
