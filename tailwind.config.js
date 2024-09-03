/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryBgColor:"#EFFFFB",
        secondaryBgColor:"#50D890",
        thridBgColor:"#4F98CA",
        primaryTxtColor:"white",
        secondaryTxtColor:"#50D890",
        headingTxtColor:"#50D890"
        
      }
    },
  },
  plugins: [],
};
