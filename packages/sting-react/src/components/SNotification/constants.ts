import { tv, VariantProps } from 'tailwind-variants';
import './SNotification.css';

export const notificationVariants = tv({
	base: 's-notification',
	variants: {
		variant: {
			info: 's-notification-info',
			primary: 's-notification-primary',
			danger: 's-notification-danger',
			warning: 's-notification-warning',
			success: 's-notification-success',
			neutral: 's-notification-neutral',
		},
		hasBorder: {
			true: 's-notification-stroke',
			false: '',
		},
	},
	defaultVariants: {
		variant: 'info',
		hasStroke: false,
	},
});

export type Notification = VariantProps<typeof notificationVariants>;
