import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "var(--white)",
        "bg-light": "var(--bg-light)",
        "input-color": "var(--input-color)",
        "line-color": "var(--line-color)",
        black: "var(--black)",
        "main-color": {
          100: "var(--main-color-100)",
          200: "var(--main-color-200)",
          300: "var(--main-color-300)",
          400: "var(--main-color-400)",
          500: "var(--main-color-500)",
          600: "var(--main-color-600)",
        },
      },
    },
    fontFamily: {
      "public-sans": ["Public Sans", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
