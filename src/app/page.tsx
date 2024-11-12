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
              <h2 className=" text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                I&apos;m a software engineer who is passionate about{" "}
                <span className="text-blue-400"> code writing</span>
              </h2>
              <p className="text-gray-400 mb-8">
                I&apos;m a software engineer who loves turning ideas into beautiful, 
                responsive websites. I&apos;m passionate about clean design and user 
                experience. When I&apos;m not coding, you&apos;ll find me hunting for the 
                perfect GIF to celebrate shipped features.
              </p>
              <p className="text-zinc-400">
                Createing <span className="font-semibold">Blog posts</span> and{" "}
                <span className="font-semibold">YouTube videos</span> when I&apos;m
                not working on my day job.
              </p>
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
        <div className="mt-24 lg:mt-40">
          <MediumLikeLayout />
        </div>
      </div>
    </ContentLayout>
  );
};

export default HomePage;
