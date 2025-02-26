import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-light": "#f5f7f9",
        "input-color": "#f4f4f4",
        "line-color": "#bfc9d9",
        "main-color": {
          100: "#f2f8ff",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006fee",
          600: "#005bc4",
        },
      },
    },
    fontFamily: {
      "public-sans": ["Public Sans", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
