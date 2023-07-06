/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "contact-image": "url('https://unsplash.it/1000/1000?image=789')",
      },
      minHeight: {
        "custom-min-h": "500px",
        "custom-h-form": "600px",
      },
      gridTemplateColumns: {
        footerLayout: "repeat(auto-fit, minmax(14rem, 1fr))",
        productLayout: "repeat(auto-fit,minmax(16rem, 1fr))",
        productLayoutTop: "repeat(auto-fit,minmax(13rem, 1fr))",
        collectionLayout: "repeat(auto-fit, minmax(12rem, 1fr))",
        homepageLayoutHero: "repeat(auto-fit, minmax(22rem, 1fr))",
        homepageLayoutHero1: "repeat(auto-fit, minmax(18rem, 1fr))",
        userLayout: "repeat(auto-fit, minmax(5rem, 1fr))",
      },
      fontSize: {
        extraSmall: "8px",
        small: "10px",
      },
      animation: {
        bounce: "bounce 2s ease-in-out infinite forwards",
        moveUp: "moveUp .5s ease-in-out 1 forwards",
        moveInLeft: "moveInLeft .5s ease-in-out 1 forwards",
        moveInRight: "moveInRight .5s ease-in-out 1 forwards",
        cartAnimate: "cartAnimate 1s ease-in-out infinite forwards",
        cartDeleteBtnAnimate: "cartDeleteBtnAnimate .4s ease-in-out 1 forwards",
      },
      keyframes: {
        bounce: {
          "0%": { transform: "translateY(-5px)", color: "red" },
          "25%": { transform: "rotate(0deg)", color: "blue" },
          "50%": { transform: "translateY(5px)", color: "purple" },
          "75%": { transform: "rotate(15deg)", color: "#34ff34" },
          "100%": { transform: "translateY(0px)", color: "lime" },
        },
        moveUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        moveInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        moveInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 1 },
        },
        cartAnimate: {
          "0%": { transform: "translateX(0%)", opacity: 0 },
          "50%": {
            transform: "translateX(50%)",
            opacity: 0.5,
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "translateX(100%)",
            opacity: 1,
            color: "#67ffee",
          },
        },
        cartDeleteBtnAnimate: {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
