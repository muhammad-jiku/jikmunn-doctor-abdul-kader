/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // development
    // appDir: false, // production
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**ibb.co/*',
      },
      {
        protocol: 'https',
        hostname: '**lh3.googleusercontent.com',
      },
    ],
  },
};

module.exports = nextConfig;
