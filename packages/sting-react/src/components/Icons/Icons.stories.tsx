import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo } from 'react';
import * as LucideIcons from '../lucide-icons';
import { CheckIcon, ClipboardIcon } from '../lucide-icons';

// Get all icon exports (already filtered to end with 'Icon' in lucide-icons.ts)
const allIconNames = Object.keys(LucideIcons).filter(
	(name) => name !== 'SIconProps' && name !== 'SIconNames',
);

interface IconDisplayProps {
	iconName: string;
	IconComponent: React.ComponentType<any>;
	onCopy: (snippet: string) => void;
	copiedIcon: string | null;
}

const IconDisplay: React.FC<IconDisplayProps> = ({
	iconName,
	IconComponent,
	onCopy,
	copiedIcon,
}) => {
	const handleCopy = async () => {
		const snippet = `<${iconName} size={16} />`;

		try {
			await navigator.clipboard.writeText(snippet);
			onCopy(iconName);
		} catch (err) {
			console.error('Failed to copy to clipboard:', err);
		}
	};

	return (
		<div
			className="group flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-lg border border-gray-200 p-4 transition-all hover:border-blue-500 hover:shadow-md"
			onClick={handleCopy}
			title="Click to copy React snippet"
		>
			<div className="mb-2 flex h-8 w-8 items-center justify-center text-gray-700 transition-colors group-hover:text-blue-600">
				<IconComponent size={20} />
			</div>
			<div className="mb-1 break-words text-center font-mono text-xs leading-tight text-gray-600 group-hover:text-gray-800">
				{iconName.replace(/Icon$/, '')}
			</div>
			<div className="flex items-center gap-1 text-xs text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
				{copiedIcon === iconName ? (
					<>
						<CheckIcon size={12} />
						<span>Copied!</span>
					</>
				) : (
					<>
						<ClipboardIcon size={12} />
						<span>Copy</span>
					</>
				)}
			</div>
		</div>
	);
};

interface IconsShowcaseProps {
	search?: string;
	iconsPerPage?: number;
}

const IconsShowcase: React.FC<IconsShowcaseProps> = ({
	search = '',
	iconsPerPage = 100,
}) => {
	const [searchTerm, setSearchTerm] = useState(search);
	const [currentPage, setCurrentPage] = useState(1);
	const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

	const filteredIcons = useMemo(() => {
		return allIconNames.filter((name) =>
			name.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [searchTerm]);

	const totalPages = Math.ceil(filteredIcons.length / iconsPerPage);
	const startIndex = (currentPage - 1) * iconsPerPage;
	const endIndex = startIndex + iconsPerPage;
	const currentIcons = filteredIcons.slice(startIndex, endIndex);

	const handleCopy = (iconName: string) => {
		setCopiedIcon(iconName);
		setTimeout(() => setCopiedIcon(null), 2000);
	};

	return (
		<div className="mx-auto max-w-7xl p-6">
			<div className="mb-6">
				<h2 className="mb-4 text-2xl font-bold">
					Lucide Icons ({filteredIcons.length} icons)
				</h2>
				<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
					<input
						type="text"
						placeholder="Search icons..."
						value={searchTerm}
						onChange={(e) => {
							setSearchTerm(e.target.value);
							setCurrentPage(1);
						}}
						className="min-w-[300px] rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
					<div className="text-sm text-gray-600">
						Page {currentPage} of {totalPages} • Showing {currentIcons.length}{' '}
						of {filteredIcons.length} icons
					</div>
				</div>
			</div>

			<div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
				{currentIcons.map((iconName) => {
					const IconComponent = (LucideIcons as any)[iconName];
					return (
						<IconDisplay
							key={iconName}
							iconName={iconName}
							IconComponent={IconComponent}
							onCopy={handleCopy}
							copiedIcon={copiedIcon}
						/>
					);
				})}
			</div>

			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-2">
					<button
						onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
						disabled={currentPage === 1}
						className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
					>
						Previous
					</button>

					<div className="flex items-center gap-1">
						{Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
							let pageNum;
							if (totalPages <= 5) {
								pageNum = i + 1;
							} else if (currentPage <= 3) {
								pageNum = i + 1;
							} else if (currentPage >= totalPages - 2) {
								pageNum = totalPages - 4 + i;
							} else {
								pageNum = currentPage - 2 + i;
							}

							return (
								<button
									key={pageNum}
									onClick={() => setCurrentPage(pageNum)}
									className={`rounded border px-3 py-1 ${
										currentPage === pageNum
											? 'border-blue-500 bg-blue-500 text-white'
											: 'border-gray-300 hover:bg-gray-50'
									}`}
								>
									{pageNum}
								</button>
							);
						})}
					</div>

					<button
						onClick={() =>
							setCurrentPage(Math.min(totalPages, currentPage + 1))
						}
						disabled={currentPage === totalPages}
						className="rounded border border-gray-300 px-3 py-1 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50"
					>
						Next
					</button>
				</div>
			)}

			<div className="mt-8 rounded-lg bg-gray-50 p-4">
				<h3 className="mb-2 text-lg font-semibold">Usage</h3>
				<p className="mb-2 text-sm text-gray-700">
					Click on any icon to copy its React snippet to your clipboard. The
					snippet includes the import statement and basic usage.
				</p>
				<div className="rounded border bg-white p-3 font-mono text-sm">
					{`<HeartIcon size={20} />`}
				</div>
			</div>
		</div>
	);
};

const meta = {
	title: 'Presentation/Icons',
	component: IconsShowcase,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
## Lucide Icons Collection

This collection contains all available Lucide icons that can be used in your React components. All icons are re-exported from the \`lucide-react\` library with consistent naming conventions.

### Features:
- **Search functionality**: Find icons quickly by name
- **Click to copy**: Click any icon to copy its React snippet
- **Pagination**: Navigate through large sets of icons
- **Responsive grid**: Adapts to different screen sizes

### Usage:
\`\`\`jsx
import { HeartIcon, StarIcon, CheckIcon } from '@chargebee/sting-react';

// Basic usage
<HeartIcon size={20} />

// With custom props
<StarIcon size={24} className="text-yellow-500" />

// With event handlers
<CheckIcon size={16} onClick={handleClick} />
\`\`\`

### Available Props:
All icons accept the standard Lucide props:
- \`size\`: number (default: 24)
- \`color\`: string
- \`strokeWidth\`: number (default: 2)
- \`className\`: string
- Standard HTML attributes (onClick, onMouseOver, etc.)
        `,
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		search: {
			control: 'text',
			description: 'Search term to filter icons',
		},
		iconsPerPage: {
			control: { type: 'number', min: 20, max: 200, step: 20 },
			description: 'Number of icons to display per page',
		},
	},
} satisfies Meta<typeof IconsShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {
	args: {
		search: '',
		iconsPerPage: 100,
	},
};

export const SearchExample: Story = {
	args: {
		search: 'arrow',
		iconsPerPage: 50,
	},
};
