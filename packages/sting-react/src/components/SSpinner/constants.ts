import { tv, VariantProps } from 'tailwind-variants';

export const spinnerVariants = tv({
	base: 'animate-spin text-current inline-block',
	variants: {
		size: {
			small: 'size-sm',
			medium: 'size-lg',
			large: 'size-5xl',
		},
	},
	defaultVariants: {
		size: 'small',
	},
});

export type SpinnerVariants = VariantProps<typeof spinnerVariants>;
