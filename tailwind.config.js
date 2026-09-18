/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#efeee9',
      },
      fontFamily: {
        hn: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        sans: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        riseIn: {
          '0%': { opacity: '0', transform: 'translateY(4vh) scale(1.03)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatSubtle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out both',
        'rise-in': 'riseIn 1.4s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'line': 'lineGrow 1.1s cubic-bezier(0.76, 0, 0.24, 1) both',
        'marquee': 'marquee 30s linear infinite',
        'float-subtle': 'floatSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4.5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
