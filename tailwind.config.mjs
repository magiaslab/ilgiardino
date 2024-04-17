/** @type {import('tailwindcss').Config} */


module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
				'primary-brown': {  DEFAULT: '#9C5719',  50: '#EBB382',  100: '#E8A970',  200: '#E2944D',  300: '#DD7F2A',  400: '#BF6B1F',  500: '#9C5719',  600: '#6C3C11',  700: '#3B210A',  800: '#0B0602',  900: '#000000',  950: '#000000'},
				'sec-green': {  DEFAULT: '#178B58',  50: '#72E8B4',  100: '#60E5AB',  200: '#3DDF98',  300: '#23D184',  400: '#1DAE6E',  500: '#178B58',  600: '#0F5B3A',  700: '#072B1B',  800: '#000000',  900: '#000000',  950: '#000000'},
				'sec-yellow': {  DEFAULT: '#F3DB4F',  50: '#FFFEFB',  100: '#FDFAE8',  200: '#FBF2C2',  300: '#F8EB9B',  400: '#F6E375',  500: '#F3DB4F',  600: '#EFD01A',  700: '#C4AA0D',  800: '#907C0A',  900: '#5B4F06',  950: '#413804'},
				'white': {  DEFAULT: '#F3F3F7',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#FFFFFF',  400: '#FFFFFF',  500: '#F3F3F7',  600: '#D1D1E1',  700: '#B0B0CA',  800: '#8E8EB4',  900: '#6C6C9D',  950: '#5F5F8F'},
				'accent': {  DEFAULT: '#CEBEBE',  50: '#FFFFFF',  100: '#FFFFFF',  200: '#FFFFFF',  300: '#F1EDED',  400: '#E0D5D5',  500: '#CEBEBE',  600: '#B69E9E',  700: '#9E7E7E',  800: '#826262',  900: '#624A4A',  950: '#523E3E'}
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '2rem',
					lg: '4rem',
					xl: '5rem',
					'2xl': '0px',
				  },
				},
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
		  },
		  fontFamily: {
			'serif': [
				'Playfair Display Variable'
		],
			'sans': [
		  'bevan',
		  'kreon'
		  
		],
		'body':[
			'Caudex',
		]
		  }
		},
	
		
	
	plugins: [
		require('flowbite/plugin'),
		require('flowbite-typography')({
			className: 'custom-class',
		  }),
	],
}

