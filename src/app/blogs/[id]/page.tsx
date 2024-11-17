import ArticleLayout from "@/components/singleArticle";
import React from "react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { connectDB } from "@/app/api/config/MongoDbConfig";
import Article from "@/app/api/models/Article";

// Function to fetch article data
async function getArticle(id: string) {
  await connectDB();
  const article = await Article.findById(id).lean();
  
  if (!article) {
    throw new Error('Article not found');
  }

  return article;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const article = await getArticle(params.id);
  console.log(article);

  const title = `${article.title} | Blog | ${siteConfig.name}`;
  const description = article.shortSummary || article.description.substring(0, 160);
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
      ...(article.tags || []),
    ],
    authors: [{ name: article.author }],
    publisher: siteConfig.name,
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: article.title
      },
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
    <div>
      <ArticleLayout />
    </div>
  );
};

export default page;
