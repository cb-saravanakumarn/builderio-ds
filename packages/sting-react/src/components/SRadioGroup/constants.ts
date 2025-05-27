import { tv } from 'tailwind-variants';

import './SRadioGroup.css';

export const radioGroupVariants = tv({
	base: 'radio-group',
	variants: {
		disabled: {
			true: 'radio-group-disabled',
		},
		orientation: {
			horizontal: 'radio-group-horizontal',
			vertical: 'radio-group-vertical',
		},
	},
	defaultVariants: {
		orientation: 'vertical',
	},
});
