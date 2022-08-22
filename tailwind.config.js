
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nanum Gothic', 'Helvetica', 'Arial', 'sans-serif'],
        'mono': ['Noto Sans Mono', 'Courier New'],
        'anom': ['AnonymusPro', 'Noto Sans Mono', 'Courier New'],
        'jets': ['JetBrainsMono', 'Noto Sans Mono', 'Courier New']
      },
      colors: {
        'light': '#FDFAED',
        'red': '#FF5800',
        'black': '#363636',
        'blue': '#0073BA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
