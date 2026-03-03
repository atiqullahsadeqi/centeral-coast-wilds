import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // This creates the static "out" folder
  images: {
    unoptimized: true, // Required for static exports using <Image />
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'centralcoastwilds.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.centralcoastwilds.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.centralcoastwilds.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;