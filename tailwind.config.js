module.exports = {
  content: ["./src/**/*.{html,ts}","./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
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
    '111':'calc(100% + 64px)'

  }

  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}


