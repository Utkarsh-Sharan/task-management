/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3B0902",
          secondary: "#AE6252",
          tertiary: "#9D629C",
          text: "#D696D3",
        },
      }
    },
  },
  plugins: [],
}

