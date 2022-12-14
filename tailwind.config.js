/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        enchanted: ["Enchanted Land"],
        "montserrat-regular": ["Montserrat Regular"],
        "montserrat-bold": ["Montserrat Bold"],
      },
      backgroundImage: {
        placeholder: "url('/assets/images/placeholder.jpg')",
      },
      backgroundColor: {
        dim: "rgba(0,0,0,0.5)",
        "navy-dim": "rgba(14, 15, 38, 0.8)",
        navy: "#0E0F26",
        "light-blue": "#0c89e4",
        "light-navy": "#131432",
        gray: "#363636",
        "gray-blue": "#3b3b53",
        orange: "#d37c2b",
        yellow: "#fbdc7e",
      },
    },
  },
  plugins: [],
};
