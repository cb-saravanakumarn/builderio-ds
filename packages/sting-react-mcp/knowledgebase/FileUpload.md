# Component Name

SFileUpload

## Description

The SFileUpload component is a versatile and feature-rich file upload component that supports drag-and-drop functionality, multiple file selection, file type validation, and comprehensive state management. Each uploaded file maintains its own state (processing, ready, error, cancelled) with visual indicators and appropriate actions. The component provides a clean, accessible interface with proper file validation, size limits, and error handling. Built with accessibility in mind, it includes proper ARIA attributes, keyboard navigation support, and screen reader compatibility.

## TypeScript Types

The following types represent the props and interfaces that the SFileUpload component accepts:

```typescript
/**
 * Interface representing a file item with its current state
 */
export interface FileItem {
  file: File;
  id: string;
  status: "processing" | "ready" | "cancelled" | "error";
  errorMessage?: string;
  progress?: number;
}

/**
 * Extended ref interface for SFileUpload with custom methods
 */
export interface SFileUploadRef extends HTMLInputElement {
  updateFileStatus: (
    fileId: string,
    status: FileItem["status"],
    errorMessage?: string
  ) => void;
}

/**
 * Props for the SFileUpload component
 */
export interface SFileUploadProps
  extends Omit<ComponentPropsWithout<"input", RemovedProps>, "size">,
    Omit<FileUploadVariants, "validationStatus" | "variant"> {
  /**
   * Accepted file types (e.g., '.pdf,.doc,.docx' or 'image/*')
   * Uses standard HTML input accept attribute format
   */
  accept?: string;

  /**
   * Maximum file size in bytes
   * Files exceeding this size will be marked with error status
   */
  maxSize?: number;

  /**
   * Maximum number of files allowed. If > 1, enables multiple file selection.
   * Default is 1 (single file). Set to undefined for single file (same as 1).
   */
  maxFiles?: number;

  /**
   * Whether the file upload is disabled
   * Prevents all file interactions and applies disabled styling
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the file upload is required
   * Adds required indicator and validation
   * @default false
   */
  required?: boolean;

  /**
   * Placeholder text to display in the upload area
   * @default 'Drag and drop your file here or browse file'
   */
  placeholder?: string;

  /**
   * Helper text to display below the upload area
   * @default 'Max file size is 15MB. Supported file types are jpg and png.'
   */
  helperText?: string;

  /**
   * Label for the file upload
   * Provides accessible labeling for the upload component
   */
  label?: string;

  /**
   * Array of file items with their states
   * Used for controlled component behavior
   */
  files?: FileItem[];

  /**
   * Callback function when files are selected
   * Triggered both by file input and drag-and-drop
   */
  onFilesChange?: (files: FileList | null) => void;

  /**
   * Callback function when files are dropped
   * Specifically for drag-and-drop interactions
   */
  onFilesDrop?: (files: FileList) => void;

  /**
   * Callback function when a file is removed
   * Triggered when user clicks remove/delete button
   */
  onFileRemove?: (fileId: string) => void;

  /**
   * Callback function when a file action is triggered
   * Handles retry for cancelled files and remove actions
   */
  onFileAction?: (fileId: string, action: "retry" | "remove") => void;

  /**
   * Method to update file status and error message (useful for server errors)
   * Allows external control of file states after upload attempts
   */
  onUpdateFileStatus?: (
    fileId: string,
    status: FileItem["status"],
    errorMessage?: string
  ) => void;

  /**
   * Optional additional classname for the component
   * Used for custom styling alongside the default styles
   */
  className?: string;

  /**
   * The size of the file upload
   * Controls the overall dimensions and spacing of the upload area
   * @default 'regular'
   */
  size?: "regular" | "large";

  /**
   * Whether the file upload should take up the full width of its container
   * @default false
   */
  fullWidth?: boolean;
}
```

## Examples

Here are comprehensive examples demonstrating various ways to use the SFileUpload component:

### Basic Single File Upload

```tsx
import React, { useState } from "react";
import { SFileUpload, FileItem } from "@chargebee/sting-react";

const BasicFileUploadExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFilesChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFile: FileItem = {
        id: `${Date.now()}`,
        file: fileList[0],
        status: "processing",
      };
      setFiles([newFile]);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  return (
    <div className="space-y-6">
      <SFileUpload
        label="Upload Document"
        placeholder="Drag and drop your document here or browse file"
        helperText="Supported formats: PDF, DOC, DOCX. Max size: 10MB"
        onFilesChange={handleFilesChange}
        onFileRemove={handleFileRemove}
        files={files}
        maxSize={10 * 1024 * 1024} // 10MB
        accept=".pdf,.doc,.docx"
      />
    </div>
  );
};

export default BasicFileUploadExample;
```

