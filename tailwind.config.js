/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1628',
          light: '#0F2139',
        },
        accent: {
          DEFAULT: '#4A7C59',
          light: '#5B9A6F',
        },
        highlight: '#8FBC8F',
        warning: '#E07A3D',
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.02em',
        widest: '0.1em',
      },
    },
  },
  plugins: [],
}

