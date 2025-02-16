/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    fontFamily: {
      noto: "Noto Sans",
    },
    extend: {
      colors: {
        primary: {
          50: "#f0f9f4",
          100: "#dcefe3",
          200: "#bbdfc9",
          300: "#8ec7a9",
          400: "#5ea984",
          500: "#388260",
          600: "#2b7052",
          700: "#235943",
          800: "#1d4836",
          900: "#193b2e",
          950: "#0d2119",
        },
        "primary-hover": "#43a377",
        "primary-soft": "#EBFFF0",
        "primary-hover": "#388260",
        "paragraph-dark": "#535659",
        "navy-text": "#252626",
        "light-navy-text": "#1f2730",
        "light-text": "#FDFDFD",
        "dark-text": "#606161",
        "very-dark-text": "#343535",
        "soft-gray": "#f2f6f4",
        "objbg-gray": "#dedede",
        "obj-dark": "#1f1f1f",
        "border-clr": "#c9c9c9c9",
        "box-clr": "#f9fafb",
      },
    },
  },
  plugins: [],
};

