module.exports = {
    content: [
        // Paths to all of your components' files
        "../sting/src/components/**/*.{js,jsx,ts,tsx}",
        "../sting/src/components/ui/**/*.{js,jsx,ts,tsx}",
        "../input/src/**/*.{js,jsx,ts,tsx}",
        // Any other packages you have
    ],
    theme: {
        extend: {},
    },
    plugins: [require('./../../stingcss')],
};
