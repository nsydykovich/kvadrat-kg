import type { ButtonHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils'
import { Slot } from 'radix-ui'

const buttonVariants = cva(
	'px-6 py-3 rounded-lg transition-all items-center justify-center font-medium flex cursor-pointer',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-active',
				secondary: 'bg-secondary text-white hover:bg-secondary-hover active:bg-secondary-active',
				destructive: 'bg-destructive text-white hover:bg-destructive-hover active:bg-destructive-active',
				muted: 'bg-muted text-white hover:bg-muted-hover active:bg-muted-active',
				outline: 'border border-white text-white hover:bg-foreground hover:text-background',
				ghost: 'bg-transparent text-white hover:bg-white/10'
			},
			size: {
				sm: 'text-sm px-4 py-2',
				md: 'text-base px-6 py-3',
				lg: 'text-lg px-8 py-4',
				icon: 'w-8 h-8'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	}
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean
}

export const Button = ({ className, variant, size, asChild, ...props }: ButtonProps) => {
	const Comp = asChild ? Slot.Root : 'button'

	return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
