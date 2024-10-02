/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-neutral': '#404040', 
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}

