/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        form: '1108px'
      },
      colors: {
        primary: '#861546'
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'translateX(10px)'
          },
          '50%': {
            transform: 'translateX(-10px)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        }
      },
      animation: {
        shake: 'shake 0.5s ease-in-out'
      }
    }
  },
  plugins: []
}
