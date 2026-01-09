import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList.tsx'
import RealEstateFilterSidebar from '@/widgets/RealEstateFilterSidebar/ui/RealEstateFilterSidebar.tsx'

export const RealEstatesPage = () => {
	return (
		<section className={'container mx-auto flex gap-4 p-4'}>
			<RealEstateFilterSidebar />

			<div className={'flex-1'}>
				<RealEstateCardList />
			</div>
		</section>
	)
}
