import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p className="font-bold mb-8">Taking Full-Stack Projects to the Next Level</p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              Spent most of the year working on real-world projects, from fast, scalable full-stack apps with Next.js, FastAPI, and NestJS to sleek WordPress sites built from scratch.
            </div>
            <div className="text-neutral-300">
              At <span className="text-cyan-400">Neutribes Limited</span>, I focused on clean architecture, reusable components, and performance-first design.
            </div>
            <div className="text-neutral-300">
              Also joined <span className="text-cyan-400">Futsolins</span> as a frontend developer, where I built interactive learning dashboards with React Query and improved UI responsiveness across devices.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="font-bold mb-8">Experimenting with AI and Smarter Backends</p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              Worked with <span className="text-cyan-400">ABC Capital</span> on data-driven apps that used AI-powered recommendations and vector search, combining OpenAI models with MongoDB.
            </div>
            <div className="text-neutral-300">
              Optimized API performance from seconds to milliseconds, and learned a ton about database indexing and scalability.
            </div>
            <div className="text-neutral-300">
              Volunteered with <span className="text-cyan-400">Smarttech Hub</span> during my NYSC, revamping community web apps and teaching others modern frontend practices.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2020 – 2022",
      content: (
        <div>
          <p className="font-bold mb-8">Early Days: Learning, Breaking, and Building</p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              My journey started at <span className="text-cyan-400">CITE UNIPORT</span>, where I joined as a software development intern.
            </div>
            <div className="text-neutral-300">
              Built my first real web app with React and Node.js, led a small dev team, and got my first taste of full-stack architecture.
            </div>
            <div className="text-neutral-300">
              Those years were all about curiosity, experimenting with new tools, learning to debug properly, and figuring out how to ship something people could actually use.
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-zinc-900">
      <Timeline data={data} />
    </div>
  );
}