### Multiple File Upload

```tsx
import React, { useState } from "react";
import { SFileUpload, FileItem } from "@chargebee/sting-react";

const MultipleFileUploadExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFilesChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = Array.from(fileList).map((file, index) => ({
        id: `${Date.now()}-${index}`,
        file,
        status: "processing",
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleFileAction = (fileId: string, action: "retry" | "remove") => {
    if (action === "remove") {
      handleFileRemove(fileId);
    } else if (action === "retry") {
      setFiles((prev) =>
        prev.map((file) =>
          file.id === fileId ? { ...file, status: "processing" } : file
        )
      );
    }
  };

  return (
    <div className="space-y-6">
      <SFileUpload
        label="Upload Multiple Images"
        placeholder="Drag and drop multiple images here or browse files"
        helperText="You can upload multiple images at once. Max 5 files, 5MB each."
        maxFiles={5}
        maxSize={5 * 1024 * 1024} // 5MB
        accept="image/*"
        onFilesChange={handleFilesChange}
        onFileRemove={handleFileRemove}
        onFileAction={handleFileAction}
        files={files}
      />
    </div>
  );
};

export default MultipleFileUploadExample;
```

### Image Upload with Preview

```tsx
import React, { useState } from "react";
import { SFileUpload, FileItem } from "@chargebee/sting-react";

const ImageUploadWithPreviewExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [previews, setPreviews] = useState<{ [key: string]: string }>({});

  const generatePreview = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.readAsDataURL(file);
    });
  };

  const handleFilesChange = async (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = [];
      const newPreviews: { [key: string]: string } = {};

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileId = `${Date.now()}-${i}`;

        newFiles.push({
          id: fileId,
          file,
          status: "processing",
        });

        // Generate preview for images
        if (file.type.startsWith("image/")) {
          newPreviews[fileId] = await generatePreview(file);
        }
      }

      setFiles((prev) => [...prev, ...newFiles]);
      setPreviews((prev) => ({ ...prev, ...newPreviews }));
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
    setPreviews((prev) => {
      const updated = { ...prev };
      delete updated[fileId];
      return updated;
    });
  };

  return (
    <div className="space-y-6">
      <SFileUpload
        label="Upload Images"
        placeholder="Drag and drop images here or browse files"
        helperText="Supported formats: JPG, PNG, GIF. Max 3 files, 2MB each."
        maxFiles={3}
        maxSize={2 * 1024 * 1024} // 2MB
        accept="image/*"
        onFilesChange={handleFilesChange}
        onFileRemove={handleFileRemove}
        files={files}
        size="large"
      />

      {/* Image Previews */}
      {Object.keys(previews).length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {files.map(
            (file) =>
              previews[file.id] && (
                <div key={file.id} className="relative">
                  <img
                    src={previews[file.id]}
                    alt={file.file.name}
                    className="w-full h-32 object-cover rounded-lg border"
                  />
                  <div className="mt-2 text-sm">
                    <p className="font-medium truncate">{file.file.name}</p>
                    <p className="text-gray-500 capitalize">{file.status}</p>
                  </div>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploadWithPreviewExample;
```

### File Upload with Server Integration

