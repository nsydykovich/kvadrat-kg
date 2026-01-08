import RealEstateCard from '@/entities/real-estate/ui/RealEstateCard'
import { REAL_ESTATE_LIST } from '@/entities/real-estate/config/data'

const RealEstateCardList = () => {
	const handleEstateClick = (estateDescription: string) => {
		console.log('Выбрана квартира:', estateDescription)
	}

	return (
		<ul className={'grid grid-cols-1 gap-4 sm:grid-cols-2'}>
			{REAL_ESTATE_LIST.map((realEstate) => (
				<li key={realEstate.id}>
					<RealEstateCard
						description={realEstate.description}
						square={realEstate.square}
						price={realEstate.price}
						onClick={() => handleEstateClick(realEstate.description)}
					/>
				</li>
			))}
		</ul>
	)
}

export default RealEstateCardList
