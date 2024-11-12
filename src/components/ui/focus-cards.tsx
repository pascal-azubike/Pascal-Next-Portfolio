"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SkeletonCard } from "../productLoadingSkeleton";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SkeletonImage } from "./skeletonImage";
import { Skeleton } from "./skeleton";

const SkeletonLoading = ({ home }: any) => {
  const skeletonLength = Array.from({ length: 5 });
  return (
    <div className="relative mb-20 lg:mb-40">
      <div className={cn("grid grid-cols-1 pb-10 gap-10")}>
        {skeletonLength.map((_, index) => (
          <Card key={index}>
            <div className="relative md:p-8">
              <div className="relative z-50 flex flex-col sm:flex-row gap-6">
                <div className="flex-grow flex flex-col">
                  <div className="flex flex-col min-[477px]:flex-row justify-between gap-4">
                    <div className="space-y-4 w-full">
                      <div className="border-l border-zinc-700 pl-4 text-zinc-500 block">
                        <div className=" font-normal max-w-2xl text-gray-400 leading-loose mt-2">
                          <Skeleton className="h-3 w-[120px]" />
                        </div>
                      </div>
                      <div className="text-zinc-200  font-bold text-lg">
                        <div className=" font-normal max-w-2xl text-gray-400 leading-loose mt-2">
                          <Skeleton className="h-3 w-full" />
                        </div>
                      </div>
                    </div>
                    <div className="sm:flex-shrink-0 w-full min-[477px]:w-48 h-48 min-[477px]:h-24  relative">
                      <SkeletonImage className=" w-full h-full object-cover rounded-md flex justify-center items-center" />
                    </div>
                  </div>
                  <div className=" font-normal max-w-2xl flex flex-col gap-3 text-gray-400 leading-loose mt-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-[85%]" />
                  </div>
                  <p className="text-zinc-800 text-sm mt-6">Read More</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const AllArticles = ({ max }: { max: any }) => {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<any>(null);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const fetchProjects = async ({ pageParam }: { pageParam: any }) => {
    const res = await fetch(`/api/routes/fetchAllArticles?cursor=${pageParam}`);
    return res.json();
  };

  let {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isPending,
    isSuccess
  } = useInfiniteQuery({
    queryKey: ["Articles"],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 0
  });

  hasNextPage = max ? false : hasNextPage;
  console.log(error, data?.pages[0].error);

  return (
    <div>
      {error && (
        <h1 className="ml-10 text-yellow-600 my-4">
          Failed to fetch products, try again.
        </h1>
      )}
      {data?.pages[0].error && (
        <h1 className="ml-10 text-red-600 my-4">
          Fetching Blogs Failed : Network Error
        </h1>
      )}
      <div>{isPending && <SkeletonLoading />}</div>

      {isSuccess && data?.pages[0]?.products?.length === 0 && (
        <h1 className="ml-10 text-yellow-600 my-4">No products found.</h1>
      )}

      {isSuccess && data?.pages[0]?.products?.length > 0 && (
        <InfiniteScroll
          pageStart={0}
          loadMore={() => fetchNextPage()}
          hasMore={hasNextPage}
        >
          <div className="relative">
            <div className={cn("grid grid-cols-1 pb-10 gap-10")}>
              {data?.pages.flatMap((page) =>
                (max ? page.products.slice(0, 4) : page.products).map(
                  (item: any) => {
                    console.log(item);
                    return (
                      <div
                        key={item._id}
                        className={cn(
                          "relative group block p-2 h-full w-full transition-all duration-300 hover:bg-zinc-800 rounded-3xl"
                        )}
                      >
                        <Card>
                          <Link
                            className="relative md:p-8"
                            href={`/blogs/${item._id}`}
                          >
                            <div className="relative z-50 flex flex-col sm:flex-row gap-6">
                              <div className="flex-grow flex flex-col">
                                <div className="flex flex-col min-[477px]:flex-row justify-between gap-4">
                                  <div className="space-y-4">
                                    <small className="border-l border-zinc-700 pl-4 text-zinc-500 block">
                                      {new Date(item.updatedAt)
                                        .toLocaleDateString("en-GB", {
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric"
                                        })
                                        .replace(/(\d{1,2})(?=\s)/, "$1th")}
                                    </small>
                                    <h2 className="text-zinc-200 max-w-[45rem] font-bold text-lg">
                                      {item.title}
                                    </h2>
                                  </div>
                                  <div className="sm:flex-shrink-0 w-full min-[477px]:w-48 h-48 min-[477px]:h-24  relative">
                                    <Image
                                      src={item.imageUrl}
                                      alt={item.title}
                                      blurDataURL={`data:image/jpeg;base64,${item.blurImage}`}
                                      placeholder="blur"
                                      layout="fill"
                                      objectFit="cover"
                                      className="rounded-md"
                                    />
                                  </div>
                                </div>
                                <p className=" font-normal max-w-2xl text-gray-400 leading-loose mt-2">
                                  {item.description.slice(0, 160)}
                                </p>
                                <p className="text-cyan-500 text-sm mt-6">
                                  Read More
                                </p>
                              </div>
                            </div>
                          </Link>
                        </Card>
                      </div>
                    );
                  }
                )
              )}
            </div>
            <div className={cn(!max && "hidden")}>
              <div className="absolute h-56 max-w-4xl mx-auto w-full bottom-0 bg-zinc-900 z-[60] [mask-image:linear-gradient(to_bottom,transparent,white_10rem,white)] transition duration-500 flex items-center justify-center"></div>
              <div className="flex justify-center relative z-[70]">
                <Link
                  className="text-zinc-200 border border-zinc-600 bg-zinc-900 px-8 py-2 rounded-lg hover:border-zinc-700 hover:bg-zinc-800/[0.8] transition duration-200"
                  href="/blogs"
                >
                  Show More
                </Link>
              </div>
            </div>
          </div>

          {!hasNextPage && isSuccess && !max && (
            <h1 className="ml-10 mx-auto text-yellow-600 my-4">
              Thats All for Now Buddy.
            </h1>
          )}
          {isFetchingNextPage && <SkeletonLoading />}
        </InfiniteScroll>
      )}
    </div>
  );
};
export default AllArticles;
export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "overflow-hidden border border-transparent relative z-20",
        className
      )}
    >
      <div className="relative z-50">{children}</div>
    </div>
  );
};
