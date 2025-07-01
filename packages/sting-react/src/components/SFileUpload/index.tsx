import * as React from 'react';
import { ComponentPropsWithout, RemovedProps } from '@/helpers/component-props';
import { FileUploadVariants, fileUploadVariants } from './constants';
import {
	XIcon,
	CheckedCircleIcon,
	WarningIcon,
	TrashIcon,
	RefreshIcon,
} from '@/components/Icons';
import './SFileUpload.css';

export interface FileItem {
	file: File;
	id: string;
	status: 'processing' | 'ready' | 'cancelled' | 'error';
	errorMessage?: string;
	progress?: number;
}

export interface SFileUploadRef extends HTMLInputElement {
	updateFileStatus: (
		fileId: string,
		status: FileItem['status'],
		errorMessage?: string,
	) => void;
}

export interface SFileUploadProps
	extends Omit<ComponentPropsWithout<'input', RemovedProps>, 'size'>,
		Omit<FileUploadVariants, 'validationStatus' | 'variant'> {
	/**
	 * Whether the file upload supports multiple files
	 */
	multiple?: boolean;
	/**
	 * Accepted file types (e.g., '.pdf,.doc,.docx' or 'image/*')
	 */
	accept?: string;
	/**
	 * Maximum file size in bytes
	 */
	maxSize?: number;
	/**
	 * Maximum number of files when multiple is true
	 */
	maxFiles?: number;
	/**
	 * Whether the file upload is disabled
	 */
	disabled?: boolean;
	/**
	 * Whether the file upload is required
	 */
	required?: boolean;
	/**
	 * Placeholder text to display in the upload area
	 */
	placeholder?: string;
	/**
	 * Helper text to display below the upload area
	 */
	helperText?: string;
	/**
	 * Label for the file upload
	 */
	label?: string;
	/**
	 * Array of file items with their states
	 */
	files?: FileItem[];
	/**
	 * Callback function when files are selected
	 */
	onFilesChange?: (files: FileList | null) => void;
	/**
	 * Callback function when files are dropped
	 */
	onFilesDrop?: (files: FileList) => void;
	/**
	 * Callback function when a file is removed
	 */
	onFileRemove?: (fileId: string) => void;
	/**
	 * Callback function when a file action is triggered (retry for cancelled files)
	 */
	onFileAction?: (fileId: string, action: 'retry' | 'remove') => void;
	/**
	 * Method to update file status and error message (useful for server errors)
	 */
	onUpdateFileStatus?: (
		fileId: string,
		status: FileItem['status'],
		errorMessage?: string,
	) => void;
	/**
	 * Optional additional classname for the component
	 */
	className?: string;
	/**
	 * The size of the file upload
	 */
	size?: FileUploadVariants['size'];
	/**
	 * Whether the file upload should take up the full width of its container
	 */
	fullWidth?: boolean;
}

/**
 * Loading spinner component using theme colors
 */
const LoadingSpinner = () => <div className="file-upload-spinner"></div>;

/**
 * Common button styles to avoid repetition
 */
const ACTION_BUTTON_CLASSES =
	'p-1 text-gray-400 transition-colors hover:text-gray-600';

/**
 * Icon wrapper component to avoid repetition
 */
const IconWrapper = ({
	children,
	className = 'h-5 w-5',
}: {
	children: React.ReactNode;
	className?: string;
}) => <div className={className}>{children}</div>;

/**
 * SFileUpload is a versatile file upload component that supports drag and drop,
 * multiple file selection, file type validation, and various visual styles.
 * Each file maintains its own state (progress, error, success, cancelled).
 */
