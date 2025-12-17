
import { Outlet } from 'react-router'
import { Header } from './ui/header/Header'
import { Footer } from './ui/footer/Footer'

export function Landing() {
	return (
		<>
			<Header />
			<Outlet />
			{/* <Footer /> */}
		</>
	)
}
