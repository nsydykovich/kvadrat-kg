import RealEstateCardList from '@/widgets/RealEstateCardList/ui/RealEstateCardList.tsx'
import RealEstateFilterSidebar from '@/widgets/RealEstateFilterSidebar/ui/RealEstateFilterSidebar.tsx'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/shared/ui/Dropdown'
import { Button } from '@/shared/ui/Button.tsx'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'
import { useDropdown } from '@/shared/ui/Dropdown/Dropdown.context.ts'

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

export const RealEstatesPage = () => {
	return (
		<section className={'container mx-auto'}>
			<article className={'flex gap-8 p-4'}>
				<RealEstateFilterSidebar />

				<div className={'flex-1'}>
					<div>
						<h4>Показаны 1-12 из 240 результатов</h4>
						<DropdownMenu>
							<SortTrigger />
							<DropdownMenuContent>
								<DropdownMenuItem asChild><Button variant={'ghost'} className={'px-4 w-full rounded-none text-background text-left justify-start'}>Profile</Button></DropdownMenuItem>
								<DropdownMenuItem asChild><Button variant={'ghost'} className={'px-4 w-full rounded-none text-background text-left justify-start'}>Profile</Button></DropdownMenuItem>
								<DropdownMenuItem asChild><Button variant={'ghost'} className={'px-4 w-full rounded-none text-background text-left justify-start'}>Profile</Button></DropdownMenuItem>
								<DropdownMenuItem asChild><Button variant={'ghost'} className={'px-4 w-full rounded-none text-background text-left justify-start'}>Profile</Button></DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>

					<RealEstateCardList />
				</div>
			</article>
		</section>
	)
}
