/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './components/game/**/*.{js,jsx,ts,tsx}',
    './components/ui/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#254959',
        primary2: '#297697',
        secondary: '#95bcbd',
        white: '#fff',
        black: '#000',
        gray: '#f5f5f5',
      },
      // fontFamily: {
      //   'Dancing': ['Dancing Script', 'sans-serif'],
      //   'Anta': ['Anta', 'sans-serif'],
      //   'Oswald': ['Oswald', 'sans-serif'],
      // }
    },
  },
  plugins: [],
};
