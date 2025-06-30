import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import * as React from 'react';
import { SFileUpload, FileItem } from './index';

const meta = {
	title: 'Forms/SFileUpload',
	component: SFileUpload,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component:
					'SFileUpload is a versatile file upload component that supports drag and drop, multiple file selection, and individual file state management. Each file can have its own status: progress, error, success, or cancelled.',
			},
		},
	},
} satisfies Meta<typeof SFileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

// Mock file items for demonstration
const createMockFile = (name: string, size: number = 1024): File => {
	const file = new File([''], name, { type: 'image/jpeg' });
	Object.defineProperty(file, 'size', { value: size });
	return file;
};

const mockFiles: FileItem[] = [
	{
		id: '1',
		file: createMockFile('document.pdf', 2048576),
		status: 'processing',
	},
	{
		id: '2',
		file: createMockFile('image.jpg', 5242880),
		status: 'error',
		errorMessage: 'File type invalid.',
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

export const Default: Story = {
	args: {
		label: 'File Upload Component',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'Max file size is 15MB. Supported file types are jpg and png.',
		multiple: false,
		disabled: false,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const uploadArea = canvas.getByRole('button');

		await expect(uploadArea).toBeInTheDocument();
		await expect(uploadArea).toHaveClass('border-dashed');

		// Test accessibility
		const heading = canvas.getByText('File Upload Component');
		await expect(heading).toBeInTheDocument();
	},
};

export const WithFileStates: Story = {
	args: {
		label: 'File Upload Component',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'Max file size is 15MB. Supported file types are jpg and png.',
		multiple: true,
		files: mockFiles,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Check that all file states are rendered
		await expect(canvas.getByText('Processing File')).toBeInTheDocument();
		await expect(canvas.getByText('File type invalid.')).toBeInTheDocument();
		await expect(canvas.getByText('Ready for upload')).toBeInTheDocument();
		await expect(canvas.getByText('Processing cancelled')).toBeInTheDocument();

		// Check file names
		await expect(canvas.getByText('document.pdf')).toBeInTheDocument();
		await expect(canvas.getByText('image.jpg')).toBeInTheDocument();
		await expect(canvas.getByText('presentation.pptx')).toBeInTheDocument();
		await expect(canvas.getByText('spreadsheet.xlsx')).toBeInTheDocument();
	},
};

export const ProcessingState: Story = {
	args: {
		label: 'Processing File (Primary Loading)',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'File is currently being processed',
		files: [
			{
				id: '1',
				file: createMockFile('processing-file.pdf'),
				status: 'processing',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Processing File')).toBeInTheDocument();
		await expect(canvas.getByText('processing-file.pdf')).toBeInTheDocument();
	},
};

export const ReadyState: Story = {
	args: {
		label: 'Ready for Upload (Success)',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'File is ready to be uploaded',
		files: [
			{
				id: '1',
				file: createMockFile('ready-file.jpg'),
				status: 'ready',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Ready for upload')).toBeInTheDocument();
		await expect(canvas.getByText('ready-file.jpg')).toBeInTheDocument();
	},
};

export const CancelledState: Story = {
	args: {
		label: 'Processing Cancelled (Warning)',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'File processing was cancelled',
		files: [
			{
				id: '1',
				file: createMockFile('cancelled-file.doc'),
				status: 'cancelled',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(canvas.getByText('Processing cancelled')).toBeInTheDocument();
		await expect(canvas.getByText('cancelled-file.doc')).toBeInTheDocument();

		// Check for retry button
		const retryButton = canvas.getByLabelText('Retry upload');
		await expect(retryButton).toBeInTheDocument();
	},
};

export const ErrorState: Story = {
	args: {
		label: 'Error State (Danger)',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'File processing failed',
		files: [
			{
				id: '1',
				file: createMockFile('failed-file.txt'),
				status: 'error',
				errorMessage: 'File size exceeds the maximum limit of 15MB',
			},
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		await expect(
			canvas.getByText('File size exceeds the maximum limit of 15MB'),
		).toBeInTheDocument();
		await expect(canvas.getByText('failed-file.txt')).toBeInTheDocument();
	},
};

export const MultipleFiles: Story = {
	args: {
		label: 'Multiple File Upload',
		placeholder: 'Drag and drop multiple files here or browse file',
		helperText: 'You can upload multiple files at once',
		multiple: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const fileInput = canvas
			.getByRole('button')
			.querySelector('input[type="file"]') as HTMLInputElement;

		await expect(fileInput).toHaveAttribute('multiple');
	},
};

export const WithFileTypeRestriction: Story = {
	args: {
		label: 'Images Only',
		placeholder: 'Drag and drop image files here or browse file',
		helperText: 'Only PNG, JPG, and GIF files are allowed',
		accept: 'image/*',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Upload',
		placeholder: 'Upload is disabled',
		helperText: 'This upload is currently disabled',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const uploadArea = canvas.getByRole('button');
		const fileInput = uploadArea.querySelector(
			'input[type="file"]',
		) as HTMLInputElement;

		await expect(fileInput).toBeDisabled();
		await expect(uploadArea).toHaveClass('cursor-not-allowed', 'opacity-50');
	},
};

export const InteractiveDemo: Story = {
	args: {
		label: 'Interactive File Upload Demo',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'Try uploading files to see different states',
		multiple: true,
	},
	render: (args) => (
		<SFileUpload
			{...args}
			onFilesChange={(files) => {
				console.log('Files selected:', files);
			}}
			onFilesDrop={(files) => {
				console.log('Files dropped:', files);
			}}
			onFileRemove={(fileId) => {
				console.log('File removed:', fileId);
			}}
			onFileAction={(fileId, action) => {
				console.log('File action:', fileId, action);
			}}
		/>
	),
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo with callback functions. Check your browser console when interacting with the component.',
			},
		},
	},
};

export const AllStatesShowcase: Story = {
	args: {
		label: 'All File States Showcase',
		placeholder: 'Drag and drop your file here or browse file',
		helperText: 'Demonstrating all 4 file states',
		multiple: true,
		files: mockFiles,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Comprehensive showcase of all 4 file states: Processing File (primary loading), Ready for upload (success), Processing cancelled (warning), and Error (danger).',
			},
		},
	},
};

export const AutoProgressDemo: Story = {
	args: {
		label: 'Auto Processing Demo',
		placeholder:
			'Select files to see them automatically added with processing status',
		helperText:
			'Files will automatically appear below with processing status, then become ready',
		multiple: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates automatic file addition with processing status when files are selected, followed by auto-transition to ready state.',
			},
		},
	},
};

export const SingleFileReplace: Story = {
	args: {
		label: 'Single File Upload (Replace Mode)',
		placeholder: 'Select a file - it will replace any existing file',
		helperText:
			'Only one file allowed, selecting a new one replaces the previous',
		multiple: false,
	},
	parameters: {
		docs: {
			description: {
				story:
					'When multiple=false, selecting a new file replaces the existing one.',
			},
		},
	},
};

export const AutoStateTransition: Story = {
	args: {
		label: 'Auto State Transition Demo',
		placeholder: 'Select files to see automatic processing → ready transition',
		helperText:
			'Files will show "Processing file" then auto-transition to "Ready for upload"',
		multiple: true,
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates the automatic state transition from "Processing file" to "Ready for upload" after 1.5 seconds.',
			},
		},
	},
};

