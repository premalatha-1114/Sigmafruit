module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'], // Paths to your HTML and JS files
  theme: {
    extend: {
      colors: {
        customBlue: '#1c3d5b',
      },
      spacing: {
        128: '32rem', // Custom spacing (e.g., for padding or margin)
      },
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'], // Add "Manrope" font
      },
      colors: {
        customColor: '#E57A29', // Add your custom color
      },
      boxShadow: {
        'custom': '3px 1px 3px 1px rgba(136, 136, 136, 0.47)',
      },

      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
