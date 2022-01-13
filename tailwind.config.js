module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'happy-family': "url('assets/happyFamily.jpeg')",
      },
      colors: {
        primary: '#26349B',
        secondary: '#009872',
        'black-rgba': 'rgba(0, 0, 0, 0.95)'
      },
      width: {
        "80vw" : "80vw",
        "90vw" : "90vw"
      },
      screens: {
        xs: "320px"
      }
    },
  },
  plugins: [],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active', 'disabled'],
  },
}