const SFileUpload = React.forwardRef<HTMLInputElement, SFileUploadProps>(
	(
		{
			className,
			size,
			fullWidth,
			multiple = false,
			accept,
			maxSize,
			maxFiles,
			disabled = false,
			required = false,
			placeholder = 'Drag and drop your file here or browse file',
			helperText = 'Max file size is 15MB. Supported file types are jpg and png.',
			label,
			files = [],
			onFilesChange,
			onFilesDrop,
			onFileRemove,
			onFileAction,
			id,
			...props
		},
		ref,
	) => {
		const inputRef = React.useRef<HTMLInputElement>(null);
		const [isDragOver, setIsDragOver] = React.useState(false);

		// Use forwarded ref or fallback to internal ref
		const fileInputRef = ref || inputRef;

		const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const selectedFiles = event.target.files;
			onFilesChange?.(selectedFiles);
		};

		const handleDragOver = (event: React.DragEvent) => {
			event.preventDefault();
			if (!disabled) {
				setIsDragOver(true);
			}
		};

		const handleDragLeave = (event: React.DragEvent) => {
			event.preventDefault();
			setIsDragOver(false);
		};

		const handleDrop = (event: React.DragEvent) => {
			event.preventDefault();
			setIsDragOver(false);

			if (disabled) return;

			const droppedFiles = event.dataTransfer.files;
			if (droppedFiles.length > 0) {
				onFilesDrop?.(droppedFiles);
				onFilesChange?.(droppedFiles);
			}
		};

		const componentId = id || `file-upload-${React.useId()}`;

		// Generate classes using the variant system (without variant prop, will use neutral default)
		const classes = fileUploadVariants({ size, fullWidth, disabled });

		return (
			<div className={`file-upload ${classes} ${className || ''}`}>
				{label && (
					<label className="file-upload-label">
						{label}
						{required && <span className="file-upload-required">*</span>}
					</label>
				)}

				{/* Upload Drop Zone */}
				<label
					htmlFor={componentId}
					className={`file-upload-dropzone ${
						isDragOver ? 'file-upload-dropzone-active' : ''
					}`}
					onDragOver={handleDragOver}
					onDragLeave={handleDragLeave}
					onDrop={handleDrop}
				>
					<input
						ref={fileInputRef}
						type="file"
						id={componentId}
						multiple={multiple}
						accept={accept}
						disabled={disabled}
						required={required}
						onChange={handleInputChange}
						className="file-upload-input"
						{...props}
					/>

					<div className="file-upload-content">
						{/* Upload Icon */}
						<div className="file-upload-icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="file-upload-icon-svg"
							>
								<path d="M12 3v12" />
								<path d="m17 8-5-5-5 5" />
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
							</svg>
						</div>

						{/* Upload Text */}
						<div className="file-upload-text">
							<p className="file-upload-placeholder">
								{placeholder.split('browse file')[0]}
								<span className="cursor-pointer text-blue-600">
									browse file
								</span>
							</p>
							<p className="file-upload-helper">{helperText}</p>
						</div>
					</div>
				</label>
			</div>
		);
	},
);

SFileUpload.displayName = 'SFileUpload';

// File List Component - separate from the main upload area
const FileList = ({
	files = [],
	onFileAction,
	onFileRemove,
}: {
	files: FileItem[];
	onFileAction?: (fileId: string, action: 'retry' | 'remove') => void;
	onFileRemove?: (fileId: string) => void;
}) => {
	const handleFileAction = (fileId: string, action: 'retry' | 'remove') => {
		if (action === 'remove') {
			onFileRemove?.(fileId);
		}
		onFileAction?.(fileId, action);
	};

	const renderFileIcon = (fileItem: FileItem) => {
		switch (fileItem.status) {
			case 'processing':
				return (
					<div className="file-upload-status-icon file-upload-status-error">
						<LoadingSpinner />
					</div>
				);
			case 'error':
				return (
					<div className="file-upload-status-icon file-upload-status-error">
						<WarningIcon />
					</div>
				);
			case 'ready':
				return (
					<div className="file-upload-status-icon file-upload-status-success">
						<CheckedCircleIcon />
					</div>
				);
			case 'cancelled':
				return (
					<div className="file-upload-status-icon file-upload-status-warning">
						<WarningIcon />
					</div>
				);
			default:
				return null;
		}
	};

	const renderFileStatus = (fileItem: FileItem) => {
		switch (fileItem.status) {
			case 'processing':
				return (
					<p className="file-upload-status-processing text-sm">
						Processing File
					</p>
				);
			case 'error':
				return (
					<p className="file-upload-status-error text-sm">
						{fileItem.errorMessage || 'Error'}
					</p>
				);
			case 'ready':
				return (
					<p className="file-upload-status-success text-sm">Ready for upload</p>
				);
			case 'cancelled':
				return (
					<p className="file-upload-status-warning text-sm">
						Processing cancelled
					</p>
				);
			default:
				return null;
		}
	};

	const renderActionButton = (fileItem: FileItem) => {
		switch (fileItem.status) {
			case 'processing':
			case 'error':
				return (
					<button
						className={ACTION_BUTTON_CLASSES}
						onClick={() => handleFileAction(fileItem.id, 'remove')}
						aria-label="Remove file"
					>
						<IconWrapper>
							<XIcon />
						</IconWrapper>
					</button>
				);
			case 'ready':
				return (
					<button
						className={ACTION_BUTTON_CLASSES}
						onClick={() => handleFileAction(fileItem.id, 'remove')}
						aria-label="Delete file"
					>
						<IconWrapper>
							<TrashIcon />
						</IconWrapper>
					</button>
				);
			case 'cancelled':
				return (
					<button
						className={ACTION_BUTTON_CLASSES}
						onClick={() => handleFileAction(fileItem.id, 'retry')}
						aria-label="Retry upload"
					>
						<IconWrapper>
							<RefreshIcon />
						</IconWrapper>
					</button>
				);
			default:
				return null;
		}
	};

	if (files.length === 0) {
		return null;
	}

	return (
		<div className="mx-auto mt-6 max-w-2xl space-y-3">
			{files.map((fileItem) => (
				<div key={fileItem.id} className="file-upload file-upload-file-item">
					<div className="flex-shrink-0">{renderFileIcon(fileItem)}</div>
					<div className="ml-2 min-w-0 flex-1">
						<p className="file-upload-file-name">{fileItem.file.name}</p>
						{renderFileStatus(fileItem)}
					</div>
					<div className="flex-shrink-0">{renderActionButton(fileItem)}</div>
				</div>
			))}
		</div>
	);
};

