import { Card, CardAction, CardDescription, CardHeader } from '@/shared/ui/Card/Card.tsx'
import type { Service } from '../model/service.ts'
import { Button } from '@/shared/ui/Button.tsx'

interface ServiceCardProps extends Omit<Service, 'id'> {
	onClick?: () => void
}

const ServiceCard = ({ title, icon: Icon, onClick }: ServiceCardProps) => {
	return (
		<Card className="bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
			<CardHeader className="bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
				<Icon className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
			</CardHeader>
			<CardDescription className="max-w-3/4 text-lg">{title}</CardDescription>
			<CardAction>
				<Button
					variant={'secondary'}
					className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2"
					onClick={onClick}
					asChild
				>
					<a href="#">Получить услугу</a>
				</Button>
			</CardAction>
		</Card>
	)
}

export default ServiceCard
