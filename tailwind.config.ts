import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'strong-azure': '#0057b8',
                'yellow-gold': '#ffd700'
            },
            boxShadow: {
                menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
            },
            screens: {
                'xs': '400px',
            },
            maxWidth: {
                '10xl': '1680px'
            }
        },
    },
    plugins: [],
}
export default config
