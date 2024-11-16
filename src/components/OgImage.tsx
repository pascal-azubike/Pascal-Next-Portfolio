import { siteConfig } from "@/lib/site-config"

export default function OgImage() {
  return (
    <div className="flex h-[630px] w-[1200px] flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black p-10">
      {/* Glassmorphism card */}
      <div className="relative rounded-xl backdrop-blur-sm bg-white/10 p-12 shadow-2xl border border-white/20">
        {/* Neon name */}
        <h1 className="text-6xl font-bold text-center mb-6 animate-pulse"
          style={{
            color: '#fff',
            textShadow: `
              0 0 7px #fff,
              0 0 10px #fff,
              0 0 21px #fff,
              0 0 42px #0fa,
              0 0 82px #0fa,
              0 0 92px #0fa
            `
          }}
        >
          {siteConfig.name}
        </h1>

        {/* Job title */}
        <h2 className="text-4xl text-white/90 text-center mb-8">
          Full Stack Developer
        </h2>

        {/* Contact details */}
        <div className="flex gap-6 text-white/80 justify-center">
          <a href={siteConfig.links.github} className="hover:text-white transition-colors">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.links.email}`} className="hover:text-white transition-colors">
            Email
          </a>
        </div>
      </div>
    </div>
  )
} 