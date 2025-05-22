import type { Meta, StoryObj } from '@storybook/react';
import { SRadioGroup, SRadio } from '.';
import { SButton } from '../SButton';

const meta: Meta<typeof SRadioGroup> = {
	component: SRadioGroup,
	decorators: [(Story: any) => <Story />],
	title: 'Design System/Forms/SRadioGroup',
	tags: ['autodocs'],
	args: {
		variant: 'basic',
		align: 'vertical',
		size: 'regular',
		width: 'full',
		title: '',
		description: '',
		onChangeLogic: (e) => console.log(e),
	},
	argTypes: {
		variant: {
			options: ['basic', 'contained'],
			control: { type: 'inline-radio' },
		},
		align: {
			options: ['vertical', 'horizontal'],
			control: { type: 'inline-radio' },
		},
		format: {
			options: ['rich', 'none'],
			control: { type: 'inline-radio' },
		},
		size: {
			options: ['small', 'regular', 'large'],
			control: { type: 'inline-radio' },
			if: { arg: 'variant', neq: 'basic' },
		},
		width: {
			if: { arg: 'variant', neq: 'basic' },
		},
		noCheckmark: {
			if: { arg: 'variant', neq: 'basic' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Radio: Story = {
	args: {
		variant: 'basic',
		align: 'vertical',
		size: 'regular',
		width: 'full',
		title: '',
		description: '',
		disabled: false,
		onChangeLogic: (e: any) => console.log(e),
	},
	render: (args: any) => {
		return (
			<SRadioGroup
				defaultValue="option value"
				{...args}
				onChangeLogic={(e) => console.log(e)}
			>
				<SRadio
					id={'option1'}
					value={'option value'}
					contained={args.variant === 'contained'}
					richContent={false}
					disabled={args.disabled}
					noCheckmark={args.noCheckmark}
				>
					<label htmlFor={'option1'}>Option</label>
				</SRadio>

				<SRadio
					id={'option2'}
					value={'option value 2'}
					contained={args.variant === 'contained'}
					richContent={false}
					disabled={args.disabled}
					noCheckmark={args.noCheckmark}
				>
					<label htmlFor={'option2'}>Option 2</label>
				</SRadio>
				<SRadio
					id={'option3'}
					value={'option value 3'}
					contained={args.variant === 'contained'}
					richContent={false}
					disabled={args.disabled}
					noCheckmark={args.noCheckmark}
				>
					<label htmlFor={'option3'}>Option 3 You can replace </label>
				</SRadio>
			</SRadioGroup>
		);
	},
};

export const RadioRich: Story = {
	args: {
		variant: 'basic',
		align: 'vertical',
		size: 'regular',
		width: 'full',
		title: '',
		description: '',
		onChangeLogic: (e: any) => console.log(e),
	},
	render: (args: any) => {
		return (
			<SRadioGroup {...args} defaultValue="option value" variant={'contained'}>
				<SRadio
					id={'option1Rich'}
					value={'option value Rich'}
					contained={true}
					richContent={true}
					disabled={true}
					noCheckmark={args.noCheckmark}
				>
					<label htmlFor={'option1Rich'}>
						<div>
							<h5>Title</h5>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry.
							</p>
						</div>
					</label>
				</SRadio>

				<SRadio
					id={'option2Rich'}
					value={'option value Rich 2'}
					contained={true}
					richContent={true}
					disabled={false}
					noCheckmark={args.noCheckmark}
					position={'start'}
				>
					<label htmlFor={'option2Rich'}>
						<div>
							<h5>Title</h5>
							<p>
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum is simply dummy text of the
								printing and typesetting industry. Lorem Ipsum is simply dummy
								text of the printing and typesetting industry.
							</p>
						</div>
					</label>
					<SRadio.Action>
						<SButton>Action</SButton>
						<SButton>Action</SButton>
					</SRadio.Action>
				</SRadio>
			</SRadioGroup>
		);
	},
};
