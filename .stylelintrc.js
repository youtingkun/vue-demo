module.exports = {
	defaultSeverity: 'error',
	extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
	plugins: ['stylelint-scss'],
	rules: {
		'declaration-colon-newline-after': null,
		'at-rule-no-unknown': null,
		'color-hex-case': null,
		'block-closing-brace-newline-after': null,
		'at-rule-empty-line-before': null,
		'number-no-trailing-zeros': null,
		'no-empty-source': null,
		'unit-case': null,
		'selector-pseudo-class-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'property-no-unknown': null,
        'no-descending-specificity': null,
        'selector-pseudo-element-no-unknown': null
	},
};

// null设置为关闭某些规则的验证
