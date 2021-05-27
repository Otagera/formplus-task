const colors = require('tailwindcss/colors');

module.exports = {
  purge: [,
    './src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
	  	fontFamily: {
	  		'inter': ['Inter', 'sans-serif']
	  	},
      colors: {
        'btnOrange': '#FF5C00',
        'lime': colors.lime,
        'orange': colors.orange,
        'emerald': colors.emerald,
        'green': colors.green
      }
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
