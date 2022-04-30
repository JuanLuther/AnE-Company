module.exports = {
  darkMode: "class",
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#F6F6F6",
        primary: "#6D9886",
        secondary: "#D9CAB3",
        text: "#212121",
        hover: "#DBE2EF",
        focus: "#3F72AF",
      },
    },
  },
  plugins: [],
};
