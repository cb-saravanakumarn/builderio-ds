import type { Meta, StoryObj } from '@storybook/react';

import { SCard as Card } from '.';
import { SButton as Button } from '../SButton';
import { SBadge as Badge } from '../SBadge';

const dummyContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

const meta: Meta<typeof Card> = {
	component: Card,
	decorators: [(Story: any) => <Story />],
	tags: ['autodocs'],
	title: 'Design System/Presentation/Card',
	argTypes: {
		depth: {
			control: 'select',
			options: ['flat', 'raised', 'regular'],
			table: {
				category: 'Card Props',
			},
		},
		padding: {
			control: 'select',
			options: ['large', 'regular', 'small', 'null'],
			table: {
				category: 'Card Props',
			},
		},
		background: {
			control: 'select',
			options: [
				'transparent',
				'white',
				'neutral',
				'danger',
				'warning',
				'primary',
				'success',
			],
			table: {
				category: 'Card Props',
			},
		},
		spacey: {
			control: 'select',
			options: ['none', 'small', 'regular', 'large', 'xlarge', 'xxlarge'],
			table: {
				category: 'Card Props',
			},
		},
		border: {
			control: 'select',
			options: ['none', 'dotted'],
			table: {
				category: 'Card Props',
			},
		},
		rounded: {
			control: 'boolean',
			table: {
				category: 'Card Props',
			},
		},
		title: {
			control: 'text',
			description: 'Title text for the card header',
			table: {
				category: 'Header Props',
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCard: Story = {
	args: {
		depth: 'regular',
		padding: 'regular',
	},
	render: (args) => {
		return <Card {...args}>Card Component</Card>;
	},
};

export const CardWithHeader: Story = {
	render: (args) => {
		const {
			'header.title': title,
			'header.description': description,
			'header.alignItems': alignItems,
			'header.variant': headerVariant,
			...cardProps
		} = args;

		return (
			<Card {...cardProps}>
				<Card.Header
					title={title || 'Card Title'}
					alignItems={alignItems || 'start'}
					headerVariant={headerVariant || 'default'}
					description={
						description || 'This space is to add description or subtitle'
					}
					actionElement={<Button>Action</Button>}
				/>
				<Card.Content>
					<div>Content</div>
				</Card.Content>
			</Card>
		);
	},
	args: {
		'header.title': 'Card Title',
		'header.description': 'This space is to add description or subtitle',
		'header.alignItems': 'start',
		'header.variant': 'default',
	},
};

export const HeroCardWithHeader: Story = {
	render: (args) => {
		const {
			'header.title': title,
			'header.description': description,
			'header.alignItems': alignItems,
			'header.variant': headerVariant,
			...cardProps
		} = args;

		return (
			<Card {...cardProps}>
				<Card.Header
					title={title || 'Card Title'}
					headerVariant={headerVariant || 'hero'}
					alignItems={alignItems || 'start'}
					description={
						description || 'This space is to add description or subtitle'
					}
					actionElement={<Button variant={'neutral'}>Action</Button>}
				/>
				<Card.Content>{dummyContent} </Card.Content>
			</Card>
		);
	},
	args: {
		'header.title': 'Card Title',
		'header.description': 'This space is to add description or subtitle',
		'header.alignItems': 'start',
		'header.variant': 'hero',
	},
};

export const HeroCardWithHeaderAndAction: Story = {
	render: (args) => {
		const {
			'header.title': title,
			'header.description': description,
			'header.alignItems': alignItems,
			'header.variant': headerVariant,
			...cardProps
		} = args;

		return (
			<Card {...cardProps}>
				<Card.Header
					title={title || 'Card Title'}
					headerVariant={headerVariant || 'hero'}
					alignItems={alignItems || 'start'}
					description={
						description || 'This space is to add description or subtitle'
					}
					actionElement={
						<div className="flex items-center gap-sm">
							<Badge variant={'info'}>New</Badge> <Badge>Primary</Badge>
							<Button variant={'neutral'}>Tertiary</Button>
							<Button variant={'neutral'}>Secondary</Button>
							<Button variant={'primary'}>Primary</Button>
						</div>
					}
				/>
				<Card.Content>{dummyContent}</Card.Content>
			</Card>
		);
	},
	args: {
		'header.title': 'Card Title',
		'header.description': 'This space is to add description or subtitle',
		'header.alignItems': 'start',
		'header.variant': 'hero',
	},
};

// Dedicated header component documentation
export const HeaderComponentExample: Story = {
	render: (args) => {
		const {
			'header.title': title,
			'header.description': description,
			'header.alignItems': alignItems,
			'header.variant': headerVariant,
			...cardProps
		} = args;

		return (
			<Card {...cardProps}>
				<Card.Header
					title={title || 'Card Header'}
					description={
						description || 'This example focuses on the header component'
					}
					alignItems={alignItems || 'start'}
					headerVariant={headerVariant || 'default'}
				/>
				<Card.Content>Content below header</Card.Content>
			</Card>
		);
	},
	args: {
		'header.title': 'Card Header Documentation',
		'header.description': 'This example demonstrates the Card.Header component',
		'header.alignItems': 'start',
		'header.variant': 'default',
	},
	parameters: {
		docs: {
			description: {
				story:
					'This example demonstrates the Card.Header component in isolation.',
			},
		},
	},
};
