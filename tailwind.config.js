/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        light: {
          background: '#f5f5f5', // Light mode background color
          text: '#333333', // Light mode text color
          primary: '#4CAF50', // Light mode primary color (buttons, links, etc.)
          secondary: '#FFC107', // Light mode secondary color
        },
        dark: {
          background: '#888899', // Dark mode background color
          text: '#00000', // Dark mode text color
          primary: '#ffffff', // Dark mode primary color
          secondary: '#FF5722', // Dark mode secondary color
        },
      },
    },
  },
  plugins: [],
}

