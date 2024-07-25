/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*/.js", "./src/**/*.js"],
  theme: {
    extend: {
      boxShadow: {
        teal: "0px 4px 4px 0px rgba(0, 173, 181, 0.5)", // Adjust the color and opacity as needed
      },
    },
  },
  plugins: [],
};
