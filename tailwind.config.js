/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#347928", // Primary green color
        secondary: "#C0EBA6", // Secondary light green color
        accent: "#FFFBE6", // Accent color (light yellowish)
        highlight: "#FCCD2A", // Highlight color (yellow)
      },
    },
  },
  plugins: [],
};
