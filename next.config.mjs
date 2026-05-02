/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "github.com" }],
  },
  transpilePackages: ["geist"],
};

export default nextConfig;
