"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Navbar from "./navbar";
import Link from "next/link";
import { FloatingNavbar } from "./FloatingNavbar";
import Footer from "./footer";
import GlobalSearch from "./search";
const queryClient = new QueryClient();

export default function ClientSetup({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <main>{children}</main>
        <GlobalSearch />
        {/* <ReactQueryDevtools initialIsOpen={true} /> */}
      </QueryClientProvider>
    </div>
  );
}
