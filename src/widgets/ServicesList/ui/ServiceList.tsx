import { SERVICES_LIST } from '@/entities/service/config/data'
import ServiceCard from '@/entities/service/ui/ServiceCard'

export const ServiceList = () => {
	const handleServiceClick = (serviceTitle: string) => {
		console.log('Выбрана услуга:', serviceTitle)
	}

	return (
		<section id="services" className="flex flex-col items-center justify-center p-4">
			<h2 className="block py-8 text-4xl font-semibold uppercase">Наши услуги</h2>

			<div className="text-background grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				{SERVICES_LIST.map((service) => (
					<ServiceCard
						key={service.id}
						icon={service.icon}
						title={service.title}
						description={service.description}
						onClick={() => handleServiceClick(service.title)}
					/>
				))}
			</div>
		</section>
	)
}

export default ServiceList
