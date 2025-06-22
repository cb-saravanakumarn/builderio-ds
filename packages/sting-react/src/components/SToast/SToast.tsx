'use client';

import * as React from 'react';
import * as ToastPrimitives from '@radix-ui/react-toast';
import { tv, type VariantProps } from 'tailwind-variants';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const toastVariants = tv({
	base: 'group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
	variants: {
		variant: {
			default: 'border-neutral-200 bg-neutral-0 text-neutral-900',
			destructive:
				'destructive group border-danger-500 bg-danger-500 text-neutral-0',
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

const SToastViewport = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Viewport>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Viewport
		ref={ref}
		className={cn(
			'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
			className,
		)}
		{...props}
	/>
));
SToastViewport.displayName = 'SToast.Viewport';

const SToastAction = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Action>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Action
		ref={ref}
		className={cn(
			'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-primary-500 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-neutral-300 group-[.destructive]:hover:border-danger-400 group-[.destructive]:hover:bg-danger-600 group-[.destructive]:hover:text-neutral-0 group-[.destructive]:focus:ring-danger-500',
			className,
		)}
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
		className={cn(
			'absolute right-1 top-1 rounded-md p-1 text-neutral-500 opacity-0 transition-opacity hover:text-neutral-900 focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-danger-200 group-[.destructive]:hover:text-neutral-50 group-[.destructive]:focus:ring-danger-400 group-[.destructive]:focus:ring-offset-danger-600',
			className,
		)}
		toast-close=""
		{...props}
	>
		<X className="h-4 w-4" />
	</ToastPrimitives.Close>
));
SToastClose.displayName = 'SToast.Close';

const SToastTitle = React.forwardRef<
	React.ElementRef<typeof ToastPrimitives.Title>,
	React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
	<ToastPrimitives.Title
		ref={ref}
		className={cn('text-sm font-semibold [&+div]:text-xs', className)}
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
		className={cn('text-sm opacity-90', className)}
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

export { SToast, type SToastProps, type SToastActionElement };
