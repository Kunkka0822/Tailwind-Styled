module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        DarkBack: '#0a0F1D',
        DarkCard: '#161B27',
        DarkBody: '#7E8097',
        DarkWhite: '#FBFBFBE0',
        DarkCard2: '#1C2230',
        DarkLine: '#1E2436',
        DarkBrand: '#E8973E',
        DarkInput: '#0E101B',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}