'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Code, Zap, Settings } from "lucide-react";
export const HoverEffect = ({
  items,
  className
}: {
  items: {
    title: string;
    description: string;
    link: string;
    image: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10 gap-10 ",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-zinc-800 block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 }
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 }
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>

                <div className="flex space-x-2">
                  <ExternalLink
                    className="text-gray-500 mr-4 inline-block  stroke-1"
                    size={20}
                  />
                  <Code
                    className="text-gray-500 mr-4 inline-block  stroke-1"
                    size={20}
                  />
                  <Zap
                    className="text-gray-500 mr-4 inline-block  stroke-1"
                    size={20}
                  />
                  <Settings
                    className="text-gray-500 mr-4 inline-block  stroke-1"
                    size={20}
                  />
                </div>
                <div className="flex flex-row space-x-2 mt-4 items-center px-0.5">
                  <button className="text-zinc-500 group-hover:text-cyan-500 text-xs">
                    View More
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "my-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
