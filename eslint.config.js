import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
// eslint-disable-next-line import-x/namespace
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import checkFile from 'eslint-plugin-check-file';
import editorconfig from 'eslint-plugin-editorconfig';
import eslintPluginImportX from 'eslint-plugin-import-x';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import oxlint from 'eslint-plugin-oxlint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// eslint-disable-next-line import-x/default
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
// eslint-disable-next-line import-x/default
import pluginSecurity from 'eslint-plugin-security';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import sortClassMembers from 'eslint-plugin-sort-class-members';
import tsdoc from 'eslint-plugin-tsdoc';
import unicorn from 'eslint-plugin-unicorn';
// eslint-disable-next-line import-x/namespace, import-x/default, import-x/no-named-as-default, import-x/no-named-as-default-member
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
import {
	config as tsEslintConfig,
	configs as tseslintConfigs,
} from 'typescript-eslint';

const compat = new FlatCompat();

export default tsEslintConfig(
	oxlint.configs['flat/all'],
	unicorn.configs['flat/recommended'],
	eslintPluginImportX.flatConfigs.recommended,
	eslintPluginImportX.flatConfigs.typescript,
	// eslint-disable-next-line import-x/no-named-as-default-member
	pluginSecurity.configs.recommended,
	jsxA11y.flatConfigs.recommended,
	eslintPluginPrettierRecommended,
	...eslintPluginJsonc.configs['flat/recommended-with-jsonc'],
	...eslintPluginJsonc.configs['flat/prettier'],
	{
		ignores: [
			'dist/*',
			'build/*',
			'node_modules/*',
			'**/*.bundle.js',
			'**/index.bundle.*.js',
			'**/googleAnalytics.js',
			'test-results/*',
			'playwright-report/*',
			'**/fonts/*',
			'**/font/*',
		],
	},
	...fixupConfigRules(compat.extends('plugin:editorconfig/noconflict')),
	{
		extends: [js.configs.recommended],
		plugins: {
			'simple-import-sort': simpleImportSort,
			'unused-imports': unusedImports,
			'check-file': checkFile,
			editorconfig: fixupPluginRules(editorconfig),
			'@stylistic': stylistic,
		},

		languageOptions: {
			// eslint-disable-next-line import-x/no-named-as-default-member
			...reactPlugin.configs.flat.recommended.languageOptions,
			ecmaVersion: 'latest',
			globals: {
				...globals.serviceworker,
				...globals.browser,
				...globals.node,
			},
			sourceType: 'module',

			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
			},
		},

		settings: {
			react: {
				pragma: 'React',
				version: 'detect',
			},
		},

		rules: {
			'prettier/prettier': 'error',

			'array-callback-return': [
				'error',
				{
					checkForEach: true,
				},
			],

			'no-await-in-loop': 'error',
			'no-constructor-return': 'error',
			'no-promise-executor-return': 'error',
			'no-self-compare': 'error',
			'no-template-curly-in-string': 'error',
			'no-unmodified-loop-condition': 'error',
			'no-unreachable-loop': 'error',

			'no-use-before-define': [
				'error',
				{
					functions: false,
					classes: true,
					variables: true,
					allowNamedExports: false,
				},
			],

			'require-atomic-updates': 'error',
			'no-lone-blocks': 'error',
			'no-underscore-dangle': 'error',
			camelcase: 'error',
			eqeqeq: 'error',
			'new-cap': 'error',
			'no-array-constructor': 'error',

			'no-console': [
				'error',
				{
					allow: ['error'],
				},
			],

			'no-else-return': [
				'error',
				{
					allowElseIf: false,
				},
			],

			'no-extend-native': 'error',
			'no-lonely-if': 'error',
			'no-param-reassign': 'error',
			'no-return-assign': 'error',
			'no-throw-literal': 'error',
			'no-var': 'error',
			'object-shorthand': 'error',
			'prefer-const': 'error',
			'prefer-rest-params': 'error',
			'prefer-spread': 'error',
			'prefer-template': 'error',
			radix: 'error',
			yoda: 'error',
			'no-unneeded-ternary': 'error',
			'prefer-arrow-callback': 'error',
			'no-nested-ternary': 'error',
			'max-depth': ['error', 5],
			'no-implicit-coercion': 'error',
			'arrow-body-style': ['error', 'as-needed'],
			curly: 'error',

			'@stylistic/lines-between-class-members': [
				'error',
				{
					enforce: [
						{
							blankLine: 'always',
							prev: 'field',
							next: '*',
						},
						{
							blankLine: 'always',
							prev: '*',
							next: 'field',
						},
						{
							blankLine: 'never',
							prev: 'field',
							next: 'field',
						},
						{
							blankLine: 'always',
							prev: '*',
							next: 'method',
						},
						{
							blankLine: 'always',
							prev: 'method',
							next: '*',
						},
					],
				},
				{
					exceptAfterSingleLine: true,
				},
			],

			'@stylistic/padding-line-between-statements': [
				'error',
				{
					blankLine: 'always',

					prev: [
						'directive',
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'case',
						'default',
						'interface',
						'type',
					],

					next: '*',
				},
				{
					blankLine: 'always',
					prev: '*',

					next: [
						'import',
						'cjs-import',
						'export',
						'cjs-export',
						'const',
						'let',
						'var',
						'class',
						'block',
						'block-like',
						'multiline-block-like',
						'function',
						'iife',
						'expression',
						'return',
						'interface',
						'type',
					],
				},
				{
					blankLine: 'always',
					prev: 'function',
					next: 'function-overload',
				},
				{
					blankLine: 'any',
					prev: ['const', 'let', 'var'],
					next: ['const', 'let', 'var'],
				},
				{
					blankLine: 'any',
					prev: 'directive',
					next: 'directive',
				},
				{
					blankLine: 'any',
					prev: 'import',
					next: 'import',
				},
				{
					blankLine: 'any',
					prev: 'cjs-import',
					next: 'cjs-import',
				},
				{
					blankLine: 'any',
					prev: 'export',
					next: 'export',
				},
				{
					blankLine: 'any',
					prev: 'cjs-export',
					next: 'cjs-export',
				},
				{
					blankLine: 'any',
					prev: 'expression',
					next: 'expression',
				},
				{
					blankLine: 'never',
					prev: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
					next: [
						'singleline-const',
						'singleline-let',
						'singleline-var',
					],
				},
				{
					blankLine: 'never',
					prev: 'function-overload',
					next: 'function',
				},
				{
					blankLine: 'never',
					prev: 'function-overload',
					next: 'function-overload',
				},
			],
			'unicorn/filename-case': [
				'error',
				{
					cases: {
						camelCase: true,
						pascalCase: true,
					},
					ignore: ['package-lock.json', /\.d\.ts$/],
				},
			],

			'check-file/folder-naming-convention': [
				'error',
				{
					'./src/*/': 'KEBAB_CASE',
					'./src/components/*/': 'PASCAL_CASE',
					'./src/components/*/components/**': 'PASCAL_CASE',
					'./cypress/**/': 'KEBAB_CASE',
					'./puppeteer/**/': 'KEBAB_CASE',
					'./playwright/**/': 'KEBAB_CASE',
					'./test/**/': 'KEBAB_CASE',
					'./tests/**/': 'KEBAB_CASE',
				},
			],

			'import-x/first': 'error',
			'import-x/newline-after-import': 'error',
			'import-x/no-duplicates': 'error',
			'import-x/no-unresolved': 'error',
			'import-x/no-webpack-loader-syntax': 'error',
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': 'error',
			'unused-imports/no-unused-imports': 'error',

			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_',
				},
			],
		},
	},
	{
		files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.tsx'],
		extends: [
			...tseslintConfigs.recommendedTypeChecked,
			...tseslintConfigs.stylistic,
		],
		plugins: {
			tsdoc,
		},

		settings: {
			'import/resolver': {
				typescript: true,
				node: true,
			},
		},

		rules: {
			'tsdoc/syntax': 'warn',
			'@typescript-eslint/explicit-module-boundary-types': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/no-unnecessary-condition': 'error',
			'@typescript-eslint/no-useless-constructor': 'error',
			'@typescript-eslint/prefer-readonly': 'error',
			'@typescript-eslint/switch-exhaustiveness-check': 'error',
			'@typescript-eslint/no-unnecessary-boolean-literal-compare':
				'error',

			'@typescript-eslint/promise-function-async': [
				'error',
				{
					checkArrowFunctions: false,
				},
			],

			'@typescript-eslint/no-confusing-void-expression': [
				'error',
				{
					ignoreArrowShorthand: true,
				},
			],

			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'class',
					format: ['PascalCase'],
				},
				{
					selector: 'variable',
					types: ['boolean'],
					format: ['PascalCase', 'UPPER_CASE'],

					prefix: [
						'is',
						'should',
						'has',
						'can',
						'did',
						'will',
						'IS_',
						'SHOULD_',
						'HAS_',
						'CAN_',
						'DID_',
						'WILL_',
					],
				},
				{
					selector: 'function',
					format: ['camelCase', 'PascalCase'],
				},
				{
					selector: 'typeLike',
					format: ['PascalCase'],
				},
			],

			'unused-imports/no-unused-vars': 'off',

			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					args: 'all',
					argsIgnorePattern: '^_',
					caughtErrors: 'all',
					caughtErrorsIgnorePattern: '^_',
					destructuredArrayIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					ignoreRestSiblings: true,
				},
			],

			'@typescript-eslint/member-ordering': [
				'error',
				{
					default: [
						'signature',
						'call-signature',
						'public-instance-field',
						'protected-instance-field',
						'private-instance-field',
						'#private-instance-field',
						'public-static-field',
						'protected-static-field',
						'private-static-field',
						'#private-static-field',
						'public-decorated-field',
						'protected-decorated-field',
						'private-decorated-field',
						'public-abstract-field',
						'protected-abstract-field',
						'public-field',
						'protected-field',
						'private-field',
						'#private-field',
						'instance-field',
						'static-field',
						'decorated-field',
						'abstract-field',
						'field',
						'static-initialization',
						'public-constructor',
						'protected-constructor',
						'private-constructor',
						'constructor',
						'public-instance-method',
						'protected-instance-method',
						'private-instance-method',
						'#private-instance-method',
						'public-static-method',
						'protected-static-method',
						'private-static-method',
						'#private-static-method',
						'public-decorated-method',
						'protected-decorated-method',
						'private-decorated-method',
						'public-abstract-method',
						'protected-abstract-method',
						'public-method',
						'protected-method',
						'private-method',
						'#private-method',
						'instance-method',
						'static-method',
						'decorated-method',
						'abstract-method',
						'method',
						'public-instance-get',
						'protected-instance-get',
						'private-instance-get',
						'#private-instance-get',
						'public-static-get',
						'protected-static-get',
						'private-static-get',
						'#private-static-get',
						'public-decorated-get',
						'protected-decorated-get',
						'private-decorated-get',
						'public-abstract-get',
						'protected-abstract-get',
						'public-get',
						'protected-get',
						'private-get',
						'#private-get',
						'instance-get',
						'static-get',
						'decorated-get',
						'abstract-get',
						'get',
						'public-instance-set',
						'protected-instance-set',
						'private-instance-set',
						'#private-instance-set',
						'public-static-set',
						'protected-static-set',
						'private-static-set',
						'#private-static-set',
						'public-decorated-set',
						'protected-decorated-set',
						'private-decorated-set',
						'public-abstract-set',
						'protected-abstract-set',
						'public-set',
						'protected-set',
						'private-set',
						'#private-set',
						'instance-set',
						'static-set',
						'decorated-set',
						'abstract-set',
						'set',
					],
				},
			],
		},
	},
	{
		files: ['**/*.tsx'],

		rules: {
			'@typescript-eslint/no-misused-promises': [
				'error',
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
		},
	},
	{
		files: ['**/*.tsx', '**/*.jsx'],
		// eslint-disable-next-line import-x/no-named-as-default-member
		...reactPlugin.configs.flat.recommended,
		// eslint-disable-next-line import-x/no-named-as-default-member
		...reactPlugin.configs.flat['jsx-runtime'],
		plugins: {
			react: reactPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},

		rules: {
			...reactHooks.configs.recommended.rules,

			'react/boolean-prop-naming': [
				'error',
				{
					rule: '^(is|has|can|should|did|will)[A-Z]([A-Za-z0-9]*)$',
					message:
						"'{{ propName }}' must start with 'is', 'has', or 'can'. For example: `isEnabled`.",
					validateNested: true,
				},
			],

			'react/button-has-type': [
				'error',
				{
					button: true,
					submit: true,
					reset: false,
				},
			],

			'react/default-props-match-prop-types': [
				'error',
				{
					allowRequiredDefaults: false,
				},
			],

			'react/destructuring-assignment': ['error', 'always'],

			'react/forbid-foreign-prop-types': [
				'warn',
				{
					allowInPropTypes: true,
				},
			],

			'react/forbid-prop-types': [
				'error',
				{
					forbid: ['any', 'array', 'object'],
					checkContextTypes: true,
					checkChildContextTypes: true,
				},
			],

			'react/function-component-definition': [
				'error',
				{
					namedComponents: ['function-declaration', 'arrow-function'],
					unnamedComponents: 'arrow-function',
				},
			],

			'react/hook-use-state': [
				'error',
				{
					allowDestructuredState: true,
				},
			],

			'react/iframe-missing-sandbox': 'error',
			'react/jsx-boolean-value': ['error', 'never'],
			'@stylistic/jsx-closing-bracket-location': [
				'error',
				'line-aligned',
			],
			'@stylistic/jsx-closing-tag-location': 'error',

			'@stylistic/jsx-curly-brace-presence': [
				'error',
				{
					props: 'never',
					children: 'never',
					propElementValues: 'always',
				},
			],

			'@stylistic/jsx-curly-newline': [
				'error',
				{
					multiline: 'consistent',
					singleline: 'consistent',
				},
			],

			'@stylistic/jsx-curly-spacing': [
				'error',
				'never',
				{
					allowMultiline: true,
				},
			],

			'@stylistic/jsx-equals-spacing': ['error', 'never'],

			'react/jsx-filename-extension': [
				'error',
				{
					extensions: ['.jsx', '.tsx'],
				},
			],

			'@stylistic/jsx-first-prop-new-line': [
				'error',
				'multiline-multiprop',
			],
			'react/jsx-fragments': 'error',

			'react/jsx-handler-names': [
				'error',
				{
					checkLocalVariables: true,
				},
			],

			'@stylistic/jsx-indent-props': ['error', 'tab'],

			'@stylistic/jsx-max-props-per-line': [
				'error',
				{
					maximum: 1,
					when: 'multiline',
				},
			],

			'react/jsx-no-bind': [
				'error',
				{
					ignoreRefs: true,
					allowArrowFunctions: true,
					allowFunctions: true,
					allowBind: false,
					ignoreDOMComponents: true,
				},
			],

			'react/jsx-no-constructed-context-values': 'error',
			'react/jsx-no-script-url': 'error',
			'react/jsx-no-useless-fragment': 'error',

			'@stylistic/jsx-pascal-case': [
				'error',
				{
					allowAllCaps: true,
				},
			],

			'@stylistic/jsx-props-no-multi-spaces': 'error',

			'@stylistic/jsx-tag-spacing': [
				'error',
				{
					beforeSelfClosing: 'always',
				},
			],

			'@stylistic/jsx-wrap-multilines': [
				'error',
				{
					declaration: 'parens-new-line',
					assignment: 'parens-new-line',
					return: 'parens-new-line',
					arrow: 'parens-new-line',
					condition: 'parens-new-line',
					logical: 'parens-new-line',
					prop: 'parens-new-line',
				},
			],

			'react/no-access-state-in-setstate': 'error',
			'react/no-array-index-key': 'error',
			'react/no-arrow-function-lifecycle': 'error',
			'react/no-danger': 'warn',
			'react/no-did-update-set-state': 'error',
			'react/no-invalid-html-attribute': 'error',
			'react/no-namespace': 'error',
			'react/no-redundant-should-component-update': 'error',
			'react/no-this-in-sfc': 'error',
			'react/no-typos': 'error',
			'react/no-unstable-nested-components': 'error',
			'react/no-unused-class-component-methods': 'error',
			'react/no-unused-prop-types': 'error',
			'react/no-unused-state': 'error',
			'react/no-will-update-set-state': 'error',
			'react/prefer-es6-class': ['error', 'always'],
			'react/prefer-exact-props': 'error',

			'react/prefer-stateless-function': [
				'error',
				{
					ignorePureComponents: true,
				},
			],

			'@stylistic/jsx-self-closing-comp': 'error',

			'react/sort-comp': [
				'error',
				{
					order: [
						'static-variables',
						'static-methods',
						'instance-variables',
						'lifecycle',
						'/^handle.+$/',
						'/^on.+$/',
						'getters',
						'setters',
						'/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
						'instance-methods',
						'everything-else',
						'rendering',
					],

					groups: {
						lifecycle: [
							'displayName',
							'propTypes',
							'contextTypes',
							'childContextTypes',
							'mixins',
							'statics',
							'defaultProps',
							'constructor',
							'getDefaultProps',
							'getInitialState',
							'state',
							'getChildContext',
							'getDerivedStateFromProps',
							'componentWillMount',
							'UNSAFE_componentWillMount',
							'componentDidMount',
							'componentWillReceiveProps',
							'UNSAFE_componentWillReceiveProps',
							'shouldComponentUpdate',
							'componentWillUpdate',
							'UNSAFE_componentWillUpdate',
							'getSnapshotBeforeUpdate',
							'componentDidUpdate',
							'componentDidCatch',
							'componentWillUnmount',
						],

						rendering: ['/^render.+$/', 'render'],
					},
				},
			],

			'react/state-in-constructor': ['error', 'always'],
			'react/static-property-placement': ['error', 'property assignment'],
			'react/style-prop-object': 'error',

			'@stylistic/jsx-sort-props': [
				'warn',
				{
					callbacksLast: true,
					shorthandFirst: true,
					reservedFirst: true,
					multiline: 'last',
				},
			],

			'react-refresh/only-export-components': [
				'warn',
				{
					allowConstantExport: true,
				},
			],
		},
	},
	{
		files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/jsx'],

		plugins: {
			'sort-class-members': sortClassMembers,
		},

		rules: {
			'sort-class-members/sort-class-members': [
				'error',
				{
					order: [
						'[properties]',
						'[conventional-private-properties]',
						'[static-properties]',
						'constructor',
						'[methods]',
						'[conventional-private-methods]',
						'[static-methods]',
					],

					accessorPairPositioning: 'getThenSet',
				},
			],
		},
	},
);
