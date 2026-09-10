import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Products page used to live at /materials. Keep old links, bookmarks
      // and search results working; browsers carry any #cert-* anchor across.
      { source: "/materials", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
