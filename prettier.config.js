module.exports = {
	semi: false,
	singleQuote: true,
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	trailingComma: 'es5',
	bracketSpacing: true,
	plugins: ['prettier-plugin-tailwindcss'],
	overrides: [
		{
			files: '*.mdx',
			options: {
				printWidth: 80,
			},
		},
	],
}
