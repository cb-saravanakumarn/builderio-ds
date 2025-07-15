import type { Meta, StoryObj } from '@storybook/react';
import { STooltip, STooltipProps } from '.';
import { SButton as Button } from '../SButton';

const meta: Meta<typeof STooltip> = {
	component: STooltip,
	decorators: [],
	title: 'Presentation/STooltip',
	tags: ['autodocs'],
	args: {
		placement: 'top',
		align: 'center',
		color: 'dark',
		width: 'regular',
		delayDuration: 0,
		label: 'Tooltip Content',
		link: {
			label: 'Learn More',
			href: '#',
		},
	},
	argTypes: {
		placement: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			description:
				'The placement of the tooltip relative to its trigger (handled by Radix UI)',
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			description:
				'The alignment of the tooltip relative to its trigger (handled by Radix UI)',
		},
		delayDuration: {
			control: 'number',
			description: 'Delay in milliseconds before the tooltip appears',
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoTooltip: Story = {
	render: (args: STooltipProps) => {
		return (
			<STooltip {...args}>
				<Button onClick={() => { }} size="regular" variant="primary">
					Button
				</Button>
			</STooltip>
		);
	},
};

export const PlacementExamples: Story = {
	args: {
		label: 'Tooltip content',
		color: 'dark',
	},
	render: (args) => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip {...args} placement="top" label="Top tooltip">
					<Button size="regular" variant="primary">
						Top
					</Button>
				</STooltip>
				<STooltip {...args} placement="right" label="Right tooltip">
					<Button size="regular" variant="primary">
						Right
					</Button>
				</STooltip>
				<STooltip {...args} placement="bottom" label="Bottom tooltip">
					<Button size="regular" variant="primary">
						Bottom
					</Button>
				</STooltip>
				<STooltip {...args} placement="left" label="Left tooltip">
					<Button size="regular" variant="primary">
						Left
					</Button>
				</STooltip>
			</div>
		);
	},
};

export const AlignmentExamples: Story = {
	args: {
		placement: 'top',
		color: 'dark',
	},
	render: (args) => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip {...args} align="start" label="Align start">
					<Button size="regular" variant="primary">
						Start
					</Button>
				</STooltip>
				<STooltip {...args} align="center" label="Align center">
					<Button size="regular" variant="primary">
						Center
					</Button>
				</STooltip>
				<STooltip {...args} align="end" label="Align end">
					<Button size="regular" variant="primary">
						End
					</Button>
				</STooltip>
			</div>
		);
	},
};

export const DelayExamples: Story = {
	args: {
		placement: 'top',
		color: 'dark',
	},
	render: (args) => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip {...args} label="No delay (0ms)" delayDuration={0}>
					<Button size="regular" variant="primary">
						No Delay
					</Button>
				</STooltip>
				<STooltip {...args} label="Short delay (300ms)" delayDuration={300}>
					<Button size="regular" variant="primary">
						Short Delay
					</Button>
				</STooltip>
				<STooltip {...args} label="Medium delay (700ms)" delayDuration={700}>
					<Button size="regular" variant="primary">
						Medium Delay
					</Button>
				</STooltip>
				<STooltip {...args} label="Long delay (1000ms)" delayDuration={1000}>
					<Button size="regular" variant="primary">
						Long Delay
					</Button>
				</STooltip>
			</div>
		);
	},
};

export const CompoundPatternExample: Story = {
	name: 'Compound Pattern',
	render: (args) => {
		return (
			<STooltip.Root delayDuration={args.delayDuration}>
				<STooltip.Trigger>
					<Button size="regular" variant="primary">Compound Trigger</Button>
				</STooltip.Trigger>
				<STooltip.Content
					placement={args.placement}
					align={args.align}
					color={args.color}
					width={args.width}
				>
					<div style={{ fontWeight: 'bold' }}>Custom Compound Tooltip</div>
					<div>This tooltip uses the compound component pattern.</div>
					<a href="#" style={{ color: '#2563eb', textDecoration: 'underline' }}>Learn more</a>
				</STooltip.Content>
			</STooltip.Root>
		);
	},
	args: {
		placement: 'top',
		align: 'center',
		color: 'dark',
		width: 'regular',
		delayDuration: 0,
	},
};