export const ServerErrorDemo: Story = {
	args: {
		label: 'Server Error Simulation Demo',
		placeholder: 'Select files to simulate server error handling',
		helperText:
			'Files will process, then simulate server errors after upload attempt',
		multiple: true,
	},
	render: (args) => {
		const fileUploadRef = React.useRef<any>(null);
		const [uploadedFiles, setUploadedFiles] = React.useState<string[]>([]);

		const simulateServerUpload = async (fileId: string) => {
			// Wait for file to be ready
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// Simulate server upload with random success/error
			const isSuccess = Math.random() > 0.5;

			if (isSuccess) {
				setUploadedFiles((prev) => [...prev, fileId]);
			} else {
				// Simulate different types of server errors
				const errors = [
					'Server upload failed. Please try again.',
					'File type not supported by server.',
					'File size exceeds server limit.',
					'Network connection lost during upload.',
					'Authentication failed. Please log in again.',
				];
				const randomError = errors[Math.floor(Math.random() * errors.length)];

				fileUploadRef.current?.updateFileStatus(fileId, 'error', randomError);
			}
		};

		return (
			<div>
				<SFileUpload
					{...args}
					ref={fileUploadRef}
					onFilesChange={(files) => {
						if (files && files.length > 0) {
							// Simulate server upload for each new file
							Array.from(files).forEach((_, index) => {
								const fileId = `${Date.now()}-${index}`;
								setTimeout(() => {
									simulateServerUpload(fileId);
								}, 2500); // Start upload simulation after processing
							});
						}
					}}
					onFileAction={(fileId, action) => {
						if (action === 'retry') {
							// Retry the upload
							setTimeout(() => {
								simulateServerUpload(fileId);
							}, 2500);
						}
					}}
				/>
				{uploadedFiles.length > 0 && (
					<div className="mt-4 rounded-lg bg-green-50 p-4">
						<p className="font-medium text-green-800">
							Successfully uploaded files:
						</p>
						<p className="text-sm text-green-600">
							{uploadedFiles.length} file(s) uploaded to server
						</p>
					</div>
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates handling server errors by using the updateFileStatus method. Files will process normally, then simulate upload attempts with random success/failure and display server error messages in the file list.',
			},
		},
	},
};

export const ManualServerErrorDemo: Story = {
	args: {
		label: 'Manual Server Error Demo',
		placeholder: 'Select files to manually simulate server errors',
		helperText:
			'Use the controls below to manually trigger different error states',
		multiple: true,
	},
	argTypes: {
		// Demo control args - separate from component props
		triggerError: {
			control: {
				type: 'select',
				options: [
					'none',
					'Server upload failed. Please try again.',
					'File type not supported by server.',
					'File size exceeds server limit.',
					'Network connection lost during upload.',
					'Authentication failed. Please log in again.',
					'Insufficient storage space on server.',
					'File already exists on server.',
					'Custom error message',
				],
			},
			description: 'Select an error to trigger on the next file',
			table: {
				category: 'Demo Controls',
			},
		},
		customErrorMessage: {
			control: 'text',
			description:
				'Custom error message (when "Custom error message" is selected)',
			table: {
				category: 'Demo Controls',
			},
		},
		errorFileIndex: {
			control: {
				type: 'number',
				min: 0,
				max: 10,
				step: 1,
			},
			description: 'Index of file to apply error to (0 = first file)',
			table: {
				category: 'Demo Controls',
			},
		},
	} as any, // Type assertion to bypass strict typing
	render: (args: any) => {
		const fileUploadRef = React.useRef<any>(null);
		const [fileList, setFileList] = React.useState<any[]>([]);
		const [successCount, setSuccessCount] = React.useState(0);

		// Extract demo controls from args (using defaults if not provided)
		const triggerError = args.triggerError || 'none';
		const customErrorMessage =
			args.customErrorMessage || 'Custom error occurred';
		const errorFileIndex = args.errorFileIndex || 0;

		// Filter out demo controls to get clean component props
		const componentProps = {
			label: args.label,
			placeholder: args.placeholder,
			helperText: args.helperText,
			multiple: args.multiple,
			accept: args.accept,
			maxSize: args.maxSize,
			maxFiles: args.maxFiles,
			disabled: args.disabled,
			required: args.required,
		};

		// Watch for changes in the triggerError control
		React.useEffect(() => {
			if (triggerError && triggerError !== 'none' && fileList.length > 0) {
				const targetIndex = Math.min(errorFileIndex || 0, fileList.length - 1);
				const targetFile = fileList[targetIndex];

				if (targetFile) {
					const errorMessage =
						triggerError === 'Custom error message'
							? customErrorMessage || 'Custom error occurred'
							: triggerError;

					fileUploadRef.current?.updateFileStatus(
						targetFile.id,
						'error',
						errorMessage,
					);
				}
			}
		}, [triggerError, customErrorMessage, errorFileIndex, fileList]);

		const handleFilesChange = (files: FileList | null) => {
			if (files && files.length > 0) {
				const newFiles = Array.from(files).map((file, index) => ({
					id: `${Date.now()}-${index}`,
					file,
					name: file.name,
				}));
				setFileList((prev) => [...prev, ...newFiles]);
			}
		};

		const handleFileAction = (fileId: string, action: 'retry' | 'remove') => {
			if (action === 'remove') {
				setFileList((prev) => prev.filter((f) => f.id !== fileId));
			} else if (action === 'retry') {
				// Reset to processing state - will auto-transition to ready
				setTimeout(() => {
					// Simulate successful retry
					setSuccessCount((prev) => prev + 1);
				}, 2000);
			}
		};

		const markAsSuccess = (fileIndex: number) => {
			const targetFile = fileList[fileIndex];
			if (targetFile) {
				fileUploadRef.current?.updateFileStatus(targetFile.id, 'ready');
				setSuccessCount((prev) => prev + 1);
			}
		};

		const markAsCancelled = (fileIndex: number) => {
			const targetFile = fileList[fileIndex];
			if (targetFile) {
				fileUploadRef.current?.updateFileStatus(targetFile.id, 'cancelled');
			}
		};

		return (
			<div>
				<SFileUpload
					{...componentProps}
					ref={fileUploadRef}
					onFilesChange={handleFilesChange}
					onFileAction={handleFileAction}
				/>

				{/* Manual Control Panel */}
				{fileList.length > 0 && (
					<div className="mt-6 space-y-4 rounded-lg border p-4">
						<h3 className="text-lg font-semibold text-gray-900">
							Manual Controls
						</h3>

						<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<h4 className="mb-2 font-medium text-gray-700">
									Files in Queue:
								</h4>
								<div className="space-y-2">
									{fileList.map((file, index) => (
										<div
											key={file.id}
											className="flex items-center justify-between rounded bg-gray-50 p-2"
										>
											<span className="text-sm">
												{index}: {file.name}
											</span>
											<div className="space-x-2">
												<button
													onClick={() => markAsSuccess(index)}
													className="rounded bg-green-500 px-2 py-1 text-xs text-white hover:bg-green-600"
												>
													✓ Success
												</button>
												<button
													onClick={() => markAsCancelled(index)}
													className="rounded bg-yellow-500 px-2 py-1 text-xs text-white hover:bg-yellow-600"
												>
													⚠ Cancel
												</button>
											</div>
										</div>
									))}
								</div>
							</div>

							<div>
								<h4 className="mb-2 font-medium text-gray-700">Statistics:</h4>
								<div className="space-y-1 text-sm">
									<p>Total Files: {fileList.length}</p>
									<p>Successful Uploads: {successCount}</p>
								</div>
							</div>
						</div>

						<div className="text-sm text-gray-600">
							<p>
								<strong>Instructions:</strong>
							</p>
							<ul className="list-inside list-disc space-y-1">
								<li>
									Upload files first, then use the "Trigger Error" control in
									Storybook Controls panel
								</li>
								<li>
									Set "Error File Index" to target specific files (0 = first
									file)
								</li>
								<li>Use the buttons above for quick success/cancel actions</li>
								<li>Retry buttons will reset files to processing state</li>
							</ul>
						</div>
					</div>
				)}
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Manual simulation of server errors. Upload files first, then use the Storybook controls to trigger different error states on specific files.',
			},
		},
	},
};

