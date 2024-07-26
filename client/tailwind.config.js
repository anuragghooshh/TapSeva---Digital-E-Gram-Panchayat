/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include all files in src and its subdirectories
    "./src/components/**/*.{html,js,ts,jsx,tsx}", // Include all files in components and its subdirectories
    "./src/pages/**/*.{html,js,ts,jsx,tsx}", // Include all files in pages and its subdirectories
    "./public/index.html", // Include the index.html file in the public directory
  ],
  theme: {
    extend: {
      height: {
        nav: "6rem",
        footer : "30rem"
      },
      margin: {
        navdsktp : "6rem",
      },
      padding:{
        navdsktp : "7.25rem",
        navmob : "6rem"
      },
      minHeight: {
        hero : "calc(100vh - 6rem)",
        footer : "30rem",
      },
      maxWidth:{
        dsktp : "1140px",
        nav : "calc(100% - 10rem)"
      },
      colors: {
        light: {
          100 : "#FCFFF8",
          200 : "#F7FFEE",
          300 : "#F1FFDF",
        },
        dark: "#1F2316",
        primary: "#8AB740",
        secondary: "#8D4B26",
        tertiary: "#ABBE99",
        gray: {
          100 : "#EDF4E6",
          200 : "#B0C38F",
          300 : "#7F8D4F",
        },
        positive: {
          100: "#C8E69A",
          200: "#B2D77A",
          300: "#95BD59",
          400: "#84A94D",
        },
        negative: {
          100: "#FFC9C9",
          200: "#F5AEAE",
          300: "#F09696",
          400: "#DB6464",
        },
        neutral: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#BFBFBF",
        },
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        full: "9999px",
      },
      fontFamily: {
        gyst: ["Gyst", "serif"],
        work: ["Work Sans", "sans-serif"],
      },
      translate:{
        nav : "calc(-100% - 1.25rem)"
      }
    },
  },
  plugins: [],
};
