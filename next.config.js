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
        hostname: "secondfront-cdn.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts",
);

module.exports = withNextIntl(nextConfig);
