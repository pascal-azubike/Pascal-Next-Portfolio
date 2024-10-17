import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { cards } from "@/hooks/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";

export function ProductSlicer() {
  const fetchAllProducts = async ({ pageParam }: { pageParam: any }) => {
    console.log("im fethcing");
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
    queryKey: ["scrollSliderProducts"],
    queryFn: fetchAllProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    staleTime: 0
  });
  if (isPending) {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1 className=" text-red-400">Fetching Data Failed</h1>
      </div>
    );
  }
  if (!data) {
    return (
      <div>
        <h1>No Data Found</h1>
      </div>
    );
  }
  const products = data?.pages[0]?.products;

  return (
    <>
      <Swiper
        spaceBetween={30}
        loop={true} // Enable loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-fit max-w-[1600px] mx-auto" // Ensure it's centered
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30
          }
        }}
      >
        {[...products, ...products].map((card, index) => (
          <SwiperSlide key={index} className="relative min-h-[344px] min-w-[344px] roundelg ">
            {({ isActive }) => (
              <>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={600}
                  height={600}
                  blurDataURL={`data:image/jpeg;base64,${card.blurImage}`}
                  placeholder="blur"
                  priority
                  className="object-cover min-h-[344px] min-w-[344px] w-full h-full"
                />
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute bottom-0 left-0 right-0 p-[48px] 
                            bg-gradient-to-t from-black via-[#000000e3] to-transparent"
                >
                  <h2 className="text-white text-xl pt-24 font-bold">
                    {card.title}
                  </h2>
                </motion.div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
