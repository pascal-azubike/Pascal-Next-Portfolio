
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Denmark Multibuz - E-commerce Platform | ${siteConfig.name}`,
  description: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
  keywords: [
    ...siteConfig.keywords,
    "E-commerce Platform",
    "Online Store",
    "Real-time Data",
    "MongoDB Atlas",
    "Search Optimization",
    "Product Management",
    "Shopping Platform",
    "Digital Commerce",
    "Inventory Management",
    "Order Processing",
    "E-commerce Development",
    "Online Retail",
    "Shopping Cart",
    "Payment Integration",
    "Product Catalog"
  ],
  openGraph: {
    title: `Denmark Multibuz - E-commerce Platform | ${siteConfig.name}`,
    description: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
    url: `${siteConfig.url}/projects/denmarkMultibuz`,
    siteName: siteConfig.name,
    images:
    {
      url: siteConfig.ogImage,
      
      alt: "Denmark Multibuz E-commerce Platform"
    }
    ,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Denmark Multibuz - E-commerce Platform | ${siteConfig.name}`,
    description: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
    images: [siteConfig.ogImage],
  },
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
    canonical: `${siteConfig.url}/projects/denmarkMultibuz`,
  },
};

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen  bg-zinc-900 pt-28 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl  md:text-4xl lg:text-6xl font-bold mb-6">
            Denmark Multibuz limited
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            This case study explores denmarkmultibuzltd, covering the Project
            Overview, Tools Used, and Live Links to the official product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://denmarkmultibuzltd.com/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            >
              Live Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="https://www.veed.io/view/7ea6ce4f-b0e6-42ae-a7c4-187482addcb5?panel=share"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
            >
              User Demo <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="https://www.veed.io/view/19d8f60c-48c5-40ac-a5f4-7e4d1e67abfc?panel=share"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
            >
              Admin Demo <ArrowUpRight className="ml-2" size={20} />
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
                src="/assets/images/blogvana.png"
                alt="Denmark Multibuz Dashboard"
                fill
                className=" max-h-[90%] max-w-[90%] mx-auto my-auto rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-50 blur-3xl" />
            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-400/10 opacity-30 blur-2xl" />
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Project Overview
              </h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  I led the development of DenmarkMultibuz, a comprehensive
                  e-commerce platform built with Next.js for seamless and
                  dynamic user experiences. The platform features advanced
                  product management, user and admin interfaces, and optimized
                  performance.
                </p>
                <p className="font-semibold text-white text-xl mt-8">
                  Key Highlights:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    [
                      "Real-Time Data Management",
                      "The platform features advanced sorting, filtering, and searching of products using MongoDB Atlas Search."
                    ],
                    [
                      "Optimized for SEO",
                      "Utilized Next.js metadata and OpenGraph meta tags for improved SEO and beautiful link previews."
                    ],
                    [
                      "Enhanced User Experience",
                      "Implemented advanced sorting and filtering using Tanstack Table, with real-time updates via React Query and Zustand."
                    ],
                    [
                      "Stylish UI with Tailwind CSS",
                      "Modern, responsive, and sleek user interface design using Tailwind CSS."
                    ],
                    [
                      "Rich Media Management",
                      "Integrated Cloudinary for efficient media optimization and management."
                    ],
                    [
                      "Dynamic Content Creation",
                      "Utilized Quill Rich Text Editor for seamless content management."
                    ]
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                    >
                      <h3 className="text-white font-semibold mb-2">{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Tanstack Table",
                  "React Query",
                  "Shadcn UI",
                  "ChatGPT",
                  "Cloudinary",
                  "Quill Rich Text Editor",
                  "React Quill",
                  "Lucide React Icons",
                  "React Slick",
                  "Zod",
                  "Zustand",
                  "Sharp"
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-zinc-800/50 border border-blue-400/20 rounded-lg text-sm backdrop-blur-sm"
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
