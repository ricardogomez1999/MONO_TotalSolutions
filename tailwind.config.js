/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#01133F",
        secondary: "#054165",
        darkBlue: "#2D5980",
        lightBlue: "#476E8F",
        grayText: "#666666",
      },
      backgroundImage: {
        "about-us": "url('/AboutUSMONO.webp')",
        "all-youneed": "url('/allYouNeed.webp')",
        "info-banner": "url('/infoBanner.webp')",
        "contact-us": "url('/contactUs.png')",
      },
    },
  },
  plugins: [],
};
