import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '@/pages/Home'
import { AboutPage } from '@/pages/About'
import { PathConstants } from '@/shared/config/path-constants'
import { BaseLayout } from '@/widgets/layouts/BaseLayout'
import { NotFoundPage } from '@/pages/NotFound'
import { RealEstatesPage } from '@/pages/RealEstates'

export const AppRouter = () => {
	return (
		<Routes>
			<Route element={<BaseLayout />}>
				<Route path={PathConstants.HOME} element={<HomePage />} />
				<Route path={PathConstants.ABOUT} element={<AboutPage />} />
				<Route path={PathConstants.REAL_ESTATES} element={<RealEstatesPage />} />
			</Route>

			<Route path={PathConstants.NOT_FOUND} element={<NotFoundPage />} />
			<Route path="*" element={<Navigate to={PathConstants.NOT_FOUND} replace />} />
		</Routes>
	)
}
