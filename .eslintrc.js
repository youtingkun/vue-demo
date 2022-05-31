module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
	rules: {
		'vue/no-unused-components': 'off',
		'prettier/prettier': [
			'error',
			{
				endOfLine: 'auto',
			},
		],
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
