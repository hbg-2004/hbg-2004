/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf6f3',
          100: '#f5ebe4',
          200: '#e8d5c4',
          300: '#d9b89a',
          400: '#ca9a70',
          500: '#8B7355',
          600: '#7a6348',
          700: '#63503b',
          800: '#514233',
          900: '#43372b',
        },
        warm: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5efe9',
          300: '#ede4d8',
          400: '#e2d4c2',
          500: '#d4bf9e',
        },
        nature: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['PingFang SC', 'Microsoft YaHei', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
