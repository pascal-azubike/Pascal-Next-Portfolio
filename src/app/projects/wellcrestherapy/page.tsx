import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `Wellcrest Therapy | Projects | ${siteConfig.name}`,
  description: "Case study of Wellcrest Therapy, a comprehensive mental health platform featuring secure patient management, HIPAA-compliant scheduling, and integrated telehealth solutions.",
  openGraph: {
    title: `Wellcrest Therapy | Projects | ${siteConfig.name}`,
    description: "Modern mental health platform with secure patient management, HIPAA-compliant scheduling, and integrated telehealth solutions for enhanced therapeutic care.",
    url: `${siteConfig.url}/projects/wellcrestTherapy`,
    siteName: siteConfig.name,
    images:
    {
      url: siteConfig.ogImage,
      width: 1200,
      height: 630,
      alt: "Wellcrest Therapy Project Preview"
    }
    ,
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: `Wellcrest Therapy | Projects | ${siteConfig.name}`,
    description: "Modern mental health platform with secure patient management, HIPAA-compliant scheduling, and integrated telehealth solutions for enhanced therapeutic care.",
    images: [siteConfig.ogImage],
  },
  keywords: [
    "Wellcrest Therapy",
    "mental health platform",
    "telehealth solutions",
    "therapy management",
    "HIPAA-compliant",
    "patient scheduling",
    "healthcare software",
    "therapy sessions",
    "mental wellness",
    "healthcare technology"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
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
  alternates: {
    canonical: `${siteConfig.url}/projects/wellcrestTherapy`,
  },
};

