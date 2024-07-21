/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode via a class
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tm:{
          100: "#F0F0F0",         // light gray
          200: "#4682B4",         // Darker Blue
          400: "#1E1E1E",
          900: "#003366"
        }
      }
    },
  },
  plugins: [],
}

