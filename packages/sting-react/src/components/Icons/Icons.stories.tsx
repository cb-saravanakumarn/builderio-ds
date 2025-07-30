import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useMemo } from 'react';
import * as LucideIcons from '../lucide-icons';
import { CheckIcon, ClipboardIcon } from '../lucide-icons';
import { SInput } from '@/components/SInput';
import { SButton } from '@/components/SButton';
import { SCard } from '@/components/SCard';

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
	const [isWiggling, setIsWiggling] = useState(false);

	const handleCopy = async () => {
		const snippet = `<${iconName} size={16} />`;

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
				className={`mb-2 flex size-8 items-center justify-center text-gray-700 transition-colors group-hover:text-blue-600 ${
					isWiggling ? 'wiggle' : ''
				}`}
			>
				<IconComponent size={24} />
			</div>
			<div className="mb-1 break-all px-1 text-center font-mono text-xs leading-tight text-gray-600 group-hover:text-gray-800">
				{iconName.replace(/Icon$/, '')}
			</div>
			<div className="absolute right-2 top-2 flex items-center gap-1 text-xs text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
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
					title="Icons"
					description="Browse and copy React snippets for all available Lucide icons"
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
							leadingIcon={<LucideIcons.SearchIcon className="size-4" />}
						/>
						<div className="text-sm text-gray-600">
							Page {currentPage} of {totalPages} • Showing {currentIcons.length}{' '}
							of {filteredIcons.length} icons
						</div>
					</div>
				</SCard.Content>
			</SCard>
			<div className="my-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
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
						{`<HeartIcon size={20} />`}
					</div>
				</SCard.Content>
			</SCard>
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
