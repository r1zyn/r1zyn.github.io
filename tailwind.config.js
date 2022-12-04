const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * TailwindCSS configuration.
 * @type {import("tailwindcss").Config}
 */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        fontWeight: {
            light: 300,
            normal: 400,
            medium: 500,
            bold: 600,
            black: 700
        },
        extend: {
            brightness: {
                25: ".25"
            },
            colors: {
                g1: "#282828",
                g2: "#0F0F0F",
                p1: "#3500D3",
                p2: "#240090",
                p3: "#190061",
                p4: "#0C0032"
            },
            fontFamily: {
                made: ["Made", ...defaultTheme.fontFamily.sans]
            }
        }
    },
    plugins: []
};
