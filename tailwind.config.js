/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    ".unidos-por-um-fio/src/**/*.{js,jsx,ts,tsx}",
    ".unidos-por-um-fio/src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#B000FF',
        },
      },
    },
  },
  plugins: [],
}