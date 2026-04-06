import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages deployment
  // Uncomment 'output: export' when deploying to Cloudflare Pages
  // output: 'export',

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.carbonyachts.com.au",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  trailingSlash: false,
};

export default nextConfig;
