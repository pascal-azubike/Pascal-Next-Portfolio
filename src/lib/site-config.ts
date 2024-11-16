export const siteConfig = {
    url: "https://www.pascal-azubike.dev",
    name: "Azubike Pascal",
    title: "Azubike Pascal - Full Stack Developer",
    description: "Meet Azubike Pascal, a software engineer specializing in beautiful, responsive websites that drive business results. Creating engaging digital experiences that help businesses grow.",
    author: "Azubike Pascal",
    ogImage: "/api/og",
    links: {
        github: "https://github.com/pascal-azubike",
        linkedin: "https://www.linkedin.com/in/pascal-azubike/",
        twitter: "https://x.com/pascal_azubike",
        email: "hello@pascal-azubike.dev"
    },
    social: {
        twitter: {
            handle: "@pascal_azubike",
            site: "@pascal_azubike",
            cardType: "summary_large_image"
        },
        // facebook: {
        //     appId: "your-facebook-app-id"
        // }
    },
    metadata: {
        themeColor: "#ffffff",
        manifestPath: "/favicon/site.webmanifest",
        alternateLocales: [{
            lang: "en",
            href: "https://www.pascal-azubike.dev"
        }]
    },
    keywords: [
        "Azubike Pascal",
        "Full Stack Developer",
        "Software Engineer",
        "Web Development",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "TypeScript Expert",
        "Frontend Development",
        "Backend Development",
        "MongoDB",
        "Express.js",
        "API Development",
        "Responsive Web Design",
        "UI/UX Development",
        "Cloud Computing",
        "AWS",
        "DevOps",
        "Performance Optimization",
        "SEO Optimization",
        "Technical Writing",
        "Software Architecture",
        "Database Design",
        "System Design",
        "Web Security"
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon/favicon.ico"
        },
        {
            rel: "apple-touch-icon",
            href: "/favicon/apple-touch-icon.png",
            sizes: "180x180"
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest"
        },
        {
            rel: "canonical",
            href: "https://www.pascal-azubike.dev"
        }
    ]
} as const;

export type SiteConfig = typeof siteConfig; 