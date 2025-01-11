/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        AttributionBlue: "hsl(228, 45%, 44%)",
        Red: 'hsl(0, 100%, 74%)',
        Green: 'hsl(154, 59%, 51%)',
        Blue: 'hsl(248, 32%, 49%)',
DarkBlue: 'hsl(249, 10%, 26%)',
GrayishBlue: 'hsl(246, 25%, 77%)'
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 600,
        extraBold: 700,
      },
      fontFamily:{
    Poppins: "Poppins"
      },
      screens: {
        sm: "430px",
        md: "630px",
        lg:"768px"
}
    },
  },
  plugins: [],
}








