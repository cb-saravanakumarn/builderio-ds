import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { SFileUpload, FileItem } from './index';

const meta = {
	title: 'Forms/SFileUpload',
	component: SFileUpload,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'A versatile file upload component with drag-and-drop support, file validation, and state management. Supports multiple files with individual status tracking.',
			},
		},
	},
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['regular', 'large'],
		},
		accept: {
			control: { type: 'text' },
			description: 'Accepted file types (e.g., "image/*", ".pdf,.doc")',
		},
		maxSize: {
			control: { type: 'number' },
			description: 'Maximum file size in bytes',
		},
		maxFiles: {
			control: { type: 'number' },
			description: 'Maximum number of files (when multiple is true)',
		},
	},
} satisfies Meta<typeof SFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Utility function for creating mock files
const createMockFile = (
	name: string,
	size: number = 1024,
	type = 'application/pdf',
): File => {
	const file = new File(['mock content'], name, { type });
	Object.defineProperty(file, 'size', { value: size });
	return file;
};

// Common mock files for reuse
const mockFiles: FileItem[] = [
	{
		id: '1',
		file: createMockFile('document.pdf', 2048576),
		status: 'processing',
	},
	{
		id: '2',
		file: createMockFile('image.jpg', 5242880, 'image/jpeg'),
		status: 'error',
		errorMessage: 'File size exceeds 5MB limit',
	},
	{
		id: '3',
		file: createMockFile('presentation.pptx', 1048576),
		status: 'ready',
	},
	{
		id: '4',
		file: createMockFile('spreadsheet.xlsx', 3145728),
		status: 'cancelled',
	},
];

// Basic Stories
export const Default: Story = {
	args: {
		label: 'Upload File',
		placeholder: 'Drag and drop your file here or browse file',
		helperText:
			'Max file size is 15MB. Supported file types are PDF, DOC, and images.',
	},
};

export const Multiple: Story = {
	args: {
		label: 'Upload Multiple Files',
		placeholder: 'Drag and drop multiple files here or browse files',
		helperText: 'You can upload multiple files at once.',
		multiple: true,
	},
};

export const Large: Story = {
	args: {
		label: 'Large Upload Area',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'Larger upload area for better user experience.',
		size: 'large',
	},
};

export const WithFileTypeRestriction: Story = {
	args: {
		label: 'Images Only',
		placeholder: 'Drag and drop image files here or browse file',
		helperText: 'Only PNG, JPG, and GIF files are allowed.',
		accept: 'image/*',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Upload',
		placeholder: 'Upload is disabled',
		helperText: 'This upload is currently disabled.',
		disabled: true,
	},
};

// File State Stories
export const AllFileStates: Story = {
	args: {
		label: 'All File States',
		placeholder: 'Shows all possible file states',
		helperText: 'Processing, Ready, Error, and Cancelled states.',
		multiple: true,
		files: mockFiles,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Displays all four file states: Processing (with spinner), Ready (with check), Error (with warning), and Cancelled (with retry option).',
			},
		},
	},
};

export const ProcessingFiles: Story = {
	args: {
		label: 'Processing Files',
		files: [
			{
				id: '1',
				file: createMockFile('processing-file.pdf'),
				status: 'processing',
			},
		],
	},
};

export const ReadyFiles: Story = {
	args: {
		label: 'Ready for Upload',
		files: [
			{
				id: '1',
				file: createMockFile('ready-file.jpg', 1024, 'image/jpeg'),
				status: 'ready',
			},
		],
	},
};

export const ErrorFiles: Story = {
	args: {
		label: 'Error State',
		files: [
			{
				id: '1',
				file: createMockFile('large-file.pdf', 20971520), // 20MB
				status: 'error',
				errorMessage: 'File size exceeds the maximum limit of 15MB',
			},
		],
	},
};

export const CancelledFiles: Story = {
	args: {
		label: 'Cancelled Files',
		files: [
			{
				id: '1',
				file: createMockFile('cancelled-file.doc'),
				status: 'cancelled',
			},
		],
	},
};

// Validation Stories
export const FileSizeValidation: Story = {
	args: {
		label: 'File Size Validation (5MB limit)',
		placeholder: 'Upload files to test size validation',
		helperText:
			'Maximum file size is 5MB. Try uploading larger files to see validation.',
		multiple: true,
		maxSize: 5 * 1024 * 1024, // 5MB
	},
};

export const MaxFilesValidation: Story = {
	args: {
		label: 'Maximum Files Validation (3 files max)',
		placeholder: 'Upload up to 3 files',
		helperText: 'You can upload a maximum of 3 files.',
		multiple: true,
		maxFiles: 3,
	},
};

// Interactive Demo
export const InteractiveDemo: Story = {
	args: {
		label: 'Interactive Demo',
		placeholder: 'Try uploading files to see the component in action',
		helperText: 'Check the browser console for callback events.',
		multiple: true,
		onFilesChange: (files) => {
			console.log('📁 Files selected:', files?.length || 0, 'files');
		},
		onFilesDrop: (files) => {
			console.log('📂 Files dropped:', files.length, 'files');
		},
		onFileRemove: (fileId) => {
			console.log('🗑️ File removed:', fileId);
		},
		onFileAction: (fileId, action) => {
			console.log('⚡ File action:', action, 'on file:', fileId);
		},
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo with all callbacks enabled. Open your browser console to see events as they happen.',
			},
		},
	},
};

// Test Stories
export const AccessibilityTest: Story = {
	args: {
		label: 'Accessibility Test',
		placeholder: 'Test file upload accessibility',
		helperText:
			'Component should be fully accessible via keyboard and screen readers.',
		required: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test label association
		const label = canvas.getByText('Accessibility Test');
		await expect(label).toBeInTheDocument();

		// Test required indicator
		const requiredIndicator = canvas.getByText('*');
		await expect(requiredIndicator).toBeInTheDocument();

		// Test upload area accessibility
		const uploadArea = canvas.getByRole('button');
		await expect(uploadArea).toBeInTheDocument();

		// Test file input
		const fileInput = canvas
			.getByRole('button')
			.querySelector('input[type="file"]');
		await expect(fileInput).toBeInTheDocument();
	},
};

export const FileActionsTest: Story = {
	args: {
		label: 'File Actions Test',
		files: mockFiles,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test file status messages
		await expect(canvas.getByText('Processing File')).toBeInTheDocument();
		await expect(canvas.getByText('Ready for upload')).toBeInTheDocument();
		await expect(canvas.getByText('Processing cancelled')).toBeInTheDocument();

		// Test action buttons
		const retryButton = canvas.getByLabelText('Retry upload');
		await expect(retryButton).toBeInTheDocument();

		const deleteButton = canvas.getByLabelText('Delete file');
		await expect(deleteButton).toBeInTheDocument();

		const removeButtons = canvas.getAllByLabelText('Remove file');
		await expect(removeButtons).toHaveLength(2); // processing and error states
	},
};
