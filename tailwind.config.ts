import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'footer-bg': '#1a1a1a', // Dark background
        'footer-text': '#ffffff', // White text
        'footer-hover': '#f0f0f0', // Light gray for hover
        'button-bg': '#0070f3', // Blue button
        'button-hover': '#005bb5', // Darker blue for hover
      },
    },
  },
  plugins: [],
} satisfies Config;
