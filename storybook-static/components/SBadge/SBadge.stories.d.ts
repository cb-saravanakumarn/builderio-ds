import { StoryObj } from '@storybook/react';

declare const meta: {
    title: string;
    component: import('../../../../../node_modules/react').ForwardRefExoticComponent<import('./index').BadgeProps & import('../../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        variant: {
            control: {
                type: "select";
                options: string[];
            };
        };
        size: {
            control: {
                type: "radio";
                options: string[];
            };
        };
        mode: {
            control: {
                type: "radio";
                options: string[];
            };
        };
        rounded: {
            control: {
                type: "radio";
                options: string[];
            };
        };
        iconPosition: {
            control: {
                type: "radio";
                options: string[];
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Variants: Story;
export declare const Sizes: Story;
export declare const Modes: Story;
export declare const Rounded: Story;
export declare const WithIcon: Story;
export declare const AsChild: Story;
