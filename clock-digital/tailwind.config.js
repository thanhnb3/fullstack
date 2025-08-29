/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // 1) Màu sắc
      colors: {
        startBlue: "#0052cc",
        endBlue: "#29a8f0",
        backGround: "#6994c5",
        textColor: "#ffffff62",
        backGround2: "rgba(255, 255, 255, 0.15)",
        colorBorder: "rgba(255, 255, 255, 0.18)",

        // bảng màu p / n của bạn (giữ nguyên)
        p: {
          50: "hsl(150, 66%, 96%)",
          100: "hsl(150, 64%, 91%)",
          200: "hsl(150, 60%, 80%)",
          300: "hsl(150, 55%, 67%)",
          400: "hsl(150, 51%, 52%)",
          500: "hsl(150, 69%, 42%)",
          600: "hsl(150, 74%, 30%)",
          700: "hsl(150, 75%, 24%)",
          900: "hsl(160, 65%, 17%)",
          950: "hsl(160, 73%, 9%)",
        },
        n: {
          50: "hsl(210, 14%, 98%)",
          100: "hsl(210, 20%, 93%)",
          200: "hsl(210, 22%, 85%)",
          500: "hsl(217, 20%, 58%)",
          600: "hsl(217, 18%, 54%)",
          700: "hsl(217, 17%, 40%)",
          800: "hsl(220, 14%, 12%)",
        },
      },

      // 2) Font families
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        lobster: ["Lobster", "serif"],
        inter: ["Inter", "sans-serif"],
      },

      // 3) Breakpoints
      screen: {
        sm: "480px",
        md: "768px",
        lg: "1280px",
        xl: "1400px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
