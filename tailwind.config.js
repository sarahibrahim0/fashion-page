

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
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
    },
  colors:{
    'greyhr': '#CFD8DC',
    'footerhr':'#8D8D8D',
    'footericon':'#6F858F',
    'iconbg':'#CFD8DC',
    'buttonbg':'#263238',
    'footerend':'#59656A' ,
    'carouseldiv':'#3E2723' ,
    'indicatorprev':'#D7CCC8',
    'navopacity':'#92989B'
  },
  fontFamily:{
    'Roboto':'Roboto,Roboto Condensed,sans-serif'
  },
  fontSize:{
    'hr5':'5px'
  },
  spacing:{
    '111':'calc(100% + 64px)',
    '1': '8px',
    '2': '12px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',

  }

  },
  plugins: []
}

