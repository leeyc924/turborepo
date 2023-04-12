/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    transpilePackages: ["components"],
    reactStrictMode: true,
  },
};

module.exports = nextConfig;
