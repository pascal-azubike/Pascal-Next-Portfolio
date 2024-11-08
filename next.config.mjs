/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium-min'],
    serverActions: true
  },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'puppeteer-core', '@sparticuz/chromium-min'];
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
  },
  serverRuntimeConfig: {
    maxDuration: 60
  }
};

export default nextConfig;
