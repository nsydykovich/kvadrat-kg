import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils.ts'
import { Slot } from 'radix-ui'

interface CardProps {
	title: string
	description: string
	children: React.ReactNode
}

const cardVariants = cva(
	'px-6 py-3 rounded-lg transition-all items-center justify-center font-medium flex cursor-pointer',
	{
		variants: {
			variant: {
				primary: 'bg-[#E31E24] text-white hover:bg-red-700',
				outline: 'border border-white text-white hover:bg-white hover:text-black',
				ghost: 'bg-transparent text-white hover:bg-white/10'
			},
			size: {
				sm: 'text-sm px-4 py-2',
				md: 'text-base px-6 py-3',
				lg: 'text-lg px-8 py-4'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	}
)

interface CardProps extends VariantProps<typeof cardVariants> {
	children: React.ReactNode
	asChild?: boolean
}

export const Card = ({ children, variant, size, asChild, ...props }: CardProps) => {
	const Comp = asChild ? Slot.Root : 'button'

	return (
		<Comp className={cn(cardVariants({ variant, size }))} {...props}>
			{children}
		</Comp>
	)
}
