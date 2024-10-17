"use client";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cards } from "@/hooks/data";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ShareButton from "./shareButton";

const ProductDetail = ({ isProductPage }: { isProductPage: boolean }) => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extract the id from the URL

  const { isPending, error, data } = useQuery({
    queryKey: [id],
    queryFn: () =>
      axios(`/api/routes/fetchSingleProduct?productId=${id}`).then(
        (res) => res.data
      )
  });

  const product = data?.product;

  // If no product is found, return a "not found" message
  if (isPending) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10">Loading .....</h1>
    );
  }
  if (error) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10 text-red-400">
        Failed to Fetch Products
      </h1>
    );
  }
  if (!data) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10">
        Product Not Found
      </h1>
    );
  }

  return (
    <div className=" mx-auto  px-6">
      <Breadcrumb>
        <BreadcrumbList className=" text-lg mb-6">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/products">All Products</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className=" max-w-[1200px] mx-auto items-center flex flex-col justify-center ">
        <div className="flex flex-col items-center gap-8">
          <Image
            width={400}
            height={400}
            src={product.imageUrl}
            alt={product.title}
            className="w-full md:w-[74%] rounded-lg object-cover"
          />
          <div className="w-full md:w-[74%]">
            <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
            <div className="flex items-center justify-between gap-6  py-5">
              <p className=" font-bold text-xl">
                Price : <span> &#8358; {product.price}</span>
              </p>
              <ShareButton
                title={`${product.title}`}
                text="Check out this wonderful product"
                url={`/products/${product?._id}`}
              />
            </div>
            <div
              className={cn(
                isProductPage ? "flex items-center gap-6  py-5" : "hidden "
              )}
            >
              <Link href={product?.link} target="_blank">
                <Button variant={"secondary"}>Get it Now</Button>
              </Link>
              <Link href={`/preorder/${product._id}`}>
                <Button variant={"outline"}>Bulk Preoder</Button>
              </Link>
            </div>
            <div className="text-base text-neutral-800 dark:text-neutral-200">
              <div
                dangerouslySetInnerHTML={{
                  __html: product.description
                }}
                className="flex flex-col gap-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
