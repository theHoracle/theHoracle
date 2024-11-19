import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    dynamicIO: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
