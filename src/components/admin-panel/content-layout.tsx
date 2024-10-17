"use client";

import { FloatingNavbar } from "../FloatingNavbar";
import Footer from "../footer";

interface ContentLayoutProps {
  children: React.ReactNode;
}

export function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="bg-zinc-900 text-white relative">
      <div className="fixed top-0 left-0 right-0 z-[100] min-h-fit">
        <div className="nav ">
          <FloatingNavbar />
        </div>
      </div>
      {children}
      <Footer />
    </div>
  );
}
