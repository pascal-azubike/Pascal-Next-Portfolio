import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/admin-panel/user-nav";
import { SheetMenu } from "@/components/sheet-menu";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { NavigationMenuDemo } from "../navigationMenu";
import { Mail, Phone } from "lucide-react";

export function Navbar() {
  return (
    <>
      <div className="w-full bg-gray-800 text-white overflow-hidden relative">
        <div
          className="whitespace-nowrap flex w-screen py-2 px-4 animate-marquee "
          onMouseEnter={(e) => e.currentTarget.classList.add("paused")}
          onMouseLeave={(e) => e.currentTarget.classList.remove("paused")}
        >
          <span className="mr-4 text-yellow-300">
            Welcome to PlumbreedPuzzles your home for christian games
          </span>
          <a
            href="https://wa.me/+2347035226775"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-2 items-center justify-center text-green-600  "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#fff"
                d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
              ></path>
              <path
                fill="#fff"
                d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
                clipRule="evenodd"
              ></path>
            </svg>
            +2347035226775
          </a>
          <span className="flex gap-2 items-center justify-center ">
            <span>
              <Phone size={14} />
            </span>
            07035226775
          </span>
          <a
            href="mailto:admin@example.com"
            className="flex gap-2 items-center    justify-center"
          >
            <Mail size={14} />
            info@PlumbreedPuzzles.com
          </a>
        </div>
      </div>
      <div className="mx-4 sm:mx-8 flex h-14 items-center min-[1400px]:pl-[140px] lg:pr-[10px] top-0 z-[150] py-9">
        <Link href="/" className=" flex items-center justify-center">
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            width={60}
            height={60}
            objectFit="cover"
            className=" shadow-sm"
          />
          <h1 className=" hidden  min-[1400px]:flex  font-bold text-2xl ">
            PlumbreedPuzzles
          </h1>
        </Link>

        <div className="justify-end flex-1">
          <div className="lg:flex justify-end  font-bold flex-1 space-x-6 items-center hidden">
            <NavigationMenuDemo />
          </div>
          <div className="flex z-[1000] justify-end flex-1 lg:hidden">
            <SheetMenu />
          </div>
        </div>
      </div>
    </>
  );
}
