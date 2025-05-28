import type { Meta, StoryObj } from '@storybook/react';
import { STable } from '.';
import './STable.css';

const meta: Meta<typeof STable.Root> = {
	component: STable.Root,
	title: 'Design System/Presentation/STable',
	tags: ['autodocs'],
	args: {
		children: '',
	},
	argTypes: {
		variant: {
			options: ['primary', 'neutral', 'striped'],
			control: { type: 'select' },
		},
		size: {
			options: ['small', 'regular', 'large'],
			control: { type: 'select' },
		},
		mode: {
			options: ['light', 'dark'],
			control: { type: 'select' },
		},
		border: {
			options: ['full', 'horizontal', 'none', 'rounded'],
			control: { type: 'radio' },
		},
		rounded: {
			options: ['none', 'sm', 'md', 'lg'],
			control: { type: 'select' },
		},
		maxWidth: {
			control: { type: 'text' },
		},
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

const basicData = {
	headers: [
		{ id: 'name', label: 'Name', width: '150px' },
		{ id: 'email', label: 'Email', width: '500px' },
		{ id: 'status', label: 'Status', width: '100px' },
		{ id: 'age', label: 'Age', width: '80px' },
		{ id: 'address', label: 'Address', width: '250px' },
		{ id: 'city', label: 'City', width: '150px' },
		{ id: 'country', label: 'Country', width: '150px' },
		{ id: 'phone', label: 'Phone', width: '100px' },
	],
	rows: [
		{
			name: 'John Doe',
			email: 'john@example.com',
			status: 'Active',
			age: 28,
			address: '123 Main St',
			city: 'New York',
			country: 'USA',
			phone: '123-456-7890',
		},
		{
			name: 'Jane Smith',
			email: 'jane@example.com',
			status: 'Inactive',
			age: 34,
			address: '456 Elm St',
			city: 'Los Angeles',
			country: 'USA',
			phone: '098-765-4321',
		},
		{
			name: 'Bob Johnson',
			email: 'bob@example.com',
			status: 'Active',
			age: 45,
			address: '789 Oak St',
			city: 'Chicago',
			country: 'USA',
			phone: '555-555-5555',
		},
	],
};

export const BasicTable: Story = {
	render: (args) => (
		<STable.Root {...args}>
			<STable.Head>
				<STable.Row>
					{basicData.headers.map((header) => (
						<STable.HeaderCell key={header.id}>
							{header.label}
						</STable.HeaderCell>
					))}
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{basicData.rows.map((row, rowIndex) => (
					<STable.Row key={rowIndex}>
						{basicData.headers.map((header) => (
							<STable.Cell key={header.id}>
								{row[header.id as keyof typeof row]}
							</STable.Cell>
						))}
					</STable.Row>
				))}
			</STable.Body>
		</STable.Root>
	),
};

export const TableWithHorizontalScroll: Story = {
	args: {
		maxWidth: '600px', // Set a fixed width to enable horizontal scrolling
	},
	render: (args) => (
		<STable.Root {...args}>
			<STable.Head>
				<STable.Row>
					{basicData.headers.map((header) => (
						<STable.HeaderCell key={header.id}>
							{header.label}
						</STable.HeaderCell>
					))}
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{basicData.rows.map((row, rowIndex) => (
					<STable.Row key={rowIndex}>
						{basicData.headers.map((header) => (
							<STable.Cell key={header.id}>
								{row[header.id as keyof typeof row]}
							</STable.Cell>
						))}
					</STable.Row>
				))}
			</STable.Body>
		</STable.Root>
	),
};

export const ComplexTable: Story = {
	args: {
		variant: 'primary',
		size: 'regular',
	},
	render: (args) => (
		<STable.Root {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell rowSpan={2}>Name</STable.HeaderCell>
					<STable.HeaderCell colSpan={2}>Contact Info</STable.HeaderCell>
				</STable.Row>
				<STable.Row>
					<STable.HeaderCell>Email</STable.HeaderCell>
					<STable.HeaderCell>Phone</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				<STable.Row>
					<STable.Cell rowSpan={2}>John Doe</STable.Cell>
					<STable.Cell>john@example.com</STable.Cell>
					<STable.Cell>123-456-7890</STable.Cell>
				</STable.Row>
				<STable.Row>
					<STable.Cell>john.work@example.com</STable.Cell>
					<STable.Cell>098-765-4321</STable.Cell>
				</STable.Row>
			</STable.Body>
		</STable.Root>
	),
};

export const TableWithCellAlignment: Story = {
	args: {
		variant: 'primary',
		size: 'regular',
	},
	render: (args) => (
		<STable.Root {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell align="left">Product</STable.HeaderCell>
					<STable.HeaderCell align="center">Quantity</STable.HeaderCell>
					<STable.HeaderCell align="right">Price</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				<STable.Row>
					<STable.Cell align="left">Widget</STable.Cell>
					<STable.Cell align="center">5</STable.Cell>
					<STable.Cell align="right">$99.99</STable.Cell>
				</STable.Row>
			</STable.Body>
		</STable.Root>
	),
};

export const TableWithStickyColumns: Story = {
	args: {
		variant: 'primary',
		size: 'regular',
	},
	render: (args) => (
		<STable.Root {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell sticky="left">Sticky Left</STable.HeaderCell>
					<STable.HeaderCell>Name</STable.HeaderCell>
					<STable.HeaderCell>Email</STable.HeaderCell>
					<STable.HeaderCell sticky="right">Sticky Right</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{basicData.rows.map((row, rowIndex) => (
					<STable.Row key={rowIndex}>
						<STable.Cell sticky="left">Sticky Left</STable.Cell>
						<STable.Cell>{row.name}</STable.Cell>
						<STable.Cell>{row.email}</STable.Cell>
						<STable.Cell sticky="right">Sticky Right</STable.Cell>
					</STable.Row>
				))}
			</STable.Body>
		</STable.Root>
	),
};

export const AllVariants: Story = {
	args: {
		variant: 'primary',
		size: 'regular',
		mode: 'light',
		border: 'full',
	},
	render: (args) => (
		<div className="space-y-6">
			{(['primary', 'neutral', 'striped'] as const).map((variant) =>
				(['small', 'regular', 'large'] as const).map((size) =>
					(['light', 'dark'] as const).map((mode) =>
						(['full', 'horizontal', 'none', 'rounded'] as const).map(
							(border) => (
								<div
									key={`${variant}-${size}-${mode}-${border}`}
									className="mb-8"
								>
									<h2 className="mb-2 text-lg font-bold">
										Variant: {variant}, Size: {size}, Mode: {mode}, Border:{' '}
										{border}
									</h2>
									<STable.Root
										{...args}
										variant={variant}
										size={size}
										mode={mode}
										border={border}
									>
										<STable.Head>
											<STable.Row>
												{basicData.headers.map((header) => (
													<STable.HeaderCell key={header.id}>
														{header.label}
													</STable.HeaderCell>
												))}
											</STable.Row>
										</STable.Head>
										<STable.Body>
											{basicData.rows.map((row, rowIndex) => (
												<STable.Row key={rowIndex}>
													{basicData.headers.map((header) => (
														<STable.Cell key={header.id}>
															{row[header.id as keyof typeof row]}
														</STable.Cell>
													))}
												</STable.Row>
											))}
										</STable.Body>
									</STable.Root>
								</div>
							),
						),
					),
				),
			)}
		</div>
	),
};

export const TableWithStickyColumnsAndFixedWidths: Story = {
	args: {
		maxWidth: '100%', // Set a fixed width to enable horizontal scrolling
	},
	render: (args) => (
		<div>
			<STable.Root {...args}>
				<STable.Head>
					<STable.Row>
						{basicData.headers.map((header, index) => (
							<STable.HeaderCell
								key={header.id}
								// sortable={index === 0}
								// sortDirection={index === 0 ? "desc" : undefined}

								sticky={
									index === 0
										? 'left'
										: index === basicData.headers.length - 1
											? 'right'
											: undefined
								}
								width={header.width}
							>
								{header.label}
							</STable.HeaderCell>
						))}
					</STable.Row>
				</STable.Head>
				<STable.Body>
					{basicData.rows.map((row, rowIndex) => (
						<STable.Row key={rowIndex}>
							{basicData.headers.map((header, index) => (
								<STable.Cell
									className="s-text-wrap"
									key={header.id}
									sticky={
										index === 0
											? 'left'
											: index === basicData.headers.length - 1
												? 'right'
												: undefined
									}
									width={header.width}
								>
									{row[header.id as keyof typeof row]}
								</STable.Cell>
							))}
						</STable.Row>
					))}
				</STable.Body>
			</STable.Root>
		</div>
	),
};
