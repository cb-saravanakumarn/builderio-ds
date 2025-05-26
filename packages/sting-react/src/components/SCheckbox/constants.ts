import { tv, VariantProps } from 'tailwind-variants';
import './SCheckbox.css';

export const checkboxVariants = tv({
	base: 'checkbox-wrapper',
	variants: {
		disabled: {
			true: '',
		},
	},
});

export type CheckboxVariants = VariantProps<typeof checkboxVariants>;
