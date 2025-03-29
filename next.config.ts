import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["sass"],
  },
  devIndicators: false,
  images: {
    localPatterns: [{
      pathname: 'public/images',
    },],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'placehold.co',
        },
    ],
},
};

export default nextConfig;
