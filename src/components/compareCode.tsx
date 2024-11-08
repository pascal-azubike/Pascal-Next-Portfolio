import React from "react";
import { Compare } from "@/components/ui/compare";
import { CodeIcon } from "lucide-react";

export function CompareDemo() {
  return (
    <div className="p-4 border border-white/[0.1] rounded-3xl min-h-[320px] px-4">
      <div className="flex items-center gap-2 font-sans text-zinc-300 mb-8">
        <CodeIcon className="w-6 h-6" />
        <h2 className="text-lg lg:text-xl font-bold">
          Before vs After: Code Optimization Journey
        </h2>
      </div>
      <p className="text-sm text-zinc-400 mb-4">
        Hover to compare initial implementation with optimized solution
      </p>
      <Compare
        firstImage="assets/images/beforeOptimized.png"
        secondImage="assets/images/afterOptimization.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className=""
        slideMode="hover"
      />
    </div>
  );
}
