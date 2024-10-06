/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],  // Include jsx and tsx for React
  theme: {
    extend: {
      fontFamily: {
        urdu: ['Gulzar', 'serif'],  // Urdu font
      },
    },
  },
  plugins: [],
}
