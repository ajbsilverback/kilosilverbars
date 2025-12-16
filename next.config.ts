import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  
  // Permanent (301) redirects for renamed routes
  async redirects() {
    return [
      {
        source: "/prices",
        destination: "/live-silver-prices",
        permanent: true,
      },
      {
        source: "/where-to-buy",
        destination: "/where-to-buy-kilo-silver-bars",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
