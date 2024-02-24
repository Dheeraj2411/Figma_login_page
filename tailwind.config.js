/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "black-rgba": "rgba(40, 40, 35, 1)",
        "logo-bg": "rgba(232, 229, 26, 1)",
        "header-font": "rgba(26, 28, 30, 1)",
        "secondary-header": "rgba(108, 114, 120, 1)",
        btncolor: "rgba(3, 180, 191, 1)",
        "label-text-color": "rgba(172, 181, 187, 1)",
        "input-border": " rgba(220, 228, 232, 1)",
      },
    },
  },
  plugins: [],
};
