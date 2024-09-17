/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "hsl(240, 21.4%, 11%)",
        secondary: {
          DEFAULT: "hsl(36.6, 100%, 50.2%)",
          100: "hsl(33.8, 100%, 50.2%)",
          200: "hsl(33.3, 100%, 50.2%)",
        },
        black: {
          DEFAULT: "hsl(0, 0%, 0%)",
          100: "hsl(240, 20%, 14.7%)",
          200: "hsl(232.5, 18.6%, 16.9%)",
        },
        gray: {
          100: "hsl(240, 23.5%, 84.1%)",
        },
      },
      fontFamily: {
        "poppins-thin": ["PoppinsThin", "sans-serif"],
        "poppins-extralight": ["PoppinsExtraLight", "sans-serif"],
        "poppins-light": ["PoppinsLight", "sans-serif"],
        "poppins-regular": ["PoppinsRegular", "sans-serif"],
        "poppins-medium": ["PoppinsMedium", "sans-serif"],
        "poppins-semibold": ["PoppinsSemiBold", "sans-serif"],
        "poppins-bold": ["PoppinsBold", "sans-serif"],
        "poppins-extrabold": ["PoppinsExtraBold", "sans-serif"],
        "poppins-black": ["PoppinsBlack", "sans-serif"],
      },
    },
  },
  plugins: [],
};
