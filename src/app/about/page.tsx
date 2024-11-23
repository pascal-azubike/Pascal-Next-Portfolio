import { TimelineDemo } from "@/components/aboutTimeLine";
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
      <main className="max-w-5xl bg-zinc-900 mx-auto px-4 md:px-8 pt-32 md:pt-44">
        <div>
          <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl">
            Hi there! I&apos;m <span className="text-cyan-500">Azubike Pascal</span>{" "}
            and I work as a full stack soap engineer.
          </h1>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-8 md:leading-loose tracking-wide">
            I got hooked on tech pretty early, you know how kids are! I was that 
            curious kid who took apart my mom&apos;s computer (sorry about that, Mom!) 
            just to see what made it tick. Started messing around with code in my 
            teens, and honestly, I couldn&apos;t get enough of it. Fast forward to today, 
            and here I am, still getting excited about building cool websites and 
            solving tricky problems with code.
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
      </main>
      <div className="flex">
        <TimelineDemo />
      </div>
    </div>
  );
}
