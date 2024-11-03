"use client";

import React, { useState, useEffect, useRef } from "react";
import { Share2, Eye, Menu, Search } from "lucide-react";
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
import "highlight.js/styles/atom-one-dark.css";
import "react-quill/dist/quill.snow.css";
import hljs from "highlight.js";
import { useSearchStore } from "@/hooks/use-search-store";

interface HeadingObject {
  id: string;
  text: string;
  level: number;
  items: HeadingObject[];
}

interface Article {
  _id: string;
  title: string;
  description: string;
  blurImage: string;
  imageUrl: string;
  shortSummary: string;
  pdfUrl: string;
}

interface ApiResponse {
  article: Article;
  similarArticles: Article[];
}

const ArticleLayout: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [articleStructure, setArticleStructure] = useState<HeadingObject[]>([]);
  const [articleHtml, setArticleHtml] = useState<string>("");
  const contentRef = useRef<HTMLDivElement>(null);
  const articleContentRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const id = pathname.split("/").pop() || "";
  const { toggleOpen } = useSearchStore();

  const { isPending, data } = useQuery<ApiResponse>({
    queryKey: ["article", id],
    queryFn: async () => {
      const response = await axios(
        `/api/routes/fetchSingleArticle?articleId=${id}`
      );
      return response.data;
    },
    enabled: !!id // Only run query if id exists
  });

  const processArticleContent = (htmlContent: string) => {
    if (typeof window === "undefined") return htmlContent; // Server-side check

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const codeBlocks = doc.querySelectorAll("pre");
    codeBlocks.forEach((codeBlock) => {
      const wrapper = document.createElement("div");
      wrapper.className = "my-4 rounded-lg overflow-hidden";

      const navbar = document.createElement("div");
      navbar.className =
        "bg-zinc-800 px-4 py-2 flex justify-between items-center";

      const languageSpan = document.createElement("span");
      languageSpan.className = "text-zinc-400";
      const codeContent = codeBlock.textContent || "";
      const result = hljs.highlightAuto(codeContent);
      languageSpan.textContent = result.language || "plaintext";
      navbar.appendChild(languageSpan);

      const copyButton = document.createElement("button");
      copyButton.className =
        "copy-button text-zinc-400 hover:text-white flex items-center";
      copyButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        <span>Copy</span>
      `;

      navbar.appendChild(copyButton);
      wrapper.appendChild(navbar);
      wrapper.appendChild(codeBlock.cloneNode(true));
      codeBlock.replaceWith(wrapper);
    });

    return doc.body.innerHTML;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleCopyClick = (event: MouseEvent) => {
      const target = event.target as Element;
      const copyButton = target.closest(".copy-button");
      if (!copyButton) return;

      const codeBlock = copyButton.closest(".my-4")?.querySelector("pre");
      if (!codeBlock) return;

      navigator.clipboard.writeText(codeBlock.textContent || "").then(() => {
        copyButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            <span>Copied!</span>
          `;
        setTimeout(() => {
          copyButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span>Copy</span>
            `;
        }, 2000);
      });
    };

    document.body.addEventListener("click", handleCopyClick);
    return () => document.body.removeEventListener("click", handleCopyClick);
  }, []);

  useEffect(() => {
    if (!data?.article?.description || !articleContentRef.current) return;

    const processedContent = processArticleContent(data.article.description);
    setArticleHtml(processedContent);

    // Update article structure after content is set
    const headings = articleContentRef.current.querySelectorAll("h1, h2, h3");
    const structure: HeadingObject[] = [
      { id: "article-title", text: data.article.title, level: 1, items: [] }
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
  }, [data?.article]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navbarHeight = 60;
    const secondNavbarHeight = 50;
    const padding = 20;

    const offsetPosition =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      (window.innerWidth < 1024
        ? navbarHeight + secondNavbarHeight
        : navbarHeight) -
      padding;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    setActiveSection(id);
    setIsDrawerOpen(false);
  };

  const LeftSidebar = () => {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    const renderSidebarItems = (items: HeadingObject[]) =>
      items.map((item, index) => (
        <div key={index} className={`mb-2 ${item.level === 2 ? "mt-4" : ""}`}>
          <a
            href={`#${item.id}`}
            className={cn(
              "block py-1 text-sm transition-colors duration-150 ease-in-out",
              activeSection === item.id
                ? "text-[#4b9bff] font-semibold"
                : hoveredSection === item.id
                ? "text-white"
                : "text-gray-400"
            )}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
            onMouseEnter={() => setHoveredSection(item.id)}
            onMouseLeave={() => setHoveredSection(null)}
          >
            {item.text}
          </a>
          {item.items?.length > 0 && (
            <div className={`relative ${item.level === 2 ? "ml-4 mt-2" : ""}`}>
              {renderSidebarItems(item.items)}
            </div>
          )}
        </div>
      ));

    return (
      <div className="bg-zinc-800/50 backdrop-blur-sm text-gray-400 rounded-lg">
        <div className="p-4">
          <div className="relative">
            <input
              onFocus={toggleOpen}
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

  if (isPending) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!data?.article) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        Article not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed top-0 left-0 right-0 pt-20 z-50 bg-zinc-900/95 backdrop-blur-sm p-4 flex justify-between items-center">
        <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="bg-zinc-800">
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-zinc-900 border-zinc-800 overflow-y-auto"
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
      </div>

      <div className="mx-auto px-4 lg:px-0 max-w-screen-2xl">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <LeftSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:w-1/2 lg:mx-8" ref={contentRef}>
            {/* Hero Section */}
            <section className="pt-48 lg:pt-32 pb-12">
              <div className="mx-auto max-w-4xl">
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  {data.article.title}
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                  {data.article.shortSummary}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-blue-400 text-black hover:bg-blue-300">
                    Share <Share2 className="ml-2" size={20} />
                  </Button>
                  <Button
                    onClick={() =>
                      data.article.pdfUrl &&
                      window.open(data.article.pdfUrl, "_blank")
                    }
                    className="border border-blue-400 hover:bg-blue-400 hover:text-black"
                  >
                    <Eye className="mr-2" size={20} /> Read Later
                  </Button>
                </div>
              </div>
            </section>

            {/* Article Image */}
            <div className="mb-16 relative">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
                <Image
                  alt={data.article.title}
                  src={data.article.imageUrl}
                  blurDataURL={`data:image/jpeg;base64,${data.article.blurImage}`}
                  placeholder="blur"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-50 blur-3xl" />
              <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-400/10 opacity-30 blur-2xl" />
            </div>

            {/* Article Content */}
            <div
              ref={articleContentRef}
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: articleHtml }}
            />
          </div>

          {/* Right Sidebar */}
          <div className="lg:w-1/4 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
            <div className="space-y-8 p-4">
              <div className="bg-zinc-800/50 backdrop-blur-sm text-gray-400 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Related Articles</h3>
                <ul className="space-y-2">
                  {data.similarArticles?.slice(0, 5).map((similarArticle) => (
                    <li key={similarArticle._id}>
                      <a
                        href={`/blogs/${similarArticle._id}`}
                        className="text-blue-400 hover:text-blue-300 transition-colors block"
                      >
                        {similarArticle.title}
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
