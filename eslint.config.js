import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import boundaries from 'eslint-plugin-boundaries'
import { defineConfig, globalIgnores } from 'eslint/config'

// 1. Настройка для React (Хуки и Refresh)
const reactConfig = {
	files: ['**/*.{ts,tsx}'],
	languageOptions: {
		ecmaVersion: 2020,
		globals: globals.browser
	},
	plugins: {
		'react-hooks': reactHooks,
		'react-refresh': reactRefresh
	},
	rules: {
		...reactHooks.configs.recommended.rules,
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
	}
}

// 2. Настройка FSD (Boundaries + Alias Resolver)
const fsdConfig = {
	files: ['**/*.{ts,tsx}'],
	plugins: {
		boundaries
	},
	settings: {
		// Важно для поддержки алиасов @/
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true
			}
		},
		'boundaries/include': ['src/**/*'],
		'boundaries/elements': [
			{ type: 'app', pattern: 'src/app/**/*' },
			{ type: 'pages', pattern: 'src/pages/**/*' },
			{ type: 'widgets', pattern: 'src/widgets/**/*' },
			{ type: 'features', pattern: 'src/features/**/*' },
			{ type: 'entities', pattern: 'src/entities/**/*' },
			{ type: 'shared', pattern: 'src/shared/**/*' }
		]
	},
	rules: {
		'boundaries/element-types': [
			'error',
			{
				default: 'disallow',
				rules: [
					{
						from: 'app',
						allow: ['pages', 'widgets', 'features', 'entities', 'shared']
					},
					{
						from: 'pages',
						allow: ['widgets', 'features', 'entities', 'shared']
					},
					{
						from: 'widgets',
						allow: ['features', 'entities', 'shared']
					},
					{
						from: 'features',
						allow: ['entities', 'shared']
					},
					{
						from: 'entities',
						allow: ['shared']
					},
					{
						from: 'shared',
						allow: ['shared']
					}
				]
			}
		]
	}
}

// 3. Собираем всё вместе через defineConfig
export default defineConfig([
	globalIgnores(['dist', '.git', 'node_modules']),
	js.configs.recommended,

	// Базовые TS правила (распыляем массив, чтобы не было ошибки типов)
	...tseslint.configs.recommended,

	// Наши модули
	reactConfig,
	fsdConfig
])
