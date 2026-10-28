import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  experimental: {
    // Avoid SegmentViewNode client-manifest errors in dev (Next 15.5 devtools).
    devtoolSegmentExplorer: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        react: path.resolve("./node_modules/react"),
        "react-dom": path.resolve("./node_modules/react-dom"),
        "react/jsx-runtime": path.resolve(
          "./node_modules/react/jsx-runtime.js",
        ),
        "react/jsx-dev-runtime": path.resolve(
          "./node_modules/react/jsx-dev-runtime.js",
        ),
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: "/_ploy/form-submit",
        destination: "/api/ploy/form-submit",
      },
    ];
  },
};

export default nextConfig;
