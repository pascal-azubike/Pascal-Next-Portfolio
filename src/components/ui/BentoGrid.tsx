/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

// Also install this npm i --save-dev @types/react-lottie

import { cn } from "@/lib/utils";


import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";


export const BentoGrid = ({
  className,
  children
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6   gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  // Tech stacks grouped by category
  const techCategories = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Redux toolkit",
    "React Query",
    "zustand",
    "SCSS",
    "Tailwind CSS",
    "Node.js",
    "Express js",
    "Python",
    "Flask",
    "GIT",
    "Ms Word",
    "Ms Excel",
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "NumPy",
    "Seaborn",
    "Scikit learn"
  ];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative bg-zinc-800 overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>



        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2  transition duration-200 relative md:h-full flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={cn(
              id === 5 || id === 3 ? "hidden" : "flex",
              "font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-zinc-300 z-10"
            )}
          >
            {description}
          </div>

          <div
            className={cn(
              id === 5 || id === 3 ? "hidden" : "flex",
              "font-sans text-zinc-300 text-lg lg:text-xl max-w-96 font-bold z-10"
            )}
          >
            {title}
          </div>
          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="">
              <div className="font-sans text-zinc-300 mb-8 text-lg lg:text-xl max-w-96 font-bold z-10">
                I constantly try to improve my Tech Stacks
              </div>
              <div className="flex flex-wrap gap-3   w-full">
                {techCategories.map((category, index) => (
                  <span
                    key={index}
                    className="py-1  px-2 text-xs lg:text-sm rounded-lg 
                      bg-zinc-900 hover:bg-zinc-800 transition-colors whitespace-nowrap"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
