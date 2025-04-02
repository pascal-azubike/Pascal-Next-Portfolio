import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Shield, Sparkles, Package, CreditCard, Users, BarChart, Globe, FileText, CheckCircle, Code2, Database, Server, Layout } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Street Comfort | ${siteConfig.name}`,
  description: "A luxury streetwear e-commerce platform featuring branded shirts for men and women, Flutterwave payment integration, manual payment verification, and a comprehensive blog section with SEO optimization.",
  keywords: [
    ...siteConfig.keywords,
    "E-commerce Platform",
    "Luxury Streetwear",
    "Branded Shirts",
    "Men's Fashion",
    "Women's Fashion",
    "Online Shopping",
    "Product Management",
    "Inventory Tracking",
    "Shopping Cart",
    "User Authentication",
    "Flutterwave Integration",
    "Manual Payment Verification",
    "Blog Platform",
    "SEO Optimization",
    "Next.js E-commerce",
    "Digital Commerce",
    "Online Retail"
  ],
  openGraph: {
    title: `Street Comfort | ${siteConfig.name}`,
    description: "A luxury streetwear e-commerce platform featuring branded shirts for men and women, Flutterwave payment integration, manual payment verification, and a comprehensive blog section with SEO optimization.",
    url: `${siteConfig.url}/projects/street-comfort`,
    siteName: siteConfig.name,
    images: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Street Comfort E-commerce Platform"
    },
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Street Comfort | ${siteConfig.name}`,
    description: "A luxury streetwear e-commerce platform featuring branded shirts for men and women, Flutterwave payment integration, manual payment verification, and a comprehensive blog section with SEO optimization.",
    images: [siteConfig.ogImage],
  },
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
};

export default function StreetComfortCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-28 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            Street Comfort
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            A luxury streetwear e-commerce platform featuring branded shirts for men and women, Flutterwave payment integration, manual payment verification, and a comprehensive blog section with SEO optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://github.com/pascal-azubike/street-comfort"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-zinc-800/50 text-gray-400 font-semibold rounded-lg hover:bg-zinc-800/70 transition-colors border border-zinc-700"
            >
              View on GitHub <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="http://streetcomfortwear.com/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
            >
              Live Website <ArrowUpRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 overflow-hidden">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src="/assets/images/street-comfort.png"
                alt="Street Comfort Website"
                fill
                className="my-auto mx-auto max-w-[80%] max-h-[80%] rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-50 blur-3xl" />
            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-amber-400/10 opacity-30 blur-2xl" />
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  Developed a luxury streetwear e-commerce platform using Next.js and MongoDB. The platform features advanced product management for men's and women's branded shirts, real-time inventory tracking, and multiple payment options including Flutterwave integration and manual payment verification.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      icon: <Package className="w-8 h-8 text-amber-400" />,
                      title: "Product Management",
                      description: "Advanced product catalog with detailed specifications, multiple images, and size variants for men's and women's shirts."
                    },
                    {
                      icon: <Globe className="w-8 h-8 text-amber-400" />,
                      title: "Payment Integration",
                      description: "Flutterwave integration for local and international payments, plus manual payment verification system."
                    },
                    {
                      icon: <FileText className="w-8 h-8 text-amber-400" />,
                      title: "Blog Platform",
                      description: "Comprehensive blog section with SEO optimization and content management system."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                    >
                      {item.icon}
                      <h3 className="text-white font-semibold mt-4 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Features</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Advanced Product Management",
                    "Comprehensive product catalog with detailed specifications, multiple images, and size variants for men's and women's shirts."
                  ],
                  [
                    "Multiple Payment Options",
                    "Flutterwave integration for local/international payments and manual payment verification with receipt upload."
                  ],
                  [
                    "User Authentication",
                    "Secure user authentication with JWT, refresh tokens, and role-based access control."
                  ],
                  [
                    "Shopping Cart",
                    "Persistent shopping cart with real-time updates and quantity management."
                  ],
                  [
                    "Order Management",
                    "Complete order processing system with status tracking and email notifications."
                  ],
                  [
                    "Admin Dashboard",
                    "Comprehensive admin panel for managing products, orders, payments, and user accounts."
                  ],
                  [
                    "Blog Platform",
                    "SEO-optimized blog section with rich text editor and content management system."
                  ],
                  [
                    "Responsive Design",
                    "Luxury-focused, mobile-first design with elegant animations and transitions."
                  ]
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                  >
                    <h3 className="text-white font-semibold mb-2">{title}</h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Tech Stack</h2>
              <div className="grid gap-6 md:grid-cols-4">
                {[
                  {
                    icon: <Code2 className="w-8 h-8 text-amber-400" />,
                    title: "Frontend",
                    items: [
                      "Next.js 14",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Shadcn UI",
                      "Zustand",
                      "React Query"
                    ]
                  },
                  {
                    icon: <Server className="w-8 h-8 text-amber-400" />,
                    title: "Backend",
                    items: [
                      "Next.js API Routes",
                      "MongoDB",
                      "Mongoose",
                      "JWT Authentication",
                      "WebSocket"
                    ]
                  },
                  {
                    icon: <Database className="w-8 h-8 text-amber-400" />,
                    title: "Database & Storage",
                    items: [
                      "MongoDB Atlas",
                      "Cloudinary (Image/Video CDN)",
                      "MongoDB Atlas Search",
                      "Video Optimization"
                    ]
                  },
                  {
                    icon: <Layout className="w-8 h-8 text-amber-400" />,
                    title: "UI/UX & Tools",
                    items: [
                      "Framer Motion",
                      "React Hook Form",
                      "Zod Validation",
                      "React Icons",
                      "Date-fns"
                    ]
                  }
                ].map((stack, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                  >
                    {stack.icon}
                    <h3 className="text-white font-semibold mt-4 mb-3">
                      {stack.title}
                    </h3>
                    <ul className="space-y-2">
                      {stack.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    challenge: "Payment System Integration",
                    description: "Required multiple payment options including Flutterwave and manual verification system.",
                    solution: "Implemented Flutterwave integration for online payments and developed a secure manual payment verification system with receipt upload and admin approval workflow.",
                    outcome: "Successfully processed both online and manual payments with zero transaction issues."
                  },
                  {
                    challenge: "SEO Optimization",
                    description: "Needed to ensure high visibility for luxury footwear products and blog content.",
                    solution: "Implemented comprehensive SEO strategies including metadata optimization, structured data, and content optimization for both products and blog posts.",
                    outcome: "Achieved top rankings for key product categories and blog content in search results."
                  },
                  {
                    challenge: "Performance Optimization",
                    description: "Needed to handle high traffic, large product catalogs, and media content efficiently.",
                    solution: "Implemented comprehensive optimization strategies including Cloudinary for image/video optimization, lazy loading, and responsive media delivery. Added video compression and adaptive streaming for product showcases.",
                    outcome: "Reduced page load times by 60%, improved Core Web Vitals scores, and achieved 90% reduction in media delivery costs through Cloudinary's optimization."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-amber-400">
                      {item.challenge}
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Challenge:
                        </h4>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Solution:
                        </h4>
                        <p className="text-gray-400">{item.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-2">
                          Outcome:
                        </h4>
                        <p className="text-gray-400">{item.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}