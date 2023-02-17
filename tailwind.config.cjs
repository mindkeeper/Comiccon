/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gradient: {
          green: "#00835c",
          sky: "#8ed6fb",
        },
        primary: {
          pink: "#f70095",
          sky: "#8ed6fb",
          gray: "#231f1f",
        },
      },
      animation: {
        "slow-bounce-1": "bounce 12s linear infinite",
      },
      keyframes: {
        "slow-bounce-1": {
          "0%, 100%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-20px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
      },
    },
  },
  plugins: [],
};
