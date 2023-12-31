import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroSlide1: "url('/images/slide1.png')",
        heroSlide2: "url('/images/slide1.webp')",
        heroSlide3: "url('/images/slide2.png')",
        heroSlide4: "url('/images/slide3.webp')",
        logo: "url('/images/logo.png')",
        logo2: "url('/images/logo2.png')",
        slice_01: "url('/images/slices_01.png')",
        datadrivenapps: "url('/images/datadrivenapps.png')",
        seo1: "url('/images/seo.png')",
        fastwebsites: "url('/images/fast-websites.png')",
        onlinemarketingbw: "url('/images/online-marketing-bw.png')",
        textBg: "url('/images/text-bg.png')",
        mainBg: "url('/images/mainbg-bw.png')",
        headerbw: "url('/images/header-bw.png')",
        headercolor: "url('/images/header-color.png')",
      },
      fontFamily: {
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
export default config;
