import LandingHero from '@/widgets/LandingHero/ui/LandingHero.tsx'
import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList'
import ServiceList from '@/widgets/ServicesList/ui/ServiceList.tsx'

export const HomePage = () => {
	return (
		<>
			<LandingHero />
			<section id={'services'} className={'container mx-auto px-4'}>
				<ServiceList />
			</section>
			<section id={'real-estates'} className={'container mx-auto px-4'}>
				<p className={'xl:1/2 py-8 text-2xl uppercase'}>
					<span className={"after:content-['_'] xl:after:content-['']"}>
						Выбирайте квартиру для жизни или инвестиций. Предложение доступны
					</span>
					<br className={'hidden xl:block'} />
					<span className={'bg-primary'}>к покупке прямо сейчас</span>
				</p>

				<RealEstateCardList />
			</section>
		</>
	)
}
