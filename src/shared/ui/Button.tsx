import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from 'radix-ui'
import { cn } from '@/shared/lib/utils.ts'

const buttonVariants = cva(
	'px-6 py-3 rounded-lg transition-all items-center justify-center font-medium flex',
	{
		variants: {
			variant: {
				primary: 'bg-primary text-foreground hover:bg-primary-hover active:bg-primary-active',
				secondary: 'bg-secondary text-foreground hover:bg-secondary-hover active:bg-secondary-active',
				destructive: 'bg-destructive text-foreground hover:bg-destructive-hover active:bg-destructive-active',
				muted: 'bg-muted text-foreground hover:bg-muted-hover active:bg-muted-active',
				outline: 'border border-foreground text-foreground hover:bg-foreground hover:text-background',
				link: 'bg-transparent text-foreground hover:underline p-0! cursor-pointer',
				ghost: 'bg-transparent text-foreground hover:bg-foreground/10'
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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot.Root : 'button'
		return <Comp ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
	}
)
