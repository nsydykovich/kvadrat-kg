import LandingHero from '@/widgets/LandingHero/ui/LandingHero.tsx'
// import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList'
import ServiceList from '@/widgets/ServicesList/ui/ServiceList.tsx'

export const HomePage = () => {
	return (
		<>
			<LandingHero />
			<section id={'services'} className="container mx-auto">
				<ServiceList />
			</section>
			<section id={'real-estates'} className="container mx-auto">
				{/*<RealEstateCardList />*/}
			</section>
		</>
	)
}
