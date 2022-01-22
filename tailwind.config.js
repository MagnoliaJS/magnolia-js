module.exports = {
  // purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      minWidth: {
        "1/3": "33%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["postcss-import", "tailwindcss", "autoprefixer"],
}
