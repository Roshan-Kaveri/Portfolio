/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom font
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
