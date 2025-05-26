import { tv, VariantProps } from 'tailwind-variants';
import "./SCard.css";

export const cardVariants = tv({
	slots: {
		base: 'card',
		header: 'main-card-header main-card-header-align',
		content: 'content',
	},
	variants: {
		depth: {
			flat: { base: 'flat' },
			raised: { base: 'raised' },
			regular: { base: 'regular' },
		},
		padding: {
			large: { base: 'p-8' },
			small: { base: 'p-2' },
			regular: { base: 'p-4' },
			none: { base: '' },
		},
		background: {
			transparent: { base: 'background-transparent' },
			white: { base: 'background-white' },
			neutral: { base: 'background-neutral' },
		},
		spacey: {
			none: { base: '' },
			small: { base: 'space-y-ti' },
			regular: { base: 'space-y-mi' },
			large: { base: 'space-y-sm' },
			xlarge: { base: 'space-y-md' },
			xxlarge: { base: 'space-y-lg' },
		},
		border: {
			none: { base: '' },
			dotted: { base: 'dotted-border' },
		},
		rounded: {
			true: { base: 'rounded' },
		},
		// Header variants
		headerVariant: {
			default: { header: '' },
			hero: { header: 'hero' },
		},
		alignItems: {
			start: { header: 'start' },
			center: { header: 'center' },
			end: { header: 'end' },
		},
	},
	defaultVariants: {
		depth: 'regular',
		padding: 'regular',
		background: 'white',
		spacey: 'regular',
		border: 'none',
		rounded: true,
		alignItems: 'start',
		headerVariant: 'default',
	},
});

export type CardVariants = VariantProps<typeof cardVariants>;
