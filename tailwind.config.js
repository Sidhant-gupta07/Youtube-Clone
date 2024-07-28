/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      overflow: {
         // Custom utility classes for scrollbar hiding
        'auto-x': 'auto', // Horizontal overflow only
      },
      whitespace: {
        'nowrap': 'nowrap', // Prevent wrapping
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

