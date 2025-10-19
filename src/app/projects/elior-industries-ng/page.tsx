import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: `Elior Industries Nigeria | ${siteConfig.name}`,
    description: "Website showcasing premium Turkish steel doors, architectural systems.",
    keywords: [
        ...siteConfig.keywords,
        "Elior Industries",
        "Turkish Steel Doors",
        "Architectural Systems",
        "Interior Solutions",
        "WordPress Development",
        "Web Design",
        "Modern Architecture",
        "Building Solutions",
        "Responsive Design",
        "SEO Optimization"
    ],
    openGraph: {
        title: `Elior Industries Nigeria | ${siteConfig.name}`,
        description: "Website showcasing premium Turkish steel doors, architectural systems.",
        url: `${siteConfig.url}/projects/elior-industries-ng`,
        siteName: siteConfig.name,
        images: {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: "Elior Industries Nigeria"
        },
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: `Elior Industries Nigeria | ${siteConfig.name}`,
        description: "Website showcasing premium Turkish steel doors, architectural systems.",
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
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: `${siteConfig.url}/projects/elior-industries-ng`,
    },
};

export default function EliorIndustriesCaseStudy() {
    return (
        <div className="min-h-screen pt-28 bg-zinc-900 text-white">
            {/* Hero Section */}
            <section className="lg:pt-24 pt-11 pb-12 px-4">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                        Elior Industries Nigeria
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                        This case study explores the Elior Industries Nigeria project, covering
                        the Project Overview, Tools Used, and Live Links to the official product.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="https://www.eliorindustries.com"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-3 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-colors"
                        >
                            Live Link <ArrowUpRight className="ml-2" size={20} />
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
                                src="/assets/images/eliorIndustry.png"
                                alt="Elior Industries Nigeria"
                                fill
                                className="max-h-[90%] my-auto max-w-[90%] mx-auto rounded-lg"
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
                                    Developed a WordPress website for Elior Industries Nigeria,
                                    showcasing premium Turkish steel doors and architectural systems.
                                </p>
                                <p className="font-semibold text-white text-xl mt-8">
                                    Key Highlights:
                                </p>
                                <div className="grid gap-6 md:grid-cols-2">
                                    {[
                                        [
                                            "Custom WordPress Theme",
                                            "Designed a custom theme for a modern, professional look."
                                        ],
                                        [
                                            "Product Showcase",
                                            "Highlighted steel doors and railings with dynamic galleries."
                                        ],
                                        [
                                            "SEO Optimization",
                                            "Integrated Yoast SEO for enhanced search engine visibility."
                                        ],
                                        [
                                            "Responsive Design",
                                            "Ensured seamless experience across desktop and mobile devices."
                                        ],
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
                                    "WordPress",
                                    "PHP",
                                    "CSS",
                                    "JavaScript",
                                    "Elementor",
                                    "Yoast SEO",
                                    "GIT",
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
