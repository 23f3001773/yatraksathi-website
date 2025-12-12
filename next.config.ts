/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ye website ko static HTML mein badal dega
  images: {
    unoptimized: true, // Images ko bina server ke show karne ke liye zaroori hai
  },
  trailingSlash: true, // Ye URLs ko /about/ index.html format mein rakhega (better for Hostinger)
}

module.exports = nextConfig