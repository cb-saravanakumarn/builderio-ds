import { ComponentProps, forwardRef } from 'react';
import { STooltip } from '../STooltip';
import { InfoIcon } from 'lucide-react';

export interface SLabelProps
	extends Omit<ComponentProps<'label'>, 'className'> {
	/**
	 * Content for the tooltip when hovering over the info icon
	 */
	labelInfo?: string;
	/**
	 * Placement of the tooltip relative to the info icon
	 */
	tooltipPlacement?: 'top' | 'right' | 'bottom' | 'left';
}

const SLabel = forwardRef<HTMLLabelElement, SLabelProps>(
	({ children, labelInfo, tooltipPlacement = 'top', ...props }, ref) => {
		if (labelInfo) {
			return (
				<div className="flex items-center gap-1">
					<label ref={ref} className="text-para-medium" {...props}>
						{children}
					</label>
					<span className="cursor-help">
						<STooltip label={labelInfo} placement={tooltipPlacement}>
							<InfoIcon className="size-4" />
						</STooltip>
					</span>
				</div>
			);
		}

		return (
			<label ref={ref} className="text-para-medium" {...props}>
				{children}
			</label>
		);
	},
);

SLabel.displayName = 'SLabel';

export { SLabel };
