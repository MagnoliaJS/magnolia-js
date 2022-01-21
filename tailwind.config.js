module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        pink: {
          DEFAULT: "#BF5272",
        },
        gray: {
          dark: "#363636",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
