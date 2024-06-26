import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'sm': {'min': '300px', 'max': '650px'},
      'md': {'min': '651px', 'max': '950px'},
      'lg': {'min': '951px', 'max': '1250px'},
      'xl': {'min': '1251px', 'max': '1550px'},
      '2xl': {'min': '1551px', 'max': '2000px'},
    }
  },
  plugins: [],
};
export default config;
