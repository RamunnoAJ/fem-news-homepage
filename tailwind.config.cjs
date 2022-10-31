/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e9ab53',
          dark: '#f15e50'
        },
        secondary: '#00011a'
      }
    }
  },
  plugins: []
}
