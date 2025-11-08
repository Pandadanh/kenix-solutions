/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tanphatdigital.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize fonts
  optimizeFonts: true,
  // Enable compression
  compress: true,
  // Production source maps (optional, disable for smaller builds)
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig

