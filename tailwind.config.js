module.exports = {
	purge: [
		'./src/**/*.html',
		'./src/**/*.svelte',
		'./src/*.svelte',
		'./src/routes/*.svelte',
		'./src/App.svelte'
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
