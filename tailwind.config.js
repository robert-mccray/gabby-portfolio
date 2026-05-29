/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1F2E30',
          base: '#293A3D',
          muted: '#355153',
          light: '#3D5456',
          lighter: '#425B5D',
        },
        gold: {
          DEFAULT: '#D4AF37', // Classic metallic gold
          light: '#F3E5AB',
          dark: '#AA8C2C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'], // The "Times" style
        script: ['"Great Vibes"', 'cursive'],   // The handwritten style
      }
    },
  },
  plugins: [],
}