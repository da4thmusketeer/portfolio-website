import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#12131A", cloud: "#F4F1EA", lemon: "#E9FF6A", lilac: "#ACA0FF", coral: "#FF826E" },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

