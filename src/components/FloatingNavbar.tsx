import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const NavbarItem = ({ label, href }: { label: string; href: string }) => (
  <Link href={href}>
    <span className="text-white hover:text-gray-300 transition-colors duration-200">
      {label}
    </span>
  </Link>
);

const ProfileSection = () => {
  const [isLoading, setLoading] = useState(true);
  const router = useRouter();

  const handleContainerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("/");
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // The Dialog will handle opening itself
  };

  return (
    <div
      onClick={handleContainerClick}
      className="flex items-center space-x-4 cursor-pointer"
    >
      <Dialog>
        <DialogTrigger asChild>
          <div onClick={handleImageClick}>
            <Image
              src="/header.jpg"
              alt="Azubike Pascal"
              width={300}
              height={300}
              className={`rounded-full w-9 h-9 transition-all duration-300 ${
                isLoading ? "scale-110 blur-sm" : "scale-100 blur-0"
              }`}
              onLoadingComplete={() => setLoading(false)}
            />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-zinc-900 border-zinc-700">
          <div className="relative aspect-square w-full">
            <Image
              src="/header.jpg"
              alt="Azubike Pascal"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
      <Link href={"/"} className="text-white font-semibold">
        Azubike Pascal
      </Link>
    </div>
  );
};

export const FloatingNavbar = () => {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Book a Call", href: "/book-call" }
  ];

  return (
    <nav className="bg-zinc-900 max-w-5xl mx-auto py-4 px-6 flex items-center justify-between">
      <ProfileSection />

      <div className="hidden md:flex space-x-6">
        {navItems.map((item, index) => (
          <NavbarItem key={index} {...item} />
        ))}
      </div>

      <div className="hidden md:block">
        <Link
          href="/path/to/your/resume.pdf"
          className="bg-gradient-to-br from-zinc-700 to-zinc-800 text-white px-4 py-2 rounded-lg hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800 hover:shadow-lg hover:shadow-zinc-700/50 transition-all duration-300"
        >
          Download CV
        </Link>
      </div>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-4 w-4 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-zinc-900 z-[9999] text-white">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <span className="text-white hover:text-gray-300 transition-colors duration-200">
                    {item.label}
                  </span>
                </Link>
              ))}
              <Link
                href="/path/to/your/resume.pdf"
                className="bg-gradient-to-br from-zinc-700 to-zinc-800 text-white px-4 py-2 rounded hover:bg-zinc-700 transition-colors duration-200 mt-4"
              >
                Download CV
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
