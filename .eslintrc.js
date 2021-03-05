module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
	rules: {
		'prettier/prettier': 'error',
		'vue/no-unused-components': 'off',
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
};
