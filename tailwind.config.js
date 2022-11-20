module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      '2xl': '1366px',
      'xl': '1200px',
      'lg': '992px',
      'md': '768px',
      'sm': '640px',
      'xm': '576px'
    },
    extend: {
      backgroundImage: {
        'feaure-back': "url('./assets/images/feature.jpg')",
      },
      keyframes: {
        'idle': {
          '0%, 100%': {
            transform: 'translateY(-5px)'
          },
          '50%': {
            transform: 'translateY(0)'
          },
        }
      },
      animation: {
        'idle': 'idle 2s ease-out infinite'
      },
      fontFamily: {
        livvic: ["Livvic", "sans-serif",],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}