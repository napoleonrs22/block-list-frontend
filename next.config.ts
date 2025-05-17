import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async rewrites() {
      return [
        {
          source: "/api/:path*",
          destination: "http://localhost:3000/:path*",
        }
      ];
  },
};

export default nextConfig;
