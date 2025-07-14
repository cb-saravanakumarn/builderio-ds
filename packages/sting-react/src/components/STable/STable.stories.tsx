import type { Meta, StoryObj } from '@storybook/react';
import { STable } from './index';

const meta: Meta<typeof STable> = {
	title: 'Presentation/STable',
	component: STable,
	tags: ['autodocs'],
	decorators: [
		(Story: any) => (
			<>
				<div className="max-h-[400px]">
					<Story />
				</div>
			</>
		),
	],
	argTypes: {
		className: {
			control: 'text',
			description: 'Additional CSS classes for the table',
			table: {
				category: 'Styling',
			},
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
	{
		id: 1,
		name: 'John Doe',
		email: 'john@example.com',
		role: 'Admin',
		status: 'Active',
	},
	{
		id: 2,
		name: 'Jane Smith',
		email: 'jane@example.com',
		role: 'User',
		status: 'Active',
	},
	{
		id: 3,
		name: 'Bob Johnson',
		email: 'bob@example.com',
		role: 'User',
		status: 'Inactive',
	},
	{
		id: 4,
		name: 'Alice Brown',
		email: 'alice@example.com',
		role: 'Moderator',
		status: 'Active',
	},
	{
		id: 5,
		name: 'Charlie Wilson',
		email: 'charlie@example.com',
		role: 'User',
		status: 'Pending',
	},
];

export const BasicTable: Story = {
	render: (args) => (
		<STable {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell>ID</STable.HeaderCell>
					<STable.HeaderCell>Name</STable.HeaderCell>
					<STable.HeaderCell>Email</STable.HeaderCell>
					<STable.HeaderCell>Role</STable.HeaderCell>
					<STable.HeaderCell>Status</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{sampleData.map((user) => (
					<STable.Row key={user.id}>
						<STable.Cell>{user.id}</STable.Cell>
						<STable.Cell>{user.name}</STable.Cell>
						<STable.Cell>{user.email}</STable.Cell>
						<STable.Cell>{user.role}</STable.Cell>
						<STable.Cell>{user.status}</STable.Cell>
					</STable.Row>
				))}
			</STable.Body>
		</STable>
	),
	args: {},
};

export const TableWithFooter: Story = {
	render: (args) => (
		<STable {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell>Product</STable.HeaderCell>
					<STable.HeaderCell>Quantity</STable.HeaderCell>
					<STable.HeaderCell>Price</STable.HeaderCell>
					<STable.HeaderCell>Total</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				<STable.Row>
					<STable.Cell>Widget A</STable.Cell>
					<STable.Cell>5</STable.Cell>
					<STable.Cell>$10.00</STable.Cell>
					<STable.Cell>$50.00</STable.Cell>
				</STable.Row>
				<STable.Row>
					<STable.Cell>Widget B</STable.Cell>
					<STable.Cell>3</STable.Cell>
					<STable.Cell>$15.00</STable.Cell>
					<STable.Cell>$45.00</STable.Cell>
				</STable.Row>
				<STable.Row>
					<STable.Cell>Widget C</STable.Cell>
					<STable.Cell>2</STable.Cell>
					<STable.Cell>$20.00</STable.Cell>
					<STable.Cell>$40.00</STable.Cell>
				</STable.Row>
			</STable.Body>
			<STable.Footer>
				<STable.Row>
					<STable.Cell colSpan={3}>Total</STable.Cell>
					<STable.Cell>$135.00</STable.Cell>
				</STable.Row>
			</STable.Footer>
		</STable>
	),
	args: {},
};

const extendedEmployeeData = [
	{
		id: 1,
		employeeId: 'EMP001',
		firstName: 'John',
		lastName: 'Doe',
		email: 'john.doe@company.com',
		phone: '+1-555-0123',
		department: 'Engineering',
		position: 'Senior Developer',
		salary: '$85,000',
		startDate: '2020-01-15',
		manager: 'Sarah Johnson',
		location: 'New York',
		status: 'Active',
	},
	{
		id: 2,
		employeeId: 'EMP002',
		firstName: 'Jane',
		lastName: 'Smith',
		email: 'jane.smith@company.com',
		phone: '+1-555-0124',
		department: 'Marketing',
		position: 'Marketing Manager',
		salary: '$72,000',
		startDate: '2019-03-22',
		manager: 'Mike Chen',
		location: 'Los Angeles',
		status: 'Active',
	},
	{
		id: 3,
		employeeId: 'EMP003',
		firstName: 'Robert',
		lastName: 'Johnson',
		email: 'robert.johnson@company.com',
		phone: '+1-555-0125',
		department: 'Sales',
		position: 'Sales Representative',
		salary: '$58,000',
		startDate: '2021-07-10',
		manager: 'Lisa Brown',
		location: 'Chicago',
		status: 'Active',
	},
	{
		id: 4,
		employeeId: 'EMP004',
		firstName: 'Emily',
		lastName: 'Davis',
		email: 'emily.davis@company.com',
		phone: '+1-555-0126',
		department: 'HR',
		position: 'HR Specialist',
		salary: '$62,000',
		startDate: '2020-11-05',
		manager: 'David Wilson',
		location: 'Austin',
		status: 'On Leave',
	},
	{
		id: 5,
		employeeId: 'EMP005',
		firstName: 'Michael',
		lastName: 'Brown',
		email: 'michael.brown@company.com',
		phone: '+1-555-0127',
		department: 'Finance',
		position: 'Financial Analyst',
		salary: '$68,000',
		startDate: '2018-09-12',
		manager: 'Anna Taylor',
		location: 'Seattle',
		status: 'Active',
	},
];

export const WideTableWithManyColumns: Story = {
	render: (args) => (
		<STable {...args}>
			<STable.Head>
				<STable.Row>
					<STable.HeaderCell>ID</STable.HeaderCell>
					<STable.HeaderCell>Employee ID</STable.HeaderCell>
					<STable.HeaderCell>First Name</STable.HeaderCell>
					<STable.HeaderCell>Last Name</STable.HeaderCell>
					<STable.HeaderCell>Email</STable.HeaderCell>
					<STable.HeaderCell>Phone</STable.HeaderCell>
					<STable.HeaderCell>Department</STable.HeaderCell>
					<STable.HeaderCell>Position</STable.HeaderCell>
					<STable.HeaderCell>Salary</STable.HeaderCell>
					<STable.HeaderCell>Start Date</STable.HeaderCell>
					<STable.HeaderCell>Manager</STable.HeaderCell>
					<STable.HeaderCell>Location</STable.HeaderCell>
					<STable.HeaderCell>Status</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{extendedEmployeeData.map((employee) => (
					<STable.Row key={employee.id}>
						<STable.Cell>{employee.id}</STable.Cell>
						<STable.Cell>{employee.employeeId}</STable.Cell>
						<STable.Cell>{employee.firstName}</STable.Cell>
						<STable.Cell>{employee.lastName}</STable.Cell>
						<STable.Cell>{employee.email}</STable.Cell>
						<STable.Cell>{employee.phone}</STable.Cell>
						<STable.Cell>{employee.department}</STable.Cell>
						<STable.Cell>{employee.position}</STable.Cell>
						<STable.Cell>{employee.salary}</STable.Cell>
						<STable.Cell>{employee.startDate}</STable.Cell>
						<STable.Cell>{employee.manager}</STable.Cell>
						<STable.Cell>{employee.location}</STable.Cell>
						<STable.Cell>{employee.status}</STable.Cell>
					</STable.Row>
				))}
			</STable.Body>
		</STable>
	),
	args: {},
};

// Large dataset for demonstrating sticky header
const largeDataset = Array.from({ length: 50 }, (_, index) => ({
	id: index + 1,
	employeeId: `EMP${String(index + 1).padStart(3, '0')}`,
	firstName: [
		'John',
		'Jane',
		'Robert',
		'Emily',
		'Michael',
		'Sarah',
		'David',
		'Lisa',
		'Christopher',
		'Jennifer',
		'Matthew',
		'Amanda',
		'Daniel',
		'Jessica',
		'James',
		'Ashley',
		'Joshua',
		'Brittany',
		'Andrew',
		'Samantha',
		'Ryan',
		'Elizabeth',
		'Nicholas',
		'Taylor',
		'Brandon',
		'Megan',
		'Tyler',
		'Hannah',
		'Kevin',
		'Rachel',
	][index % 30],
	lastName: [
		'Smith',
		'Johnson',
		'Williams',
		'Brown',
		'Jones',
		'Garcia',
		'Miller',
		'Davis',
		'Rodriguez',
		'Martinez',
		'Hernandez',
		'Lopez',
		'Gonzalez',
		'Wilson',
		'Anderson',
		'Thomas',
		'Taylor',
		'Moore',
		'Jackson',
		'Martin',
		'Lee',
		'Perez',
		'Thompson',
		'White',
		'Harris',
		'Sanchez',
		'Clark',
		'Ramirez',
		'Lewis',
		'Robinson',
	][index % 30],
	email: `employee${index + 1}@company.com`,
	phone: `+1-555-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`,
	department: [
		'Engineering',
		'Marketing',
		'Sales',
		'HR',
		'Finance',
		'Operations',
		'Customer Support',
		'Product',
		'Design',
		'Legal',
	][index % 10],
	position: [
		'Senior Developer',
		'Marketing Manager',
		'Sales Representative',
		'HR Specialist',
		'Financial Analyst',
		'Operations Manager',
		'Support Specialist',
		'Product Manager',
		'UX Designer',
		'Legal Counsel',
		'Junior Developer',
		'Marketing Coordinator',
		'Account Executive',
		'Recruiter',
		'Business Analyst',
	][index % 15],
	salary: `$${(45000 + index * 1500).toLocaleString()}`,
	startDate: new Date(
		2018 + (index % 6),
		index % 12,
		(index % 28) + 1,
	).toLocaleDateString(),
	manager: [
		'Sarah Johnson',
		'Mike Chen',
		'Lisa Brown',
		'David Wilson',
		'Anna Taylor',
		'Tom Anderson',
		'Maria Garcia',
		'Steve Miller',
		'Amy Davis',
		'Chris Lee',
	][index % 10],
	location: [
		'New York',
		'Los Angeles',
		'Chicago',
		'Austin',
		'Seattle',
		'Boston',
		'San Francisco',
		'Denver',
		'Miami',
		'Portland',
	][index % 10],
	status: ['Active', 'On Leave', 'Remote'][index % 3],
}));

export const StickyHeaderWithLargeDataset: Story = {
	render: (args) => (
		<STable className="max-h-[300px]" {...args}>
			<STable.Head sticky>
				<STable.Row>
					<STable.HeaderCell>ID</STable.HeaderCell>
					<STable.HeaderCell>Employee ID</STable.HeaderCell>
					<STable.HeaderCell>First Name</STable.HeaderCell>
					<STable.HeaderCell>Last Name</STable.HeaderCell>
					<STable.HeaderCell>Email</STable.HeaderCell>
					<STable.HeaderCell>Phone</STable.HeaderCell>
					<STable.HeaderCell>Department</STable.HeaderCell>
					<STable.HeaderCell>Position</STable.HeaderCell>
					<STable.HeaderCell>Salary</STable.HeaderCell>
					<STable.HeaderCell>Start Date</STable.HeaderCell>
					<STable.HeaderCell>Manager</STable.HeaderCell>
					<STable.HeaderCell>Location</STable.HeaderCell>
					<STable.HeaderCell>Status</STable.HeaderCell>
				</STable.Row>
			</STable.Head>
			<STable.Body>
				{largeDataset.map((employee) => (
					<STable.Row key={employee.id}>
						<STable.Cell>{employee.id}</STable.Cell>
						<STable.Cell>{employee.employeeId}</STable.Cell>
						<STable.Cell>{employee.firstName}</STable.Cell>
						<STable.Cell>{employee.lastName}</STable.Cell>
						<STable.Cell>{employee.email}</STable.Cell>
						<STable.Cell>{employee.phone}</STable.Cell>
						<STable.Cell>{employee.department}</STable.Cell>
						<STable.Cell>{employee.position}</STable.Cell>
						<STable.Cell>{employee.salary}</STable.Cell>
						<STable.Cell>{employee.startDate}</STable.Cell>
						<STable.Cell>{employee.manager}</STable.Cell>
						<STable.Cell>{employee.location}</STable.Cell>
						<STable.Cell>
							<span
								className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
									employee.status === 'Active'
										? 'bg-green-100 text-green-800'
										: employee.status === 'On Leave'
											? 'bg-yellow-100 text-yellow-800'
											: 'bg-blue-100 text-blue-800'
								}`}
							>
								{employee.status}
							</span>
						</STable.Cell>
					</STable.Row>
				))}
			</STable.Body>
		</STable>
	),
	args: {},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates sticky header functionality with a large dataset of 50 employee records. The component is contained within a scrollable container with 400px height. As you scroll through the data, the header remains visible at the top.',
			},
		},
	},
};
