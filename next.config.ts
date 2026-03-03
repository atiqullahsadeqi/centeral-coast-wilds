import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 2, // Restricts Next.js to 2 background processes to prevent CloudLinux crashes
  },
  images: {

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