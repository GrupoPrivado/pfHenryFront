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
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
}
