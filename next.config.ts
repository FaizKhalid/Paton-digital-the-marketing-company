import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ disables optimization for static export
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
