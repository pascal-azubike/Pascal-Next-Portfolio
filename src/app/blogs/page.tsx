
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import BlogContent from "@/components/BlogContent";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Technical Blog | ${siteConfig.name}`,
  description: "Explore technical articles and insights about software development, clean code practices, and valuable lessons learned throughout my development journey.",
  keywords: [
    ...siteConfig.keywords,
    "Technical Blog",
    "Software Development Blog",
    "Coding Tutorials",
    "Programming Tips",
    "Web Development Blog",
    "Software Engineering Articles",
    "Code Examples",
    "Best Practices",
    "Development Tutorials",
    "Tech Insights",
    "Software Architecture",
    "Clean Code",
    "Development Patterns",
    "Technical Writing",
    "Developer Resources"
  ],
  openGraph: {
    title: `Technical Blog | ${siteConfig.name}`,
    description: "Explore technical articles and insights about software development, clean code practices, and valuable lessons learned throughout my development journey.",
    url: `${siteConfig.url}/blogs`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name}'s Technical Blog`
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Technical Blog | ${siteConfig.name}`,
    description: "Explore technical articles and insights about software development, clean code practices, and valuable lessons learned throughout my development journey.",
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

const BlogPage = () => {
  return <BlogContent />;
};

export default BlogPage;
