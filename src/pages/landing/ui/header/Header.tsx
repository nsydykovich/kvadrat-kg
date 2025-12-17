import { Link, NavLink } from 'react-router'
import { FiMenu, FiX } from 'react-icons/fi'
import navLinks from '../../../../config/nav-links'
import { useState } from 'react'

export const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<header className={`bg-background-alt duration-300' } fixed top-0 z-50 w-full transition-colors`}>
			<nav className="p-4 md:p-6 xl:p-8">
				<div className="container mx-auto flex items-center justify-between">
					<div>KVADRAT.KG</div>
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
							className="text-white focus:outline-none"
							aria-label="Toggle menu"
						>
							{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
						</button>
					</div>
				</div>
			</nav>

			{isOpen && (
				<nav className="fixed top-14 right-0 w-3/4 bg-[#A40A00] pl-8 pt-4 pb-4 md:hidden">
					<ul className="flex flex-col gap-4 text-[16px] divide-y divide-gray-50/50 text-white">
						{navLinks.map((link, i) => (
							<li key={i} className='pb-4'>
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
