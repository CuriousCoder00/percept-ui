/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        accent: colors.purple,
        danger: colors.red,
        success: colors.green,
        warning: colors.yellow,
        info: colors.cyan,
        light: colors.gray,
        dark: colors.slate,
      },
    },
  },
  plugins: [],
};
