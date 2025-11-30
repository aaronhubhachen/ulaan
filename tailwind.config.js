/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'ulaan-red': '#8B0000',
          'ulaan-gold': '#D4AF37',
        },
        fontFamily: {
          'display': ['Oswald', 'sans-serif'],
          'body': ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }