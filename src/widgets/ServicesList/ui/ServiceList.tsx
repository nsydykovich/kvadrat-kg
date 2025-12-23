import { PiHandshakeLight } from 'react-icons/pi'
import { FaCheck } from 'react-icons/fa6'
import InvestmentSelection from '@/shared/assets/icons-tsx/InvestmentSelection.tsx'
import PersonSelect from '@/shared/assets/icons-tsx/PersonSelect.tsx'
import { Button } from '@/shared/ui/Button.tsx'

function ServiceList() {
	return (
		<section id="services" className="flex flex-col items-center justify-center p-4">
			<h2 className="block py-8 text-4xl font-semibold uppercase">Наши услуги</h2>

			<div className="text-background grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				<div
					className={
						'bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl'
					}
				>
					<span
						className={
							'bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3'
						}
					>
						<FaCheck className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
					</span>
					<p className="max-w-3/4 text-lg">Продать недвижимость</p>
					<Button
						variant={'secondary'}
						className={'absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2'}
						asChild
					>
						<a href={'#'}>Получить услугу</a>
					</Button>
				</div>
				<div
					className={
						'bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl'
					}
				>
					<span
						className={
							'bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3'
						}
					>
						<PiHandshakeLight className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
					</span>
					<p className="max-w-3/4 text-lg">Срочный выкуп недвижимости</p>
					<Button
						variant={'secondary'}
						className={'absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2'}
						asChild
					>
						<a href={'#'}>Получить услугу</a>
					</Button>
				</div>
				<div
					className={
						'bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl'
					}
				>
					<span
						className={
							'bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3'
						}
					>
						<InvestmentSelection className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
					</span>
					<p className="max-w-3/4 text-lg">Инвестиции в недвижимость</p>
					<Button
						variant={'secondary'}
						className={'absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2'}
						asChild
					>
						<a href={'#'}>Получить услугу</a>
					</Button>
				</div>
				<div
					className={
						'bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl'
					}
				>
					<span
						className={
							'bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3'
						}
					>
						<InvestmentSelection className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
					</span>
					<p className="max-w-3/4 text-lg">Подобрать недвижимость</p>
					<Button
						variant={'secondary'}
						className={'absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2'}
						asChild
					>
						<a href={'#'}>Получить услугу</a>
					</Button>
				</div>
				<div
					className={
						'bg-foreground relative flex h-36! w-auto! items-center justify-center overflow-visible rounded p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl'
					}
				>
					<span
						className={
							'bg-primary absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3'
						}
					>
						<PersonSelect className={'text-foreground h-4 w-4 lg:h-6 lg:w-6'} />
					</span>
					<p className="max-w-3/4 text-lg">Юридические сопровождение</p>
					<Button
						variant={'secondary'}
						className={'absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full px-2 py-2'}
						asChild
					>
						<a href={'#'}>Получить услугу</a>
					</Button>
				</div>
			</div>
		</section>
	)
}

export default ServiceList
