/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./modules/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        placeholder: "url('/assets/images/placeholder.jpg')",
      },
      backgroundColor: {
        navy: "#0E0F26",
        "light-blue": "#0c89e4",
        "light-navy": "#131432",
        gray: "#363636",
        "gray-blue": "#3b3b53",
      },
    },
  },
  plugins: [],
};
