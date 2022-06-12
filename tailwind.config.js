module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        25: "100px",
        30: "120px",
      },
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
      fontSize: {
        sm: ["12px", { lineHeight: "16px" }],
        md: ["14px", { lineHeight: "20px", letterSpacing: "-0.006em" }],
        lg: ["16px", { lineHeight: "24px", letterSpacing: "-0.011em" }],
        xl: ["20px", { lineHeight: "28px", letterSpacing: "-0.017em" }],
        "2xl": ["28px", { lineHeight: "36px", letterSpacing: "-0.021em" }],
        "3xl": ["36px", { lineHeight: "44px", letterSpacing: "-0.022em" }],
      },
      boxShadow: {
        shadow: "0 1px 2px 0 rgba(0, 0, 0, 1.2)",
        md: "0 10px 50px -20px rgba(0, 0, 0, 0.1)",
        inner: "1px 2px 2px 0 rgba(0, 0, 0, 1.2)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
