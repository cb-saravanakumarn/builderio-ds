import { tv, VariantProps } from 'tailwind-variants';

export const checkboxVariants = tv({
	base: 's-checkbox-wrapper',
	variants: {
		disabled: {
			true: '',
		},
	},
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
