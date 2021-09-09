module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xss': '375px',
      'xs': '415px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      padding: ['hover'],
      backgroundColor: ['active'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
