import React, { forwardRef } from 'react';
import { clsx } from 'clsx';
import iconPaths from './icon-paths.json';

// Export type for available icon names
export type SIconName = keyof typeof iconPaths;

export interface SIconProps extends React.SVGAttributes<SVGElement> {
	/** The name of the icon (kebab-case, e.g., 'arrow-left', 'check-circle') */
	name: SIconName;
	/** Size of the icon. Can be a number (px) or string with units */
	size?: number | string;
	/** Color of the icon. Defaults to 'currentColor' */
	color?: string;
	/** Additional CSS classes */
	className?: string;
	/** Stroke width for the icon paths */
	strokeWidth?: number | string;
}

/**
 * SIcon component for rendering Lucide icons using extracted SVG path data
 * 
 * @example
 * <SIcon name="arrow-left" size={20} />
 * <SIcon name="check-circle" className="text-green-500" />
 * <SIcon name="settings" size="24px" strokeWidth={1.5} />
 */
export const SIcon = forwardRef<SVGSVGElement, SIconProps>(
	(
		{
			name,
			size = 16,
			color = 'currentColor',
			className,
			strokeWidth = 2,
			...props
		},
		ref
	) => {
		// Get icon data from the JSON
		const iconData = iconPaths[name as keyof typeof iconPaths];

		if (!iconData) {
			console.warn(`SIcon: Icon "${name}" not found. Available icons can be found in icon-paths.json`);
			return null;
		}

		const { paths, viewBox } = iconData;

		const sizeValue = typeof size === 'number' ? `${size}px` : size;

		return (
			<svg
				ref={ref}
				className={clsx('sting-icon', className)}
				width={sizeValue}
				height={sizeValue}
				viewBox={viewBox}
				fill="none"
				stroke={color}
				strokeWidth={strokeWidth}
				strokeLinecap="round"
				strokeLinejoin="round"
				{...props}
			>
				{paths.map((pathData, index) => (
					<path key={index} d={pathData} />
				))}
			</svg>
		);
	}
);

SIcon.displayName = 'SIcon';

// Helper function to get all available icon names
export const getAvailableIconNames = (): SIconName[] => {
	return Object.keys(iconPaths) as SIconName[];
};

// Helper function to search icons by name
export const searchIcons = (query: string): SIconName[] => {
	const searchTerm = query.toLowerCase();
	return Object.keys(iconPaths).filter(name =>
		name.toLowerCase().includes(searchTerm)
	) as SIconName[];
};

export default SIcon; 