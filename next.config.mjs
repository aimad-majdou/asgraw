/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true, // check this in github actions
  },
  eslint: {
    ignoreDuringBuilds: true, // check this in github actions
  },
};

export default nextConfig;
