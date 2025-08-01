import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { tv, type VariantProps } from 'tailwind-variants';
import { SIcon } from '../SIcon';

import { cn } from '@/lib/utils';
import './SToast.css';

export type ToasterPlacement =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

const toastVariants = tv({
	base: 'toast-root group',
	variants: {
		variant: {
			default: 'toast-default',
			destructive: 'toast-destructive',
			success: 'toast-success',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
});

const SToastRoot = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Root>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
	VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
	return (
		<ToastPrimitives.Root
			ref={ref}
			className={cn(toastVariants({ variant }), className)}
			{...props}
		/>
	);
});
SToastRoot.displayName = 'SToast';

const SToastProvider = ToastPrimitives.Provider;

interface SToastViewportProps extends React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport> {
	placement?: ToasterPlacement;
}

const SToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	SToastViewportProps
>(({ className, placement = 'bottom-right', ...props }, ref) => {
	const placementClass = `toast-viewport-${placement}`;

	return (
		<ToastPrimitives.Viewport
			ref={ref}
			className={cn('toast-viewport', placementClass, className)}
			{...props}
		/>
	);
});
SToastViewport.displayName = 'SToast.Viewport';

const SToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn('toast-action', className)}
		{...props}
	/>
));
SToastAction.displayName = 'SToast.Action';

const SToastClose = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Close>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Close
		ref={ref}
		className={cn('toast-close', className)}
		toast-close=""
		{...props}
	>
		<SIcon name="x" className="h-4 w-4" />
	</ToastPrimitives.Close>
));
SToastClose.displayName = 'SToast.Close';

const SToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn('toast-title', className)}
		{...props}
	/>
));
SToastTitle.displayName = 'SToast.Title';

const SToastDescription = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Description>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Description
		ref={ref}
		className={cn('toast-description', className)}
		{...props}
	/>
));
SToastDescription.displayName = 'SToast.Description';

// SToast object with sub-components
const SToast = Object.assign(SToastRoot, {
	Provider: SToastProvider,
	Viewport: SToastViewport,
	Action: SToastAction,
	Close: SToastClose,
	Title: SToastTitle,
	Description: SToastDescription,
});

// Type definitions
type SToastProps = React.ComponentPropsWithoutRef<typeof SToastRoot>;
type SToastActionElement = React.ReactElement<typeof SToastAction>;

export { SToast, type SToastProps, type SToastActionElement, type SToastViewportProps };
