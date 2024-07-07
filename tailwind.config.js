module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      lg: { max: "1440px" },
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_28": "#00000028",
          "900_2d": "#0000002d",
          "900_35": "#00062b35",
          "900_68": "#00000068",
          "900_dd": "#000000dd",
        },
        blue: {
          50: "#edf5ff",
          600: "#1a73e8",
          900: "#1350a0",
          "600_1c": "#1a73e81c",
          "600_59": "#1a73e859",
          a200: "#3b82f6",
          a400: "#227cf1",
          a700: "#1d65ff",
        },
        blue_gray: {
          800: "#3c4852",
          "300_33": "#94a3b833",
          "800_84": "#3c485284",
        },
        gray: {
          100: "#f5f5f5",
          400: "#b6b6b6",
          600: "#737373",
          800: "#4b4b4b",
          900: "#1a202c",
        },
        home_accredian_com: {
          mine_shaft: { 0: "#262626", 1: "#282828" },
          nero: "#ffffff",
          royal_blue_15_: "#1a73e826",
        },
        indigo: { 50: "#e2e8f0", "50_59": "#e2e8f059" },
        light_blue: { a700: "#007bff" },
      },
      boxShadow: {
        xs: "0 2px 26px 0 #0000002d",
        sm: "0 1px 24px 1px #00000028",
        md: "0 4px 65px 1px #00062b35",
      },
      fontFamily: {
        roboto: "Roboto",
        sourcesanspro: "Source Sans Pro",
        inter: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
