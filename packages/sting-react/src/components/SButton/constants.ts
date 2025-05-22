import { tv, VariantProps } from 'tailwind-variants';
import './SButton.css';

export const buttonVariants = tv({
	base: 'btn',
	variants: {
		variant: {
			primary: 'btn-primary',
			'primary-outline': 'btn-primary-outline',
			'primary-ghost': 'btn-primary-ghost',
			neutral: 'btn-neutral',
			'neutral-ghost': 'btn-neutral-ghost',
			danger: 'btn-danger',
			'danger-outline': 'btn-danger-outline',
			'danger-ghost': 'btn-danger-ghost',
		},
		size: {
			regular: '',
			large: 'btn-large',
		},
		fullWidth: {
			true: 'btn-full-width',
		},
		loading: {
			true: 'btn-loading',
		},
		disabled: {
			true: 'btn-disabled',
		},
	},
	defaultVariants: {
		variant: 'primary',
		size: 'regular',
		fullWidth: false,
		rounded: 'md',
		disabled: false,
	},
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
