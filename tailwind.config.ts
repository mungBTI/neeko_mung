import type { Config } from "tailwindcss";
// 플러그인 경로를 정확히 설정

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
      colors: {
        customBlue: "#0077B6",
        cottonBlue: "#EDF6F9",
      },
      width: {
        120: "30rem",
        100: "25rem",
      },
    },
  },
  plugins: [], // 여기에 homePlugin을 추가
};

export default config;
