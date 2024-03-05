/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
