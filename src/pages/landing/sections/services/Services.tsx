import { PiHandshakeLight } from 'react-icons/pi'
import { FaCheck } from 'react-icons/fa6'
import InvestmentSelection from '../../../../shared/assets/icons-tsx/InvestmentSelection'
import PersonSelect from '../../../../shared/assets/icons-tsx/PersonSelect'

function Services() {
	return (
		<section id="services" className="flex flex-col items-center justify-center p-4">
			<h2 className="block py-8 text-4xl font-semibold uppercase">Наши услуги</h2>

			<div className="grid grid-cols-1 gap-10 py-12 text-black sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
				<div className="relative flex h-36! w-auto! items-center justify-center overflow-visible rounded bg-white p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
					<span className="bg-background-alt absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
						<FaCheck className="h-4 w-4 text-white lg:h-6 lg:w-6" />
					</span>
					<p className="max-w-3/4 text-lg">Продать недвижимость</p>
					<button className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-[#2D2D2E] px-2 py-1 text-white">
						Получить услугу
					</button>
				</div>
				<div className="relative flex h-36! w-auto! items-center justify-center overflow-visible rounded bg-white p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
					<span className="bg-background-alt absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
						<PiHandshakeLight className="h-4 w-4 text-white lg:h-6 lg:w-6" />
					</span>
					<p className="max-w-3/4 text-lg">Срочный выкуп недвижимости</p>
					<button className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-[#2D2D2E] px-2 py-1 text-white">
						Получить услугу
					</button>
				</div>
				<div className="relative flex h-36! w-auto! items-center justify-center overflow-visible rounded bg-white p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
					<span className="bg-background-alt absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
						<InvestmentSelection className="h-4 w-4 text-white lg:h-6 lg:w-6" />
					</span>
					<p className="max-w-3/4 text-lg">Инвестиции в недвижимость</p>
					<button className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-[#2D2D2E] px-2 py-1 text-white">
						Получить услугу
					</button>
				</div>
				<div className="relative flex h-36! w-auto! items-center justify-center overflow-visible rounded bg-white p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
					<span className="bg-background-alt absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
						<InvestmentSelection className="h-4 w-4 text-white lg:h-6 lg:w-6" />
					</span>
					<p className="max-w-3/4 text-lg">Подобрать недвижимость</p>
					<button className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-[#2D2D2E] px-2 py-1 text-white">
						Получить услугу
					</button>
				</div>
				<div className="relative flex h-36! w-auto! items-center justify-center overflow-visible rounded bg-white p-4 px-4 pt-8 pb-10 text-center text-xs font-semibold md:text-xl">
					<span className="bg-background-alt absolute -top-5 left-1/2 h-8 w-8 -translate-x-1/2 rounded-full p-2 text-center lg:h-12 lg:w-12 lg:p-3">
						<PersonSelect className="h-4 w-4 text-white lg:h-6 lg:w-6" />
					</span>
					<p className="max-w-3/4 text-lg">Юридические сопровождение</p>
					<button className="absolute -bottom-3 left-1/2 w-4/5 -translate-x-1/2 rounded-full bg-[#2D2D2E] px-2 py-1 text-white">
						Получить услугу
					</button>
				</div>
			</div>
		</section>
	)
}

export default Services
