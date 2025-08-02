import { ComponentProps, forwardRef } from 'react';
import { STooltip } from '../STooltip';
import { SIcon } from '../SIcon';

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
	/**
	 * Marks the label as required and shows a red asterisk next to the text
	 */
	required?: boolean;
}

const SLabel = forwardRef<HTMLLabelElement, SLabelProps>(
	({ children, labelInfo, tooltipPlacement = 'top', required = false, ...props }, ref) => {
		if (labelInfo) {
			return (
				<div className="flex items-center gap-1">
					<label ref={ref} className="text-para-medium" {...props}>
						{children}
						{required && (
							<span className="ml-0.5 text-danger-500">*</span>
						)}
					</label>
					<span className="cursor-help">
						<STooltip label={labelInfo} placement={tooltipPlacement}>
							<SIcon name="info" className="size-4" />
						</STooltip>
					</span>
				</div>
			);
		}

		return (
			<label ref={ref} className="text-para-medium" {...props}>
				{children}
				{required && (
					<span className="ml-0.5 text-danger-500">*</span>
				)}
			</label>
		);
	},
);

SLabel.displayName = 'SLabel';

export { SLabel };
