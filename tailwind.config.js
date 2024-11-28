/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Be Vietnam Pro']
      },

      colors: {
        coral: {
          50: '#fff3ed',
          100: '#fee4d6',
          200: '#fcc6ac',
          300: '#fa9e77',
          400: '#f87a53',
          500: '#f5451a',
          600: '#e62b10',
          700: '#be1e10',
          800: '#971915',
          900: '#7a1814',
          950: '#420908'
        },
        olivine: {
          50: '#f6faf3',
          100: '#eaf4e4',
          200: '#d7e7cb',
          300: '#b6d4a1',
          400: '#9abf80',
          500: '#6d9a4d',
          600: '#567e3b',
          700: '#466431',
          800: '#3a502b',
          900: '#304324',
          950: '#172310'
        },
        'radical-red': {
          50: '#fff0f2',
          100: '#ffe2e6',
          200: '#ffcad3',
          300: '#ff9fae',
          400: '#ff6984',
          500: '#ff204e',
          600: '#ed1149',
          700: '#c8083e',
          800: '#a8093b',
          900: '#8f0c39',
          950: '#50011a'
        }
      }
    }
  },
  plugins: []
}