```tsx
import React, { useState, useRef } from "react";
import { SFileUpload, FileItem, SFileUploadRef } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const ServerIntegratedUploadExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileUploadRef = useRef<SFileUploadRef>(null);

  const handleFilesChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = Array.from(fileList).map((file, index) => ({
        id: `${Date.now()}-${index}`,
        file,
        status: "ready", // Mark as ready for upload
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const uploadFile = async (fileItem: FileItem): Promise<void> => {
    const formData = new FormData();
    formData.append("file", fileItem.file);

    try {
      // Update status to processing
      fileUploadRef.current?.updateFileStatus(fileItem.id, "processing");

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      // Mark as completed (you might want to remove successful uploads)
      fileUploadRef.current?.updateFileStatus(fileItem.id, "ready");
    } catch (error) {
      // Mark as error with message
      fileUploadRef.current?.updateFileStatus(
        fileItem.id,
        "error",
        error instanceof Error ? error.message : "Upload failed"
      );
    }
  };

  const handleUploadAll = async () => {
    setIsUploading(true);

    const readyFiles = files.filter((file) => file.status === "ready");
    const uploadPromises = readyFiles.map((file) => uploadFile(file));

    try {
      await Promise.all(uploadPromises);
    } catch (error) {
      console.error("Some uploads failed:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleFileAction = (fileId: string, action: "retry" | "remove") => {
    if (action === "remove") {
      handleFileRemove(fileId);
    } else if (action === "retry") {
      const file = files.find((f) => f.id === fileId);
      if (file) {
        uploadFile(file);
      }
    }
  };

  const readyFilesCount = files.filter(
    (file) => file.status === "ready"
  ).length;

  return (
    <div className="space-y-6">
      <SFileUpload
        ref={fileUploadRef}
        label="Upload Files to Server"
        placeholder="Select files to upload to the server"
        helperText="Files will be ready for upload once selected. Click 'Upload All' to begin."
        maxFiles={10}
        maxSize={50 * 1024 * 1024} // 50MB
        onFilesChange={handleFilesChange}
        onFileRemove={handleFileRemove}
        onFileAction={handleFileAction}
        files={files}
        disabled={isUploading}
      />

      {readyFilesCount > 0 && (
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            {readyFilesCount} file{readyFilesCount !== 1 ? "s" : ""} ready for
            upload
          </p>
          <SButton
            variant="primary"
            onClick={handleUploadAll}
            loading={isUploading}
            disabled={isUploading}
          >
            {isUploading ? "Uploading..." : "Upload All"}
          </SButton>
        </div>
      )}
    </div>
  );
};

export default ServerIntegratedUploadExample;
```

### File Upload with Advanced Validation

```tsx
import React, { useState } from "react";
import { SFileUpload, FileItem } from "@chargebee/sting-react";
import { SBadge } from "@chargebee/sting-react";

const AdvancedValidationUploadExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);

  // Custom validation rules
  const validateFile = (file: File): string | null => {
    // Check file name
    if (file.name.length > 100) {
      return "File name too long (max 100 characters)";
    }

    // Check for special characters in name
    if (!/^[a-zA-Z0-9._-]+$/.test(file.name)) {
      return "File name contains invalid characters";
    }

    // Check file type more strictly
    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      return "File type not supported";
    }

    // Additional size validation (beyond component's maxSize)
    if (file.size < 1024) {
      return "File too small (minimum 1KB)";
    }

    return null; // Valid file
  };

  const handleFilesChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = Array.from(fileList).map((file, index) => {
        const validationError = validateFile(file);

        return {
          id: `${Date.now()}-${index}`,
          file,
          status: validationError ? "error" : "processing",
          errorMessage: validationError || undefined,
        };
      });

      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleFileAction = (fileId: string, action: "retry" | "remove") => {
    if (action === "remove") {
      handleFileRemove(fileId);
    } else if (action === "retry") {
      const file = files.find((f) => f.id === fileId);
      if (file) {
        const validationError = validateFile(file.file);
        setFiles((prev) =>
          prev.map((f) =>
            f.id === fileId
              ? {
                  ...f,
                  status: validationError ? "error" : "processing",
                  errorMessage: validationError || undefined,
                }
              : f
          )
        );
      }
    }
  };

  const getFileTypeIcon = (file: File) => {
    if (file.type.startsWith("image/")) return "🖼️";
    if (file.type.includes("pdf")) return "📄";
    if (file.type.includes("word")) return "📝";
    return "📁";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <div className="space-y-6">
      <SFileUpload
        label="Advanced File Validation"
        placeholder="Upload files with strict validation rules"
        helperText="Only PDF, DOC, DOCX, JPG, PNG files. Max 10MB. Alphanumeric names only."
        maxFiles={5}
        maxSize={10 * 1024 * 1024} // 10MB
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onFilesChange={handleFilesChange}
        onFileRemove={handleFileRemove}
        onFileAction={handleFileAction}
        files={files}
      />

      {/* File Details Table */}
      {files.length > 0 && (
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  File
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Size
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Type
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {files.map((fileItem) => (
                <tr key={fileItem.id}>
                  <td className="px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg">
                        {getFileTypeIcon(fileItem.file)}
                      </span>
                      <span className="text-sm font-medium truncate max-w-xs">
                        {fileItem.file.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {formatFileSize(fileItem.file.size)}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-600">
                    {fileItem.file.type || "Unknown"}
                  </td>
                  <td className="px-4 py-2">
                    <SBadge
                      variant={
                        fileItem.status === "ready"
                          ? "success"
                          : fileItem.status === "error"
                            ? "danger"
                            : fileItem.status === "processing"
                              ? "warning"
                              : "neutral"
                      }
                    >
                      {fileItem.status}
                    </SBadge>
                    {fileItem.errorMessage && (
                      <div className="mt-1 text-xs text-red-600">
                        {fileItem.errorMessage}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdvancedValidationUploadExample;
```

