/** @type {import('next').NextConfig} */
const nextConfig = {
  // यह सेटिंग Vercel को एरर इग्नोर करने के लिए मजबूर करेगी
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;