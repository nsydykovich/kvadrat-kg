type NavbarLink = {
	name: string
	path: string
}

const navLinks: NavbarLink[] = [
	{ name: 'Главная', path: '/' },
	{ name: 'Купить недвижимость', path: '/' },
	{ name: 'Услуги', path: '/#uslugi' },
	{ name: 'О компании', path: '/' },
	{ name: 'FAQ', path: '/' }
]

export default navLinks