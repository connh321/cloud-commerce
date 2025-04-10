import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: ['sass'],
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
