import { create } from '@storybook/theming/create';

export default create({
    base: 'light',
    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'Sting Storybook',
    brandUrl: 'https://cb-sting.com',
    brandImage: 'https://sting-ochre.vercel.app/assets/images/sting-ui-2023-logo.svg',
    brandTarget: '_self',


    //
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',


    // UI
    appBg: '#e6eaeb',
    appContentBg: '#f4f4f4',
    appBorderColor: '#e0e0e0',
    appBorderRadius: 4,

    // Text colors
    textColor: '#10162F',
    textInverseColor: '#ffffff',

    // Toolbar default and active colors
    barTextColor: '#9E9E9E',
    barSelectedColor: '#e6eaeb',
    barBg: '#012a38',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#10162F',
    inputTextColor: '#10162F',
    inputBorderRadius: 2,
});