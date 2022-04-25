module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Serif", "serif"],
        square: ["Square Peg", "cursive"],
      },
      backgroundImage: {
        "about-background": "url('../public/img/about-background.jpg')",
        "flower-background": "url('../public/img/flower-pattern.jpg')",
      },
    },
  },
  plugins: [],
};
