/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081a3c',
        sky: '#60a5fa',
        soft: '#9f7aea',
        slate: '#64748b',
      },
      boxShadow: {
        glow: '0 20px 70px rgba(8, 26, 60, 0.14)',
      },
    },
  },
  plugins: [],
};
