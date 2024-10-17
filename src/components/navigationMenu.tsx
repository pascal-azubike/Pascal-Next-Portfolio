"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import Services from "@/components/services";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { cards } from "@/hooks/data";
import { services } from "./service";
import { useInfiniteQuery } from "@tanstack/react-query";
import MagicButton from "./MagicButton";
import { DotIcon, LoaderIcon } from "lucide-react";

export function NavigationMenuDemo() {
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
    <NavigationMenu>
      <NavigationMenuList className="">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Our Products</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className=" w-max px-8 py-4">
              {isPending ? (
                <LoaderIcon className=" animate-spin flex mx-auto justify-center items-center" />
              ) : (
                data?.pages[0]?.products?.slice(0, 3).map((product: any) => (
                  <ListItem
                    key={product.title}
                    href={`/products/${product._id}`}
                    className="  "
                  >
                    <div className=" flex items-center gap-4">
                      <DotIcon />
                      {product.title}
                    </div>
                  </ListItem>
                ))
              )}
              <ListItem href="/products" className=" bg-[#21cdc0] text-center">
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  View All Products
                </button>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Articles</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className=" w-max px-8 py-4 ">
              {articleIsPending ? (
                <LoaderIcon className=" animate-spin flex mx-auto justify-center items-center" />
              ) : (
                articleData?.pages[0]?.products
                  ?.slice(0, 3)
                  .map((article: any) => (
                    <ListItem
                      key={article.title}
                      href={`/articles/${article._id}`}
                    >
                      <div className=" flex items-center gap-4">
                        <DotIcon />
                        {article.title}
                      </div>
                    </ListItem>
                  ))
              )}
              <ListItem
                href={`/articles`}
                className=" text-center text-white bg-[#21cdc0]"
              >
                <button className="inline-flex relative h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  View all Articles
                </button>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className=" bg-[#21cdc0] py-[10px] mx-12 ml-8 px-6 rounded-full  hover:bg-[#205f5a] text-white font-bold  ">
          <Link href="/products" legacyBehavior passHref>
            Buy Now
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
