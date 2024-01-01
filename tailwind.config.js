/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#06d6a0",
        secondary: "#118ab2",
      },
    },
  },
  plugins: [],
};
