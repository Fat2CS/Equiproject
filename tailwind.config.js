/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    

  ],

 
  theme: {
    fontSize: {
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      oxl: ["28px", "36px"],
      xl: ["36px", "44px"]
    },

    extend: {

      margin:{
        '10vw': '10vw',
        '30vw': '30vw',
        '50vw': '50vw',
        '35vw': '35vw',
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      // },
      colors: {
        "black-body": "#242121",
        "black-button": "#1D1A1A",
        "border-black-button": "#707070",
        "letter-grey": "#D1C7C7",
        "letter-orange": "#A66B37",
        "button-color": "#A66B37",
        "card-title":"#9D9292",
        "input-bg": "#1D1A1A",
        "red": "#D80032",
        "green": "#70e000",
      }
    }
  },
  plugins: []
};
