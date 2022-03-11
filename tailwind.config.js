module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Inter400'],
    },
    extend: {
      colors: {
        'greybar': '#222',
        'footer-link': '#757575',
        'rgba-black': 'rgba(0, 0, 0, 0.8)'
      },
    },
  },
  plugins: [],
}
