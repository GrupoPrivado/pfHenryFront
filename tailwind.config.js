module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'happy-family': "url('assets/happyFamily.jpeg')",
      }
    },
  },
  plugins: [],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
}
