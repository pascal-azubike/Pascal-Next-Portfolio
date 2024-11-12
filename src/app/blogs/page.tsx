"use client";
import MediumLikeLayout from "@/components/articlesComp";
import PortfolioGrid from "@/components/Portfolio";
import AllArticles from "@/components/ui/focus-cards";
import WorkExperience from "@/components/workExperience";
import React from "react";

const Project = () => {
  return (
    <div className=" bg-zinc-900">
      <div className="max-w-5xl mx-auto px-8 pt-32 md:pt-40 relative">
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
          All of my
          <span className="text-cyan-500"> Technical Knowledge</span> in one
          place
        </h1>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
          I'm passionate about writing clean, efficient code and sharing knowledge.
          Here, I write about my experiences with software development and the
          valuable lessons I've learned along the way.
        </p>
      </div>

      <div className="max-w-5xl  mx-4 md:mx-8 lg:mx-auto mt-24 ">
        <div className=" mt-10 ">
          <AllArticles max={false} />
        </div>
      </div>
    </div>
  );
};

export default Project;
