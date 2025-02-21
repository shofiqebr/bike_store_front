/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C9BD9', // blue-600
        secondary: '#f97316', // orange-500
        accent: '#ef4444', // red-500
        neutral: {
          100: '#f3f4f6', // gray-100
          700: '#374151', // gray-700
          900: '#111827', // gray-900
        },
        background: '#f9fafb', // gray-50
      },
    },
  },
  plugins: [],
}