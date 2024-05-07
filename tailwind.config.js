/* eslint-disable no-undef */
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bungee: ['Bungee Spice', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
