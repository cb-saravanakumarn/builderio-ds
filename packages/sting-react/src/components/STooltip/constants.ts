import { tv, VariantProps } from 'tailwind-variants';
// import "./STooltip.css";

export const tooltipVariants = tv({
	slots: {
		base: 'tooltip z-50 origin-[--radix-tooltip-content-transform-origin] data-[state=delayed-open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=delayed-open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=delayed-open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
		arrow: 'tooltip-arrow',
		content: 'tooltip-content',
	},
	variants: {
		color: {
			dark: {
				base: 'tooltip-dark',
				arrow: 'tooltip-arrow-dark',
			},
			light: {
				base: 'tooltip-light',
				arrow: 'tooltip-arrow-light',
			},
		},
		width: {
			small: { base: 'tooltip-width-small' },
			regular: { base: 'tooltip-width-regular' },
			large: { base: 'tooltip-width-large' },
		},
	},
	defaultVariants: {
		color: 'dark',
		width: 'regular',
	},
});

export type TooltipVariants = VariantProps<typeof tooltipVariants>;
