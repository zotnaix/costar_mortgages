module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d101d',
        accent: '#f39c0a',
        navy: {
          950: '#0d101d',
          900: '#0d1629',
          800: '#1d3465',
          400: '#738fc6',
        },
        orange: {
          700: '#d97707',
          500: '#f39c0a',
          400: '#fabe22',
          300: '#fac536',
        }
      },
      fontFamily: {
        heading: ['"Georgia Pro"', 'Georgia', 'serif'],
        serif: ['"Georgia Pro"', 'Georgia', 'serif'],
        body: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
