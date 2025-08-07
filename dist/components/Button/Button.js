"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Button.styles.css");
// Spinner component for loading state
var Spinner = function () { return ((0, jsx_runtime_1.jsx)("span", { className: "button__spinner", "aria-hidden": "true" })); };
// Main Button Component
var ButtonComponent = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, text = _a.text, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, _c = _a.size, size = _c === void 0 ? "medium" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.loading, loading = _e === void 0 ? false : _e, onClick = _a.onClick, _f = _a.type, type = _f === void 0 ? "button" : _f, _g = _a.className, className = _g === void 0 ? "" : _g, href = _a.href, target = _a.target, rel = _a.rel, ariaLabel = _a.ariaLabel, _h = _a.fullWidth, fullWidth = _h === void 0 ? false : _h, startIcon = _a.startIcon, endIcon = _a.endIcon, props = __rest(_a, ["children", "text", "variant", "size", "disabled", "loading", "onClick", "type", "className", "href", "target", "rel", "ariaLabel", "fullWidth", "startIcon", "endIcon"]);
    // Determine the display text/content
    var content = children || text || "Button";
    // Build CSS classes
    var classes = [
        "button",
        "button--".concat(variant),
        "button--".concat(size),
        loading && "button--loading",
        fullWidth && "button--full-width",
        className,
    ]
        .filter(Boolean)
        .join(" ");
    // Common props for both button and anchor
    var commonProps = __assign({ className: classes, "aria-label": ariaLabel, "aria-disabled": disabled || loading, onClick: disabled || loading ? undefined : onClick }, props);
    // Render content with icons and loading state
    var renderContent = function () { return ((0, jsx_runtime_1.jsxs)("span", { className: "button__content", children: [loading && (0, jsx_runtime_1.jsx)(Spinner, {}), !loading && startIcon && ((0, jsx_runtime_1.jsx)("span", { className: "button__icon", children: startIcon })), content, !loading && endIcon && (0, jsx_runtime_1.jsx)("span", { className: "button__icon", children: endIcon })] })); };
    // Render as anchor if href is provided
    if (href && !disabled && !loading) {
        return ((0, jsx_runtime_1.jsx)("a", __assign({ ref: ref, href: href, target: target, rel: rel || (target === "_blank" ? "noopener noreferrer" : undefined) }, commonProps, { children: renderContent() })));
    }
    // Render as button
    return ((0, jsx_runtime_1.jsx)("button", __assign({ ref: ref, type: type, disabled: disabled || loading }, commonProps, { children: renderContent() })));
});
ButtonComponent.displayName = "Button";
// Cast to extended type and export
exports.Button = ButtonComponent;
// Builder.io Integration Settings
exports.Button.builderSettings = {
    name: "Button",
    inputs: [
        {
            name: "text",
            type: "text",
            defaultValue: "Click me",
            helperText: "The text to display on the button",
        },
        {
            name: "variant",
            type: "string",
            enum: ["primary", "secondary", "outline", "ghost"],
            defaultValue: "primary",
            helperText: "Visual style variant of the button",
        },
        {
            name: "size",
            type: "string",
            enum: ["small", "medium", "large"],
            defaultValue: "medium",
            helperText: "Size of the button",
        },
        {
            name: "disabled",
            type: "boolean",
            defaultValue: false,
            helperText: "Whether the button is disabled",
        },
        {
            name: "loading",
            type: "boolean",
            defaultValue: false,
            helperText: "Whether the button is in loading state",
        },
        {
            name: "fullWidth",
            type: "boolean",
            defaultValue: false,
            helperText: "Whether the button should take full width",
        },
        {
            name: "href",
            type: "url",
            helperText: "If provided, renders the button as a link",
        },
        {
            name: "target",
            type: "string",
            enum: ["_blank", "_self", "_parent", "_top"],
            defaultValue: "_self",
            helperText: "Target for the link (only used with href)",
        },
        {
            name: "ariaLabel",
            type: "text",
            helperText: "Accessibility label for screen readers",
        },
    ],
    // Builder.io specific settings
    canHaveChildren: true,
    defaultChildren: [
        {
            "@type": "@builder.io/sdk:Element",
            component: {
                name: "Text",
                options: {
                    text: "Click me",
                },
            },
        },
    ],
    image: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F4c21f90f4e8c4f4b95f6c13d4b4c8c3d",
    // Override default styles to work better with Builder.io
    override: true,
    // Make it droppable for other components
    childRequirements: {
        message: "You can put any content inside this button",
        query: {},
    },
};
exports.default = exports.Button;
