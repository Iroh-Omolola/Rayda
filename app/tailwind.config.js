/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
   screens: {
      xxs: "320px",
      xs: "480px",
      sm: "640px",
      md: "786px",
      mmd: "800px",
      lg: "1024px",
      wlg: "1023px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1700px",
    },

    extend: {},
    colors: {
      text_one: "#101828",
      paragraph_color:"#475467",
      text_two: "#344054",
    },
    fontFamily: {
      plex: ["IBM Plex Sans"],
    },
  },
  
  plugins: [],
}
