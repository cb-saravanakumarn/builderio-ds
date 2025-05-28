import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';
import './SDrawer.css';

const drawerVariants = tv({
	base: 'drawer-container',
	variants: {
		placement: {
			top: 'top',
			right: 'right',
			bottom: 'bottom',
			left: 'left',
		},
		size: {
			narrow: 'narrow',
			regular: 'regular',
			wide: 'wide',
		},
		width: {
			narrow: 'narrow',
			regular: 'regular',
			wide: 'wide',
		},
		height: {
			short: 'drawer-h-short',
			regular: 'drawer-h-regular',
			full: 'drawer-h-max',
		},
		show: {
			show: 'drawer-show',
			hide: '',
		},
	},
	defaultVariants: {
		placement: 'top',
		width: 'narrow',
		height: 'short',
		show: 'show',
	},
});
interface DrawerProps extends DialogPrimitive.DialogProps {
	children: React.ReactNode;
}

const SDrawerRoot = (props: DrawerProps) => {
	return <DialogPrimitive.Root {...props} />;
};
SDrawerRoot.displayName = 'SDrawer.Root';

interface DrawerContentProps
	extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>,
		VariantProps<typeof drawerVariants> {
	showCloseIcon?: boolean;
	onClose?: () => void;
}

const SDrawerContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DrawerContentProps
>(
	(
		{
			className,
			children,
			placement,
			size,
			height,
			showCloseIcon = true,
			onClose,
			...props
		},
		ref,
	) => (
		<DialogPrimitive.Portal>
			<DialogPrimitive.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out fixed inset-0 z-50 bg-gray-500/50 transition-opacity duration-300" />
			<DialogPrimitive.Content
				ref={ref}
				className={twMerge(
					drawerVariants({ placement, size, height, className }),
					'outline-none',
					'data-[state=open]:animate-contentShow',
					'data-[state=open]:!z-50',
					'data-[state=closed]:z-50',
					'data-[state=closed]:animate-out',
					placement === 'left' && 'data-[state=closed]:-translate-x-full',
					placement === 'right' && 'data-[state=closed]:translate-x-full',
					placement === 'top' && 'data-[state=closed]:-translate-y-full',
					placement === 'bottom' && 'data-[state=closed]:translate-y-full',
				)}
				{...props}
			>
				{children}
				{/* {showCloseIcon && (
        <DialogPrimitive.Close
          className="s-absolute s-right-4 s-top-4 s-rounded-sm s-opacity-70 s-ring-offset-white s-transition-opacity hover:s-opacity-100 focus:s-outline-none focus:s-ring-2 focus:s-ring-slate-950 focus:s-ring-offset-2 disabled:s-pointer-events-none"
          onClick={onClose}
        >
          <X className="s-h-4 s-w-4" />
          <span className="s-sr-only">Close</span>
        </DialogPrimitive.Close>
      )} */}
			</DialogPrimitive.Content>
		</DialogPrimitive.Portal>
	),
);
SDrawerContent.displayName = 'SDrawer.Content';

interface DrawerHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	border?: boolean;
	shadow?: boolean;
	showCloseIcon?: boolean;
}

const SDrawerHeader = ({
	className,
	border = false,
	shadow = false,
	showCloseIcon,

	...props
}: DrawerHeaderProps) => (
	<div
		className={twMerge(
			'sticky top-0 flex justify-between bg-white p-sm',
			`${border ? 'border-b' : ''}`,
			`${shadow ? 'shadow' : ''}`,
			className,
		)}
		{...props}
	>
		<div className="space-y-mi">{props.children}</div>

		{showCloseIcon && (
			<div>
				<DialogPrimitive.Close
					className="rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none"
					//   onClick={props.onClose}
				>
					<X className="size-4" />
					<span className="sr-only">Close</span>
				</DialogPrimitive.Close>
			</div>
		)}
	</div>
);
SDrawerHeader.displayName = 'SDrawer.Header';

const SDrawerFooter = ({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) => (
	<div
		className={twMerge(
			'sticky bottom-0 flex flex-col-reverse bg-white p-sm sm:flex-row sm:justify-end sm:space-x-2',
			className,
		)}
		{...props}
	/>
);
SDrawerFooter.displayName = 'SDrawer.Footer';

const SDrawerTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={twMerge(
			'text-lg font-semibold leading-none tracking-tight',
			className,
		)}
		{...props}
	/>
));
SDrawerTitle.displayName = 'SDrawer.Title';

const SDrawerDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={twMerge('text-sm text-slate-500', className)}
		{...props}
	/>
));
SDrawerDescription.displayName = 'SDrawer.Description';

const SDrawerTrigger = DialogPrimitive.Trigger;

export const SDrawer = Object.assign(SDrawerRoot, {
	Content: SDrawerContent,
	Description: SDrawerDescription,
	Title: SDrawerTitle,
	Header: SDrawerHeader,
	Footer: SDrawerFooter,
	Trigger: SDrawerTrigger,
});
