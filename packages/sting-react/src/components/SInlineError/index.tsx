import { SIcon } from '../SIcon';
import * as React from 'react';

interface SInlineErrorProps {
	/**
	 * The error message to display
	 */
	message: React.ReactNode;
	/**
	 * Optional ID for the error message, useful for accessibility
	 */
	id?: string;
}

const SInlineError = ({ message, id }: SInlineErrorProps) => {
	return (
		<div id={id} className="flex gap-mi">
			<span className="shrink-0 text-danger-500">
				<SIcon name="octagon-alert" className="size-sm" />
			</span>
			<span className="text-caption-regular text-danger-600">{message}</span>
		</div>
	);
};

SInlineError.displayName = 'SInlineError';

export { SInlineError };
