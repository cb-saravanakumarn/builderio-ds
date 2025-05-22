import type { Meta, StoryObj } from '@storybook/react';
import { STable as Table } from '.';
import './STable.css';

const meta: Meta<typeof Table> = {
	component: Table,
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
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					{basicData.headers.map((header) => (
						<Table.HeaderCell key={header.id}>{header.label}</Table.HeaderCell>
					))}
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{basicData.rows.map((row, rowIndex) => (
					<Table.Row key={rowIndex}>
						{basicData.headers.map((header) => (
							<Table.Cell key={header.id}>
								{row[header.id as keyof typeof row]}
							</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	),
};

export const TableWithHorizontalScroll: Story = {
	args: {
		maxWidth: '600px', // Set a fixed width to enable horizontal scrolling
	},
	render: (args) => (
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					{basicData.headers.map((header) => (
						<Table.HeaderCell key={header.id}>{header.label}</Table.HeaderCell>
					))}
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{basicData.rows.map((row, rowIndex) => (
					<Table.Row key={rowIndex}>
						{basicData.headers.map((header) => (
							<Table.Cell key={header.id}>
								{row[header.id as keyof typeof row]}
							</Table.Cell>
						))}
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	),
};

export const ComplexTable: Story = {
	render: (args) => (
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					<Table.HeaderCell rowSpan={2}>Name</Table.HeaderCell>
					<Table.HeaderCell colSpan={2}>Contact Info</Table.HeaderCell>
				</Table.Row>
				<Table.Row>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell>Phone</Table.HeaderCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.Row>
					<Table.Cell rowSpan={2}>John Doe</Table.Cell>
					<Table.Cell>john@example.com</Table.Cell>
					<Table.Cell>123-456-7890</Table.Cell>
				</Table.Row>
				<Table.Row>
					<Table.Cell>john.work@example.com</Table.Cell>
					<Table.Cell>098-765-4321</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	),
};

export const TableWithCellAlignment: Story = {
	render: (args) => (
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					<Table.HeaderCell align="left">Product</Table.HeaderCell>
					<Table.HeaderCell align="center">Quantity</Table.HeaderCell>
					<Table.HeaderCell align="right">Price</Table.HeaderCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				<Table.Row>
					<Table.Cell align="left">Widget</Table.Cell>
					<Table.Cell align="center">5</Table.Cell>
					<Table.Cell align="right">$99.99</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table>
	),
};

export const TableWithStickyColumns: Story = {
	render: (args) => (
		<Table {...args}>
			<Table.Head>
				<Table.Row>
					<Table.HeaderCell sticky="left">Sticky Left</Table.HeaderCell>
					<Table.HeaderCell>Name</Table.HeaderCell>
					<Table.HeaderCell>Email</Table.HeaderCell>
					<Table.HeaderCell sticky="right">Sticky Right</Table.HeaderCell>
				</Table.Row>
			</Table.Head>
			<Table.Body>
				{basicData.rows.map((row, rowIndex) => (
					<Table.Row key={rowIndex}>
						<Table.Cell sticky="left">Sticky Left</Table.Cell>
						<Table.Cell>{row.name}</Table.Cell>
						<Table.Cell>{row.email}</Table.Cell>
						<Table.Cell sticky="right">Sticky Right</Table.Cell>
					</Table.Row>
				))}
			</Table.Body>
		</Table>
	),
};

export const AllVariants: Story = {
	render: () => (
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
									<Table
										variant={variant}
										size={size}
										mode={mode}
										border={border}
									>
										<Table.Head>
											<Table.Row>
												{basicData.headers.map((header) => (
													<Table.HeaderCell key={header.id}>
														{header.label}
													</Table.HeaderCell>
												))}
											</Table.Row>
										</Table.Head>
										<Table.Body>
											{basicData.rows.map((row, rowIndex) => (
												<Table.Row key={rowIndex}>
													{basicData.headers.map((header) => (
														<Table.Cell key={header.id}>
															{row[header.id as keyof typeof row]}
														</Table.Cell>
													))}
												</Table.Row>
											))}
										</Table.Body>
									</Table>
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
			<Table {...args}>
				<Table.Head>
					<Table.Row>
						{basicData.headers.map((header, index) => (
							<Table.HeaderCell
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
							</Table.HeaderCell>
						))}
					</Table.Row>
				</Table.Head>
				<Table.Body>
					{basicData.rows.map((row, rowIndex) => (
						<Table.Row key={rowIndex}>
							{basicData.headers.map((header, index) => (
								<Table.Cell
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
								</Table.Cell>
							))}
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		</div>
	),
};
