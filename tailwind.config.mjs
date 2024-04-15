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

