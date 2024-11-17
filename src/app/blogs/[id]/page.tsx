import ArticleLayout from "@/components/singleArticle";
import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

// Type for your article data
interface Article {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  publishedDate: string;
  content: string;
  tags?: string[];  // Added optional tags property
  // Add other relevant fields
}

// Function to fetch article data - implement according to your data fetching logic
async function getArticle(id: string): Promise<Article> {
  // Temporary placeholder return until you implement your fetching logic
  return {
    title: "",
    description: "",
    imageUrl: "",
    author: "",
    publishedDate: "",
    content: "",
  };
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getArticle(params.id);

  const title = `${article.title} | Blog | ${siteConfig.name}`;
  const description = article.description;
  const url = `${siteConfig.url}/blogs/${params.id}`;
  const imageUrl = article.imageUrl || siteConfig.ogImage;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords: [
      ...siteConfig.keywords,
      "Technical Article",
      "Software Development",
      "Programming Tutorial",
      "Code Example",
      "Development Guide",
      ...article.tags || [], // Assuming your article has tags
    ],
    authors: [{ name: article.author }],
    publisher: siteConfig.name,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: 
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title
        }
      ,
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
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
}

const page = () => {
  return (
    <div className="  ">
      <ArticleLayout />
    </div>
  );
};

export default page;
