import { Warning } from 'postcss'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    colors: {
      white: "#ffffff",

      primary: {
        200: "#efeffc",
        300: "#cfd0f6",
        400: "#7f81e8",
        DEFAULT: "#5F62E2",
        600: "#5658CB",

      },
      secondary: {
        200: "#eaf8f4",
        300: "#bfe9de",
        400: "#56c4a7",
        DEFAULT: "#2AB691",
        600: "#26a482",

      },
      gray: {
        300: "#fafafa",
        400: "#f2f2f2",
        500: "#e5e5e5",
        700: "#808080",
        800: "#333333",
        DEFAULT: "#1D1D1D",
      },

      alert: {
        danger: "#FF4E4E",
        success: "#90DA1",
        Warning: "#FEB72F"
      }
    },
    
    fontSize: {
      "8xl": [
        "120px",
        {
          lineHeight: "120px",
          letterSpacing: "6px",
          fontWeight: "500",
        },
      ],
      "7xl": [
        "72px",
        {
          lineHeight: "80px",
          letterSpacing: "-4.5px",
          fontWeight: "600",
        },
      ],
      "6xl": [
        "55px",
        {
          lineHeight: "60px",
          letterSpacing: "-2.5px",
          fontWeight: "500",
        },
      ],
      "5xl": [
        "48px",
        {
          lineHeight: "54px",
          letterSpacing: "-1.600000023841858px",
          fontWeight: "500",
        },
      ],

      "4xl": [
        "36px",
        {
          lineHeight: "44px",
          letterSpacing: "-1.200000076837158px",
          fontWeight: "500",
        },
      ],

      "3xl": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "-O,800000011928929px",
          fontWeight: "500",
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      "xl": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "-1px",
          fontWeight: "400",
        },
      ],
      "lg": [
        "21px",
        {
          lineHeight: "30px",
          letterSpacing: "-0.800000011928929px",
          fontWeight: "400",
        },
      ],

      "base": [
        "17px",
        {
          lineHeight: "25px",
          letterSpacing: "-0.699999988079871px",
          fontWeight: "400",
        },
      ],

      "sm": [
        "15px",
        {
          lineHeight: "23px",
          letterSpacing: "-0,6000000238418579px",
          fontWeight: "400",
        },
      ],
      "caption1": [
        "20px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.6px",
          fontWeight: "400",
        },
      ],

      "caption2": [
        "18px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.3px",
          fontWeight: "400",
        },
      ],

      "caption3": [
        "16px",
        {
          lineHeight: "18px",
          letterSpacing: "-0.5px",
          fontWeight: "400",
        },
      ],

      "caption4": [
        "13px",
        {
          lineHeight: "15px",
          letterSpacing: "-0.2px",
          fontWeight: "400",
        },
      ],

    },

      borderRaduis: {
      
        DEFAULT: '10px' ,
      
      },

    extend: {

    }
  },
  plugins: [],
}
export default config
