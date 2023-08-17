/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      yellow: {
        "50": "#FEC5A3",
        "100": "#F0B90B"
      },
      green: {
        "50": "#48D6D2",
        "100": "#48D6D21A",
      },
      black: {
        "50": "#414141",
        "100": "#1b1c22",
        "200": "#1C1D23",
        "400": "#2B2834"
      },
      white: {
        "100": "#fff",
        "50": "#4b4c59"
      },
      purple: {
        "50": "#F389C0",
        "100": "#FD8CFB",
      },
    },
    fontFamily: {
      'volkhov': ["'Volkhov', serif;"],
      'poppins': ["'Poppins', sans-serif;"],
    }
  },
  plugins: [],
}
