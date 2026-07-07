import type { NextConfig } from "next";

if (!process.env.BACKEND_API_URL) {
  throw new Error(
    "BACKEND_API_URL is not defined — check turbo.json env allowlist and Vercel env vars",
  );
}

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/v1/:path*",
        destination: `${process.env.BACKEND_API_URL}/api/v1/:path*`,
      },
    ];
  },
};

export default nextConfig;
