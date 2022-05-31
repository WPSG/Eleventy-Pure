module.exports = {
  content: [
    "./**/*.{md,njk,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
