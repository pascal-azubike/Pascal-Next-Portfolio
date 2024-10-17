import Link from "next/link";
import { PanelsTopLeft, LogOut } from "lucide-react";

import { cn } from "@/lib/utils";
import { useStore } from "@/hooks/use-store";
import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import { useSidebarToggle } from "@/hooks/use-sidebar-toggle";
import { SidebarToggle } from "@/components/admin-panel/sidebar-toggle";
import logo from "../../../public/assets/images/logo.png";
import Image from "next/image";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const sidebar = useStore(useSidebarToggle, (state) => state);
  const router = useRouter();

  if (!sidebar) return null;
  const logout = () => {
    // remove token from cookies and navigate the user to the home page
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300",
        sidebar?.isOpen === false ? "w-[90px]" : "w-72"
      )}
    >
      <SidebarToggle isOpen={sidebar?.isOpen} setIsOpen={sidebar?.setIsOpen} />
      <div className="relative h-full bg-gray-800 text-white flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1",
            sidebar?.isOpen === false ? "translate-x-1" : "translate-x-0 "
          )}
          variant="link"
          asChild
        >
          <Link href="/" className="flex items-center gap-2">
            <div>
              <div className="  rounded-lg mt-4 flex gap-1 items-center ">
                <Image src={logo} width={50} height={50} alt="denmark logo" />
                <h1
                  className={cn(
                    "font-bold text-lg text-white whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300",
                    sidebar?.isOpen === false
                      ? "-translate-x-96 opacity-0 hidden"
                      : "translate-x-0 opacity-100 flex"
                  )}
                >
                  plumbreedPuzzle
                </h1>
              </div>
            </div>
          </Link>
        </Button>
        <Menu isOpen={sidebar?.isOpen} />
        <Button
          onClick={logout}
          className=" flex py-1 gap-4 items-center bg-red-500 hover:bg-red-600 mb-10"
        >
          Log Out <LogOut />
        </Button>
      </div>
    </aside>
  );
}
