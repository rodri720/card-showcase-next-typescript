/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
 mode: 'jit',
  theme: {
    extend: {

      fontFamily: {
        'Manrope': ['Inter', 'sans-serif'],
      },
      colors: {
        'black-100': '#2B2C35',
        'primary-blue': {
          DEFAULT: '#2B5C35',
          '50': '#F5F8FF',
        },
        'secondary-orange': '#f79761',
        'light-white': {
          DEFAULT: 'rgba(59,60,152,0.03)',
          '50': 'rgba(59,60,152,0.05)',
        }
      }
    },
  }
  
}

