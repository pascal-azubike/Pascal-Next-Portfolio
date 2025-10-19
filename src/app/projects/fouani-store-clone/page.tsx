import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Shield, Sparkles, Package, CreditCard, Users, BarChart, Globe, FileText, CheckCircle, Code2, Database, Server, Layout } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    title: `Fouani Store Clone | ${siteConfig.name}`,
    description: "A full-featured e-commerce clone of Fouani Store with automated data scraping, fast product synchronization, and comprehensive admin controls for managing scraping, users, products, carousels, orders, and payments.",
    keywords: [
        ...siteConfig.keywords,
        "E-commerce Clone",
        "Web Scraping",
        "Automated Data Sync",
        "Admin Dashboard",
        "Product Management",
        "Order Processing",
        "Payment Integration",
        "Carousel Management",
        "User Management",
        "Next.js E-commerce",
        "Node.js Scraping",
        "Real-time Updates",
        "Performance Optimization",
        "Content Management",
        "Digital Retail"
    ],
    openGraph: {
        title: `Fouani Store Clone | ${siteConfig.name}`,
        description: "A full-featured e-commerce clone of Fouani Store with automated data scraping, fast product synchronization, and comprehensive admin controls for managing scraping, users, products, carousels, orders, and payments.",
        url: `${siteConfig.url}/projects/fouani-store-clone`,
        siteName: siteConfig.name,
        images: {
            url: siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: "Fouani Store Clone E-commerce Platform"
        },
        locale: "en_US",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: `Fouani Store Clone | ${siteConfig.name}`,
        description: "A full-featured e-commerce clone of Fouani Store with automated data scraping, fast product synchronization, and comprehensive admin controls for managing scraping, users, products, carousels, orders, and payments.",
        images: [siteConfig.ogImage],
    },
};

