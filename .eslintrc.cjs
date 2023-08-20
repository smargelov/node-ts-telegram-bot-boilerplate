module.exports = {
	env: {
		es6: true,
		node: true,
		browser: false,
		'jest/globals': true
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2019
	},
	plugins: ['jsdoc', 'jest', '@typescript-eslint'],
	globals: {
		fetch: false
	},
	settings: {
		jsdoc: {
			tagNamePreference: {
				returns: 'return'
			}
		}
	},
	rules: {
		'no-console': 'error',
		'no-irregular-whitespace': 'off',
		'func-call-spacing': 'off',
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/ban-types': 'error',
		'@typescript-eslint/consistent-indexed-object-style': 'error',
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/func-call-spacing': 'error',
		'@typescript-eslint/no-inferrable-types': 'error',
		'@typescript-eslint/no-non-null-assertion': 'error',
		'@typescript-eslint/prefer-optional-chain': 'error',
		'@typescript-eslint/array-type': 'error',
		'@typescript-eslint/naming-convention': [
			'error',
			{
				selector: 'interface',
				format: ['PascalCase'],
				custom: {
					regex: '^I[A-Z]',
					match: true
				}
			},
			{
				selector: 'typeParameter',
				format: ['PascalCase'],
				prefix: ['T']
			}
		],
		semi: ['error', 'never'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'arrow-parens': ['error', 'always'],
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			}
		]
	}
}
