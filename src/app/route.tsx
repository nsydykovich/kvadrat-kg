import { createBrowserRouter } from 'react-router'
import { Landing } from '../pages/landing'
import Home from '../pages/landing/ui/Home'

export const myRouter = createBrowserRouter([
	{
		path: '',
		element: <Landing />,
		children: [{ path: '', element: <Home /> }]
	}
])
