import { forwardRef, type InputHTMLAttributes } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { Check } from 'lucide-react'
import { cn } from '@/shared/lib/utils'

const checkboxVariants = cva(
	'flex shrink-0 items-center justify-center rounded border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 [&_svg]:invisible peer-checked:[&_svg]:visible',
	{
		variants: {
			variant: {
				primary: 'border-primary peer-checked:bg-primary text-primary-foreground',
				secondary: 'border-secondary peer-checked:bg-secondary text-secondary-foreground',
				destructive: 'border-destructive peer-checked:bg-destructive text-destructive-foreground',
				white: 'border-foreground peer-checked:bg-primary peer-checked:border-primary text-background'
			},
			size: {
				sm: 'h-4 w-4',
				md: 'h-5 w-5',
				lg: 'h-6 w-6'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	}
)

interface CheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof checkboxVariants> {
	label?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	({ className, variant, size, label, ...props }, ref) => {
		return (
			<label className="group peer flex w-max cursor-pointer items-center">
				<div className="relative flex items-center gap-2">
					<input ref={ref} type="checkbox" className="peer sr-only" {...props} />
					<div className={cn(checkboxVariants({ variant, size }), className)}>
						<Check className="h-[80%] w-[80%] stroke-[3px]" />
					</div>
					{label && (
						<span className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
							{label}
						</span>
					)}
				</div>
			</label>
		)
	}
)

Checkbox.displayName = 'Checkbox'
