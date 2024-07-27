module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Sesuaikan dengan struktur proyek Anda
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#ffa500', // Warna kustom Anda
      },
      fontFamily: {
        'dancing': ['Dancing Script', 'cursive'],
        'crimson': ['Crimson Text', 'serif'],
        'photograph': ['Photograph Signature', 'cursive'],
      },
    },
  },
  plugins: [],
}