export default function FouaniStoreCloneCaseStudy() {
    return (
        <div className="min-h-screen bg-zinc-900 pt-28 text-white">
            {/* Hero Section */}
            <section className="lg:pt-24 pt-11 pb-12 px-4">
                <div className="mx-auto max-w-4xl">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
                        Fouani Store Clone
                    </h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                        A full-featured e-commerce clone of Fouani Store with automated data scraping, fast product synchronization, and comprehensive admin controls for managing scraping, users, products, carousels, orders, and payments.
                    </p>
                    <div className="flex flex-wrap gap-4">

                        <Link
                            href="https://fouanistoreclone.vercel.app"
                            target="_blank"
                            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
                        >
                            Live Website <ArrowUpRight className="ml-2" size={20} />
                        </Link>
                    </div>

                    {/* Hero Image with Neon Effect */}
                    <div className="mt-12 relative w-full">
                        <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-800/30">
                            <Image
                                src="/assets/images/fuaniClone.png"
                                alt="Fouani Store Clone Dashboard"
                                fill
                                className="object-contain"
                                priority
                            />
                            {/* Decorative elements */}
                            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-50 blur-3xl" />
                            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-600/10 opacity-30 blur-2xl" />
                        </div>
                    </div>
                    {/* Project Showcase */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 mt-12 relative w-full">Admin Scraping Interface</h2>
                        <div className="grid grid-cols-1 gap-8">

                            {/* Scraping Interface - Placeholder */}
                            <div className="rounded-lg overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-blue-600/20">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/assets/images/scrapeProducts.png" // Replace with actual scraping interface image
                                        alt="Fouani Store Clone Scraping Interface"
                                        width={1920}
                                        height={1080}
                                        className="object-cover"
                                    />
                                    {/* Decorative elements */}
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-50 blur-3xl" />
                                    <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-600/10 opacity-30 blur-2xl" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Scraping Management</h3>
                                    <p className="text-gray-400">Real-time scraping progress monitor with controls for initiation and updates.</p>
                                </div>
                            </div>

                            <div className="rounded-lg overflow-hidden bg-zinc-800/50 backdrop-blur-sm border border-blue-600/20">
                                <div className="relative aspect-[16/9]">
                                    <Image
                                        src="/assets/images/infoScraping.png"
                                        alt="Fouani Store Clone Scraping Interface"
                                        width={1920}
                                        height={1080}
                                        className="object-cover"
                                    />
                                    {/* Decorative elements */}
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 opacity-50 blur-3xl" />
                                    <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-600/10 opacity-30 blur-2xl" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold mb-2">Scraping Management</h3>
                                    <p className="text-gray-400">Real-time scraping progress monitor with controls for initiation and updates.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details */}
            <section className="py-12 px-4 overflow-hidden">
                <div className="mx-auto max-w-5xl">
                    <div className="space-y-16">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
                            <div className="space-y-6 text-gray-400">
                                <p className="text-lg">
                                    Developed a complete e-commerce clone of Fouani Store using Next.js and MongoDB, featuring automated web scraping for product synchronization. The system achieves full product scraping in under 10 minutes and includes a powerful admin dashboard for managing all aspects of the platform without terminal commands.
                                </p>

                                <div className="grid gap-6 md:grid-cols-3">
                                    {[
                                        {
                                            icon: <Code2 className="w-8 h-8 text-blue-600" />,
                                            title: "Automated Scraping",
                                            description: "Fast, efficient product data scraping with seamless database integration."
                                        },
                                        {
                                            icon: <Users className="w-8 h-8 text-blue-600" />,
                                            title: "Admin Management",
                                            description: "Intuitive controls for users, products, orders, and payments."
                                        },
                                        {
                                            icon: <BarChart className="w-8 h-8 text-blue-600" />,
                                            title: "Performance Optimization",
                                            description: "Optimized for speed with real-time updates and efficient data handling."
                                        }
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-blue-600/20"
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
                                        "Automated Product Scraping",
                                        "One-click scraping system that fetches and synchronizes all products from the source in under 10 minutes, including images, descriptions, prices, and variants."
                                    ],
                                    [
                                        "Admin Scraping Controls",
                                        "User-friendly admin interface to initiate, monitor, and manage scraping processes without any command-line interaction."
                                    ],
                                    [
                                        "Scraped Product Management",
                                        "Comprehensive tools for editing, categorizing, and optimizing scraped products, with bulk update capabilities."
                                    ],
                                    [
                                        "Carousel Management",
                                        "Admin controls for creating and managing homepage carousels using scraped product images and custom content."
                                    ],
                                    [
                                        "User Management",
                                        "Role-based access control for managing user accounts, permissions, and activity logs."
                                    ],
                                    [
                                        "Order Processing",
                                        "Complete order management system with status tracking, shipping integration, and customer notifications."
                                    ],
                                    [
                                        "Payment Handling",
                                        "Secure payment processing with multiple gateways and transaction verification."
                                    ],
                                    [
                                        "Performance Monitoring",
                                        "Built-in analytics for scraping speed, system performance, and e-commerce metrics."
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
                                        icon: <Code2 className="w-8 h-8 text-blue-600" />,
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
                                        icon: <Server className="w-8 h-8 text-blue-600" />,
                                        title: "Backend",
                                        items: [
                                            "Node.js",
                                            "Express",
                                            "MongoDB",
                                            "Mongoose",
                                            "JWT Authentication"
                                        ]
                                    },
                                    {
                                        icon: <Database className="w-8 h-8 text-blue-600" />,
                                        title: "Scraping & Storage",
                                        items: [
                                            "Puppeteer/Cheerio",
                                            "Cloudinary",
                                            "MongoDB Atlas",
                                            "Cron Jobs"
                                        ]
                                    },
                                    {
                                        icon: <Layout className="w-8 h-8 text-blue-600" />,
                                        title: "Tools & Utilities",
                                        items: [
                                            "Framer Motion",
                                            "React Hook Form",
                                            "Zod Validation",
                                            "Axios",
                                            "Date-fns"
                                        ]
                                    }
                                ].map((stack, index) => (
                                    <div
                                        key={index}
                                        className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur-sm border border-blue-600/20"
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
                                        challenge: "Fast Scraping Implementation",
                                        description: "Needed to scrape thousands of products efficiently without getting blocked, completing in under 10 minutes.",
                                        solution: "Utilized headless browser automation with Puppeteer, implemented parallel processing, and added smart rate limiting. Optimized data extraction with selectors and direct API calls where possible.",
                                        outcome: "Achieved consistent scraping times under 10 minutes for full catalog sync, with 99% data accuracy."
                                    },
                                    {
                                        challenge: "Admin Scraping Management",
                                        description: "Required intuitive admin controls for scraping without technical knowledge or terminal access.",
                                        solution: "Developed a web-based scraping dashboard with progress tracking, error handling, and one-click initiation. Integrated WebSockets for real-time updates during scraping.",
                                        outcome: "Enabled non-technical admins to manage scraping processes effortlessly, reducing operational overhead by 80%."
                                    },
                                    {
                                        challenge: "Data Synchronization & Integrity",
                                        description: "Maintaining data consistency between scraped content, database, and frontend while handling updates.",
                                        solution: "Implemented delta syncing for updates only, with validation schemas and duplicate detection. Used MongoDB transactions for atomic updates and Cloudinary for media handling.",
                                        outcome: "Ensured 100% data integrity with minimal downtime during syncs, handling up to 10,000 products efficiently."
                                    }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm border border-blue-600/20"
                                    >
                                        <h3 className="text-xl font-semibold mb-4 text-blue-600">
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
