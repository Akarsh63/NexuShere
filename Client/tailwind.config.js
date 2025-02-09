/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // keyframes:{ spin: {
      //   '0%': {
      //     transform: 'rotate(0deg)'
      //   },
      //   '100%': {
      //     transform: 'rotate(360deg)'
      //   }
      // }},
      // animation: {
      //   'spin-slow': 'spin 3s linear infinite',
      // }

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [require('daisyui'),],
}

