/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/portfolio" : "",
  reactStrictMode: true,
  distDir: "dist",
  publicRuntimeConfig: {
    basePath: isProd ? "/portfolio" : "",
  },
};

export default nextConfig;
