/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        jungle: {
          50:  '#f0faf0',
          100: '#dcf5dc',
          200: '#b4eab4',
          300: '#7dd97d',
          400: '#4cbd4c',
          500: '#2e9e2e',
          600: '#1e7e1e',
          700: '#145e14',
          800: '#0d400d',
          900: '#082808',
          950: '#041504',
        },
        gold: {
          300: '#fde68a',
          400: '#f9c74f',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6f00',
        },
        earth: {
          600: '#6b4226',
          700: '#4e2e16',
          800: '#3a1f0a',
          900: '#1e0e02',
        },
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-out-right': {
          '0%': { opacity: '1', transform: 'translateX(0)' },
          '100%': { opacity: '0', transform: 'translateX(100%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'leaf-sway': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(212, 160, 23, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 160, 23, 0.7), 0 0 40px rgba(212, 160, 23, 0.3)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        shimmer: 'shimmer 3s linear infinite',
        'leaf-sway': 'leaf-sway 4s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
