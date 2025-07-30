import { tv, VariantProps } from 'tailwind-variants';
// import "./STooltip.css";

export const tooltipVariants = tv({
	slots: {
		base: 's-tooltip z-50 origin-[--radix-tooltip-content-transform-origin] data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
		arrow: 's-tooltip-arrow',
		content: 's-tooltip-content',
	},
	variants: {
		color: {
			dark: {
				base: 's-tooltip-dark',
				arrow: 's-tooltip-arrow-dark',
			},
			light: {
				base: 's-tooltip-light',
				arrow: 's-tooltip-arrow-light',
			},
		},
		width: {
			small: { base: 's-tooltip-width-small' },
			regular: { base: 's-tooltip-width-regular' },
			large: { base: 's-tooltip-width-large' },
		},
	},
	defaultVariants: {
		color: 'dark',
		width: 'regular',
	},
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