export const FileSizeValidation: Story = {
	args: {
		label: 'File Size Validation Demo',
		placeholder: 'Upload files to test size validation (max 5MB)',
		helperText:
			'Maximum file size is 5MB. Try uploading larger files to see validation in action.',
		multiple: true,
		maxSize: 5 * 1024 * 1024, // 5MB limit
	},
	render: (args) => {
		const [validationResults, setValidationResults] = React.useState<string[]>(
			[],
		);

		return (
			<div>
				<SFileUpload
					{...args}
					onFilesChange={(files) => {
						if (files && files.length > 0) {
							const results: string[] = [];
							Array.from(files).forEach((file) => {
								const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
								const maxSizeMB = ((args.maxSize || 0) / (1024 * 1024)).toFixed(
									1,
								);

								if (file.size > (args.maxSize || 0)) {
									results.push(
										`❌ ${file.name} (${sizeMB}MB) - Exceeds ${maxSizeMB}MB limit`,
									);
								} else {
									results.push(
										`✅ ${file.name} (${sizeMB}MB) - Within size limit`,
									);
								}
							});
							setValidationResults(results);
						}
					}}
				/>

				{/* Validation Results Panel */}
				{validationResults.length > 0 && (
					<div className="mt-4 rounded-lg border bg-gray-50 p-4">
						<h4 className="mb-2 font-medium text-gray-900">
							Validation Results:
						</h4>
						<div className="space-y-1">
							{validationResults.map((result, index) => (
								<p key={index} className="font-mono text-sm">
									{result}
								</p>
							))}
						</div>
					</div>
				)}

				{/* Demo Files Section */}
				<div className="mt-6 rounded-lg border p-4">
					<h4 className="mb-2 font-medium text-gray-900">Test Files Guide:</h4>
					<div className="space-y-1 text-sm text-gray-600">
						<p>
							<strong>To test file size validation:</strong>
						</p>
						<ul className="ml-4 list-inside list-disc space-y-1">
							<li>
								Small files (&lt;5MB): Will be accepted and show "Ready for
								upload"
							</li>
							<li>
								Large files (&gt;5MB): Will show error state with size
								validation message
							</li>
							<li>
								You can create test files of different sizes on your computer to
								test
							</li>
							<li>
								Image files, documents, or any file type can be used for testing
							</li>
						</ul>
						<p className="mt-2">
							<strong>Current limit:</strong>{' '}
							{((args.maxSize || 0) / (1024 * 1024)).toFixed(1)}MB
						</p>
					</div>
				</div>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstrates file size validation with a 5MB limit. Files exceeding the limit will automatically show an error state with a descriptive message. Try uploading files of different sizes to see the validation in action.',
			},
		},
	},
};

