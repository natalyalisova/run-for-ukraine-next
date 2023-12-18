/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: [
      "https://github.com",
      "https://secondfront-cdn.nyc3.digitaloceanspaces.com",
      "secondfront-cdn.nyc3.digitaloceanspaces.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.example.com",
        port: "",
        pathname: "/account123/**",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts",
);

module.exports = withNextIntl(nextConfig);
