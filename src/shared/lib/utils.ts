// src/shared/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Эта функция делает магию:
// 1. clsx склеивает аргументы
// 2. twMerge удаляет конфликтующие классы, оставляя последний
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
