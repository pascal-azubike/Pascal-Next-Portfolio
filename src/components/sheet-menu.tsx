"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@/components/ui/accordion";
import Image from "next/image";
import { cards } from "@/hooks/data";
import { cn } from "@/lib/utils";
import { ScrollArea } from "./ui/scroll-area";
import { services } from "./service";
import { useInfiniteQuery } from "@tanstack/react-query";

export function SheetMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const fetchProjects = async ({ pageParam }: { pageParam: any }) => {
    const res = await fetch(`/api/routes/fetchAllArticles?cursor=${pageParam}`);
    return res.json();
  };
  const fetchAllProducts = async ({ pageParam }: { pageParam: any }) => {
    const res = await fetch(`/api/routes/fetchAllProducts?cursor=${pageParam}`);
    return res.json();
  };

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
    isSuccess
  } = useInfiniteQuery({
    queryKey: ["navProducts"],
    queryFn: fetchAllProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 0
  });

  const {
    data: articleData,
    error: articleError,
    isPending: articleIsPending
  } = useInfiniteQuery({
    queryKey: ["ArticlesNav"],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 0
  });

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8 text-black" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <ScrollArea>
        <SheetContent
          className="sm:w-72 h-screen overflow-y-auto  px-10 z-[4000] py-24  flex flex-col"
          side="bottom"
        >
          <SheetHeader>
            <Button
              className="flex fixed left-4 px6]
               top-0 h-24 bg-white  mt-6 mb-10 justify-center items-center pb-2 pt-1"
              variant="link"
              asChild
            >
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={handleLinkClick}
              >
                <div className="flex items-center">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    objectFit="cover"
                    className="shadow-sm"
                  />
                  <h1 className="font-bold text-lg">PlumbreedPuzzles</h1>
                </div>
              </Link>
            </Button>
          </SheetHeader>
          <Link
            href="/"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base font-medium self-start "
            )}
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base font-medium self-start "
            )}
            onClick={handleLinkClick}
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-base font-medium self-start "
            )}
            onClick={handleLinkClick}
          >
            Contact Us
          </Link>

          {/* Services Dropdown */}
          <Accordion type="single" collapsible>
            <AccordionItem value="services">
              <AccordionTrigger className="text-base !no-underline font-medium border-t">
                <Button variant={"ghost"} className="text-base font-medium">
                  Our Products
                </Button>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {data?.pages[0]?.products?.slice(0, 3).map((product: any) => (
                    <li key={product.title}>
                      <Link
                        href={`/products/${product._id}`}
                        className={cn(
                          buttonVariants({ variant: "ghost" }),
                          "text-base font-medium "
                        )}
                        onClick={handleLinkClick}
                      >
                        {product.title}
                      </Link>
                    </li>
                  ))}
                  <Link
                    href={`/products`}
                    className={cn(
                      buttonVariants({ variant: "default" }),
                      "text-base font-medium text-white ml-4 bg-blue-400"
                    )}
                    onClick={handleLinkClick}
                  >
                    see all Products
                  </Link>
                </ul>
              </AccordionContent>
            </AccordionItem>

            {/* Components Dropdown */}
            <AccordionItem value="components">
              <AccordionTrigger className="text-base font-medium !no-underline">
                <Button variant={"ghost"} className="text-base font-medium">
                  Articles
                </Button>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-4">
                  {articleData?.pages[0]?.products
                    ?.slice(0, 3)
                    .map((article: any) => (
                      <li key={article.title}>
                        <Link
                          href={`/articles/${article._id}`}
                          className={cn(
                            buttonVariants({ variant: "ghost" }),
                            "text-base font-medium "
                          )}
                          onClick={handleLinkClick}
                        >
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  <li>
                    <Link
                      href={`/articles`}
                      className={cn(
                        buttonVariants({ variant: "default" }),
                        "text-base font-medium text-white ml-4 bg-blue-400"
                      )}
                      onClick={handleLinkClick}
                    >
                      see all article
                    </Link>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </ScrollArea>
    </Sheet>
  );
}
