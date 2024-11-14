import { TimelineDemo } from "@/components/aboutTimeLine";
import Head from "next/head";
import Image from "next/image";


export default function About() {
  return (
    <div>
      <Head>
        <title>About Azubike Pascal - Full Stack Soap Engineer</title>
        <meta
          name="description"
          content="Azubike Pascal is a full stack soap engineer obsessed with technology, creating beautiful websites and functional applications. Learn about his journey and hobbies."
        />
        <meta
          name="keywords"
          content="Azubike Pascal, full stack developer, soap engineer,frontend engineer, backend engineer, web development, technology"
        />
        <meta
          property="og:title"
          content="About Azubike Pascal- Full Stack Soap Engineer"
        />
        <meta
          property="og:description"
          content="Meet Azubike Pascal, a full stack soap engineer with a passion for technology and web development."
        />
        <meta property="og:image" content="/path-to-tyler-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>
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
            src={"/header.jpg"}
            width={400}
            height={400}
            alt="pascal azubike"
            className=" rounded-2xl  lg:mb-0"
          />

          <div className="flex flex-row justify-start mb-10 md:mb-0 md:justify-center space-x-2 mt-2">
            <a
              href="https://twitter.com/mannupaaji"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="h-5 w-5 hover:text-primary transition duration-150"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/manuarora28/"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="h-5 w-5 hover:text-primary transition duration-150"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
                </svg>
              </span>
            </a>
            <a
              href="https://github.com/manuarora700"
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block hover:text-cyan-500">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  className="h-5 w-5 hover:text-primary transition duration-150"
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
