"use client";
import PortfolioGrid from "@/components/Portfolio";
import WorkExperience from "@/components/workExperience";
import React from "react";

const Project = () => {
  return (
    <div className=" bg-zinc-900">
      <div className="max-w-5xl mx-auto px-8 pt-32 md:pt-40 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          I&apos;ve been building a
          <span className="text-cyan-500"> lot of things</span>
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          Come explore the fruits of my labor, from small experiments to
          full-blown web applications, each project showcases my love for coding
          and design.
        </p>
      </div>
      <div className="max-w-5xl  mx-4 md:mx-8 lg:mx-auto ">
        <div className=" mt-10 ">
          <PortfolioGrid />
        </div>
      </div>
    </div>
  );
};

export default Project;
