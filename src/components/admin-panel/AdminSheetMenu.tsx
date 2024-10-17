import Link from "next/link";
import { LogOut, MenuIcon, PanelsTopLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Menu } from "@/components/admin-panel/menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../public/assets/images/logo.png";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export function SheetMenu() {
  const router = useRouter();

  const logout = () => {
    // remove token from cookies and navigate the user to the home page
    Cookies.remove("token");
    router.push("/");
  };

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" asChild>
        <Button className="h-8 mt-4 mx-4" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="sm:w-72 border-blue-900 bg-gray-800 text-white px-3 h-full flex flex-col"
        side="left"
      >
        <SheetHeader>
          <Button
            className="flex justify-center items-center pb-2 pt-1"
            variant="link"
            asChild
          >
            <Link href="/" className="">
              <div className=" p-3 rounded-lg mt-4 dark:bg-transparent bg-gray-800">
                <Image src={logo} width={120} height={120} alt="denmark logo" />
              </div>
            </Link>
          </Button>
        </SheetHeader>
        <Menu isOpen />
        <Button onClick={logout} className=" flex py-1 gap-4 items-center bg-red-500 hover:bg-red-600 mb-10">
          Log Out <LogOut />
        </Button>
      </SheetContent>
    </Sheet>
  );
}
