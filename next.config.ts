import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["sass"],
  },
  devIndicators: false,
};

export default nextConfig;
