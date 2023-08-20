module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/*.svelte',
		'./src/routes/*.svelte',
		'./src/App.svelte',
		'./src/*.ts'
	],
	//   darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
