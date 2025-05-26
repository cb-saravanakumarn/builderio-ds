import type { Meta, StoryObj } from '@storybook/react';
import { STooltip, STooltipProps } from '.';
import { SButton as Button } from '../SButton';

const meta: Meta<typeof STooltip> = {
	component: STooltip,
	decorators: [],
	title: 'Design System/Presentation/STooltip',
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
				<Button onClick={() => {}} size="regular" variant="primary">
					Button
				</Button>
			</STooltip>
		);
	},
};

export const PlacementExamples: Story = {
	render: () => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip placement="top" label="Top tooltip" color="dark">
					<Button size="regular" variant="primary">
						Top
					</Button>
				</STooltip>
				<STooltip placement="right" label="Right tooltip" color="dark">
					<Button size="regular" variant="primary">
						Right
					</Button>
				</STooltip>
				<STooltip placement="bottom" label="Bottom tooltip" color="dark">
					<Button size="regular" variant="primary">
						Bottom
					</Button>
				</STooltip>
				<STooltip placement="left" label="Left tooltip" color="dark">
					<Button size="regular" variant="primary">
						Left
					</Button>
				</STooltip>
			</div>
		);
	},
};

export const AlignmentExamples: Story = {
	render: () => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip
					placement="top"
					align="start"
					label="Align start"
					color="dark"
				>
					<Button size="regular" variant="primary">
						Start
					</Button>
				</STooltip>
				<STooltip
					placement="top"
					align="center"
					label="Align center"
					color="dark"
				>
					<Button size="regular" variant="primary">
						Center
					</Button>
				</STooltip>
				<STooltip placement="top" align="end" label="Align end" color="dark">
					<Button size="regular" variant="primary">
						End
					</Button>
				</STooltip>
			</div>
		);
	},
};

export const DelayExamples: Story = {
	render: () => {
		return (
			<div className="flex flex-wrap gap-8">
				<STooltip
					placement="top"
					label="No delay (0ms)"
					color="dark"
					delayDuration={0}
				>
					<Button size="regular" variant="primary">
						No Delay
					</Button>
				</STooltip>
				<STooltip
					placement="top"
					label="Short delay (300ms)"
					color="dark"
					delayDuration={300}
				>
					<Button size="regular" variant="primary">
						Short Delay
					</Button>
				</STooltip>
				<STooltip
					placement="top"
					label="Medium delay (700ms)"
					color="dark"
					delayDuration={700}
				>
					<Button size="regular" variant="primary">
						Medium Delay
					</Button>
				</STooltip>
				<STooltip
					placement="top"
					label="Long delay (1000ms)"
					color="dark"
					delayDuration={1000}
				>
					<Button size="regular" variant="primary">
						Long Delay
					</Button>
				</STooltip>
			</div>
		);
	},
};
