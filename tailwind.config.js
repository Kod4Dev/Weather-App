/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      colors: {
        "bg-color": "#121214",
        "black": "#09090A",
        "primary": "#8257E5",
        "hover": "#9466FF",
        "borderColor": "#6833E4",
        "green": "#04D361",
        "red": "#CE4A4A",
        "textColor": "#A8A8B3",
        "white": "#FFFFFF",
        "borders": "#323238",
        "scrollbar": "#4D4D57",
        "attention": "#FD951F",
        "warning": "#EB8A1D"
      }
    },
  },
  plugins: [],
}
