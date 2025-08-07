export declare const colors: {
    readonly primary: {
        readonly 50: "#eff6ff";
        readonly 100: "#dbeafe";
        readonly 200: "#bfdbfe";
        readonly 300: "#93c5fd";
        readonly 400: "#60a5fa";
        readonly 500: "#3b82f6";
        readonly 600: "#2563eb";
        readonly 700: "#1d4ed8";
        readonly 800: "#1e40af";
        readonly 900: "#1e3a8a";
        readonly 950: "#172554";
    };
    readonly secondary: {
        readonly 50: "#f9fafb";
        readonly 100: "#f3f4f6";
        readonly 200: "#e5e7eb";
        readonly 300: "#d1d5db";
        readonly 400: "#9ca3af";
        readonly 500: "#6b7280";
        readonly 600: "#4b5563";
        readonly 700: "#374151";
        readonly 800: "#1f2937";
        readonly 900: "#111827";
        readonly 950: "#030712";
    };
    readonly success: {
        readonly 50: "#f0fdf4";
        readonly 100: "#dcfce7";
        readonly 500: "#10b981";
        readonly 600: "#059669";
        readonly 700: "#047857";
    };
    readonly error: {
        readonly 50: "#fef2f2";
        readonly 100: "#fee2e2";
        readonly 500: "#ef4444";
        readonly 600: "#dc2626";
        readonly 700: "#b91c1c";
    };
    readonly warning: {
        readonly 50: "#fffbeb";
        readonly 100: "#fef3c7";
        readonly 500: "#f59e0b";
        readonly 600: "#d97706";
        readonly 700: "#b45309";
    };
    readonly white: "#ffffff";
    readonly black: "#000000";
    readonly transparent: "transparent";
};
export declare const tailwindColors: {
    readonly "primary-50": "bg-primary-50 text-primary-900";
    readonly "primary-100": "bg-primary-100 text-primary-900";
    readonly "primary-500": "bg-primary-500 text-white";
    readonly "primary-600": "bg-primary-600 text-white";
    readonly "primary-700": "bg-primary-700 text-white";
    readonly "secondary-50": "bg-secondary-50 text-secondary-900";
    readonly "secondary-100": "bg-secondary-100 text-secondary-900";
    readonly "secondary-200": "bg-secondary-200 text-secondary-900";
    readonly "secondary-500": "bg-secondary-500 text-white";
    readonly "secondary-600": "bg-secondary-600 text-white";
    readonly "success-50": "bg-success-50 text-success-700";
    readonly "success-500": "bg-success-500 text-white";
    readonly "error-50": "bg-error-50 text-error-700";
    readonly "error-500": "bg-error-500 text-white";
    readonly "warning-50": "bg-warning-50 text-warning-700";
    readonly "warning-500": "bg-warning-500 text-white";
};
export declare const cssVariables: {
    readonly "--color-primary-50": "#eff6ff";
    readonly "--color-primary-100": "#dbeafe";
    readonly "--color-primary-500": "#3b82f6";
    readonly "--color-primary-600": "#2563eb";
    readonly "--color-primary-700": "#1d4ed8";
    readonly "--color-secondary-50": "#f9fafb";
    readonly "--color-secondary-100": "#f3f4f6";
    readonly "--color-secondary-200": "#e5e7eb";
    readonly "--color-secondary-500": "#6b7280";
    readonly "--color-secondary-600": "#4b5563";
    readonly "--color-secondary-700": "#374151";
    readonly "--color-secondary-800": "#1f2937";
    readonly "--color-secondary-900": "#111827";
    readonly "--color-success": "#10b981";
    readonly "--color-error": "#ef4444";
    readonly "--color-warning": "#f59e0b";
    readonly "--color-white": "#ffffff";
    readonly "--color-black": "#000000";
    readonly "--color-transparent": "transparent";
};
export declare const generateColorClasses: (colorName: keyof typeof colors, shade?: number) => {
    background: string;
    text: string;
    border: string;
    ring: string;
};
export declare const buttonColorMappings: {
    readonly primary: {
        readonly base: "bg-primary-500 text-white border-primary-500";
        readonly hover: "hover:bg-primary-600 hover:border-primary-600";
        readonly active: "active:bg-primary-700 active:border-primary-700";
        readonly focus: "focus:ring-primary-500/50";
        readonly disabled: "disabled:bg-secondary-300 disabled:text-secondary-500 disabled:border-secondary-300";
    };
    readonly secondary: {
        readonly base: "bg-secondary-100 text-secondary-900 border-secondary-200";
        readonly hover: "hover:bg-secondary-200 hover:border-secondary-300";
        readonly active: "active:bg-secondary-300 active:border-secondary-400";
        readonly focus: "focus:ring-secondary-500/50";
        readonly disabled: "disabled:bg-secondary-50 disabled:text-secondary-400 disabled:border-secondary-200";
    };
    readonly outline: {
        readonly base: "bg-transparent text-primary-600 border-primary-500";
        readonly hover: "hover:bg-primary-500 hover:text-white hover:border-primary-500";
        readonly active: "active:bg-primary-600 active:text-white active:border-primary-600";
        readonly focus: "focus:ring-primary-500/50";
        readonly disabled: "disabled:bg-transparent disabled:text-secondary-400 disabled:border-secondary-300";
    };
    readonly ghost: {
        readonly base: "bg-transparent text-primary-600 border-transparent";
        readonly hover: "hover:bg-primary-50 hover:text-primary-700";
        readonly active: "active:bg-primary-100 active:text-primary-800";
        readonly focus: "focus:ring-primary-500/50";
        readonly disabled: "disabled:bg-transparent disabled:text-secondary-400 disabled:border-transparent";
    };
};
export declare const buttonSizeMappings: {
    readonly small: {
        readonly base: "px-3 py-1.5 text-sm";
        readonly icon: "w-4 h-4";
        readonly gap: "gap-1.5";
    };
    readonly medium: {
        readonly base: "px-4 py-2 text-base";
        readonly icon: "w-5 h-5";
        readonly gap: "gap-2";
    };
    readonly large: {
        readonly base: "px-6 py-3 text-lg";
        readonly icon: "w-6 h-6";
        readonly gap: "gap-2.5";
    };
};
export declare const buttonBaseClasses: string;
declare const _default: {
    colors: {
        readonly primary: {
            readonly 50: "#eff6ff";
            readonly 100: "#dbeafe";
            readonly 200: "#bfdbfe";
            readonly 300: "#93c5fd";
            readonly 400: "#60a5fa";
            readonly 500: "#3b82f6";
            readonly 600: "#2563eb";
            readonly 700: "#1d4ed8";
            readonly 800: "#1e40af";
            readonly 900: "#1e3a8a";
            readonly 950: "#172554";
        };
        readonly secondary: {
            readonly 50: "#f9fafb";
            readonly 100: "#f3f4f6";
            readonly 200: "#e5e7eb";
            readonly 300: "#d1d5db";
            readonly 400: "#9ca3af";
            readonly 500: "#6b7280";
            readonly 600: "#4b5563";
            readonly 700: "#374151";
            readonly 800: "#1f2937";
            readonly 900: "#111827";
            readonly 950: "#030712";
        };
        readonly success: {
            readonly 50: "#f0fdf4";
            readonly 100: "#dcfce7";
            readonly 500: "#10b981";
            readonly 600: "#059669";
            readonly 700: "#047857";
        };
        readonly error: {
            readonly 50: "#fef2f2";
            readonly 100: "#fee2e2";
            readonly 500: "#ef4444";
            readonly 600: "#dc2626";
            readonly 700: "#b91c1c";
        };
        readonly warning: {
            readonly 50: "#fffbeb";
            readonly 100: "#fef3c7";
            readonly 500: "#f59e0b";
            readonly 600: "#d97706";
            readonly 700: "#b45309";
        };
        readonly white: "#ffffff";
        readonly black: "#000000";
        readonly transparent: "transparent";
    };
    tailwindColors: {
        readonly "primary-50": "bg-primary-50 text-primary-900";
        readonly "primary-100": "bg-primary-100 text-primary-900";
        readonly "primary-500": "bg-primary-500 text-white";
        readonly "primary-600": "bg-primary-600 text-white";
        readonly "primary-700": "bg-primary-700 text-white";
        readonly "secondary-50": "bg-secondary-50 text-secondary-900";
        readonly "secondary-100": "bg-secondary-100 text-secondary-900";
        readonly "secondary-200": "bg-secondary-200 text-secondary-900";
        readonly "secondary-500": "bg-secondary-500 text-white";
        readonly "secondary-600": "bg-secondary-600 text-white";
        readonly "success-50": "bg-success-50 text-success-700";
        readonly "success-500": "bg-success-500 text-white";
        readonly "error-50": "bg-error-50 text-error-700";
        readonly "error-500": "bg-error-500 text-white";
        readonly "warning-50": "bg-warning-50 text-warning-700";
        readonly "warning-500": "bg-warning-500 text-white";
    };
    cssVariables: {
        readonly "--color-primary-50": "#eff6ff";
        readonly "--color-primary-100": "#dbeafe";
        readonly "--color-primary-500": "#3b82f6";
        readonly "--color-primary-600": "#2563eb";
        readonly "--color-primary-700": "#1d4ed8";
        readonly "--color-secondary-50": "#f9fafb";
        readonly "--color-secondary-100": "#f3f4f6";
        readonly "--color-secondary-200": "#e5e7eb";
        readonly "--color-secondary-500": "#6b7280";
        readonly "--color-secondary-600": "#4b5563";
        readonly "--color-secondary-700": "#374151";
        readonly "--color-secondary-800": "#1f2937";
        readonly "--color-secondary-900": "#111827";
        readonly "--color-success": "#10b981";
        readonly "--color-error": "#ef4444";
        readonly "--color-warning": "#f59e0b";
        readonly "--color-white": "#ffffff";
        readonly "--color-black": "#000000";
        readonly "--color-transparent": "transparent";
    };
    generateColorClasses: (colorName: keyof typeof colors, shade?: number) => {
        background: string;
        text: string;
        border: string;
        ring: string;
    };
    buttonColorMappings: {
        readonly primary: {
            readonly base: "bg-primary-500 text-white border-primary-500";
            readonly hover: "hover:bg-primary-600 hover:border-primary-600";
            readonly active: "active:bg-primary-700 active:border-primary-700";
            readonly focus: "focus:ring-primary-500/50";
            readonly disabled: "disabled:bg-secondary-300 disabled:text-secondary-500 disabled:border-secondary-300";
        };
        readonly secondary: {
            readonly base: "bg-secondary-100 text-secondary-900 border-secondary-200";
            readonly hover: "hover:bg-secondary-200 hover:border-secondary-300";
            readonly active: "active:bg-secondary-300 active:border-secondary-400";
            readonly focus: "focus:ring-secondary-500/50";
            readonly disabled: "disabled:bg-secondary-50 disabled:text-secondary-400 disabled:border-secondary-200";
        };
        readonly outline: {
            readonly base: "bg-transparent text-primary-600 border-primary-500";
            readonly hover: "hover:bg-primary-500 hover:text-white hover:border-primary-500";
            readonly active: "active:bg-primary-600 active:text-white active:border-primary-600";
            readonly focus: "focus:ring-primary-500/50";
            readonly disabled: "disabled:bg-transparent disabled:text-secondary-400 disabled:border-secondary-300";
        };
        readonly ghost: {
            readonly base: "bg-transparent text-primary-600 border-transparent";
            readonly hover: "hover:bg-primary-50 hover:text-primary-700";
            readonly active: "active:bg-primary-100 active:text-primary-800";
            readonly focus: "focus:ring-primary-500/50";
            readonly disabled: "disabled:bg-transparent disabled:text-secondary-400 disabled:border-transparent";
        };
    };
    buttonSizeMappings: {
        readonly small: {
            readonly base: "px-3 py-1.5 text-sm";
            readonly icon: "w-4 h-4";
            readonly gap: "gap-1.5";
        };
        readonly medium: {
            readonly base: "px-4 py-2 text-base";
            readonly icon: "w-5 h-5";
            readonly gap: "gap-2";
        };
        readonly large: {
            readonly base: "px-6 py-3 text-lg";
            readonly icon: "w-6 h-6";
            readonly gap: "gap-2.5";
        };
    };
    buttonBaseClasses: string;
};
export default _default;
