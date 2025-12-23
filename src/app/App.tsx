import { useEffect } from 'react'
import { AppRouter } from './providers/router/AppRouter'
import { useScrollStore } from './store/UseScrollStore'
import '@/app/styles/fonts.css'
import '@/app/styles/index.css'
import { Providers } from '@/app/providers'

export function App() {
	const setScrolled = useScrollStore((state) => state.setScrolled)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [setScrolled])
	return (
		<Providers>
			<AppRouter />
		</Providers>
	)
}
