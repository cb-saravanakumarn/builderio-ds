import { default as React, ReactNode } from '../../../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';

declare const SCheckListVariants: (props?: ({
    variant?: "basic" | "contained" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    width?: "full" | "inline" | null | undefined;
    align?: "vertical" | "horizontal" | null | undefined;
    disabled?: boolean | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface SCheckListProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof SCheckListVariants> {
    title: string;
    listDescription: string;
    options?: CheckboxOption[];
    onChangeLogic?: (value: string[]) => void;
    children: ReactNode;
    selectedValues?: string[];
}
interface CheckboxOption {
    label: string | any;
    value: string;
    name: string;
}
declare const SCheckList: {
    ({ variant, align, className, width, size, title, disabled, listDescription, onChangeLogic, children, selectedValues, }: SCheckListProps): import("react/jsx-runtime").JSX.Element;
    Item: ({ value, children, disabled, ...props }: SCheckListItemProps) => import("react/jsx-runtime").JSX.Element;
};
interface SCheckListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    children: ReactNode;
    disabled?: boolean;
}
export { SCheckList };
