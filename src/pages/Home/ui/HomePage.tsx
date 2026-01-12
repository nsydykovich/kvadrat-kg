import LandingHero from '@/widgets/LandingHero/ui/LandingHero.tsx'
import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList'
import ServiceList from '@/widgets/ServicesList/ui/ServiceList.tsx'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/Dropdown'
import { Button } from '@/shared/ui/Button.tsx'
import { useDropdown } from '@/shared/ui/Dropdown/Dropdown.context.ts'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const SortTrigger = () => {
	const { open } = useDropdown()
	const Icon = open ? BsChevronUp : BsChevronDown

	return (
		<DropdownMenuTrigger asChild>
			<Button size={'sm'} className="rounded-full">
				по умолчанию
				<Icon size={20} className="ml-4" />
			</Button>
		</DropdownMenuTrigger>
	)
}

export const HomePage = () => {
	return (
		<>
			<LandingHero />
			<section id={'services'} className={'container mx-auto px-4'}>
				<ServiceList />
			</section>
			<section id={'real-estates'} className={'container mx-auto px-4'}>
				<div className={'flex flex-col items-start justify-between gap-4 py-4 lg:flex-row lg:items-end'}>
					<DropdownMenu>
						<SortTrigger />
						<DropdownMenuContent>
							<DropdownMenuItem asChild>
								<Button
									variant={'ghost'}
									className={'text-background w-full justify-start rounded-none px-4 text-left'}
								>
									Profile
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Button
									variant={'ghost'}
									className={'text-background w-full justify-start rounded-none px-4 text-left'}
								>
									Profile
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Button
									variant={'ghost'}
									className={'text-background w-full justify-start rounded-none px-4 text-left'}
								>
									Profile
								</Button>
							</DropdownMenuItem>
							<DropdownMenuItem asChild>
								<Button
									variant={'ghost'}
									className={'text-background w-full justify-start rounded-none px-4 text-left'}
								>
									Profile
								</Button>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<p className={'xl:1/2 text-xl uppercase xl:text-2xl'}>
						<span className={"after:content-['_'] xl:after:content-['']"}>
							Выбирайте квартиру для жизни или инвестиций. <br className={'hidden xl:block'} />
							Предложение доступны{' '}
						</span>
						<span className={'bg-primary'}>к покупке прямо сейчас</span>
					</p>

					<Button variant={'link'} size={'lg'} asChild>
						<Link to={'#'}>Смотреть больше</Link>
					</Button>
				</div>

				<RealEstateCardList />
			</section>
		</>
	)
}
