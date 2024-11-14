/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#0e0e0e',
        'button': '#181818'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(135deg, #0e0a4e 0%, #2a2ab0 20%, #685fa2 80%, #160f90 100%)',
      }
    },
  },
  plugins: [],
}

