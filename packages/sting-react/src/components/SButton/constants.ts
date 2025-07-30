import { tv, VariantProps } from 'tailwind-variants';
import './SButton.css';

export const buttonVariants = tv({
	base: 's-btn',
	variants: {
		variant: {
			primary: 's-btn-primary',
			'primary-outline': 's-btn-primary-outline',
			'primary-ghost': 's-btn-primary-ghost',
			neutral: 's-btn-neutral',
			'neutral-ghost': 's-btn-neutral-ghost',
			danger: 's-btn-danger',
			'danger-outline': 's-btn-danger-outline',
			'danger-ghost': 's-btn-danger-ghost',
		},
		size: {
			regular: '',
			large: 's-btn-large',
		},
		fullWidth: {
			true: 's-btn-full-width',
		},
		loading: {
			true: 's-btn-loading',
		},
		disabled: {
			true: 's-btn-disabled',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'regular',
		fullWidth: false,
		disabled: false,
	},
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
