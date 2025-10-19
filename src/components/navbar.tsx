import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
const navbarItems = [
  {
    label: "Azubike Pascal",
    href: "/",
    image: "/assets/images/5617318_family-gathered-around-jigsaw-puzzle.jpg"
  },
  {
    label: "About",
    href: "/about"
  },
  {
    label: "Projects",
    href: "/projects"
  },

  {
    label: "Blogs",
    href: "/blogs"
  },
  {
    label: "Schedule Meeting",
    href: "/events"
  }
];

const Navbar = () => {
  const [activeCompany, setActiveCompany] = useState(navbarItems[0]);
  return (
    <nav className="flex flex-row items-center justify-between sm:justify-between py-2 max-w-5xl mx-auto relative z-[100] px-8 ">
      <div className="hidden lg:flex w-full justify-between">
        <div className="flex flex-row space-x-8 items-center antialiased border px-4 py-1 rounded-2xl border-zinc-700/60 bg-zinc-800">
          {navbarItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`font-bold py-2 text-sm px-2 rounded-lg  flex items-center justify-center text-white ${activeCompany.label === item.label &&
                activeCompany.label !== "Azubike Pascal"
                ? "bg-gradient-to-br from-zinc-700 to-zinc-800"
                : "hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800"
                } transition-all duration-1000 ease-in-out`}
            >
              {item.image && (
                <Image
                  src={item.image}
                  alt={`${item.label} profile image`}
                  width={30}
                  height={30}
                  className="transition duration-500 h-[30px] w-[30px] mr-2  text-transparent blur-0 scale-100 rounded-full"
                />
              )}
              <span className="font-inter font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
        <a
          href="/pascalResume.pdf"
          target="__blank"
          className="font-medium text-white inline-flex items-center justify-center rounded-[10px] bg-gradient-to-b from-[#464d55] to-[#25292e] text-sm px-4 py-2 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
