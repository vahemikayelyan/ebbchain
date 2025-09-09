import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        carrot: {
          50: "#fff7f0",
          100: "#ffe7d1",
          200: "#ffd1a3",
          300: "#ffb472",
          400: "#ff9144",
          500: "#fb6d14",
          600: "#e5570c",
          700: "#bf430b",
          800: "#98340e",
          900: "#7a2a0f",
        },
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
