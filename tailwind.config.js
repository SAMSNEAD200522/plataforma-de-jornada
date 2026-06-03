/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        dark: '#0F172A',
        muted: '#64748B',
        border: '#E2E8F0',
      },
    },
  },
  plugins: [],
}
