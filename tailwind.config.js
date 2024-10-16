/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-grey': '#F5F3F1',
        'text-color': '#666666',
        danger: '#F04438',
      },
      boxShadow: {
        'card-shadow':
          '0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
}
