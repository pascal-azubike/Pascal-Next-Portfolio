"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "@tanstack/react-query";
import { SkeletonCard } from "./productLoadingSkeleton";
import ShareButton from "./shareButton";
import { Button } from "./ui/button";
import Link from "next/link";

export function AllProducts({ heading, home, max }: any) {
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
    const res = await fetch(
      `/api/routes/fetchAllProducts?cursor=${pageParam}&type=${heading}`
    );
    return res.json();
  };

  let {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    isPending,
    isSuccess
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 0
  });

  const skeletonLength = Array.from({ length: 10 });

  hasNextPage = max ? false : hasNextPage;

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[100000]"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[10000000000000]">
            <motion.button
              key={`button-${active._id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={600}
                  height={600}
                  src={active.imageUrl}
                  alt={active.title}
                  className="w-full lg:h-80 overflow-y-auto sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: active.description
                        }}
                        className="flex flex-col gap-4"
                      />
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={`/products/${active._id}`}
                    className="px-4 py-3 whitespace-nowrap text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    View
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <div>
        {error && (
          <h1 className="ml-10 py-11">Failed to fetch products, try again.</h1>
        )}
        <div className="mx-auto max-w-7xl w-[90vw] grid min-[500px]:grid-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {isPending &&
            skeletonLength.map((_, index) => <SkeletonCard key={index} />)}
        </div>

        {isSuccess && data?.pages[0]?.products?.length === 0 && (
          <h1 className="ml-10 text-yellow-600 my-4">No products found.</h1>
        )}

        {isSuccess && data?.pages[0]?.products?.length > 0 && (
          <InfiniteScroll
            pageStart={0}
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
          >
            <ul className="max-w-7xl mx-auto w-full grid min-[500px]:grid-cols-2 grid-cols-1 min-[900px]:grid-cols-3 min-h-max lg:grid-cols-4 gap-4">
              {data?.pages.flatMap((page) =>
                (max ? page.products.slice(0, max) : page.products).map(
                  (card: any) => (
                    <motion.div
                      layoutId={`card-${card._id}-${id}`}
                      key={card._id}
                      className="p-4 flex flex-col bg-white dark:bg-neutral-900 rounded-xl cursor-pointer hover:shadow-lg transition-shadow"
                      style={{ minHeight: "350px", maxHeight: "auto" }}
                    >
                      <div className="flex flex-col h-full">
                        <motion.div
                          layoutId={`image-${card._id}-${id}`}
                          onClick={() => setActive(card)}
                        >
                          <Image
                            width={800}
                            height={800}
                            src={card.imageUrl}
                            alt={card.title}
                            blurDataURL={`data:image/jpeg;base64,${card.blurImage}`}
                            placeholder="blur"
                            className="h-60 w-full rounded-t-lg object-cover object-top"
                          />
                          <div className="flex justify-center items-start flex-col mt-4">
                            <motion.h3
                              layoutId={`title-${card._id}-${id}`}
                              className="font-medium text-neutral-800 dark:text-neutral-200 md:text-left text-base"
                            >
                              {card.title}
                            </motion.h3>
                          </div>
                        </motion.div>
                        <div className="flex flex-col justify-between flex-grow">
                          <div className="flex flex-wrap justify-between items-center mt-2">
                            <p className="text-gray-800 font-bold dark:text-neutral-200">
                              &#8358; {card.price}
                            </p>
                            <div className="flex gap-4">
                              <ShareButton
                                title={`${card.title}`}
                                text="Check out this wonderful product"
                                url={`/products/${card._id}`}
                              />
                            </div>
                          </div>
                          <Button
                            variant={"default"}
                            className="bg-[#21cdc0] hover:bg-blue-950 mt-4 whitespace-nowrap"
                          >
                            <Link href={card.link} className="" target="_blank">
                              <p>Get Now</p>
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )
                )
              )}
              {!hasNextPage && isSuccess && !home && (
                <h1 className="ml-10 mx-auto text-yellow-600 my-4">
                  No more products.
                </h1>
              )}
              {isFetchingNextPage &&
                skeletonLength.map((_, index) => <SkeletonCard key={index} />)}
            </ul>
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3"
      fill="none"
      viewBox="0 0 14 14"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 12 12M13 1 1 13"
      />
    </svg>
  );
}
