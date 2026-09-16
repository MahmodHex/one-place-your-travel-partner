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
          DEFAULT: '#0057FF',
          dark: '#003BB3',
          light: '#EBF2FF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          subtle: '#F8FAFC',
          border: '#E2E8F0',
        },
        partner: {
          kiwi: '#00A991',
          airalo: '#FF5A5F',
          klook: '#FF5722',
          tiqets: '#0A7373',
        },
      },
    },
  },
  plugins: [],
}
