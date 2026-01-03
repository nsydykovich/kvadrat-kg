import { InvestmentSelection } from '@/shared/ui/Icons'
import { FaCheck } from 'react-icons/fa6'
import { PiHandshakeLight } from 'react-icons/pi'
import type { Service } from '../model/service'

export const SERVICES_LIST: Service[] = [
	{
		id: 1,
		title: 'Продать недвижимость',
		icon: FaCheck,
		description: undefined
	},
	{
		id: 2,
		title: 'Срочный выкуп недвижимости',
		icon: PiHandshakeLight,
		description: undefined
	},
	{
		id: 3,
		title: 'Инвестиции в недвижимость',
		icon: InvestmentSelection,
		description: undefined
	},
	{
		id: 4,
		title: 'Подобрать недвижимость',
		icon: InvestmentSelection,
		description: undefined
	},
	{
		id: 5,
		title: 'Юридические сопровождение',
		icon: PiHandshakeLight,
		description: undefined
	}
]
