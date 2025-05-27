import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

/**
 * A utility function that combines clsx and tailwind-merge
 * to handle conditional class names and properly merge Tailwind classes
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
