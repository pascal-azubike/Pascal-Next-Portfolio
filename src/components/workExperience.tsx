import Image from "next/image";
import React, { useState } from "react";

const companies = [
  {
    name: "Neutribes Limited",
    icon: "/assets/images/neutribes.png",
    experience: {
      title: "Full Stack Developer",
      period: "June 2025 – Present",
      location: "Remote",
      achievements: [
        "Delivered 3 complete WordPress websites from scratch, including theme setup, plugin configuration, SEO optimization, and security hardening.",
        "Built full-stack applications using FastAPI, NestJS, and Next.js with clean, maintainable architecture and robust API integrations.",
        "Implemented Figma designs into pixel-perfect, responsive frontends, improving design consistency and development speed.",
        "Ensured accessibility and SEO compliance across all client projects, boosting organic reach and usability.",
      ],
    },
  },
  {
    name: "Futsolins (Contract)",
    icon: "/assets/images/futsolins.svg",
    experience: {
      title: "Frontend Developer",
      period: "April 2025 – June 2025",
      location: "Remote",
      achievements: [
        "Built interactive learning interfaces using Next.js and React Query, optimizing client-side data fetching for speed and reliability.",
        "Collaborated with product and design teams to deliver responsive UI components tailored for students and educators.",
        "Improved performance, accessibility, and cross-device usability, enhancing user engagement.",
      ],
    },
  },
  {
    name: "ABC Capital Limited",
    icon: "/assets/images/abc-logo (1).svg",
    experience: {
      title: "Full Stack Developer (Contract)",
      period: "May 2024 – March 2025",
      location: "Ado Ekiti, Ekiti State",
      achievements: [
        "Led 3+ client projects using Next.js, React, and Node.js while mentoring junior developers to full productivity.",
        "Built AI-powered recommendation and semantic search systems using OpenAI Ada 002 and MongoDB Vector Search.",
        "Optimized MongoDB queries and indexing to reduce API response times from 3s to 200ms.",
        "Built scalable Node.js/MongoDB backend serving 50,000+ daily users with consistent sub-second performance.",
        "Modernized React codebase with hooks and better state management, reducing bundle size by 40% and bugs by 70%.",
      ],
    },
  },
  {
    name: "CITE UNIPORT",
    icon: "/assets/images/uniport.svg",
    experience: {
      title: "Software Development Intern",
      period: "Feb 2020 – Nov 2022",
      location: "Choba, Port Harcourt",
      achievements: [
        "Led a team of interns to design and launch a campus-wide web application.",
        "Collaborated with senior developers to apply best practices in scalable architecture.",
        "Coordinated milestones and timelines, ensuring timely project delivery.",
        "Developed modular code components, improving efficiency and maintainability.",
        "Supervised testing and deployment, delivering a production-ready app used by the university community.",
      ],
    },
  },
];

const WorkExperience = () => {
  const [activeCompany, setActiveCompany] = useState(companies[0]);

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-10 lg:mt-20 max-w-3xl mx-auto relative">
        <div className="w-full md:w-40">
          <div className="absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-purple-500 animate-shooting-star"></div>
          </div>

          <style jsx>{`
            @keyframes shooting-star {
              0% {
                transform: translateY(-100%);
                opacity: 0.2;
              }
              50% {
                opacity: 1;
              }
              100% {
                transform: translateY(100%);
                opacity: 0;
              }
            }

            .animate-shooting-star {
              background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                rgba(0, 112, 255, 0.4) 10%,
                rgba(138, 43, 226, 0.8) 50%,
                rgba(138, 43, 226, 0.8) 70%,
                rgba(255, 255, 255, 0) 100%
              );
              animation: shooting-star 5s cubic-bezier(0.7, 0, 0.3, 1) infinite;
            }
          `}</style>

          <div className="flex flex-row md:flex-col gap-2 md:gap-4 overflow-x-auto w-fit md:overflow-x-visible pb-4 md:pb-0">
            {companies.map((company, index) => (
              <button
                key={index}
                className={` px-3 py-2 w-full min-w-full text-zinc-400 relative z-20 justify-start text-left rounded-md flex group
                    ${activeCompany.name === company.name
                    ? "bg-gradient-to-br  from-zinc-700 to-zinc-800"
                    : "hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800"
                  } transition-all duration-300 ease-in-out`}

                onClick={() => setActiveCompany(company)}
              >
                <div className="p-1 h-7 w-7 flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  <Image
                    src={company.icon}
                    alt={`${company.name} icon`}
                    className="h-4 w-4 object-contain"
                  />
                </div>
                <span className="ml-2 whitespace-nowrap text-sm md:text-base group-hover:text-white transition-colors duration-300 ease-in-out">
                  {company.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:pl-10 flex-1">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-semibold">
                {activeCompany.experience.title} @{" "}
                <span className="text-blue-400">{activeCompany.name}</span>
              </h3>
              <p className="text-zinc-400 text-sm tracking-widest">
                {activeCompany.experience.period}
              </p>
              <p className="text-zinc-400 text-sm">
                {activeCompany.experience.location}
              </p>

              <ul className="list-disc list-inside text-gray-300">
                {activeCompany.experience.achievements.map(
                  (achievement, index) => (
                    <li
                      key={index}
                      className="flex flex-row space-x-2 items-start my-2"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        className="text-cyan-500 mt-[3px] flex-shrink-0"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                      </svg>
                      <span className="text-zinc-400 text-sm">
                        {achievement}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
