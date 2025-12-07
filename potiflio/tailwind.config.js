/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0c0c0d",
        card: "#121214",
        border: "#2a2a2d",
        primary: "#ff6a00",
        "primary-foreground": "#0b0b0c",
        secondary: "#1f1f22",
        muted: "#a1a1aa",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(255, 106, 0, 0.35)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(12px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-left": {
          "0%": { opacity: 0, transform: "translateX(-16px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-right": {
          "0%": { opacity: 0, transform: "translateX(16px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 50px rgba(255,106,0,0.25)" },
          "50%": { boxShadow: "0 0 80px rgba(255,106,0,0.4)" },
        },
        "slide-up": {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { opacity: 0, transform: "translateY(-30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease forwards",
        "slide-in-left": "slide-left 0.7s ease forwards",
        "slide-in-right": "slide-right 0.7s ease forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "slide-up": "slide-up 0.8s ease forwards",
        "slide-down": "slide-down 0.8s ease forwards",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
};

