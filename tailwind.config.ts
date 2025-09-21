/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // apke files jaha Tailwind use hota hai
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-100%) skewX(-20deg)" },
          "100%": { transform: "translateX(200%) skewX(-20deg)" },
        },
      },
      animation: {
        shine: "shine 2s linear infinite",
      },
    },
  },
  plugins: [],
};
