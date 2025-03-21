"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{ts,tsx}",
        "./public/**/*.html",
    ],
    theme: {
        extend: {
            colors: {
                "strong-azure": "#0057b8",
                "yellow-gold": "#ffd700",
                "israel-blue": "#0000FF",
            },
            boxShadow: {
                menu: "0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)",
            },
            screens: {
                sm: "600px",
                md: "900px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            maxWidth: {
                "10xl": "1680px",
            },
            keyframes: {
                animatedgradient: {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
            },
            backgroundSize: {
                "300%": "300%",
            },
            animation: {
                gradient: "animatedgradient 6s ease infinite alternate",
            },
        },
    },
    plugins: [require("tailwindcss-inner-border")],
};
exports.default = config;
