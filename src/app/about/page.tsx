import { TimelineDemo } from "@/components/aboutTimeLine";
import Head from "next/head";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `About | ${siteConfig.name}`,
  description: "Learn more about Azubike Pascal, a passionate full-stack developer with expertise in modern web technologies and a drive for creating impactful digital solutions.",
  keywords: [
    ...siteConfig.keywords,
    "Developer Biography",
    "Professional Background",
    "Tech Experience",
    "Developer Skills",
    "Career Journey",
    "Professional Experience",
    "Technical Expertise",
    "Developer Story",
    "Tech Stack",
    "Development Philosophy",
    "Software Engineering Background",
    "Professional Development",
    "Technical Skills",
    "Developer Portfolio"
  ],
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "Learn more about Azubike Pascal, a passionate full-stack developer with expertise in modern web technologies and a drive for creating impactful digital solutions.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.name}`
      }
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: `About | ${siteConfig.name}`,
    description: "Learn more about Azubike Pascal, a passionate full-stack developer with expertise in modern web technologies and a drive for creating impactful digital solutions.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function About() {
  return (
    <div>
      
      <main className="max-w-5xl bg-zinc-900  mx-auto px-4 md:px-8 pt-20 md:pt-44 relative flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 justify-between">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Hi there! I&apos;m <span className="text-cyan-500">Azubike Pascal</span>{" "}
            and I work as a full stack soap engineer.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            Technology has captivated me since my childhood days. Between dismantling my
            parents&apos; computer (my apologies, mum) and teaching myself programming,
            I developed a deep passion for tech. Now, years later, I&apos;ve evolved into
            a seasoned developer who loves crafting elegant websites and building powerful
            applications.
          </p>
          <div className="mt-8">
            <h2 className="text-xl md:text-2xl font-bold text-zinc-50 mb-4">Technical Expertise</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-cyan-500 font-semibold mb-2">Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux Toolkit', 
                    'React Query', 'Zustand', 'SCSS', 'Tailwind CSS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-500 font-semibold mb-2">Backend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'GraphQL'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-500 font-semibold mb-2">Database & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Git', 'Docker', 'AWS'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-cyan-500 font-semibold mb-2">Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {['NumPy', 'Pandas', 'Seaborn', 'Scikit-learn'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <a
              href="/book-call"
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-150 ease-in-out"
            >
              Schedule a Call
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <Image
            src={"/assets/images/pascal.jpg"}
            width={400}
            height={400}
            alt="pascal azubike"
            className=" rounded-2xl  lg:mb-0"
          />

          <div className="flex flex-row justify-start mb-10 md:mb-0 md:justify-center space-x-2 mt-2">
            <a
              href="https://wa.me/+2349095606300"
              className="text-zinc-400 hover:text-cyan-500 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/azubike-pascal"
              className="text-zinc-400 hover:text-cyan-500 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/pascal-tech1"
              className="text-zinc-400 hover:text-cyan-500 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="h-5 w-5"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </main>
      <div className="  flex ">
        <TimelineDemo />
      </div>
    </div>
  );
}
