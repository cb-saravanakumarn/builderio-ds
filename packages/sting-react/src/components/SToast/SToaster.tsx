import { SToast } from './SToast';
import { useToast } from './use-toast';

export function SToaster() {
	const { toasts } = useToast();

	return (
		<SToast.Provider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<SToast key={id} {...props}>
						<div className="grid gap-1">
							{title && <SToast.Title>{title}</SToast.Title>}
							{description && (
								<SToast.Description>{description}</SToast.Description>
							)}
						</div>
						{action}
						<SToast.Close />
					</SToast>
				);
			})}
			<SToast.Viewport />
		</SToast.Provider>
	);
}
