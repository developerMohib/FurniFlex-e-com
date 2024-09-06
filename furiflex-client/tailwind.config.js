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
      colors: {
        primary: '#1E99F5', 
        secondary: '#000000',
        ternary : "#81859F",
      },
    },
  },
  plugins: [],
}

