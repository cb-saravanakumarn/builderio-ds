import { OctagonAlert } from 'lucide-react';
import * as React from 'react';

interface SInlineErrorProps {
	/**
	 * The error message to display
	 */
	message: React.ReactNode;
}

const SInlineError = ({ message }: SInlineErrorProps) => {
	return (
		<div className="flex gap-mi">
			<span className="shrink-0 text-danger-500">
				<OctagonAlert className="size-sm" />
			</span>
			<span className="text-body-caption text-danger-600">{message}</span>
		</div>
	);
};

SInlineError.displayName = 'SInlineError';

export { SInlineError };
