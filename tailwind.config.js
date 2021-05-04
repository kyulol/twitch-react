module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito']
      },
      colors: {
        almostBlack: '#1a1a1a',
        twitch: '#673AB7',
        darkTwitch: '#1F1F23',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus',],
      borderWidth: ['hover', 'focus', 'active'],
      borderColor: ['hover', 'focus', 'active'],
      backgroundClip: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus'],
      backgroundColor: ['active', 'checked'],
      padding: ['hover', 'focus'],
      margin: ['hover', 'focus'],
      ringOffsetWidth: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [],
}
