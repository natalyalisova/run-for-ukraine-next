/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["mui-tel-input"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secondfront-cdn.nyc3.cdn.digitaloceanspaces.com",
        port: "",
        pathname: "/**",
      },

      {
        protocol: "https",
        hostname: "mzeawjitgciqwretgwlc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/supabase-run-for-ukraine/**",
      },
    ],
  },
};

const withNextIntl = require("next-intl/plugin")(
  // This is the default (also the `src` folder is supported out of the box)
  "./i18n.ts",
);

module.exports = withNextIntl(nextConfig);
