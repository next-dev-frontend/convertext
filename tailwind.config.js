module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        colorRed: '#c83737',
        colorBlue: '#2c74db',
        colorGreen: '#25bf6e',
        colorGray: '#95a5a6',
      },



    }
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide')
  ],
};