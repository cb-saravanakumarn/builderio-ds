import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo } from 'react';
import { SIcon, getAvailableIconNames, SIconName } from './index';
import { SInput } from '@/components/SInput';
import { SButton } from '@/components/SButton';
import { SCard } from '@/components/SCard';

// Get all available icon names
const allIconNames = getAvailableIconNames();

interface IconDisplayProps {
	iconName: SIconName;
	onCopy: (snippet: string) => void;
	copiedIcon: string | null;
}

const IconDisplay: React.FC<IconDisplayProps> = ({
	iconName,
	onCopy,
	copiedIcon,
}) => {
	const [isWiggling, setIsWiggling] = useState(false);

	const handleCopy = async () => {
		const snippet = `<SIcon name="${iconName}" size={16} />`;

		try {
			await navigator.clipboard.writeText(snippet);
			onCopy(iconName);

			// Trigger wiggle animation
			setIsWiggling(true);
			setTimeout(() => setIsWiggling(false), 600);
		} catch (err) {
			console.error('Failed to copy to clipboard:', err);
		}
	};

	return (
		<div
			className="group relative flex min-h-[120px] cursor-pointer flex-col items-center justify-center rounded-md border border-neutral-100 p-4 shadow transition-[box-shadow,color] hover:shadow-lg"
			onClick={handleCopy}
			title="Click to copy snippet"
		>
			<div
				className={`mb-2 flex size-8 items-center justify-center text-gray-700 transition-colors group-hover:text-blue-600 ${isWiggling ? 'wiggle' : ''
					}`}
			>
				<SIcon name={iconName} size={24} />
			</div>
			<div className="mb-1 break-all px-1 text-center font-mono text-xs leading-tight text-gray-600 group-hover:text-gray-800">
				{iconName}
			</div>
			<div className="absolute right-2 top-2 flex items-center gap-1 text-xs text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
				{copiedIcon === iconName ? (
					<>
						<SIcon name="check" size={12} />
						<span>Copied!</span>
					</>
				) : (
					<>
						<SIcon name="clipboard" size={12} />
						<span>Copy</span>
					</>
				)}
			</div>
		</div>
	);
};

interface SIconShowcaseProps {
	search?: string;
	iconsPerPage?: number;
}

const SIconShowcase: React.FC<SIconShowcaseProps> = ({
	search = '',
	iconsPerPage = 100,
}) => {
	const [searchTerm, setSearchTerm] = useState(search);
	const [currentPage, setCurrentPage] = useState(1);
	const [copiedIcon, setCopiedIcon] = useState<string | null>(null);

	const lowercasedIconNames = useMemo(
		() =>
			allIconNames.map((name) => ({
				name,
				lower: name.toLowerCase(),
			})),
		[],
	);

	const filteredIcons = useMemo(() => {
		const term = searchTerm.toLowerCase().trim();
		if (!term) return allIconNames;
		return lowercasedIconNames
			.filter((icon) => icon.lower.includes(term))
			.map((icon) => icon.name);
	}, [searchTerm, lowercasedIconNames]);

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
			<SCard padding="none" spacey="large" depth="flat">
				<SCard.Header
					title="SIcon Library"
					description="Browse and copy React snippets for all available Lucide icons using SIcon component"
				/>
				<SCard.Content>
					<div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
						<SInput
							type="text"
							placeholder="Search icons..."
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
								setCurrentPage(1);
							}}
							className="max-w-[300px]"
							allowClear
							onClear={() => {
								setSearchTerm('');
								setCurrentPage(1);
							}}
							leadingIcon={<SIcon name="search" className="size-4" />}
						/>
						<div className="text-sm text-gray-600">
							Page {currentPage} of {totalPages} • Showing {currentIcons.length}{' '}
							of {filteredIcons.length} icons
						</div>
					</div>
				</SCard.Content>
			</SCard>
			<div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
				{currentIcons.map((iconName) => (
					<IconDisplay
						key={iconName}
						iconName={iconName}
						onCopy={handleCopy}
						copiedIcon={copiedIcon}
					/>
				))}
			</div>
			{totalPages > 1 && (
				<div className="flex items-center justify-center gap-2">
					<SButton
						variant="neutral"
						onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
						disabled={currentPage === 1}
					>
						Previous
					</SButton>

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
								<SButton
									key={pageNum}
									variant={currentPage === pageNum ? 'primary' : 'neutral'}
									onClick={() => setCurrentPage(pageNum)}
									className="aspect-square"
								>
									{pageNum}
								</SButton>
							);
						})}
					</div>

					<SButton
						variant="neutral"
						onClick={() =>
							setCurrentPage(Math.min(totalPages, currentPage + 1))
						}
						disabled={currentPage === totalPages}
					>
						Next
					</SButton>
				</div>
			)}{' '}
			<SCard padding="large" spacey="regular" className="mt-8">
				<SCard.Header
					title="Usage"
					description="Click on any icon to copy its React snippet to your clipboard."
				/>
				<SCard.Content>
					<div className="rounded border bg-white p-3 font-mono text-sm">
						{`<SIcon name="heart" size={20} />`}
					</div>
				</SCard.Content>
			</SCard>
		</div>
	);
};

