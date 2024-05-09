module.exports = {

    content: [
        // Paths to all of your components' files
        "../sting/src/components/**/*.{js,jsx,ts,tsx}",
        "../sting/src/components/ui/**/*.{js,jsx,ts,tsx}",
        "../input/src/**/*.{js,jsx,ts,tsx}",
        // Any other packages you have
    ],
    prefix: "s-",
    theme: {
        extend: {},
    },
    plugins: [
        require('@chargebee/cb-sting')
        //require('./../../stingcss')
    ],
};
