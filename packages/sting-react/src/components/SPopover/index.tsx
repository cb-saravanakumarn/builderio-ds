import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { cn } from '@/lib/utils';

const SPopoverRoot = PopoverPrimitive.Root;
SPopoverRoot.displayName = 'SPopover.Root';

const SPopoverTrigger = PopoverPrimitive.Trigger;
SPopoverTrigger.displayName = 'SPopover.Trigger';

const SPopoverAnchor = PopoverPrimitive.Anchor;
SPopoverAnchor.displayName = 'SPopover.Anchor';

const SPopoverArrow = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Arrow>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Arrow>
>(({ className, ...props }, ref) => (
	<PopoverPrimitive.Arrow
		ref={ref}
		className={cn('fill-neutral-0 drop-shadow-sm', className)}
		width={11}
		height={5}
		{...props}
	/>
));
SPopoverArrow.displayName = 'SPopover.Arrow';

const SPopoverContent = React.forwardRef<
	React.ElementRef<typeof PopoverPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
	<PopoverPrimitive.Portal>
		<PopoverPrimitive.Content
			ref={ref}
			align={align}
			sideOffset={sideOffset}
			className={cn(
				'z-50 w-72 origin-[--radix-popover-content-transform-origin] rounded-md border border-neutral-200 bg-neutral-0 p-sm text-neutral-900 outline-none drop-shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
				className,
			)}
			{...props}
		/>
	</PopoverPrimitive.Portal>
));
SPopoverContent.displayName = 'SPopover.Content';

const SPopover = Object.assign(SPopoverRoot, {
	Trigger: SPopoverTrigger,
	Content: SPopoverContent,
	Anchor: SPopoverAnchor,
	Arrow: SPopoverArrow,
});

export { SPopover };
