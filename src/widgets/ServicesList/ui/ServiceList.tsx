import { SERVICES_LIST } from '@/entities/service/config/data'
import ServiceCard from '@/entities/service/ui/ServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export const ServiceList = () => {
	const handleServiceClick = (serviceTitle: string) => {
		console.log('Выбрана услуга:', serviceTitle)
	}

	return (
		<div className={'px-4'}>
			<h2 className="block py-8 text-4xl font-semibold uppercase">Наши услуги</h2>
			<div className="overflow-x-hidden py-8">
				<Swiper
					spaceBetween={12}
					slidesPerView={1}
					breakpoints={{
						540: {
							slidesPerView: 2,
							spaceBetween: 12
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 24
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 24
						},
						1200: {
							slidesPerView: 5,
							spaceBetween: 24
						}
					}}
					className={'overflow-visible!'}
					freeMode={true}
				>
					{SERVICES_LIST.map((service) => (
						<SwiperSlide key={service.id}>
							<ServiceCard
								icon={service.icon}
								title={service.title}
								description={service.description}
								onClick={() => handleServiceClick(service.title)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}

export default ServiceList
