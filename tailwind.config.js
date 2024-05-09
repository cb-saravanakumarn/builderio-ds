/** @type {import('tailwindcss').Config} */
module.exports = {

    content: [
        // Paths to all of your components' files
        "./packages/react/sting/src/components/**/*.{ts,tsx,ts,tsx}",
        // Any other packages you have
    ],
    //  prefix: "s-",
    theme: {
        extend: {},
    },
    plugins: [
        require('@chargebee/cb-sting')
        //require('./../../stingcss')
    ],
};
