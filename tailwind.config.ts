import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      outfit: ["var(--font-outfit)"],
      nunito: ["var(--font-nunito)"],
    },
    colors: {
      "color-inherit": "inherit",
      "color-transparent": "transparent",
      "color-current": "currentColor",
      "color-red": "red",
      "color-purple": {
        1: "rgba(131, 66, 255, 1)",
        2: "rgba(162, 113, 255, 1)",
        3: "rgba(197, 167, 255, 1)",
      },
      "color-black": {
        1: "rgba(41, 41, 41, 1)",
        2: "rgba(41, 41, 41, 0.5)",
      },
      "color-white": {
        1: "rgba(255, 255, 255, 1)",
        2: "rgba(255, 255, 255, 0.8)",
      },
      "color-grey": {
        1: "rgba(34, 34, 34, 0.4)",
        2: "rgba(248, 248, 248, 1)",
        3: "rgba(241, 241, 241, 1)",
      },
    },
    screens: {
      "4xl": { max: "2000px" },
      // => @media (max-width: 1535px) { ... }
      "3xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      "2xl": { max: "1350px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      sxl: { max: "1200px" },
      // => @media (max-width: 1200px) { ... }
      xlg: { max: "1150px" },
      // => @media (max-width: 1150px) { ... }
      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }
      xmd: { max: "950px" },
      // => @media (max-width: 950px) { ... }
      md: { max: "850px" },
      // => @media (max-width: 850px) { ... }
      smd: { max: "700px" },
      // => @media (max-width: 700px) { ... }
      sm: { max: "650px" },
      // => @media (max-width: 500px) { ... }
      ssm: { max: "380px" },
      // => @media (max-width: 380px) { ... }
    },
    extend: {
      backgroundImage: {
        "home-1": "url('../assets/home/first-img.png')",
        "bring-vision": "url('../assets/home/bring-your-vision.png')",
      },
      gridTemplateColumns: {
        "event-cat-grid": "repeat(auto-fit, minmax(28rem, 1fr))",
      },
      boxShadow: {
        "sort-event": "0 4px 28px 0px rgba(157, 157, 157, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
