/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: { 
        "fade-right": "fade-right 0.3s linear", 
        "fade-left": "fade-left 0.3s linear", 
        "fade-down" : "fade-down 0.3s linear"
      }, 
      keyframes: { 
        "fade-right": { 
          "0%": { 
            opacity: "0", 
            transform: "translateX(-100%)", 
          }, 
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)", 
          },
        },
        "fade-left": { 
          "0%": { 
            opacity: "0", 
            transform: "translateX(100%)", 
          }, 
          "100%": { 
            opacity: "1", 
            transform: "translateX(0)", 
          },
          "fade-down" : {
            "0%": {
              opacity : "0",
              transform : "translateY(100%)"
            },
            "100%": { 
            opacity: "1", 
            transform: "translateX(0)", 
          },
          }
        }, 
      },
    },
  },
  plugins: [],
}
