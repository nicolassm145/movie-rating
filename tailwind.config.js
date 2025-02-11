/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
      },
      colors: {
        'custom-purple': {
          DEFAULT: '7C05F2',
          '500': '7C05F2', 
          '600': '8F33EB'
        },
        'custom-red': {
          DEFAULT: 'F24738',
          '500': '7C05F2', 
          '600': 'FF2F1D'
        },
        'custom-yellow': {
          DEFAULT: 'F2BB13',
          '500': 'F2BB13', 
          '600': 'D0A624'
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "dracula"],
  
  },
}

