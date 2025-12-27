import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/shared/lib/utils.ts'
import { Slot } from 'radix-ui'
import { forwardRef, type HTMLAttributes } from 'react'

interface CardProps {
	children: React.ReactNode
}

const cardVariants = cva('relative px-6 py-3 rounded flex-col items-center justify-center', {
	variants: {
		variant: {
			normal: 'bg-foreground text-background',
			primary: 'bg-primary text-foreground',
			outline: 'border border-foreground text-foreground',
			ghost: 'bg-transparent text-foreground'
		}
	},
	defaultVariants: {
		variant: 'normal'
	}
})

interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
	children: React.ReactNode
	asChild?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
	({ className, children, variant, asChild, ...props }, ref) => {
		const Comp = asChild ? Slot.Root : 'div'

		return (
			<Comp ref={ref} className={cn(cardVariants({ variant, className }))} {...props}>
				{children}
			</Comp>
		)
	}
)

const CardAction = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn(className)} {...props}>
				{children}
			</div>
		)
	}
)

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("py-4", className)} {...props}>
				{children}
			</div>
		)
	}
)

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<p ref={ref} className={cn(className)} {...props}>
				{children}
			</p>
		)
	}
)

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("", className)} {...props}>
				{children}
			</div>
		)
	}
)

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<div ref={ref} className={cn("flex", className)} {...props}>
				{children}
			</div>
		)
	}
)

const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
	({ className, children, ...props }, ref) => {
		return (
			<h4 ref={ref} className={cn("font-bold text-xl", className)} {...props}>
				{children}
			</h4>
		)
	}
)

export { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle }
