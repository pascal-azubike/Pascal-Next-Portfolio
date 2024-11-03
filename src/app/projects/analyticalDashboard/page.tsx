import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AnalyticalDashboardCaseStudy() {
  return (
    <div className="min-h-screen pt-28 bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            Analytical Dashboard
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            This case study explores the Analytical Dashboard Project, covering
            the Project Overview, Tools Used, and Live Links to the official
            product.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://dashboardcharts.vercel.app/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            >
              Live Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="https://github.com/pascal-tech1/analytical-dashboard"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
            >
              Code Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 overflow-hidden">
        <div className=" mx-auto max-w-5xl">
          <div className="mb-16 relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src="/assets/images/analyticaldashboard.png"
                alt="Analytical Dashboard"
                fill
                className=" max-h-[90%] my-auto max-w-[90%] mx-auto rounded-lg "
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-50 blur-3xl" />
            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-400/10 opacity-30 blur-2xl" />
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Project Overview
              </h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  I led the development of a feature-rich analytical dashboard
                  utilizing Flask for the backend and React.js for the frontend.
                  The dashboard incorporates real-time charting, dynamic
                  filtering, and axis toggling capabilities.
                </p>
                <p className="font-semibold text-white text-xl mt-8">
                  Key Highlights:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    [
                      "Real-Time Data Visualization",
                      "The dashboard features dynamic and interactive charts that update in real-time based on user interactions."
                    ],
                    [
                      "Flexible Filtering",
                      "Users can apply filters to manipulate data visualization, enhancing the dashboard's usability and flexibility."
                    ],
                    [
                      "State Management with Redux",
                      "Redux facilitates efficient state management, ensuring seamless updates across components."
                    ],
                    [
                      "Stylish UI with Tailwind CSS",
                      "Tailwind CSS was utilized for a modern and responsive user interface design."
                    ],
                    [
                      "Advanced Charting",
                      "Leveraging React Chart.js and Chart.js libraries for powerful and customizable charting capabilities."
                    ],
                    [
                      "Form Validation",
                      "Formik and Yup were integrated to ensure robust form validation, enhancing data accuracy and user experience."
                    ]
                  ].map(([title, desc]) => (
                    <div
                      key={title}
                      className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                    >
                      <h3 className="text-white font-semibold mb-2">{title}</h3>
                      <p>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Tools Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "GIT",
                  "Redux Toolkit",
                  "Flask",
                  "MongoDB",
                  "Chart.js",
                  "react-chartjs-2"
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-zinc-800/50 border border-blue-400/20 rounded-lg text-sm backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