const meta = {
	title: 'Presentation/SIcon',
	component: SIconShowcase,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
## SIcon Component

A flexible icon component that renders Lucide icons using extracted SVG path data. The SIcon component provides access to all Lucide icons with a single, consistent interface using kebab-case naming.

### Features:
- **Single Component**: Use one \`SIcon\` component for all icons
- **Kebab-case Names**: Intuitive naming like \`arrow-left\`, \`check-circle\`, etc.
- **TypeScript Support**: Full type safety with autocomplete for icon names
- **Optimized**: Uses extracted SVG path data for better performance
- **Customizable**: Full control over size, color, stroke width, and styling

### Usage:
\`\`\`jsx
import { SIcon } from '@chargebee/sting-react';

// Basic usage
<SIcon name="heart" size={20} />

// With custom props
<SIcon name="star" size={24} color="#fbbf24" strokeWidth={1.5} />

// With Tailwind classes
<SIcon name="check-circle" className="text-green-500" />

// With event handlers
<SIcon name="x" size={16} onClick={handleClose} />
\`\`\`

### Available Props:
- \`name\`: Icon name in kebab-case (required)
- \`size\`: number | string (default: 16)
- \`color\`: string (default: 'currentColor')
- \`strokeWidth\`: number | string (default: 2)
- \`className\`: string
- Standard SVG attributes (onClick, onMouseOver, etc.)

### Helper Functions:
- \`getAvailableIconNames()\`: Get all available icon names
- \`searchIcons(query)\`: Search icons by name
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
} satisfies Meta<typeof SIconShowcase>;

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

// Basic SIcon component stories
export const Default: Story = {
	render: () => (
		<div className="flex items-center justify-center p-8">
			<SIcon name="heart" size={24} />
		</div>
	),
	parameters: {
		layout: 'centered',
	},
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4 p-8">
			<SIcon name="star" size={16} />
			<SIcon name="star" size={24} />
			<SIcon name="star" size={32} />
			<SIcon name="star" size={48} />
		</div>
	),
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				story: 'Icons can be rendered in different sizes using the `size` prop.',
			},
		},
	},
};

export const Colors: Story = {
	render: () => (
		<div className="flex items-center gap-4 p-8">
			<SIcon name="heart" size={32} color="#ef4444" />
			<SIcon name="circle-check" size={32} color="#10b981" />
			<SIcon name="triangle-alert" size={32} color="#f59e0b" />
			<SIcon name="info" size={32} color="#3b82f6" />
		</div>
	),
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				story: 'Icons can be colored using the `color` prop or CSS classes.',
			},
		},
	},
};

export const StrokeWidths: Story = {
	render: () => (
		<div className="flex items-center gap-4 p-8">
			<SIcon name="circle" size={32} strokeWidth={1} />
			<SIcon name="circle" size={32} strokeWidth={2} />
			<SIcon name="circle" size={32} strokeWidth={3} />
			<SIcon name="circle" size={32} strokeWidth={4} />
		</div>
	),
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				story: 'Stroke width can be adjusted using the `strokeWidth` prop.',
			},
		},
	},
};

export const CommonIcons: Story = {
	render: () => {
		const commonIcons: SIconName[] = [
			'house', 'user', 'settings', 'search', 'heart', 'star',
			'check', 'x', 'arrow-left', 'arrow-right', 'download', 'upload',
			'trash-2', 'plus', 'minus', 'info', 'triangle-alert'
		];

		return (
			<div className="grid grid-cols-6 gap-4 p-4">
				{commonIcons.map((iconName) => (
					<div key={iconName} className="flex flex-col items-center gap-2">
						<SIcon name={iconName} size={24} />
						<span className="text-xs text-gray-600 text-center">{iconName}</span>
					</div>
				))}
			</div>
		);
	},
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				story: 'A showcase of commonly used icons.',
			},
		},
	},
};

const wiggleStyles = `
@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-15deg); }
  50% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}
.wiggle {
  animation: wiggle 0.6s ease-in-out;
}
`;

// Inject styles into the document head
if (typeof document !== 'undefined') {
	const styleElement = document.createElement('style');
	styleElement.textContent = wiggleStyles;
	document.head.appendChild(styleElement);
} 