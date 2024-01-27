/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [    
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,      
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'brand':'#1f70c2',
        'brand-bg':'#dfeedc',
        'brand-grafite':'#2e353e',
        'brand-grafite-hover':'rgba(255, 255, 255, 0.09)',
        
      },
      fill:{
        'brand':'#1f70c2',
        'brand-grafite':'#2e353e',

      },
      fontFamily: {
        'sans': ['Raleway Regular',],
      },
    
    },
  },
  plugins: [],
}
