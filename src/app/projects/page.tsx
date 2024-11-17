import PortfolioGrid from "@/components/Portfolio";
import WorkExperience from "@/components/workExperience";
import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Projects | ${siteConfig.name}`,
  description: "Explore my portfolio of full-stack development projects, showcasing expertise in web development, e-commerce solutions, and interactive applications.",
  keywords: [
    ...siteConfig.keywords,
    "Web Projects",
    "Portfolio Projects",
    "Full Stack Applications",
    "E-commerce Solutions",
    "Web Applications",
    "React Projects",
    "Next.js Projects",
    "Node.js Projects",
    "MongoDB Projects",
    "API Development",
    "Database Design",
    "User Interface Design",
    "Responsive Design",
    "Performance Optimization",
    "Technical Case Studies"
  ],
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description: "Explore my portfolio of full-stack development projects, showcasing expertise in web development, e-commerce solutions, and interactive applications.",
    url: `${siteConfig.url}/projects`,
    siteName: siteConfig.name,
    images:
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: `${siteConfig.name}'s Projects`
    }
    ,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${siteConfig.name}`,
    description: "Explore my portfolio of full-stack development projects, showcasing expertise in web development, e-commerce solutions, and interactive applications.",
    images: [siteConfig.ogImage],
  },
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
};

const Project = () => {
  return (
    <div className=" bg-zinc-900">
      <div className="max-w-5xl mx-auto px-8 pt-32 md:pt-40 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I&apos;ve been building a
          <span className="text-cyan-500"> lot of things</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Come explore the fruits of my labor, from small experiments to
          full-blown web applications, each project showcases my love for coding
          and design.
        </p>
      </div>
      <div className="max-w-5xl  mx-4 md:mx-8 lg:mx-auto ">
        <div className=" mt-10 ">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
};

export default Project;
