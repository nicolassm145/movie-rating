/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      fontFamily: {
        'roboto-mono': ['"Roboto Mono"', 'monospace'],
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#7C05F2',
        'custom-red': 'F24738',
        'custom-yellow':'F2BB13',
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

