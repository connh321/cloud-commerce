import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['sass'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  devIndicators: false,
  images: {
    localPatterns: [
      {
        pathname: 'public/images',
      },
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cloud-commerce-production-images.s3.us-east-2.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
