import { OctagonAlert } from 'lucide-react';
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
		<div id={id} className="gap-mi flex">
			<span className="text-danger-500 shrink-0">
				<OctagonAlert className="size-sm" />
			</span>
			<span className="text-caption-regular text-danger-600">{message}</span>
		</div>
	);
};

SInlineError.displayName = 'SInlineError';

export { SInlineError };
