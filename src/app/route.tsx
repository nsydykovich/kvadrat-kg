import { createBrowserRouter, Navigate } from 'react-router'
import { Landing } from '../pages/landing'
import Home from '../pages/landing/ui/Home'
import About from '../pages/about/About'
import NotFound from '../pages/not-found/NotFound'

export const myRouter = createBrowserRouter([
	{
		path: '',
		element: <Landing />,
		children: [
			{ path: '', element: <Home /> },
			{ path: 'about', element: <About /> },
			{ path: '404', element: <NotFound /> },
			{
				path: '*',
				// Immediately redirect to /404
				element: <Navigate to="/404" replace />
			}
		]
	}
])
