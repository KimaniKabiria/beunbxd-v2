/** @type {import('tailwindcss').Config} */ 
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'unbxd-orange': '#b67313',
        'taran-blue': '#23074d',
        'taran-orange': "#cc5333",
        'unbxd-bg': "#fcf6f5",
      },
    },
  },
  plugins: [],
});