export const FileSizeValidationWithPresetFiles: Story = {
	args: {
		label: 'File Size Validation with Mock Files',
		placeholder: 'Files with different sizes to demonstrate validation',
		helperText: 'Shows how files are validated against a 10MB size limit',
		multiple: true,
		maxSize: 10 * 1024 * 1024, // 10MB limit
		files: [
			{
				id: '1',
				file: createMockFile('small-document.pdf', 2 * 1024 * 1024), // 2MB - valid
				status: 'ready',
			},
			{
				id: '2',
				file: createMockFile('large-video.mp4', 25 * 1024 * 1024), // 25MB - exceeds limit
				status: 'error',
				errorMessage:
					'File size (25.0MB) exceeds maximum allowed size of 10.0MB',
			},
			{
				id: '3',
				file: createMockFile('medium-image.jpg', 8 * 1024 * 1024), // 8MB - valid
				status: 'ready',
			},
			{
				id: '4',
				file: createMockFile('huge-archive.zip', 50 * 1024 * 1024), // 50MB - exceeds limit
				status: 'error',
				errorMessage:
					'File size (50.0MB) exceeds maximum allowed size of 10.0MB',
			},
		],
	},
	parameters: {
		docs: {
			description: {
				story:
					'Shows preset files with different sizes to demonstrate how file size validation works. Files exceeding the 10MB limit are automatically marked with error status and show descriptive error messages.',
			},
		},
	},
};