### Responsive File Upload

```tsx
import React, { useState } from "react";
import { SFileUpload, FileItem } from "@chargebee/sting-react";
import { SButton } from "@chargebee/sting-react";

const ResponsiveFileUploadExample = () => {
  const [files, setFiles] = useState<FileItem[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleFilesChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const newFiles: FileItem[] = Array.from(fileList).map((file, index) => ({
        id: `${Date.now()}-${index}`,
        file,
        status: "processing",
      }));
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleFileRemove = (fileId: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const clearAllFiles = () => {
    setFiles([]);
  };

  return (
    <div className="space-y-6">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <SFileUpload
          label="Responsive File Upload (Desktop)"
          placeholder="Drag and drop files here or browse files"
          helperText="Desktop experience with full drag-and-drop support"
          maxFiles={10}
          maxSize={25 * 1024 * 1024} // 25MB
          onFilesChange={handleFilesChange}
          onFileRemove={handleFileRemove}
          files={files}
          size="large"
          fullWidth
        />
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <SFileUpload
          label="File Upload (Mobile)"
          placeholder="Tap to select files"
          helperText="Mobile-optimized file selection"
          maxFiles={5}
          maxSize={10 * 1024 * 1024} // 10MB
          onFilesChange={handleFilesChange}
          onFileRemove={handleFileRemove}
          files={files}
          size="regular"
          fullWidth
        />
      </div>

      {/* File Actions */}
      {files.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-gray-50 rounded-lg">
          <div className="text-sm text-gray-600">
            {files.length} file{files.length !== 1 ? "s" : ""} selected
            {isMobile && " (Mobile view)"}
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <SButton
              variant="neutral"
              size={isMobile ? "regular" : "regular"}
              fullWidth={isMobile}
              onClick={clearAllFiles}
            >
              Clear All
            </SButton>
            <SButton
              variant="primary"
              size={isMobile ? "regular" : "regular"}
              fullWidth={isMobile}
            >
              Upload Files
            </SButton>
          </div>
        </div>
      )}

      {/* Responsive File Grid */}
      {files.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file) => (
            <div
              key={file.id}
              className="p-4 border border-gray-200 rounded-lg bg-white"
            >
              <div className="flex items-start justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {file.file.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {(file.file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
                <button
                  onClick={() => handleFileRemove(file.id)}
                  className="ml-2 text-gray-400 hover:text-gray-600"
                  aria-label="Remove file"
                >
                  ✕
                </button>
              </div>
              <div className="mt-2">
                <div
                  className={`inline-block px-2 py-1 text-xs rounded ${
                    file.status === "ready"
                      ? "bg-green-100 text-green-800"
                      : file.status === "error"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {file.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResponsiveFileUploadExample;
```

## Key Features

- **Drag-and-Drop Support**: Intuitive drag-and-drop interface with visual feedback for enhanced user experience
- **Multiple File Selection**: Configurable single or multiple file upload with customizable file limits
- **File Validation**: Built-in validation for file size, type, and count with customizable error messages
- **State Management**: Individual file state tracking (processing, ready, error, cancelled) with visual indicators
- **File Actions**: Remove, retry, and delete actions for each file with appropriate visual cues
- **Size Variants**: Regular and large size options to fit different layout requirements
- **Accessibility**: Full keyboard navigation, screen reader support, and proper ARIA attributes
- **Responsive Design**: Mobile-friendly interface that adapts to different screen sizes
- **Server Integration**: Built-in hooks for server upload with progress tracking and error handling
- **Type Safety**: Comprehensive TypeScript interfaces for better development experience
- **Customizable UI**: Flexible styling options with CSS classes and design system integration
- **File Preview**: Support for generating and displaying file previews (especially for images)
- **Progress Tracking**: Visual progress indicators during file processing and upload
- **Error Handling**: Comprehensive error states with clear messaging and recovery options
- **Memory Management**: Efficient handling of file objects and preview cleanup
