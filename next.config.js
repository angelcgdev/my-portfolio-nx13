/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["source.unsplash.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
