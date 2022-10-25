/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    fontFamily: {
      sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
      mono: ['roboto\\ mono', 'mono'],
    },
  },
  plugins: [],
};
