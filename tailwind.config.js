/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      earth: {
        100: '#E5D9B6',
        200: '#A4BE7B',
        300: '#5F8D4E',
        400: '#285430',
      },
      light: {
        100: '#FAF7F0',
        200: '#CDFCF6',
        300: '#BCCEF8',
        400: '#98A8F8',
      },
      dark: {
        100: '#8E05C2',
        200: '#700B97',
        300: '#3E065F',
        400: '#000000',
      },
    },
  },
  plugins: [],
}
