import { FiMenu, FiX } from 'react-icons/fi'
import navLinks from '@/shared/config/nav-links.ts'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className={`bg-primary duration-300' } fixed top-0 z-50 w-full transition-colors`}>
			<nav className="p-4 md:p-6 xl:p-8">
				<div className="container mx-auto flex items-center justify-between">
					<span className="text-2xl font-medium">KVADRAT.KG</span>
					<ul className="hidden gap-4 md:flex">
						{navLinks.map((link, i) => (
							<li key={i}>
								<Link to={link.path}>{link.name}</Link>
							</li>
						))}
					</ul>
					<div className="flex items-center md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-foreground focus:outline-none"
							aria-label="Toggle menu"
						>
							{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>
			</nav>

			{isOpen && (
				<nav className="bg-accent fixed top-14 right-0 w-3/4 pt-4 pb-4 pl-8 md:hidden">
					<ul className="divide-foreground text-foreground flex flex-col gap-4 divide-y text-[16px]">
						{navLinks.map((link, i) => (
							<li key={i} className="pb-4">
								<Link onClick={() => setIsOpen(false)} to={link.path}>
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}