// Update the main SFileUpload component to use separate FileList
const SFileUploadWithFileList = React.forwardRef<
	HTMLInputElement,
	SFileUploadProps
>((props, ref) => {
	const [internalFiles, setInternalFiles] = React.useState<FileItem[]>(
		props.files || [],
	);

	// Sync with external files prop if provided
	React.useEffect(() => {
		if (props.files) {
			setInternalFiles(props.files);
		}
	}, [props.files]);

	// Auto-transition from "processing" to "ready" after file is processed
	React.useEffect(() => {
		const processingFiles = internalFiles.filter(
			(file) => file.status === 'processing',
		);

		if (processingFiles.length > 0) {
			// Simulate file processing delay (you can adjust this or make it configurable)
			const timer = setTimeout(() => {
				setInternalFiles((currentFiles) =>
					currentFiles.map((file) =>
						file.status === 'processing'
							? { ...file, status: 'ready' as const }
							: file,
					),
				);
			}, 1500); // 1.5 seconds processing time

			return () => clearTimeout(timer);
		}
	}, [internalFiles]);

	// Method to update file status externally (useful for server errors)
	const updateFileStatus = React.useCallback(
		(fileId: string, status: FileItem['status'], errorMessage?: string) => {
			setInternalFiles((currentFiles) =>
				currentFiles.map((file) =>
					file.id === fileId ? { ...file, status, errorMessage } : file,
				),
			);
			props.onUpdateFileStatus?.(fileId, status, errorMessage);
		},
		[props],
	);

	// Expose updateFileStatus method via ref
	React.useImperativeHandle(ref, () => {
		const inputElement = (ref as React.RefObject<HTMLInputElement>)?.current;
		if (inputElement) {
			// Add our custom method to the existing input element
			(inputElement as any).updateFileStatus = updateFileStatus;
			return inputElement as SFileUploadRef;
		}
		// Return a minimal object if input element is not available
		return {
			updateFileStatus,
		} as SFileUploadRef;
	}, [updateFileStatus]);

	const handleFilesChange = (files: FileList | null) => {
		if (files && files.length > 0) {
			// Convert FileList to FileItem array with validation
			const newFileItems: FileItem[] = Array.from(files).map((file, index) => {
				// Check file size if maxSize is provided
				if (props.maxSize && file.size > props.maxSize) {
					const maxSizeMB = (props.maxSize / (1024 * 1024)).toFixed(1);
					const fileSizeMB = (file.size / (1024 * 1024)).toFixed(1);
					return {
						id: `${Date.now()}-${index}`,
						file,
						status: 'error' as const,
						errorMessage: `File size (${fileSizeMB}MB) exceeds maximum allowed size of ${maxSizeMB}MB`,
					};
				}

				// Check maximum number of files if multiple is enabled
				if (props.multiple && props.maxFiles) {
					const totalFiles = internalFiles.length + index + 1;
					if (totalFiles > props.maxFiles) {
						return {
							id: `${Date.now()}-${index}`,
							file,
							status: 'error' as const,
							errorMessage: `Maximum ${props.maxFiles} files allowed`,
						};
					}
				}

				return {
					id: `${Date.now()}-${index}`,
					file,
					status: 'processing' as const,
				};
			});

			// Add new files to existing files (or replace if not multiple)
			const updatedFiles = props.multiple
				? [...internalFiles, ...newFileItems]
				: newFileItems;

			setInternalFiles(updatedFiles);
		}

		// Still call the original callback
		props.onFilesChange?.(files);
	};

	const handleFilesDrop = (files: FileList) => {
		// Handle dropped files the same way as selected files
		handleFilesChange(files);
		props.onFilesDrop?.(files);
	};

	const handleFileRemove = (fileId: string) => {
		const updatedFiles = internalFiles.filter((file) => file.id !== fileId);
		setInternalFiles(updatedFiles);
		props.onFileRemove?.(fileId);
	};

	const handleFileAction = (fileId: string, action: 'retry' | 'remove') => {
		if (action === 'remove') {
			handleFileRemove(fileId);
		} else if (action === 'retry') {
			// Reset status to processing for retry - will auto-transition to ready
			const updatedFiles = internalFiles.map((file) =>
				file.id === fileId ? { ...file, status: 'processing' as const } : file,
			);
			setInternalFiles(updatedFiles);
		}
		props.onFileAction?.(fileId, action);
	};

	return (
		<>
			<SFileUpload
				{...props}
				ref={ref}
				files={[]}
				onFilesChange={handleFilesChange}
				onFilesDrop={handleFilesDrop}
			/>
			<FileList
				files={internalFiles}
				onFileAction={handleFileAction}
				onFileRemove={handleFileRemove}
			/>
		</>
	);
});

SFileUploadWithFileList.displayName = 'SFileUpload';

export { SFileUploadWithFileList as SFileUpload, fileUploadVariants };
