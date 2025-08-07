// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                light: {
                    background: "#ffffff",
                    text: "#171717",
                },
                dark: {
                    background: "#0a0a0a",
                    text: "#ededed",
                },
            },
        },
    },
    plugins: [],
};
