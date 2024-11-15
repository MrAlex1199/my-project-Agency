import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**' // Allows all paths on the hostname
      }
    ]
  },
  /* add other config options here if needed */
};

export default nextConfig;
