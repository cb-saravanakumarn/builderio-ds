import { tv, VariantProps } from 'tailwind-variants';
import './SBadge.css';

export const badgeVariants = tv({
	base: 'badge',
	variants: {
		variant: {
			primary: 'badge-primary',
			neutral: 'badge-neutral',
			danger: 'badge-danger',
			warning: 'badge-warning',
			success: 'badge-success',
			info: 'badge-info',
			brand: 'badge-brand',
		},
		size: {
			regular: 'badge-regular',
			medium: 'badge-medium',
			large: 'badge-large',
		},
		mode: { light: '', dark: 'badge-dark', outline: 'badge-outline' },
	},
	defaultVariants: {
		variant: 'primary',
		mode: 'light',
		size: 'regular',
	},
});

export type Badge = VariantProps<typeof badgeVariants>;
