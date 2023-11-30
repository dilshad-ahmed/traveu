/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        },
      },
    },
  },
  plugins: [],
};
