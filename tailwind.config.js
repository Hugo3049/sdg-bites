/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        "primary-color": "#b3d4fc",
        "primary2-color": "#b3d1fc",
        "secondary-color": "#76A9B0",
        "text-color": "#ffffff",
      },
    },
  },
  plugins: [],
};
