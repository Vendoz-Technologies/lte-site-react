/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  output: "export",
  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
