/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/flowbite/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fffbfa",
                    100: "#FFECE8",
                    200: "#FFD0C4",
                    300: "#FFB3A0",
                    400: "#FF977D",
                    500: "#FF7A59",
                    600: "#FF491C",
                    700: "#DE2C00",
                    800: "#A02000",
                    900: "#631400",
                },
                gray: {
                    50: "#F4F6F9",
                    100: "#D9E1EA",
                    200: "#A5B8CD",
                    300: "#718FAF",
                    400: "#4A6684",
                    500: "#2D3E50",
                    600: "#263443",
                    700: "#1E2A36",
                    800: "#172029",
                    900: "#10161C",
                },
                green: {
                    50: "#EEFFFB",
                    100: "#C7FFF3",
                    200: "#8EFFE9",
                    300: "#4EFADC",
                    400: "#1AE7C9",
                    500: "#00A492",
                    600: "#038276",
                    700: "#08675F",
                    800: "#0C554F",
                    900: "#003432",
                },
            },
            fontFamily: {
                sans: ["Public Sans", "sans-serif"],
                heading: ["Inconsolata", "monospace"],
            },
            borderRadius: {
                "4xl": "4rem",
                "5xl": "5rem",
                "6xl": "6rem",
            },
        },
    },
    plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
