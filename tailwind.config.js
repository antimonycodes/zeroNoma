/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#FDF0F1",
        colored: "#E60716",
        customGray: "#3A170080"
      },
    },
  },
  plugins: [],
}

