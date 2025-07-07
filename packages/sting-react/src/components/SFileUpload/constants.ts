import { tv, VariantProps } from 'tailwind-variants';
import './SFileUpload.css';

export const fileUploadVariants = tv({
	base: 'file-upload',
	variants: {
		variant: {
			primary: 'file-upload-primary',
			neutral: 'file-upload-neutral',
			outline: 'file-upload-outline',
		},
		size: {
			regular: '',
			large: 'file-upload-large',
		},
		fullWidth: {
			true: 'file-upload-full-width',
		},
		disabled: {
			true: 'file-upload-disabled',
		},
		validationStatus: {
			error: 'file-upload-error',
			success: 'file-upload-success',
		},
	},
	defaultVariants: {
		variant: 'neutral',
		size: 'regular',
		fullWidth: false,
		disabled: false,
	},
});

export type FileUploadVariants = VariantProps<typeof fileUploadVariants>;
