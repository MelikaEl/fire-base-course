/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // eslint-disable-next-line no-unused-vars
      backgroundImage:(_)=>({
        'custom-background':"url('./src/assets/pexels-catiamatos-1072179.jpg')"
      })
    },
  },
  plugins: [],
}

