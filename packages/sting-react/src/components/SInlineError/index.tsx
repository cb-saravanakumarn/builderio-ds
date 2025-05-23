import { OctagonAlert } from 'lucide-react';
import * as React from 'react';

interface SInlineErrorProps {
	/**
	 * The error message to display
	 */
	message: React.ReactNode;
}

const SInlineError: React.FC<SInlineErrorProps> = ({ message }) => {
	return (
		<div className="flex gap-1">
			<span className="text-danger-500">
				<OctagonAlert className="size-4" />
			</span>
			<span className="text-body-caption text-danger-600">{message}</span>
		</div>
	);
};

SInlineError.displayName = 'SInlineError';

export { SInlineError };
