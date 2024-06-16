import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "amber-dark": "hsl(30, 66%, 31%)",
        "amber-medium": "hsl(30, 99%, 68%)",
        "amber-light": "hsl(40, 90%, 67%)",
      },
    },
  },
  plugins: [],
};
export default config;
