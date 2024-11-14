/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

import MediumLikeLayout from "@/components/articlesComp";

import Link from "next/link";

import Head from "next/head";
import WorkExperience from "@/components/workExperience";

import Grid from "@/components/Grid";
import PortfolioGrid from "@/components/Portfolio";
import Footer from "@/components/footer";
import { ContentLayout } from "@/components/admin-panel/content-layout";


const HomePage: React.FC = () => {
  return (
    <ContentLayout>
      <div className="min-h-screen bg-zinc-900 text-white">
        <Head>
          <title>Azubike Pascal - Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className=" mx-auto max-w-5xl  py-6">
          <main className=" max-w-5xl mx-auto mt-32  md:mt-40 px-8  ">
            <section className="max-w-3xl">
              <h2 className=" text-3xl md:text-4xl lg:text-[43px] font-bold mb-6">
                I&apos;m a software engineer who builds{" "}
                <span className="text-blue-400">solutions that drive results</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Meet Azubike Pascal, a software engineer specializing in beautiful, responsive websites
                that drive business results. I create engaging digital experiences that help businesses
                grow their online presence with clean design and exceptional user experience.
              </p>
              <p className="text-zinc-400 mb-8">
                Creating <span className="font-semibold">Blog posts</span> and{" "}
                <span className="font-semibold">YouTube videos</span> when I&apos;m
                not working on my day job.
              </p>

              <div className="mt-8">
                <a
                  href=""
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out"
                >
                  Schedule a Call
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </a>
              </div>
            </section>

            <section className="mt-20 max-w-5xl mx-auto px-4">
              <h3 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
                Work Experience
              </h3>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
                I&apos;ve worked across diverse companies, growing my skills and embracing new challenges.
              </p>
              <WorkExperience />
            </section>
          </main>
        </header>
        <div className="max-w-5xl mx-auto px-4 md:px-8 mt-20">
          <Grid />
          <section>
            <h1 className="text-2xl mt-20 lg:mt-40 md:text-3xl text-white font-bold max-w-5xl mx-auto  ">
              I&apos;ve been building a lot of things
            </h1>
            <div className="max-w-5xl mx-auto ">
              <div className=" mt-10 ">
                <PortfolioGrid />
              </div>
            </div>
          </section>
        </div>
        <div className="mt-24 lg:mt-40 max-w-5xl mx-auto px-4 md:px-8 ">
          <h2 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto  mb-6">
            Featured Articles
          </h2>
          <p className="text-zinc-400 mb-8 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide">
            I share insights from my software development journey, diving deep into technical concepts, best practices, and lessons learned from building real-world applications.
          </p>
          <MediumLikeLayout />
        </div>

      </div>
    </ContentLayout>
  );
};

export default HomePage;
