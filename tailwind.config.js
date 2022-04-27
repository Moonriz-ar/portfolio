module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Serif", "serif"],
        square: ["Square Peg", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "desktop-about-background":
          "url('../public/img/desktop-about-background.jpg')",
        "desktop-flower-background":
          "url('../public/img/desktop-flower-pattern.jpg')",
        "desktop-contact-background":
          "url('../public/img/desktop-contact-background.jpg')",
        "mobile-about-background":
          "url('../public/img/mobile-about-background.jpg')",
        "mobile-flower-background":
          "url('../public/img/mobile-flower-pattern.jpg')",
        "mobile-contact-background":
          "url('../public/img/mobile-contact-background.jpg')",
      },
    },
  },
  plugins: [],
};
