"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useStore } from "zustand";
import { useSidebarToggle } from "../../hooks/use-sidebar-toggle";
import { Sidebar } from "./sidebar";
import { cn } from "../../lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SheetMenu } from "./AdminSheetMenu";
import { LoginForm } from "@/app/Admin/login";
import { usePathname, useRouter } from "next/navigation";
import useUploadMutation from "@/hooks/useUploadMutation";
import { toast } from "../ui/use-toast";
import { useAuthStore } from "@/hooks/use-login";
// Import the store

const queryClient = new QueryClient();

export default function AdminPanelLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const { mutate, isPending, error } = useUploadMutation(
    "/api/routes/login-with-token",
    ["AdminLogInWithToken"]
  );
  const sidebar = useStore(useSidebarToggle, (state) => state);

  const token = Cookies.get("token");

  useEffect(() => {
    if (token && !isLoggedIn) {
      mutate(token, {
        onSuccess: () => {
          setIsLoggedIn(true);
          toast({
            description: "Logged in Successfully"
          });
        },
        onError: (err) => {
          toast({
            description: "Login Error. Please Try Again.",
            variant: "destructive"
          });
        }
      });
    }
  }, [token, mutate, isLoggedIn, setIsLoggedIn]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Sidebar />
      <SheetMenu />
      <main
        className={cn(
          "min-h-[calc(100vh_-_56px)] transition-[margin-left] px-2 md:px-8 py-4 lg:py-10 ease-in-out duration-300",
          sidebar?.isOpen === false ? "lg:ml-[90px]" : "lg:ml-72"
        )}
      >
        {children}
      </main>
    </QueryClientProvider>
  );
}
