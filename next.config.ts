/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // यह Vercel को TypeScript एरर इग्नोर करने को बोलेगा
    ignoreBuildErrors: true,
  },
  eslint: {
    // यह ESLint एरर इग्नोर करेगा
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;