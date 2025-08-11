/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        forest: "#014017",
        petal: "#F28C0F",
        cream: "#F2A516",
        choc: "#4B2A21",
        bark: "#261C1A",
        peach: "#F26835",
        maroon: "#732002",
        leaf: "#146D3F",
        lavender: "#7D5A8C",
        grape: "#251240",
        yell: "#F2B807",
        baby: "#FF73A8",
        beige: "#BF6B04",
      },
      fontFamily: {
        schoolbell: ["var(--font-schoolbell)"],
        delius: ["var(--font-delius)"],
      },
      fontWeight: {
        extrabold: 800,
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    animation: {
      "scroll-left": "scroll-left 30s linear infinite",
    },
    safelist: [
      "mask-star",
      "mask",
      "rating",
      "rating-sm",
      "rating-md",
      "rating-lg",
      "bg-teal",
    ],
  },
  plugins: [],
};
