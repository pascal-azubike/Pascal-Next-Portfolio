"use client";

import React, { useState, useEffect, useRef } from "react";
import { Share2, Eye, Menu, Search, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { cn } from "@/lib/utils";

interface HeadingObject {
  id: string;
  text: string;
  level: number;
  items: HeadingObject[];
}

interface Article {
  id: string;
  title: string;
  description: string;
  blurImage: string;
  imageUrl: string;
}

interface ApiResponse {
  article: Article;
  relatedArticles: Article[];
}

const ArticleLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [articleStructure, setArticleStructure] = useState<HeadingObject[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const articleContentRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const id = pathname.split("/").pop() || "";

  const { isPending, error, data } = useQuery<ApiResponse, Error>({
    queryKey: [id],
    queryFn: () =>
      axios(`/api/routes/fetchSingleArticle?articleId=${id}`).then(
        (res) => res.data
      )
  });

  const article = data?.article;

  useEffect(() => {
    if (article?.description && articleContentRef.current) {
      articleContentRef.current.innerHTML = article.description;
      const headings = articleContentRef.current.querySelectorAll("h1, h2, h3");

      const structure: HeadingObject[] = [
        { id: "article-title", text: article.title, level: 1, items: [] }
      ];
      let currentH1: HeadingObject | null = null;
      let currentH2: HeadingObject | null = null;

      headings.forEach((heading, index) => {
        const headingId = heading.id || `heading-${index}`;
        heading.id = headingId;

        const headingObject: HeadingObject = {
          id: headingId,
          text: heading.textContent || "",
          level: parseInt(heading.tagName[1]),
          items: []
        };

        switch (heading.tagName.toLowerCase()) {
          case "h1":
            currentH1 = headingObject;
            currentH2 = null;
            structure.push(currentH1);
            break;
          case "h2":
            currentH2 = headingObject;
            if (currentH1) {
              currentH1.items.push(currentH2);
            } else {
              structure.push(currentH2);
            }
            break;
          case "h3":
            if (currentH2) {
              currentH2.items.push(headingObject);
            } else if (currentH1) {
              currentH1.items.push(headingObject);
            } else {
              structure.push(headingObject);
            }
            break;
        }
      });

      setArticleStructure(structure);
    }
  }, [article]);

  useEffect(() => {
    const handleScroll = () => {
      const headings =
        articleContentRef.current?.querySelectorAll("h1, h2, h3");
      if (headings) {
        for (let i = headings.length - 1; i >= 0; i--) {
          const heading = headings[i];
          const rect = heading.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(heading.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Height of the main navbar
      const secondNavbarHeight = 50; // Height of the second navbar
      const padding = 20; // Additional padding
      const windowWidth = window.innerWidth;

      let offsetPosition;
      if (windowWidth < 1024) {
        // For screens smaller than 1024px, account for both navbars
        offsetPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight -
          secondNavbarHeight -
          padding;
      } else {
        // For larger screens, only account for the main navbar
        offsetPosition =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight -
          padding;
      }

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(id);
    }
    setIsDrawerOpen(false);
  };


  const LeftSidebar: React.FC = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const renderSidebarItems = (items: HeadingObject[]) => {
      return items.map((item, index) => (
        <div key={index} className={`mb-2 ${item.level === 2 ? "mt-4" : ""}`}>
          <a
            href={`#${item.id}`}
            className={`block py-1 text-sm transition-colors duration-150 ease-in-out ${
              activeSection === item.id
                ? "text-[#4b9bff] font-semibold"
                : hoveredSection === item.id
                ? "text-white"
                : "text-gray-400"
            }`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            onMouseEnter={() => setHoveredSection(item.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {item.text}
          </a>
          {item.items && item.items.length > 0 && (
            <div className={`relative ${item.level === 2 ? "ml-0h mt-2" : ""}`}>
              {item.level === 2 && (
                <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-700" />
              )}
              {item.items.map((subItem, subIndex) => (
                <div key={subIndex} className="relative">
                  {item.level === 2 && (
                    <div
                      className={cn(
                        activeSection === subItem.id
                          ? "absolute left-0 top-0 bottom-0 w-px bg-[#4b9bff] "
                          : hoveredSection === subItem.id
                          ? "absolute left-0 top-0 bottom-0 w-px bg-white"
                          : ""
                      )}
                    />
                  )}
                  <a
                    href={`#${subItem.id}`}
                    className={`block py-1 pl-4 text-sm transition-colors duration-150 ease-in-out ${
                      activeSection === subItem.id
                        ? "text-[#4b9bff] font-semibold"
                        : hoveredSection === subItem.id
                        ? "text-white"
                        : "text-gray-400"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(subItem.id);
                    }}
                    onMouseEnter={() => setHoveredSection(subItem.id)}
                    onMouseLeave={() => setHoveredSection(null)}
                  >
                    {subItem.text}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ));
    };

    return (
      <div className="bg-zinc-800/50 backdrop-blur-sm text-gray-400 rounded-lg">
        <div className="p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Quick search..."
              className="w-full py-2 pl-8 pr-3 text-sm bg-[rgba(32,33,39,0.8)] text-white rounded-lg border border-[#343541] focus:outline-none focus:border-[#4b9bff]"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#a1a1aa]"
              size={16}
            />
            <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#a1a1aa] text-xs">
              Ctrl K
            </span>
          </div>
        </div>
        <nav className="px-4 mt-4 h-full overflow-y-auto">
          {renderSidebarItems(articleStructure)}
        </nav>
      </div>
    );
  };

  // ... (rest of the component remains the same)

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Mobile Navigation */}
      <div className="mobile lg:hidden fixed top-0 left-0 right-0 pt-20 z-50 bg-zinc-900/95 backdrop-blur-sm p-4 flex justify-between items-center">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-zinc-800">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-zinc-900 z-[1000] border-zinc-800 overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle className="text-white">Table of Contents</SheetTitle>
              <SheetDescription className="text-gray-400">
                Navigate through the article sections
              </SheetDescription>
            </SheetHeader>
            <div className="mt-4 h-[calc(100vh-120px)]">
              <LeftSidebar />
            </div>
          </SheetContent>
        </Sheet>
        <div className="relative flex-1 max-w-[400px] ml-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Quick search..."
              className="w-full py-2 pl-8 pr-3 text-sm bg-zinc-800 text-white rounded-lg border border-zinc-700 focus:outline-none focus:border-blue-400"
            />
            <Search
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 lg:px-0 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row gap-8 left">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-1/2 lg:mx-8 main " ref={contentRef}>
            {/* Hero Section */}
            <section className="pt-48 lg:pt-32 pb-12 px-4">
              <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {article?.title}
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                  {article?.description.slice(0, 120)}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors">
                    Share <Share2 className="ml-2" size={20} />
                  </Button>
                  <Button className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all">
                    <Eye className="mr-2" size={20} /> Read Later
                  </Button>
                </div>
              </div>
            </section>

            <div className="mb-16 relative">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
                <Image
                  alt={article?.title || "Article image"}
                  className="max-w-[90vw] max-h-[90vh] mx-auto my-auto"
                  src={article?.imageUrl || "/"}
                  blurDataURL={`data:image/jpeg;base64,${
                    article && article.blurImage
                  }`}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-50 blur-3xl" />
              <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-400/10 opacity-30 blur-2xl" />
            </div>

            {/* Article Content */}
            <div
              ref={articleContentRef}
              className="prose prose-invert max-w-none"
            >
              {/* The article content will be inserted here by the useEffect */}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto right">
            <div className="space-y-8 p-4">
              {/* Social Media Section */}
              <div className="bg-zinc-800/50 backdrop-blur-sm text-gray-400 rounded-lg p-6">
                <h2 className="text-white text-lg font-semibold mb-4">
                  Share This Article
                </h2>
                <div className="flex flex-wrap justify-start items-start gap-4">
                  <Button className="bg-blue-400 text-black hover:bg-blue-300 transition-colors">
                    <Share2 className="mr-2" size={18} /> Share
                  </Button>
                  <Button
                    variant="outline"
                    className="border-blue-400 text-white hover:bg-blue-400 hover:text-black transition-all"
                  >
                    <Eye className="mr-2" size={18} /> Read Later
                  </Button>
                </div>
              </div>
              <div className="bg-zinc-800/50 backdrop-blur-sm text-gray-400 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Related Articles</h3>
                <ul>
                  {data?.relatedArticles
                    ?.slice(0, 5)
                    .map((relatedArticle, index) => (
                      <li key={index} className="mb-2">
                        <a
                          href="#"
                          className="text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          {relatedArticle.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleLayout;
