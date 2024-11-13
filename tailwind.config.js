/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        wave: 'wave 1.5s ease-in-out infinite', // Define wave animation
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(10deg)' },
          '50%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
}

