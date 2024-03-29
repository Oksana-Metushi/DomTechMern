/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        "gwhite": "#fbf9ff",
        "blue": "#2374AB",
      },
      fontFamily: {
        'primary': ['Roboto Flex', 'sans-serif'],
        'tek': ['Tektur', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

