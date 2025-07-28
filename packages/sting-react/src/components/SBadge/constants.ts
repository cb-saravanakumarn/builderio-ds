import { tv, VariantProps } from 'tailwind-variants';
import './SBadge.css';

export const badgeVariants = tv({
	base: 's-badge',
	variants: {
		variant: {
			primary: 's-badge-primary',
			neutral: 's-badge-neutral',
			danger: 's-badge-danger',
			warning: 's-badge-warning',
			success: 's-badge-success',
			info: 's-badge-info',
			brand: 's-badge-brand',
		},
		size: {
			regular: 's-badge-regular',
			medium: 's-badge-medium',
			large: 's-badge-large',
		},
		mode: { light: '', dark: 's-badge-dark', outline: 's-badge-outline' },
	},
	defaultVariants: {
		variant: 'primary',
		mode: 'light',
		size: 'regular',
	},
});

export type Badge = VariantProps<typeof badgeVariants>;
