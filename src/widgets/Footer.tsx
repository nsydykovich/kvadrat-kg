import { Card } from '@/shared/ui/Card.tsx'

export const Footer = () => {
	return (
		<footer className={'bg-footer py-8'}>
			<div className={'container m-auto'}>
				<div className={'flex justify-between'}>
					<section>
						<h5 className="uppercase">kvadrat.kg</h5>
					</section>
					<section>
						<Card title={'Hello'} description={'This is hello world card'}>
							Привет
						</Card>
					</section>
					<section>
						<h5 className="uppercase">kvadrat.kg</h5>
					</section>
				</div>
			</div>
		</footer>
	)
}
