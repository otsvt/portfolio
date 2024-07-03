/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
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
        ubuntu: ["var(--font-ubuntu)"],
      },
      colors: {
        portfolio: "#f4efec",
        mainText: "#cdc6c3",
        body: "#292929",
        window: "#383838",
        textLg: "rgba(255, 255, 255, 0.87)",
        textMd: "rgba(255, 255, 255, 0.6)",
        weatherLight: "rgb(41, 41, 41)",
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
        weatherFrame: "10px 10px 4px 0px rgba(0, 0, 0, 0.5)",
        commonCard: "15px 30px 40px 20px rgba(0,0,0,0.30), 12px 10px 15px rgba(0,0,0,0.22)",
      },
      borderColor: {
        options: "rgba(255, 255, 255, 0.12)",
      },
      backgroundColor: {
        weatherLight: "#EAEBEC",
        weatherDark: "#292929",
        weatherFrame: "rgb(68, 68, 68)",
        weatherHourly: "rgb(55, 54, 54)",
      },
      animation: {
        error: "forError 1s ease 4s forwards",
        commonCard: "commonShadow 5s linear infinite",
        rareCard: "rareShadow 5s linear infinite",
        epicCard: "epicShadow 5s linear infinite",
        legendCard: "legendShadow 5s linear infinite",
      },
      keyframes: {
        forError: {
          "0%": { opacity: 1, top: "-28px" },
          "100%": { opacity: 0, top: "-14px" },
        },
        commonShadow: {
          "0%, 100%": {
            boxShadow: "-1px -1px 10px 5px rgba(0,0,0,0.2)",
          },
          "50%": {
            boxShadow: "5px 10px 20px 10px rgba(0,0,0,0.5)",
          },
        },
        rareShadow: {
          "0%, 100%": {
            boxShadow: "-1px -1px 10px 5px rgba(75,127,173,0.5)",
          },
          "50%": {
            boxShadow: "5px 10px 20px 10px rgba(75,147,173,0.8)",
          },
        },
        epicShadow: {
          "0%, 100%": {
            boxShadow: "-1px -1px 10px 5px rgba(140,75,156,0.4)",
          },
          "50%": {
            boxShadow: "5px 10px 20px 10px rgba(140,75,156,0.8)",
          },
        },
        legendShadow: {
          "0%, 100%": {
            boxShadow: "-1px -1px 10px 5px rgba(237,165,40,0.2)",
          },
          "50%": {
            boxShadow: "5px 10px 20px 10px rgba(237,165,40,0.6)",
          },
        },
      },
    },
  },
  plugins: [],
};
