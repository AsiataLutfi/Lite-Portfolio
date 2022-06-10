module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          10: "#F5F5F5",
          20: "#F7F7F7",
          30: "#F1F1F1",
          40: "#E7E7E7",
          50: "#CECECE",
          60: "#B1B1B1",
          70: "#919191",
          80: "#818181",
          90: "#666666",
          100: "#333333",
        },
        base: "#1E1E1E",
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      boxShadow: {
        card: "0 10px 50px -20px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
