import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          dark: '#E85A2A',
          light: '#FF8557',
        },
        secondary: {
          DEFAULT: '#FFA726',
          dark: '#F57C00',
          light: '#FFB74D',
        },
        accent: {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#66BB6A',
        },
        dark: {
          DEFAULT: '#1a1a1a',
          light: '#2d2d2d',
          lighter: '#505050',
        },
        light: {
          DEFAULT: '#FFF8F5',
          dark: '#F5EDE8',
          darker: '#E8DED8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
