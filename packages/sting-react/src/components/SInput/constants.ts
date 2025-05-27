import { tv, VariantProps } from 'tailwind-variants';
import './SInput.css';

export const inputVariants = tv({
	base: 'input',
	variants: {
		validationStatus: {
			error: 'input-error',
			success: 'input-success',
		},
		fullWidth: {
			true: 'input-full-width',
		},
	},
	defaultVariants: {
		fullWidth: false,
	},
});

export type InputVariants = VariantProps<typeof inputVariants>;
