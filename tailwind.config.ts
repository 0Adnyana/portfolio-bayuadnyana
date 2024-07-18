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
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        roboto_mono: ['var(--font-roboto-mono)'],
        playfair_display: ['var(--font-playfair-display)'],
      },
      colors: {
        'foreground': '#F8F8FF',
        'foreground-darker': '#C7C4DF',
        'background': '#18181D',
        'background-lighter': '#31313B',
        'primary': '#3B59C4',
        'secondary': '#30348C',
        'accent': '#EB264C',
      },
    },
  },
  plugins: [],
};
export default config;
