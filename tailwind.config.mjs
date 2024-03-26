/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			colors: {
			  primary: {"50":"#fefce8","100":"#fef9c3","200":"#fef08a","300":"#fde047","400":"#facc15","500":"#eab308","600":"#ca8a04","700":"#a16207","800":"#854d0e","900":"#713f12","950":"#422006", "980":"#f9f7f3"}
			}
		  },
		  fontFamily: {
			'body': [
		  'Lato', 
		  'ui-sans-serif', 
		  'system-ui', 
		  '-apple-system', 
		  'system-ui', 
		  'Segoe UI', 
		  'Roboto', 
		  'Helvetica Neue', 
		  'Arial', 
		  'Noto Sans', 
		  'sans-serif', 
		  'Apple Color Emoji', 
		  'Segoe UI Emoji', 
		  'Segoe UI Symbol', 
		  'Noto Color Emoji',
		  'playfair-display'
		],
			'sans': [
		  'Lato', 
		  'ui-sans-serif', 
		  'system-ui', 
		  '-apple-system', 
		  'system-ui', 
		  'Segoe UI', 
		  'Roboto', 
		  'Helvetica Neue', 
		  'Arial', 
		  'Noto Sans', 
		  'sans-serif', 
		  'Apple Color Emoji', 
		  'Segoe UI Emoji', 
		  'Segoe UI Symbol', 
		  'Noto Color Emoji'
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

