import { ClassProp } from 'class-variance-authority/types';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { PopoverContentProps } from '@radix-ui/react-popover';
import { PopoverPortalProps } from '@radix-ui/react-popover';
import { PopoverProps } from '@radix-ui/react-popover';
import { PopoverTriggerProps } from '@radix-ui/react-popover';
import * as RadixAccordion from '@radix-ui/react-accordion';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';
import * as RadixSelect from '@radix-ui/react-select';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import * as React_2 from 'react';
import { ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare const Accordion: default_2.FC<AccordionProps>;

export declare const AccordionContent: default_2.ForwardRefExoticComponent<AccordionContentProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface AccordionContentProps {
    children?: default_2.ReactNode;
}

declare interface AccordionContentProps extends RadixAccordion.AccordionHeaderProps, default_2.HTMLAttributes<HTMLDivElement> {
    children?: default_2.ReactNode;
}

declare interface AccordionContextValue {
    openItem: string | null;
    setOpenItem: (itemId: string | null) => void;
}

export declare const AccordionHeader: default_2.FC<AccordionContentProps>;

export declare const AccordionItem: default_2.ForwardRefExoticComponent<AccordionItemProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface AccordionItemProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof accordionItemVariants>, RadixAccordion.AccordionItemProps {
    children?: default_2.ReactNode;
}

export declare const accordionItemVariants: (props?: ({
    size?: "small" | "regular" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface AccordionProps extends default_2.HTMLAttributes<HTMLDivElement>, RadixAccordion.CollapsibleProps, VariantProps<typeof accordionVariants>, Omit<RadixAccordion.AccordionImplSingleProps, `defaultValue` | `dir`> {
    children?: default_2.ReactNode;
    size?: "small" | "regular" | "large";
    border?: "border" | "no-border";
    defaultValue?: string;
    type?: RadixAccordion.AccordionSingleProps["type"] | RadixAccordion.AccordionMultipleProps["type"];
}

export declare const AccordionProvider: default_2.FC<{
    children?: default_2.ReactNode;
    defaultvalue?: string | null;
}>;

export declare const AccordionTrigger: default_2.ForwardRefExoticComponent<AccordionTriggerProps & {
    value: string;
} & default_2.RefAttributes<HTMLDivElement>>;

declare interface AccordionTriggerProps {
    children?: default_2.ReactNode;
}

export declare const accordionVariants: (props?: ({
    border?: "border" | "no-border" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Badge: React_2.ForwardRefExoticComponent<BadgeProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface BadgeProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    children?: React_2.ReactNode;
}

export declare const badgeVariants: (props?: ({
    variant?: "primary" | "neutral" | "red" | "yellow" | "green" | "info" | null | undefined;
    size?: "regular" | "large" | null | undefined;
    mode?: "light" | "dark" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Banner: {
    ({ className, variant, children, size, theme, title, paragraph, imgSrc, ...props }: BannerProps): JSX_2.Element;
    displayName: string;
};

export declare interface BannerProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof bannerVariants> {
    children?: React_2.ReactNode;
    size?: keyof typeof ButtonSize;
    theme?: keyof typeof theme;
    variants?: keyof typeof variant;
    title?: string;
    paragraph?: string;
    imgSrc?: string;
}

export declare const bannerVariants: (props?: ({
    variant?: "Hero" | "Communication" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    theme?: "Default" | "Deep" | "Ice and Sand" | "customtheme" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof ButtonVariants> {
    children: React_2.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    href?: string;
    asChild?: boolean;
}

declare const ButtonSize: {
    small: string;
    regular: string;
    large: string;
};

export declare const ButtonVariants: (props?: ({
    variant?: "primary" | "neutral" | "danger" | null | undefined;
    styleType?: "text" | "default" | "outline" | "icon" | "icon-borderless" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    fullWidth?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    loading?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Card: default_2.ForwardRefExoticComponent<CardProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CardProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
    children?: default_2.ReactNode;
}

export declare const cardVariants: (props?: ({
    depth?: "regular" | "flat" | "raised" | null | undefined;
    padding?: "regular" | "large" | null | undefined;
    background?: "transparent" | "white" | null | undefined;
} & ClassProp) | undefined) => string;

declare interface CheckboxOption {
    label: string | any;
    value: string;
    name: string;
}

export declare const CheckList: default_2.ForwardRefExoticComponent<CheckListProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface CheckListProps extends default_2.HTMLAttributes<HTMLInputElement>, VariantProps<typeof CheckListVariants> {
    options: CheckboxOption[];
    onChangeLogic?: (value: object[]) => void;
    title: string;
    listDescription: string;
}

declare const CheckListVariants: (props?: ({
    variant?: "basic" | "contained" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    width?: "inline" | "full" | null | undefined;
    align?: "horizontal" | "vertical" | null | undefined;
    disabled?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

declare const CheckVariants: (props?: ({
    variant?: "menu" | "basic" | null | undefined;
    padding?: "small" | "regular" | "large" | null | undefined;
    labels?: "none" | "inline" | "block" | "rows" | null | undefined;
    align?: "left" | "justified" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const ContainedDescription: ({ className, children, }: default_2.HtmlHTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const ContainedHeader: ({ className, children, }: default_2.HtmlHTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const ContainedList: default_2.ForwardRefExoticComponent<ContainedListProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface ContainedListContextType {
    variant: "basic" | "menu" | null | undefined;
    labels?: string | null;
    padding?: string | null;
    align?: "left" | "justified" | null | undefined;
    showIndicator?: Boolean;
    showSeperator?: Boolean;
    boldLabel?: Boolean;
}

export declare const ContainedListItem: default_2.FC<ContainedListItemProps>;

export declare interface ContainedListItemProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CheckVariants> {
    children?: default_2.ReactNode;
    header?: string;
    description?: string;
    showIndicator?: boolean;
    asChild?: boolean;
    onClick?: () => void;
    value?: string | default_2.ReactNode;
    indicatorIcon?: default_2.ReactNode;
    label?: string;
}

export declare const ContainedListItems: ({ className, children, }: default_2.HtmlHTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare const ContainedListLabel: default_2.FC<ContainedListLabelProps>;

export declare interface ContainedListLabelProps {
    children: default_2.ReactNode;
    boldLabel?: boolean;
}

export declare interface ContainedListProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof CheckVariants> {
    children?: default_2.ReactNode;
    header?: string;
    description?: string;
    showIndicator?: boolean;
    showSeperator?: boolean;
    boldLabel?: boolean;
}

export declare const ContainedListProvider: default_2.FC<{
    children: ReactNode;
    value: ContainedListContextType;
}>;

export declare const ContainedListValue: default_2.FC<ContainedListValueProps>;

declare interface ContainedListValueProps {
    children: default_2.ReactNode;
    labels?: string;
}

export declare const ContainedTitle: ({ className, children, }: default_2.HtmlHTMLAttributes<HTMLDivElement>) => JSX_2.Element;

export declare interface ContentProps extends PopoverProps, PopoverContentProps, PopoverPortalProps {
    triggerComponent?: default_2.ReactNode;
    contentClassName?: string;
    children?: default_2.ReactNode;
    modal?: PopoverProps["modal"];
    onOpenChange?: PopoverProps["onOpenChange"];
    forceMount?: PopoverPortalProps["forceMount"];
    arrow?: boolean;
    arrowColour?: string;
}

export declare interface DatasourceProps {
    label: string;
    value: string | default_2.ReactNode;
    action?: any;
    indicatorIcon?: default_2.ReactNode;
}

export declare const Drawer: default_2.ForwardRefExoticComponent<DrawerProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DrawerProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof drawerVariants> {
    children?: default_2.ReactNode;
    onClose?(): void;
    title?: string;
    hasCloseIcon: boolean;
}

export declare const drawerVariants: (props?: ({
    placement?: "left" | "top" | "right" | "bottom" | null | undefined;
    width?: "regular" | "narrow" | "wide" | null | undefined;
    height?: "regular" | "short" | null | undefined;
    show?: "show" | "hide" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare const InputCounter: React_2.ForwardRefExoticComponent<InputCounterProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface InputCounterProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof InputCounterVariants> {
    children?: React_2.ReactNode;
}

export declare const InputCounterVariants: (props?: ({
    Placement?: "top" | "bottom" | null | undefined;
    width?: "Small" | "Regular" | "Large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const InputError: React_2.ForwardRefExoticComponent<InputErrorProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface InputErrorProps extends React_2.LabelHTMLAttributes<HTMLLabelElement> {
    children: React_2.ReactNode;
}

declare const InputGroupVariant: (props?: ({
    variant?: "input" | "search" | null | undefined;
    label?: "inline" | "default" | "hide" | null | undefined;
    inputSize?: "regular" | "large" | null | undefined;
    disabled?: boolean | null | undefined;
    error?: boolean | null | undefined;
    withIcon?: boolean | null | undefined;
    reset?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const InputLabel: React_2.ForwardRefExoticComponent<InputLabelProps & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface InputLabelProps extends React_2.LabelHTMLAttributes<HTMLLabelElement> {
    children: React_2.ReactNode;
}

export declare const InputMessage: React_2.ForwardRefExoticComponent<InputMessageProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface InputMessageProps extends React_2.HTMLAttributes<HTMLDivElement> {
    children: React_2.ReactNode;
}

export declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof InputGroupVariant> {
    messageText?: string | null;
    labelText?: string;
    inputWidth?: string;
    disabled?: boolean;
    iconName?: any;
    onChangeLogic?: (value: string) => void;
}

export declare const Loader: default_2.ForwardRefExoticComponent<LoaderProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface LoaderProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof LoaderVariant> {
    children: string;
    text?: string;
}

declare const LoaderVariant: (props?: ({
    size?: "small" | "regular" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

declare type MenuItems = {
    title: string;
    items: {
        label: string;
        value: string;
        action?: string | any;
        customclass?: string;
    }[];
};

export declare const Modal: default_2.ForwardRefExoticComponent<ModalProps & default_2.RefAttributes<HTMLDivElement>>;

export declare const ModalClose: ({ children }: any) => JSX_2.Element;

export declare const ModalContent: ({ size, variant, className, title, children, hasCloseIcon, open, ModalTrigger, onOpenChange, ...props }: ModalProps) => JSX_2.Element;

export declare interface ModalProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof modalVariants> {
    children?: default_2.ReactNode;
    ModalTrigger?: default_2.ReactNode;
    title?: string;
    hasCloseIcon?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export declare const ModalTrigger: ({ children }: any) => JSX_2.Element;

export declare const modalVariants: (props?: ({
    variant?: "default" | "fullscreen" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
} & ClassProp) | undefined) => string;

declare const Notification_2: ({ variant, size, width, children, icon, action, close, iconContent, actionLogic, }: NotificationProps) => JSX_2.Element;
export { Notification_2 as Notification }

export declare interface NotificationProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof NotificationVariants> {
    children: default_2.ReactNode;
    iconContent?: default_2.ReactNode;
    icon?: boolean;
    close?: boolean;
    action?: boolean;
    actionLogic?: (value?: any) => void;
}

declare const NotificationVariants: (props?: ({
    variant?: "primary" | "neutral" | "red" | "yellow" | "green" | "info" | "brand" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    width?: "inline" | "full" | null | undefined;
    text?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const OverflowClose: ({ children }: any) => JSX_2.Element;

export declare const OverFlowMenu: default_2.ForwardRefExoticComponent<OverflowProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface OverflowProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof OverflowVariant> {
    menuGroups: MenuItems[];
    SecondMenu?: MenuItems;
    launchIcon?: default_2.ReactNode;
    launchTrigger?: default_2.ReactNode;
    children?: default_2.ReactNode;
    onChangeLogic?: (value: string) => void;
    align?: "center" | "start" | "end";
    focus?: boolean;
}

export declare const OverflowVariant: (props?: ({
    variant?: "om-multiple" | "om-basic" | "om-topNav" | null | undefined;
    position?: "left" | "right" | "bottom" | "auto" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Overlay: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const Popover: default_2.FC<PopoverRootProps>;

export declare const PopoverContent: default_2.ForwardRefExoticComponent<ContentProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface PopoverRootProps extends PopoverProps {
    children: default_2.ReactNode;
}

export declare const PopoverTrigger: default_2.FC<TriggerProps>;

export declare const ProductSwitcher: default_2.FC<ProductSwitcherPopoverProps>;

export declare const ProductSwitcherContent: default_2.ForwardRefExoticComponent<ProductSwitcherContentProps & default_2.RefAttributes<HTMLDivElement>>;

declare interface ProductSwitcherContentProps extends ContentProps {
    items?: ProductSwitcherItem<any>[];
    children?: default_2.ReactNode;
    onListItemClick?: (item: ProductSwitcherItem<any>) => void;
}

export declare interface ProductSwitcherItem<T> {
    label: string;
    value: string;
    accessible: boolean;
    extraData?: T;
}

declare interface ProductSwitcherPopoverProps extends PopoverRootProps, ProductSwitcherProps<any> {
    children: default_2.ReactNode;
    modal?: PopoverRootProps["modal"];
    onOpenChange?: PopoverRootProps["onOpenChange"];
}

export declare interface ProductSwitcherProps<T> extends ContentProps {
    items?: ProductSwitcherItem<T>[];
    triggerComponent?: default_2.ReactNode;
    onListItemClick?: (item: ProductSwitcherItem<T>) => void;
}

export declare const ProductSwitcherTrigger: ({ children, }: ProductSwitcherTriggerProps) => JSX_2.Element;

declare type ProductSwitcherTriggerProps = {
    children: default_2.ReactNode;
};

export declare const RadioButton: ({ id, value, contained, children, richContent, disabled, noCheckmark, ...props }: RadioButtonItemProps) => JSX_2.Element;

export declare interface RadioButtonItemProps extends RadixRadioGroup.RadioGroupItemProps, VariantProps<typeof RadioButtonVariants> {
    contained?: boolean;
    richContent?: boolean;
    disabled?: boolean;
    noCheckmark?: boolean;
    id: string;
    value: string;
    children: ReactNode;
}

export declare interface RadioButtonProps extends RadixRadioGroup.RadioGroupProps, VariantProps<typeof RadioButtonVariants> {
    disabled?: boolean;
    title?: string;
    defaultValue?: string;
    description: string;
    noCheckmark?: boolean;
    onChangeLogic?: (value: string) => void;
}

declare const RadioButtonVariants: (props?: ({
    variant?: "basic" | "contained" | null | undefined;
    size?: "small" | "regular" | "large" | null | undefined;
    width?: "full" | null | undefined;
    align?: "horizontal" | "vertical" | null | undefined;
    disabled?: boolean | null | undefined;
    format?: "rich" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const RadioGroup: ({ className, variant, size, align, width, format, title, description, noCheckmark, children, onChangeLogic, defaultValue, disabled, ...props }: RadioButtonProps) => JSX_2.Element;

export declare const SearchField: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare const SelectItem: ({ children, showIndication, ...props }: SelectItemProps) => JSX_2.Element;

export declare interface SelectItemProps extends RadixSelect.SelectItemProps, VariantProps<typeof SelectMenuVariants> {
    children: ReactNode;
    showIndication?: boolean;
}

export declare const SelectMenu: {
    ({ size, label, labelText, placeholder, widthMenu, SelectIcon, children, ...props }: SelectMenuProps): JSX_2.Element;
    displayName: string;
};

export declare interface SelectMenuProps extends RadixSelect.SelectProps, VariantProps<typeof SelectMenuVariants> {
    placeholder?: string;
    labelText?: string;
    showIndication?: boolean;
    SelectIcon?: ReactNode;
}

export declare const SelectMenuVariants: (props?: ({
    size?: "regular" | "large" | null | undefined;
    widthMenu?: "inline" | "full" | null | undefined;
    label?: "inline" | "default" | "hide" | null | undefined;
    withIcon?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Selector: default_2.ForwardRefExoticComponent<SelectorProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface SelectorProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof SelectorVariants> {
    asChild?: boolean;
    children: default_2.ReactNode;
    selectorValue?: boolean;
    disabled?: boolean;
    quantityValue?: number;
    onActionClick: (value?: any) => void;
    onActionIconClick: (value?: any) => void;
}

export declare const SelectorVariants: (props?: ({
    variant?: "default" | null | undefined;
    size?: "small" | "large" | "default" | null | undefined;
    action?: boolean | null | undefined;
    quantity?: boolean | null | undefined;
    quantityWithAction?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
    selected?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsContent: React_2.ForwardRefExoticComponent<TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TabsList: React_2.FC<TabsListProps>;

export declare interface TabsListProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof TabsVariants> {
    tabs?: {
        id: string;
        title: React_2.ReactNode;
    }[];
}

export declare interface TabsProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof TabsVariants> {
    children?: React_2.ReactNode;
    tabs?: {
        id: string;
        title: string | React_2.ReactNode;
    }[];
    defaultTabID?: string;
    tabId?: string;
    tabValue?: string;
    onValueChange: (value: string) => void;
}

export declare const TabsVariants: (props?: ({
    variant?: "horizontal" | "vertical" | null | undefined;
    tabStyle?: "contained" | "lined" | null | undefined;
    width?: "inline" | "full" | null | undefined;
} & ClassProp) | undefined) => string;

declare const theme: {
    Default: string;
    Deep: string;
    "Ice and Sand": string;
    customtheme: string;
};

export declare const Toast: React_2.ForwardRefExoticComponent<ToastProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ToastProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ToastVariants> {
    children?: React_2.ReactNode;
    icon?: React_2.ReactNode;
    description?: string;
    toastOpen?: boolean;
    setToastOpen?: React_2.Dispatch<React_2.SetStateAction<boolean>>;
    openTime?: number;
    action?: {
        label: string;
        logic: string | any;
    };
    closeAction?: boolean;
}

export declare const ToastVariants: (props?: ({
    variant?: "Primary" | "Red" | "Green" | null | undefined;
    width?: "Regular" | "Wide" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Toggle: default_2.ForwardRefExoticComponent<ToggleProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ToggleProps extends default_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleVariants> {
    children?: default_2.ReactNode;
    checked?: boolean;
    addons?: [string];
    title?: string;
    accompaniedCopy?: string;
}

export declare const toggleVariants: (props?: ({
    size?: "small" | "regular" | null | undefined;
    state?: "disabled" | "enabled" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Tooltip: React_2.ForwardRefExoticComponent<TooltipProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const TooltipContent: ({ width, Placement, Align, children, ...props }: TooltipProps & RadixTooltip.TooltipContentProps) => JSX_2.Element;

export declare interface TooltipProps extends RadixTooltip.TooltipProps, VariantProps<typeof TooltipVariants> {
    children?: React_2.ReactNode;
    trigger?: React_2.ReactNode;
    label?: string;
    link?: {
        label: string;
        href: string;
    };
}

export declare const TooltipTrigger: ({ children }: TooltipProps) => JSX_2.Element;

export declare const TooltipVariants: (props?: ({
    Placement?: "top" | "bottom" | null | undefined;
    Align?: "center" | "end" | "start" | null | undefined;
    width?: "Small" | "Regular" | "Large" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const TooltipWithActions: ({ children, open, onOpenChange, ...props }: TooltipProps) => JSX_2.Element;

export declare interface TriggerProps extends PopoverTriggerProps {
    children: default_2.ReactNode;
}

export declare const useAccordionContext: () => AccordionContextValue;

export declare const useContainedList: () => ContainedListContextType | undefined;

export declare function useContainedListContext(): ContainedListContextType;

declare const variant: {
    Hero: string;
    Communication: string;
};

export { }
