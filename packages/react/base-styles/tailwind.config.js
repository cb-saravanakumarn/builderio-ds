module.exports = {
    content: [
        // Paths to all of your components' files
        "../button/src/**/*.{js,jsx,ts,tsx}",
        "../input/src/**/*.{js,jsx,ts,tsx}",
        // Any other packages you have
    ],
    theme: {
        extend: {},
    },
    plugins: [require('cb-sting')],
};
