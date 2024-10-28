import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      main_color: {
        100: "#F2F8FF",
        200: "#99C7FB",
        300: "#66AAF9",
        400: "#338EF7",
        500: "#006FEE",
        600: "#005BC4",
      },
      white: "#ffffff",
      bg_light: "#F5F7F9",
      input_color: "#F4F4F4",
      line_color: "#BFC9D9",
      black: "#000000",
    },
    fontFamily: {
      "public_sans": ["Public Sans", "sans-serif"]
    }
  },
  plugins: [
  ],
});
