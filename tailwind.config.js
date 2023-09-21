const mode = process.env.TAILWIND_MODE ? 'jit' : 'aot';

module.exports = {
  mode: mode,
  content: ["./src/**/*.{html,ts, js}",
  "./node_modules/tw-elements/dist/js/**/*.js",
  "./dist/**/*.{html,ts, js, css}",
  "./dist/output.css"


],
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
  extend:
  {spacing: {
    '111':'calc(100% + 64px)',
    '1': '8px',
    '2': '12px',
    '3': '16px',
    '4': '24px',
    '5': '32px',
    '6': '48px',

  }
}


  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

