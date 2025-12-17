import { type Config } from 'prettier'

const config: Config = {
	trailingComma: 'none',
	useTabs: true,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	printWidth: 110,
	plugins: ['prettier-plugin-tailwindcss']
}

export default config
