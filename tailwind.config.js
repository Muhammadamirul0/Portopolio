/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Roboto Mono', 'monospace'], // Menambahkan font baru
      },
      container: {
        center: true,
        padding: '16px',
      },
      colors: {
        primary: '#0041C2',
        dark: '#0f172a',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}

