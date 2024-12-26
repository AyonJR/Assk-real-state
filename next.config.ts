/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables strict mode for React
  swcMinify: true, // Use the SWC compiler for minification
  images: {
    domains: ['i.ibb.co'], // Correct external domain for the Next.js Image component
  },
  experimental: {
    appDir: true, // Enables the experimental app directory
  },
};

module.exports = nextConfig;