export const DifferentSizeLimits: Story = {
	args: {
		label: 'Different Size Limits Demo',
		placeholder: 'Upload files to test different size limits',
		helperText: 'Change the maxSize control to test different file size limits',
		multiple: true,
		maxSize: 15 * 1024 * 1024, // Default 15MB
	},
	argTypes: {
		maxSize: {
			control: {
				type: 'select',
				options: {
					'1MB': 1024 * 1024,
					'5MB': 5 * 1024 * 1024,
					'10MB': 10 * 1024 * 1024,
					'15MB': 15 * 1024 * 1024,
					'25MB': 25 * 1024 * 1024,
					'50MB': 50 * 1024 * 1024,
					'No limit': undefined,
				},
			},
			description: 'Maximum file size allowed',
		},
	},
	render: (args) => {
		const maxSizeLabel = args.maxSize
			? `${(args.maxSize / (1024 * 1024)).toFixed(0)}MB`
			: 'No limit';

		return (
			<div>
				<div className="mb-4 rounded-lg bg-blue-50 p-3">
					<p className="text-sm text-blue-800">
						<strong>Current size limit:</strong> {maxSizeLabel}
					</p>
					<p className="mt-1 text-xs text-blue-600">
						Use the Storybook controls to change the maxSize value and test
						different limits
					</p>
				</div>

				<SFileUpload
					{...args}
					helperText={`Maximum file size is ${maxSizeLabel}. ${args.helperText}`}
				/>
			</div>
		);
	},
	parameters: {
		docs: {
			description: {
				story:
					'Interactive demo allowing you to test different file size limits using Storybook controls. Change the maxSize value to see how validation behaves with different limits.',
			},
		},
	},
};
