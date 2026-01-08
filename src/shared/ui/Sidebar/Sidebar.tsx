import type React from 'react'
import { cn } from '@/shared/lib/utils'
import type { HTMLAttributes } from 'react'

interface SidebarProps extends HTMLAttributes<HTMLElement> {
	children: React.ReactNode
}

const Sidebar = ({ className, children, ...props }: SidebarProps) => {
	return (
		<aside className={cn('hidden bg-[#121212] p-6 text-white lg:flex lg:flex-col h-fit', className)} {...props}>
			{children}
		</aside>
	)
}

interface SidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const SidebarHeader = ({ className, children, ...props }: SidebarHeaderProps) => {
	return (
		<div className={cn('mb-6 border-b border-white/20 pb-4', className)} {...props}>
			{children}
		</div>
	)
}

interface SidebarSectionProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
	title?: string
}

const SidebarSection = ({ className, children, title, ...props }: SidebarSectionProps) => {
	return (
		<div className={cn('mb-6', className)} {...props}>
			{title && <h3 className={'mb-3 text-sm font-medium text-white'}>{title}</h3>}
			{children}
		</div>
	)
}

type SidebarDividerProps = HTMLAttributes<HTMLHRElement>

const SidebarDivider = ({ className, ...props }: SidebarDividerProps) => {
	return <hr className={cn('mb-6 border-white/20', className)} {...props} />
}

export { Sidebar, SidebarHeader, SidebarSection, SidebarDivider }
