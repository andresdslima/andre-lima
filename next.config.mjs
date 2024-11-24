/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd ? "/andre-lima/" : "",
  basePath: isProd ? "/andre-lima" : "",
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
