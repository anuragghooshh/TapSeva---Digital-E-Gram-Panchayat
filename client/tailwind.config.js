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
        nav : "7.25rem",
        navmob : "6rem"
      },
      minHeight: {
        hero : "calc(100vh - 6rem - 2.5rem)",
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
          100: "#E4F0C1",
          200: "#C7E28D",
          300: "#90ad51",
          400: "#7f993d",
        },
        negative: {
          100: "#F0C4B1",
          200: "#E5A08A",
          300: "#D17A5B",
          400: "#c2564a",
        },
        neutral: {
          100: "#F2F2F2",
          200: "#E6E6E6",
          300: "#D9D9D9",
          400: "#BFBFBF",
          500: "#737373",
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
        nav : "calc(-100% - 1.25rem)",
        sidebar : "6rem"
      }
    },
    transitionTimingFunction: {
      bounce : "cubic-bezier(.68,-0.15,.41,.96)"
    }
  },
  plugins: [],
  future:{
    hoverOnlyWhenSupported : true
  }
};
