/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#C62828", // Premium Red (Chilli/Branding)
                secondary: "#FFFAFA", // Snow White (Background)
                accent: "#F9A825", // Deep Gold (Premium feel)
                natural: "#2E7D32", // Forest Green (Nature)
                dark: "#1A1A1A", // Text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'], // Adding a serif for headers
            },
        },
    },
    plugins: [],
}
