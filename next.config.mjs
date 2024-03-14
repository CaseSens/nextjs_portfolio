const withMDX = await import("@next/mdx").then((mod) => mod.default());

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  output: "export",
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
});

export default nextConfig;
