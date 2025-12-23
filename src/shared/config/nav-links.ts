import { PathConstants } from '@/shared/config/path-constants.ts'

type NavbarLink = {
	name: string
	path: string
}

const navLinks: NavbarLink[] = [
	{ name: 'Главная', path: PathConstants.HOME },
	{ name: 'Купить недвижимость', path: PathConstants.HOME },
	{ name: 'Услуги', path: PathConstants.HOME },
	{ name: 'О компании', path: PathConstants.ABOUT },
	{ name: 'FAQ', path: PathConstants.HOME }
]

export default navLinks
