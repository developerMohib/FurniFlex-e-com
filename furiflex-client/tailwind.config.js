/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paraFont: ['Inter', 'sans-serif'],
        headingFont: ['Barlow', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

