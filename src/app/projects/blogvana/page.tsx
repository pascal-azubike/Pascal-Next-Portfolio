
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Blogvana - Blogging Platform | ${siteConfig.name}`,
  description: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
  keywords: [
    ...siteConfig.keywords,
    "Blogging Platform",
    "Content Management System",
    "CMS Development",
    "Semantic Search",
    "User Authentication",
    "Blog Development",
    "Content Creation",
    "Machine Learning",
    "MongoDB Vector",
    "User Management",
    "Content Platform",
    "Blog Engine",
    "Publishing Platform",
    "Content Analytics",
    "Editorial System"
  ],
  openGraph: {
    title: `Blogvana - Blogging Platform | ${siteConfig.name}`,
    description: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
    url: `${siteConfig.url}/projects/blogvana`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Blogvana Project"
      }
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blogvana - Blogging Platform | ${siteConfig.name}`,
    description: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
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
    canonical: `${siteConfig.url}/projects/blogvana`,
  },
};

export default function BlogvanaCaseStudy() {
  return (
    <div className="min-h-min-h-screen bg-zinc-900 pt-28  text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Blogvana
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            This case study explores Blogvana Blog Project, covering the Project
            Overview, Tools Used, and Live Links to the official product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://blogvana-5l46.onrender.com/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            >
              Live Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="https://github.com/pascal-tech1/blogvana-deploy"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
            >
              Code Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 overflow-hidden">
        <div className="c mx-auto max-w-5xl">
          <div className="mb-16 relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src="/assets/images/blogvana.png"
                alt="Blogvana Dashboard"
                fill
                className=" max-w-[90%] max-h-[90%] mx-auto my-auto rounded-lg"
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
                  I spearheaded the creation of a feature-rich and user-centric
                  medium-like blog application, leveraging a robust tech stack
                  including Node.js, MongoDB, Express.js, React.js, and Redux
                  Toolkit. This project encompassed full-scale authentication,
                  empowering users to manage their profiles, create posts and
                  messages seamlessly. I also included semantic searching and
                  post recommendation with gte-small machine learning algorithm
                  and mongodb vector search.
                </p>
                <p className="font-semibold text-white text-xl mt-8">
                  Key Highlights:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    [
                      "Semantic Searching",
                      "Used gte-small machine learning algorithm and MongoDB vector to elevate and personalize user experience."
                    ],
                    [
                      "Authentication Excellence",
                      "Comprehensive authentication system ensuring user security and data privacy. Users can create, edit, and personalize their profiles."
                    ],
                    [
                      "Engaging User Experience",
                      "Crafted an intuitive and dynamic user dashboard using React Router and Redux Toolkit, facilitating content creation and management."
                    ],
                    [
                      "Administrative Prowess",
                      "Empowers administrators to oversee user activity, maintain system integrity, and assign user ranks."
                    ],
                    [
                      "Robust Error Handling",
                      "Utilizing Express.js and async handlers for reliable and efficient error catching, guaranteeing a smooth user experience."
                    ],
                    [
                      "Form Validation Excellence",
                      "Incorporated Yup and Formik for form validation to ensure data accuracy and enhance overall usability."
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
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "GIT",
                  "Redux Toolkit",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "gte-small algorithm",
                  "Quill"
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
