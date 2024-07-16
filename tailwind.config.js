/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2271D1",
        "color-frontend": "#6BD1FF",
        "color-backend": "#00C86F",
        "color-innovation": "#FFBA05",
        "color-form": "#262626",
        "color-text-form" : "#A5A5A5",
        "color-modal": "#03122F",
      },
      boxShadow: {
        "tabbar": "0px -8px 10px 0px rgba(34,113,209,0.75)",
      }
    },
  },
  plugins: [],
}

