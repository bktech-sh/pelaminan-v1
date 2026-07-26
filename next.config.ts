import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 requires an explicit qualities allowlist (default is [75]).
    qualities: [75],
    // Whitelist Unsplash CDN for placeholder photography.
    // NOTE: replace with commissioned photography host before launch.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
        // NOTE: no `search` constraint — Unsplash URLs carry query params
        // (?auto=format&w=…&q=…); setting search:"" would reject them.
      },
    ],
  },
};

export default nextConfig;
