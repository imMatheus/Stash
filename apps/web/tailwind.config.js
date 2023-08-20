/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e9ecf8",
          100: "#c8cfef",
          200: "#a5b1e3",
          300: "#8092d8",
          400: "#6378cf",
          500: "#4760c6",
          600: "#374caf",
          700: "#22308e",
          800: "#1d2c63",
          900: "#101a3e",
        },
      },
    },
  },
  plugins: [],
};
