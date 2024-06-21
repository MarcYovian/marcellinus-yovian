/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#0880D5",
        secondary: "#E8E8E8",
        light: "#F1F1F1",
        dark: {
          full: "#1E1E1E",
          semi: "#2F2F2F",
        },
        third: "#787878",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
