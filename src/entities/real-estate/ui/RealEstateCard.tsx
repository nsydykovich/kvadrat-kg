import { Card, CardAction, CardContent, CardDescription, CardHeader } from '@/shared/ui/Card/Card.tsx'
import type { RealEstate } from '../model/real-estate.ts'
import { Button } from '@/shared/ui/Button.tsx'
import { Carousel, CarouselImage, CarouselSlide } from '@/shared/ui/Carousel'

import realEstateImg from '@/shared/assets/pictures/real-estate-sample.jpg'

interface RealEstateCardProps extends Omit<RealEstate, 'id'> {
	onClick?: () => void
}

const RealEstateCard = ({ description, square, price, onClick }: RealEstateCardProps) => {
	return (
		<Card className={'bg-foreground grid rounded p-4 text-xs md:text-lg'}>
			<CardHeader>
				<Carousel slidesPerView={1}>
					<CarouselSlide className={'aspect-video'}>
						<CarouselImage className={'h-full w-full object-cover'} src={realEstateImg} alt="random img #1" />
					</CarouselSlide>
					<CarouselSlide className={'aspect-video'}>
						<CarouselImage className={'h-full w-full object-cover'} src={realEstateImg} alt="random img #2" />
					</CarouselSlide>
					<CarouselSlide className={'aspect-video'}>
						<CarouselImage className={'h-full w-full object-cover'} src={realEstateImg} alt="random img #3" />
					</CarouselSlide>
					<CarouselSlide className={'aspect-video'}>
						<CarouselImage className={'h-full w-full object-cover'} src={realEstateImg} alt="random img #4" />
					</CarouselSlide>
					<CarouselSlide className={'aspect-video'}>
						<CarouselImage className={'h-full w-full object-cover'} src={realEstateImg} alt="random img #5" />
					</CarouselSlide>
				</Carousel>
			</CardHeader>
			<CardDescription>{description}</CardDescription>
			<CardContent>
				<article className={'real-estate__square flex justify-between'}>
					<div>Квадрат:</div>
					<div>
						{square}м<sup>2</sup>
					</div>
				</article>

				<article className={'real-estate__price flex justify-between'}>
					<div>Цена:</div>
					<div>{price}&#36;</div>
				</article>
			</CardContent>
			<CardAction>
				<Button className={'rounded-full px-2 py-2'} onClick={onClick} asChild>
					<a href="#">Подробнее</a>
				</Button>
			</CardAction>
		</Card>
	)
}

export default RealEstateCard
