/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config')

const nextConfig = {
    i18n:{
        locales:["en", "us"],
        defaultLocale: "en",
    },
    reactStrictMode: true,
}

module.exports = nextConfig
