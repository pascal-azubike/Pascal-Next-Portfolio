/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium'],
    serverActions: true
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'chrome-aws-lambda'];
    return config;
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "assets.aceternity.com",
      "thumbnails.unlimphotos.com",
      "devpro-aceternity.vercel.app",
      "images.unsplash.com"
    ]
  }
};

export default nextConfig;
