import { Sidebar, SidebarHeader, SidebarSection, SidebarDivider } from '@/shared/ui/Sidebar'
import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList.tsx'

const propertyTypes = [
	{ id: 'apartment', label: 'Квартира', defaultChecked: true },
	{ id: 'office', label: 'Офис' },
	{ id: 'house', label: 'Дома' },
	{ id: 'villa', label: 'Виллы', defaultChecked: true }
]

const amenities = [
	{ id: 'garden', label: 'Сад' },
	{ id: 'gym', label: 'Спортзал' },
	{ id: 'elevator', label: 'Лифт' },
	{ id: 'garage', label: 'Гаражи' },
	{ id: 'parking', label: 'Стоянка' },
	{ id: 'fireplace', label: 'Камин' },
	{ id: 'pool', label: 'Бассейн' },
	{ id: 'playground', label: 'Детская площадка' },
	{ id: 'clubhouse', label: 'Клубный дом' },
	{ id: 'laundry', label: 'Прачечная' }
]

export const RealEstatesPage = () => {
	return (
		<section className={'flex gap-4 p-4'}>
			<Sidebar>
				<SidebarHeader>
					<h2 className={'text-lg font-semibold tracking-wide text-white'}>НАЙТИ СВОЮ НЕДВИЖИМОСТЬ</h2>
				</SidebarHeader>

				<SidebarSection title="Местоположение">
					<select defaultValue="">
						<option value="" disabled>
							Выберите местоположение
						</option>
						<option value="bishkek">Бишкек</option>
						<option value="osh">Ош</option>
						<option value="jalal-abad">Джалал-Абад</option>
					</select>
				</SidebarSection>

				<SidebarDivider />

				<SidebarSection title="Тип недвижимости">
					<div className={'flex flex-col gap-3'}>
						{propertyTypes.map((type) => (
							<div className={'flex'}>
								<input type="checkbox" key={type.id} id={type.id} defaultChecked={type.defaultChecked} />
								<label htmlFor="{type.id}">{type.label}</label>
							</div>
						))}
					</div>
				</SidebarSection>

				<SidebarDivider />

				<SidebarSection title="Цена">
					<select defaultValue="1m-3m">
						<option value="1m-3m">от 1млн - до 3млн</option>
						<option value="3m-5m">от 3млн - до 5млн</option>
						<option value="5m-10m">от 5млн - до 10млн</option>
						<option value="10m+">от 10млн+</option>
					</select>
				</SidebarSection>

				<SidebarDivider />

				{/* <SidebarSection title="Площадь земельного участка">
					<RangeSlider min={0} max={5000} step={100} value={areaRange} onChange={setAreaRange} />
				</SidebarSection> */}

				<SidebarDivider />

				<SidebarSection title="Удобства">
					<div className={'grid grid-cols-2 gap-x-4 gap-y-3'}>
						{amenities.map((amenity) => (
							<div className={'flex'}>
								<input type="checkbox" key={amenity.id} id={amenity.id} />
								<label htmlFor="{amenity.id}">{amenity.label}</label>
							</div>
						))}
					</div>
				</SidebarSection>
			</Sidebar>

			<div className={'flex-1'}>
				<RealEstateCardList />
			</div>
		</section>
	)
}
