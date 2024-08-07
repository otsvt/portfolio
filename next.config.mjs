/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/portfolio" : "",
  reactStrictMode: true,
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  publicRuntimeConfig: {
    basePath: isProd ? "/portfolio" : "",
  },
};

export default nextConfig;
