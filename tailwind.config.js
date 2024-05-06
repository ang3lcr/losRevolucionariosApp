/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height:{
        "600": "600px"
      }
    },
    fontFamily: {
      'sancreek': ['Sancreek', 'serif'],
      'specialText': ['"Custom Font Name"', 'sans-serif'],
      'akshar': ['Akshar', 'sans-serif']
    }
  },
  plugins: [],
}
