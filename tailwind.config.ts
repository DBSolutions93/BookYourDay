import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkmode: 'class',
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4f46e5', // Indigo-600
          dark: '#4338ca', // Indigo-700
        },
        secondary: {
          DEFAULT: '#1f2937', // Gray-800
          light: '#374151', // Gray-700
        },
        background: '#f9fafb', // Gray-50
        text: {
          DEFAULT: '#1f2937', // Gray-800
          secondary: '#4b5563', // Gray-600
        },
        accent: '#10b981', // Green-500
      },
    },
  },
  plugins: [],
} satisfies Config;
