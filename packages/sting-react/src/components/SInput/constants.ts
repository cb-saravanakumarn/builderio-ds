import { tv, VariantProps } from 'tailwind-variants';
import './SInput.css';

export enum ValidationStatus {
	Error = 'error',
	Success = 'success',
}

export const inputVariants = tv({
	base: 'input',
	variants: {
		validationStatus: {
			[ValidationStatus.Error]: 'input-error',
			[ValidationStatus.Success]: 'input-success',
		},
	},
});

export type InputVariants = VariantProps<typeof inputVariants>;
