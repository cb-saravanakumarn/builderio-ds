import { SToast } from './SToast';
import { useToast } from './use-toast';

export type ToasterPlacement =
	| 'top-left'
	| 'top-center'
	| 'top-right'
	| 'bottom-left'
	| 'bottom-center'
	| 'bottom-right';

interface SToasterProps {
	placement?: ToasterPlacement;
}

export function SToaster({ placement = 'bottom-right' }: SToasterProps) {
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
			<SToast.Viewport placement={placement} />
		</SToast.Provider>
	);
}
