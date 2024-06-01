/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#21291B",
        "white" : "#F4F4F4",
        "black" : "#121212",
        'green-550' : "#34A847",
        'light-green' : '#C8F5A7',
        gray: "#7A7A7A"
      },
      spacing: {
        header: '2.5rem'
      },
      fontFamily: {
        'serif': ['Prata', 'serif']
      }
    },
  },
  plugins: [],
}

