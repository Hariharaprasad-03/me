/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#ffb400",
                "primary-dark": "#e6a200",
                "primary-light": "#ffc940",
                accent: "#ff8c00",
                "background-light": "#f5f5fa",
                "background-dark": "#0f0f13",
                "surface-light": "#ffffff",
                "surface-dark": "#1a1a22",
                "surface-elevated-light": "#f8f8fc",
                "surface-elevated-dark": "#24242e",
            },
            fontFamily: {
                display: ["Montserrat", "Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "1rem",
            },
        },
    },
    plugins: [],
}
