module.exports = {
  content: ["./src/**/*.{html,js}",], 
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        purple: '#481380',
        lightblue: '#7F78D2',
        pink: '#EFB1FF',
        cream: '#FFE2FF',
        pastelblue: '#D6E3F8'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
