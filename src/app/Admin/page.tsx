"use client"
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Redirect directly after successful login
  if (pathname === "/Admin") {
    router.push("/Admin/manage-products");
  }

  return <div>loading.....</div>;
};

export default Page;
