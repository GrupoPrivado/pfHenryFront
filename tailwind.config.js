module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "happy-family": "url('assets/happyFamily.jpeg')",
      },
      colors: {
        primary: "#26349B",
        secondary: "#009872",
        "black-rgba": "rgba(0, 0, 0, 0.95)",
        "white-rgba": "rgba(255, 255, 255, 0.4)0%",
        "white-rgba2": "rgba(255, 255, 255, 0)100%",
      },

      width: {
        "40vw": "40vw",
        "50vw": "50vw",
        "60vw": "60vw",
        "70vw": "70vw",
        "80vw": "80vw",
        "90vw": "90vw",
      },
      height: {

        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
        "85vh": "85vh",
        "90vh": "90vh",
        '10vh': '10vh',
        "100%" : "100%",
        "70%" : "70%",
        "30%" : "30%",
        "80%" : "80%",
        "90%" : "90%",
        "10%" : "10%",
        "20%" : "20%",
        "40vh" : "40vh",
        "50vh" : "50vh",
        "60vh" : "60vh",
        "70vh" : "70vh",
        "80vh" : "80vh",
        "90vh" : "90vh"
      },
      minHeight: {
        "1/2": "60vh",
        "70vh": "70vh"
        },

      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [],
  variants: {
    textColor: ["responsive", "hover", "focus", "active", "disabled"],
  },
};
