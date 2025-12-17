import { useEffect } from 'react'
import { RouterProvider } from 'react-router'
import './index.css'
import { myRouter } from './route'
import { useScrollStore } from './store/UseScrollStore'

export function App() {
	const setScrolled = useScrollStore((state) => state.setScrolled)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [setScrolled])
	return <RouterProvider router={myRouter} />
}
