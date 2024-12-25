/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: '#24395B',
        secondaryColor: '#E1B966',
        primaryTextColor: '#030303',
        secondaryTextColor: '#3E3E3E',
        background: '#FAFAFA',
        formBackgroundColor: '#f2f2f2',
      },
      spacing:{
        "big": "48rem"
      },
      screens:{
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

