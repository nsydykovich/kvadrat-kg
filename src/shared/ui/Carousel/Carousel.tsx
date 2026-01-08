import { cva, type VariantProps } from 'class-variance-authority'
import { forwardRef, type HTMLAttributes } from 'react'
import { cn } from '@/shared/lib/utils.ts'
import { Swiper, type SwiperRef, SwiperSlide, type SwiperSlideProps } from 'swiper/react'
import 'swiper/css'

const carouselVariants = cva('w-full', {
	variants: {
		variant: {
			normal: ''
		}
	},
	defaultVariants: {
		variant: 'normal'
	}
})

interface CarouselProps
	extends
		Omit<
			React.HTMLAttributes<HTMLElement>,
			| 'onProgress'
			| 'onClick'
			| 'onTouchEnd'
			| 'onTouchMove'
			| 'onTouchStart'
			| 'onTransitionEnd'
			| 'onKeyPress'
			| 'onDoubleClick'
			| 'onScroll'
			| 'onResize'
		>,
		VariantProps<typeof carouselVariants> {
	className?: string
	slidesPerView?: number | 'auto'
}

const Carousel = forwardRef<SwiperRef, CarouselProps>(
	({ className, variant, children, slidesPerView, ...props }, ref) => {
		return (
			<div className={'grid'}>
				<Swiper
					ref={ref}
					className={cn('', carouselVariants({ variant, className }))}
					slidesPerView={slidesPerView}
					{...(props as React.ComponentProps<typeof Swiper>)}
				>
					{children}
				</Swiper>
			</div>
		)
	}
)

interface CarouselSlideProps extends SwiperSlideProps {
	children?: React.ReactNode
}

const CarouselSlide = ({ children, className, ...props }: CarouselSlideProps) => {
	return (
		<SwiperSlide className={cn(className)} {...props}>
			{children}
		</SwiperSlide>
	)
}
CarouselSlide.displayName = 'SwiperSlide'

interface CarouselImageProps extends HTMLAttributes<HTMLImageElement> {
	src: string
	alt?: string
}

const CarouselImage = forwardRef<HTMLImageElement, CarouselImageProps>(
	({ className, src, alt, ...props }, ref) => {
		return <img ref={ref} src={src} alt={alt} className={cn(className)} {...props} />
	}
)

export { Carousel, CarouselSlide, CarouselImage }
