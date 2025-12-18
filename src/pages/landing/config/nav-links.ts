type NavbarLink = {
	name: string
	path: string
}

const navLinks: NavbarLink[] = [
	{ name: 'Главная', path: '/' },
	{ name: 'Купить недвижимость', path: '/' },
	{ name: 'Услуги', path: '/' },
	{ name: 'О компании', path: '/about' },
	{ name: 'FAQ', path: '/' }
]

export default navLinks
