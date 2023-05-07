/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.shopify.com"],
  },
  experimental: {
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
