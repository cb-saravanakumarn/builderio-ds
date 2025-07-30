import { tv, VariantProps } from 'tailwind-variants';
import './SInput.css';

export enum ValidationStatus {
	Error = 'error',
	Success = 'success',
}

export const inputVariants = tv({
	base: 's-input',
	variants: {
		validationStatus: {
			[ValidationStatus.Error]: 's-input-error',
			[ValidationStatus.Success]: 's-input-success',
		},
	},
});

export type InputVariants = VariantProps<typeof inputVariants>;
