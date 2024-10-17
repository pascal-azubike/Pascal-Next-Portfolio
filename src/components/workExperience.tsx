import React, { useState } from "react";
import { Apple, Chrome, Film } from "lucide-react";


const companies = [
  {
    name: "Apple",
    icon: <Apple size={20} />,
    experience: {
      title: "Senior Software Engineer",
      period: "Jan 2021 - Jun 2021",
      location: "Cupertino, CA",
      achievements: [
        "Worked on the Apple Music team",
        "Increased the revenue of the company from $80 billion to $1 Trillion",
        "Built a new feature that allowed users to listen to music while they were sleeping"
      ]
    }
  },
  {
    name: "Google",
    icon: <Chrome size={20} fill="black" />,
    experience: {
      title: "Software Engineer",
      period: "Jul 2021 - Dec 2021",
      location: "Mountain View, CA",
      achievements: [
        "Contributed to the development of Google Search",
        "Optimized search algorithms for faster results",
        "Implemented new features for Google Maps"
      ]
    }
  },
  {
    name: "Microsoft",
    icon: <Apple size={20} color="blue" />,
    experience: {
      title: "Full Stack Developer",
      period: "Jan 2022 - Jun 2022",
      location: "Redmond, WA",
      achievements: [
        "Worked on Microsoft Azure cloud services",
        "Developed new tools for cloud resource management",
        "Improved system reliability and performance"
      ]
    }
  },
  {
    name: "Netflix",
    icon: <Film size={20} color="red" />,
    experience: {
      title: "UI/UX Engineer",
      period: "Jul 2022 - Dec 2022",
      location: "Los Gatos, CA",
      achievements: [
        "Redesigned the Netflix user interface",
        "Implemented new personalization features",
        "Improved streaming quality and user engagement"
      ]
    }
  }
];

const WorkExperience = () => {
  const [activeCompany, setActiveCompany] = useState(companies[0]);

  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mt-10 lg:mt-20 max-w-2xl mx-auto relative">
        <div className=" ">
          <div className="absolute -left-6 w-px h-full bg-zinc-800 overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-blue-500 to-purple-500 animate-shooting-star"></div>
          </div>

          <style jsx>{`
            @keyframes shooting-star {
              0% {
                transform: translateY(-100%);
                opacity: 0.2; /* Barely visible at the start */
              }
              50% {
                opacity: 1; /* Full visibility in the middle */
              }
              100% {
                transform: translateY(100%);
                opacity: 0; /* Fade out at the end */
              }
            }

            .animate-shooting-star {
              background-image: linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 0%,
                /* Transparent at the start */ rgba(0, 112, 255, 0.4) 10%,
                /* Dim blue at 10% */ rgba(138, 43, 226, 0.8) 50%,
                /* Bright blue/purple around the middle */
                  rgba(138, 43, 226, 0.8) 70%,
                /* Hold brightness for a bit */ rgba(255, 255, 255, 0) 100%
                  /* Transparent at the end */
              );
              animation: shooting-star 5s cubic-bezier(0.7, 0, 0.3, 1) infinite;
            }
          `}</style>

          <div className="flex flex-row md:flex-col h-full relative overflow-x-auto md:overflow-x-visible">
            {companies.map((company, index) => (
              <button
                key={index}
                className={`px-4 py-2 my-2 text-zinc-400 relative z-20 min-w-28 w-full text-left rounded-md flex flex-row space-x-2 items-center group 
      ${
        activeCompany.name === company.name
          ? "bg-gradient-to-br from-zinc-700 to-zinc-800"
          : "hover:bg-gradient-to-br hover:from-zinc-700 hover:to-zinc-800"
      } transition-all duration-300 ease-in-out`}
                onClick={() => setActiveCompany(company)}
              >
                <div className="bg-red-500 p-1 h-6 w-6 flex items-center justify-center rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800 group-hover:scale-110 transition-transform duration-300 ease-in-out">
                  {company.icon}
                </div>
                <span className="ml-2 group-hover:text-white transition-colors duration-300 ease-in-out">
                  {company.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="md:pl-10  flex-1">
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
                        stroke-width="0"
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
                    // <li key={index}>{achievement}</li>
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
