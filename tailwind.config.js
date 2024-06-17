import plugin from "tailwindcss";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF5700",
        secondary: "#0d6efd",
      },
      boxShadow: {
        primary: "inset 0 -3px 0 0 #FF5700",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("focus-valid", ["&:focus", "&:valid"]);
    }),
  ],
};
