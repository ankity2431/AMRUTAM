// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        gupter: ['Gupter', 'serif'],
      },
      colors: {
        creamLight: '#FFF8E6',
        creamDark: '#FDEFCB',
      },
      backgroundImage: {
        'cream-gradient': 'linear-gradient(to bottom, #FDEFCB, #FFF8E6)',
      },
      translate: {
        '18p': '18%', // you can name it anything (avoid slashes)
      },
    },
  },
  plugins: [],
};
