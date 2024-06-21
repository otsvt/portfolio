/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        laptop: "1000px",
      },
      padding: {
        main: "calc((1vh + 1vw) * 8)",
      },
      width: {
        dynamic: "calc((1vh + 1vw) * 30)",
      },
      fontFamily: {
        raleway: ["var(--font-raleway)"],
        outfit: ["var(--font-outfit)"],
        roboto: ["var(--font-roboto)"],
        ebg: ["var(--font-ebg)"],
        honey: ["var(--font-honey)"],
        phobby: ["var(--font-phobby)"],
        pretty: ["var(--font-pretty)"],
        badrips: ["var(--font-badrips)"],
        rock: ["var(--font-rock)"],
        lies: ["var(--font-lies)"],
        anima: ["var(--font-anima)"],
        dumbledor: ["var(--font-dumbledor)"],
        hp: ["var(--font-hp)"],
        harrypotter: ["var(--font-harrypotter)"],
        wizards: ["var(--font-wizards)"],
        lumos: ["var(--font-lumos)"],
        muggle: ["var(--font-muggle)"],
        romance: ["var(--font-romance)"],
        wolfpack: ["var(--font-wolfpack)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        portfolio: "#f4efec",
        mainText: "#cdc6c3",
        body: "#292929",
        window: "#383838",
        textLg: "rgba(255, 255, 255, 0.87)",
        textMd: "rgba(255, 255, 255, 0.6)",
      },
      gap: {
        galleryGap: "calc((1vh + 1vw) * 5)",
      },
      boxShadow: {
        forWindow:
          "0px 11px 15px 0px rgba(0, 0, 0, 0.2),0px 9px 46px 0px rgba(0, 0, 0, 0.12),0px 24px 38px 0px rgba(0, 0, 0, 0.14)",
        uiBtn:
          "0px 2px 4px 0px rgba(0, 0, 0, 0.2),0px 1px 10px 0px rgba(0, 0, 0, 0.12),0px 4px 5px 0px rgba(0, 0, 0, 0.14)",
        infoInner:
          "5px 5px 5px 3px rgba(0, 0, 0, 0.2), inset 2px 2px 4px 3px rgba(0, 0, 0, 0.2), inset 2px 6px 6px 7px rgba(0, 0, 0, 0.12), inset 5px 4px 6px 3px rgba(0, 0, 0, 0.14)",
      },
      borderColor: {
        options: "rgba(255, 255, 255, 0.12)",
      },
    },
  },
  plugins: [],
};
