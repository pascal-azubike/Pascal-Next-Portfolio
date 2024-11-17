import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: [
    ...siteConfig.keywords,
    "Portfolio",
    "Professional Portfolio",
    "Web Developer Portfolio",
    "Full Stack Projects",
    "Software Development",
    "Code Examples",
    "Technical Blog",
    "Developer Blog"
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: siteConfig.name
    },
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function Home() {
  return <HomeContent />;
}
