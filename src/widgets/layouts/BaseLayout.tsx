import { Outlet } from 'react-router-dom'
import { Header } from '@/widgets/Header.tsx'
import { Footer } from '@/widgets/Footer.tsx'

export function BaseLayout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="grow">
				<Outlet />
			</main>
			<Footer />
		</div>
	)
}