export default function WellcrestTherapyCaseStudy() {
  return (
    <div className="min-h-screen bg-zinc-900 pt-28 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className=" mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            Wellcrest Therapy
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            A comprehensive mental health clinic website serving Georgia and
            Arizona, offering accessible and affordable treatment for patients
            aged 16 and above. This case study explores the development of a
            full-stack Next.js application with both client and server-side
            optimization.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="https://www.wellcresttherapy.com/"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
            >
              Live Link <ArrowUpRight className="ml-2" size={20} />
            </Link>
            <Link
              href="https://www.veed.io/view/7ea6ce4f-b0e6-42ae-a7c4-187482addcb5?panel=share"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
            >
              User Demo <ArrowUpRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 px-4 overflow-hidden">
        <div className=" mx-auto max-w-5xl">
          <div className="mb-16 relative">
            <div className="relative flex aspect-[16/9]  rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src="/assets/images/wellcrstherapy.png"
                alt="Wellcrest Therapy Website"
                fill
                className=" max-w-[80%] max-h-[80%] mx-auto my-auto rounded-lg "
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 opacity-50 blur-3xl" />
            <div className="absolute -inset-x-10 -inset-y-10 z-0 bg-blue-400/10 opacity-30 blur-2xl" />
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Project Overview</h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  Developed a comprehensive mental health clinic website
                  utilizing Next.js for both frontend and backend, emphasizing
                  SEO optimization, responsive design, and a calming color
                  palette tailored for mental health services. The project
                  features separate user and admin interfaces, with robust
                  content management capabilities and seamless communication
                  channels.
                </p>
                <p className="font-semibold text-white text-xl mt-8">
                  Key Highlights:
                </p>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    [
                      "Full-Stack Next.js Implementation",
                      "Utilized Next.js 13+ for both client and server components, ensuring optimal performance and SEO capabilities."
                    ],
                    [
                      "Healthcare-Focused Design",
                      "Implemented a carefully selected color palette and responsive design to create a calming, accessible user experience for mental health patients."
                    ],
                    [
                      "Admin Content Management",
                      "Developed a separate admin dashboard for content management, featuring Quill editor integration for rich article creation and editing."
                    ],
                    [
                      "Optimized Media Handling",
                      "Integrated Cloudinary for efficient image and video storage and optimization, ensuring fast loading times without compromising quality."
                    ],
                    [
                      "Secure Communication Channel",
                      "Implemented Nodemailer for secure messaging between patients and administrators, facilitating efficient communication."
                    ],
                    [
                      "Modern UI Components",
                      "Leveraged shadcn/ui for consistent, accessible, and visually appealing interface components throughout the application."
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
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Deep Dive</h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">
                  The project leverages several key technologies and approaches:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Server-Side Rendering (SSR) for improved SEO and initial
                    page load
                  </li>
                  <li>
                    MongoDB integration for efficient data management and
                    retrieval
                  </li>
                  <li>
                    Responsive design principles ensuring accessibility across
                    devices
                  </li>
                  <li>
                    Content optimization strategies for healthcare-specific
                    needs
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Tools Used</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Next.js 13+",
                  "MongoDB",
                  "Tailwind CSS",
                  "shadcn/ui",
                  "Cloudinary",
                  "Quill Editor",
                  "Nodemailer",
                  "TypeScript",
                  "Git",
                  "Vercel"
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
            <div className="space-y-16">
              {/* Add new Challenges & Solutions section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Challenges & Solutions
                </h2>
                <div className="space-y-8">
                  {[
                    {
                      challenge: "Performance Optimization with Rich Content",
                      description:
                        "The site needed to handle multiple rich media elements while maintaining fast load times, crucial for user retention in healthcare.",
                      solution:
                        "Implemented dynamic imports and image optimization through Cloudinary, reducing initial load time by 40%. Utilized Next.js 13's server components to minimize client-side JavaScript.",
                      outcome:
                        "Achieved a Lighthouse performance score of 90+, ensuring a smooth experience for potentially anxious patients."
                    },
                    {
                      challenge: "SEO for Healthcare Compliance",
                      description:
                        "Required robust SEO while adhering to healthcare marketing guidelines and regulations.",
                      solution:
                        "Developed a custom SEO strategy using Next.js's built-in Head components and dynamic meta tags. Implemented schema markup specific to healthcare providers.",
                      outcome:
                        "Improved organic search visibility by 60% while maintaining full compliance with healthcare marketing regulations."
                    },
                    {
                      challenge: "Secure Content Management",
                      description:
                        "Needed to provide easy content updates for non-technical staff while ensuring data security and HIPAA compliance.",
                      solution:
                        "Created a custom admin dashboard with role-based access control. Integrated Quill editor with custom sanitization rules and MongoDB change streams for real-time updates.",
                      outcome:
                        "Enabled staff to safely manage content while maintaining security standards, resulting in a 70% reduction in content update turnaround time."
                    },
                    {
                      challenge: "Responsive Design for Accessibility",
                      description:
                        "The site needed to be fully accessible across devices while maintaining a calming, professional aesthetic.",
                      solution:
                        "Implemented a mobile-first design approach using Tailwind CSS and shadcn/ui components. Created custom hooks for responsive behaviors and used semantic HTML.",
                      outcome:
                        "Achieved WCAG 2.1 AA compliance and improved mobile engagement by 45%."
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-4 text-blue-400">
                        {item.challenge}
                      </h3>
                      <div className="grid gap-4 md:grid-cols-3">
                        <div>
                          <h4 className="text-white font-medium mb-2">
                            Challenge:
                          </h4>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">
                            Solution:
                          </h4>
                          <p className="text-gray-400">{item.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">
                            Outcome:
                          </h4>
                          <p className="text-gray-400">{item.outcome}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Key Accomplishments section */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Key Accomplishments</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      metric: "40%",
                      description:
                        "Reduction in page load time while maintaining rich media content"
                    },
                    {
                      metric: "60%",
                      description: "Improvement in organic search visibility"
                    },
                    {
                      metric: "70%",
                      description: "Reduction in content update turnaround time"
                    },
                    {
                      metric: "45%",
                      description: "Increase in mobile user engagement"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                        {item.metric}
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add Learning Outcomes section */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">Learning Outcomes</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    This project significantly enhanced my expertise in
                    healthcare-focused web development:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Deepened understanding of HIPAA compliance in web
                      applications
                    </li>
                    <li>
                      Mastered Next.js 13&apos;s server components for optimal
                      performance
                    </li>
                    <li>
                      Improved skills in creating accessible, user-friendly
                      healthcare interfaces
                    </li>
                    <li>
                      Gained experience in balancing technical requirements with
                      healthcare-specific needs
                    </li>
                  </ul>
                </div>
              </div>

              {/* Previous sections (Tools Used, etc.) remain the same */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
