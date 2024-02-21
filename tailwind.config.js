/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: 
    {
      extend: {
        colors: {
          primary: '#FF6347', // Example primary color
          secondary: '#6B7280', // Example secondary color
        },
      },
    },
  
  plugins: [require("daisyui")],
}

