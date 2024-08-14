import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        cardColor:'#111212',
        cardBorder: '#2f3031',
        cardText : '#828383',
        cardLine: '#a5a5a5',
        navColor: '#101113',
        upNav: '#202022',
      },
      height:{
        '128': '34rem',
      }
    },
  },
  plugins: [],
};
export default config;