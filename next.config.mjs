/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['aceternity.com', 'assets.aceternity.com', 'res.cloudinary.com'],
  },
  // Disable static page generation timeout
  staticPageGenerationTimeout: 0,
  // Disable static optimization for API routes
  experimental: {
    serverActions: true,
  },
  // Add headers to prevent caching
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
          { key: 'Expires', value: '0' },
        ],
      },
    ];
  },
};

export default nextConfig;