import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Shield, Sparkles } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Plumbreed Puzzles | Projects | ${siteConfig.name}`,
  description: "Case study of Plumbreed Puzzles, an innovative faith-based gaming platform featuring dynamic product management, secure authentication, and optimized performance.",
  openGraph: {
    title: `Plumbreed Puzzles | Projects | ${siteConfig.name}`,
    description: "Innovative faith-based gaming platform with dynamic product management, secure authentication, and optimized performance for an engaging user experience.",
    url: `${siteConfig.url}/projects/plumbreedPuzzle`,
    siteName: siteConfig.name,
    images:
    {
      url: siteConfig.ogImage,
      
      
      alt: "Plumbreed Puzzles Project Preview"
    }
    ,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Plumbreed Puzzles | Projects | ${siteConfig.name}`,
    description: "Innovative faith-based gaming platform with dynamic product management, secure authentication, and optimized performance for an engaging user experience.",
    images: [siteConfig.ogImage],
  },
  keywords: [
    "Plumbreed Puzzles",
    "faith-based games",
    "Christian puzzles",
    "e-commerce platform",
    "game development",
    "puzzle games",
    "religious games",
    "board games",
    "educational games",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: `${siteConfig.url}/projects/plumbreedPuzzle`,
  },
};

export default function PlumbreedPuzzlesCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-28 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className=" mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl  lg:text-6xl font-bold mb-6">
            Plumbreed Puzzles
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            A premier e-commerce platform for faith-based puzzles and games,
            featuring a dynamic product catalog, content management system, and
            seamless integration with Jumia for secure transactions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.plumbreedboardgames.com/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
            >
              Live Site <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="#"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-500 text-white font-semibold rounded-lg hover:bg-purple-500 transition-all"
            >
              Demo Video <ArrowUpRight className="ml-2" size={20} />
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
                src="/assets/images/plumbreedpuzzle.png"
                alt="Plumbreed Puzzles Website"
                fill
                className=" my-auto mx-auto max-w-[80%] max-h-[80%] rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 opacity-50 blur-3xl" />
            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-purple-400/10 opacity-30 blur-2xl" />
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  Led the development of a comprehensive e-commerce platform for
                  faith-based puzzles and games. The project features a dynamic
                  product catalog, robust admin panel, and seamless integration
                  with Jumia for order fulfillment.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                  {[
                    {
                      icon: <ShoppingBag className="w-8 h-8 text-purple-400" />,
                      title: "E-commerce Integration",
                      description:
                        "Seamless product linking with Jumia, supporting both individual and bulk orders."
                    },
                    {
                      icon: <Shield className="w-8 h-8 text-purple-400" />,
                      title: "Secure Admin Panel",
                      description:
                        "Advanced authentication with refresh/access tokens and password hashing."
                    },
                    {
                      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
                      title: "Optimized Performance",
                      description:
                        "Image optimization, infinite scroll, and custom loading animations."
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
                    "Dynamic Product Management",
                    "Admin panel for real-time product creation and updates, with seamless Jumia integration for order fulfillment."
                  ],
                  [
                    "Content Management System",
                    "Rich text editor for creating and managing faith-based articles and product descriptions."
                  ],
                  [
                    "Advanced Security",
                    "Implemented JWT with refresh/access tokens in HTTP-only cookies, along with password hashing for robust security."
                  ],
                  [
                    "Performance Optimization",
                    "Cloudinary integration for image/video optimization, custom loading skeletons, and infinite scroll for smooth UX."
                  ],
                  [
                    "Responsive Design",
                    "Tailored, mobile-first design with beautiful animations and transitions for an engaging user experience."
                  ],
                  [
                    "Bulk Order System",
                    "Specialized interface for handling bulk orders, catering to institutional and large-scale customers."
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Technical Challenges & Solutions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    challenge: "E-commerce Integration Complexity",
                    description:
                      "Needed to seamlessly connect with Jumia while maintaining site autonomy.",
                    solution:
                      "Developed a custom integration layer that syncs product data and redirects to Jumia for checkout while retaining user engagement on the platform.",
                    outcome:
                      "Achieved a 90% successful redirect rate and maintained average session duration despite external checkout."
                  },
                  {
                    challenge: "Content Performance vs Quality",
                    description:
                      "Required high-quality images and videos without compromising load times.",
                    solution:
                      "Implemented dynamic image loading with blur placeholders, lazy loading, and Cloudinary's automatic format optimization.",
                    outcome:
                      "Reduced initial page load time by 50% while maintaining high-quality visual content."
                  },
                  {
                    challenge: "Secure Admin Access",
                    description:
                      "Needed robust security for admin functions without impacting user experience.",
                    solution:
                      "Implemented JWT refresh/access token strategy with HTTP-only cookies and MongoDB change streams for real-time updates.",
                    outcome:
                      "Zero security incidents while maintaining sub-second admin action response times."
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-purple-400">
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

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js 13+",
                  "MongoDB",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Cloudinary",
                  "JWT",
                  "Quill Editor",
                  "TypeScript",
                  "Framer Motion",
                  "React Query"
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-zinc-800/50 border border-purple-400/20 rounded-lg text-sm backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
