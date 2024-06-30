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
      minHeight: {
        hero : "calc(100vh - 6rem)",
      },
      maxWidth:{
        dsktp : "1140px"
      },
      width: {
        "4/5": "80%",
      },
      left: {
        "1/2": "50%",
      },
      transform: {
        "x1/2": "translateX(-50%)", 
      },
      colors: {
        light: "#EEF3E5",
        dark: "#1F2316",
        primary: "#8AB740",
        secondary: "#8D4B26",
        tertiary: "#ABBE99",
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
    },
  },
  plugins: [],
};
