import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import BookCallContent from "@/components/BookCallContent";


export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Schedule a Call | ${siteConfig.name}`,
  description: "Book a consultation call with Azubike Pascal to discuss your project needs, technical requirements, or potential collaboration opportunities.",
  keywords: [
    ...siteConfig.keywords,
    "Book Consultation",
    "Developer Consultation",
    "Technical Consultation",
    "Project Discussion",
    "Development Planning",
    "Technical Meeting",
    "Code Review",
    "Project Consultation",
    "Developer Meeting",
    "Technical Advisory",
    "Development Consultation",
    "Professional Consultation",
    "Technical Discussion",
    "Project Planning"
  ],
  openGraph: {
    title: `Schedule a Call | ${siteConfig.name}`,
    description: "Book a consultation call with Azubike Pascal to discuss your project needs, technical requirements, or potential collaboration opportunities.",
    url: `${siteConfig.url}/book-call`,
    siteName: siteConfig.name,
    images: 
      {
        url: siteConfig.ogImage,
       
        alt: `Schedule a Call with ${siteConfig.name}`
      }
    ,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Schedule a Call | ${siteConfig.name}`,
    description: "Book a consultation call with Azubike Pascal to discuss your project needs, technical requirements, or potential collaboration opportunities.",
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

export default function BookCall() {
  return <BookCallContent />;
} 