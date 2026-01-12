import { createContext, useContext } from 'react'

export interface DropdownMenuContextType {
	open: boolean
	setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuContext = createContext<DropdownMenuContextType | null>(null)

export const useDropdown = () => {
	const context = useContext(MenuContext)
	if (!context) {
		throw new Error('useDropdown must be used within <DropdownMenu />')
	}
	return context
}
