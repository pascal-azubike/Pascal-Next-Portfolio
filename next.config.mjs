/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium']
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
