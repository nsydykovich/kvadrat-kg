import {
	type ButtonHTMLAttributes,
	forwardRef,
	type HTMLAttributes,
	useEffect,
	useRef,
	useState
} from 'react'
import { cn } from '@/shared/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { MenuContext, useDropdown } from './Dropdown.context'

// --- CONSTANTS & VARIANTS ---

const dropdownTriggerVariants = cva(
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
				icon: 'text-2xl p-2'
			}
		},
		defaultVariants: {
			variant: 'primary',
			size: 'md'
		}
	}
)

// --- ROOT ---

interface DropdownMenuProps {
	children: React.ReactNode
	defaultOpen?: boolean
}

const DropdownMenu = ({ children, defaultOpen = false }: DropdownMenuProps) => {
	const [open, setOpen] = useState<boolean>(defaultOpen)

	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
				setOpen(false)
			}
		}
		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return (
		<MenuContext.Provider value={{ open, setOpen }}>
			<div className="relative inline-block text-left" ref={containerRef}>
				{children}
			</div>
		</MenuContext.Provider>
	)
}

// --- TRIGGER ---

interface DropdownMenuTriggerProps
	extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof dropdownTriggerVariants> {
	asChild?: boolean
}

const DropdownMenuTrigger = forwardRef<HTMLButtonElement, DropdownMenuTriggerProps>(
	({ className, variant, size, asChild = false, onClick, ...props }, ref) => {
		const { setOpen, open } = useDropdown()
		const Comp = asChild ? Slot : 'button'

		const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
			setOpen(!open)
			onClick?.(e)
		}

		const computedClassName = asChild ? className : cn(dropdownTriggerVariants({ variant, size, className }))

		return (
			<Comp
				ref={ref}
				className={computedClassName}
				onClick={handleClick}
				type="button"
				aria-expanded={open}
				{...props}
			/>
		)
	}
)
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

// --- CONTENT ---

interface DropdownMenuContentProps extends HTMLAttributes<HTMLDivElement> {
	asChild?: boolean
	align?: 'start' | 'end' | 'center'
	sideOffset?: number
}

const DropdownMenuContent = forwardRef<HTMLDivElement, DropdownMenuContentProps>(
	({ className, asChild = false, align = 'start', sideOffset = 4, children, ...props }, ref) => {
		const { open } = useDropdown()
		const Comp = asChild ? Slot : 'div'

		if (!open) return null

		const alignmentClasses = {
			start: 'left-0',
			end: 'right-0',
			center: 'left-1/2 -translate-x-1/2'
		}

		return (
			<Comp
				ref={ref}
				className={cn(
					'bg-foreground text-background absolute z-50 min-w-46 overflow-hidden rounded-t-sm rounded-b-2xl shadow-md',
					'animate-in fade-in-0 zoom-in-95',
					alignmentClasses[align],
					className
				)}
				style={{
					marginTop: sideOffset
				}}
				{...props}
			>
				{children}
			</Comp>
		)
	}
)
DropdownMenuContent.displayName = 'DropdownMenuContent'

interface DropdownMenuItemProps extends HTMLAttributes<HTMLDivElement> {
	asChild?: boolean
	inset?: boolean
}

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
	({ className, inset, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : 'div'
		return (
			<Comp
				ref={ref}
				className={cn(
					'hover:bg-chart-4 hover:text-foreground relative flex cursor-default items-center px-2 py-1.5 text-sm transition-colors outline-none select-none',
					inset && 'pl-8',
					className
				)}
				{...props}
			/>
		)
	}
)
DropdownMenuItem.displayName = 'DropdownMenuItem'

export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem }
