import { NextRequest, NextResponse } from "next/server";
import Article from "@/app/api/models/Article";
import { connectDB } from "@/app/api/config/MongoDbConfig";

export const GET = async () => {
    console.log("GET function is called");
    console.log("im here name");
    await connectDB();

    // Fetch all published articles
    const articles = await Article.find({}).lean();

    // Static routes
    const routes = [
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}`,
            lastModified: new Date(),
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/blogs`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/about`,
            lastModified: new Date(),
            priority: 0.7,
        },

        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`,
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/book-call`,
            lastModified: new Date(),
            priority: 0.7,
        },
        // Project pages
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/blogvana`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/denmarkMultibuz`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/wellcresttherapy`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/plumbreedPuzzle`,
            lastModified: new Date(),
            priority: 0.7,
        },
        {
            url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/analyticalDashboard`,
            lastModified: new Date(),
            priority: 0.7,
        }
    ]

    // Add article routes
    const articleRoutes = articles.map((article) => ({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/blogs/${article._id.toString()}`,
        lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(),
        priority: 0.7,
    }));

    // Combine static and dynamic routes
    const sitemapRoutes = [...routes, ...articleRoutes];

    // Generate XML for the sitemap
    const xml = generateSitemapXml(sitemapRoutes);

    // Ensure the response is valid XML
    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
};

// Function to generate XML from routes
const generateSitemapXml = (routes: { url: string; lastModified: Date; priority: number; }[]) => {
    const urlset = routes
        .map(route => `
            <url>
                <loc>${route.url}</loc>
                <lastmod>${route.lastModified.toISOString()}</lastmod>
                <priority>${route.priority}</priority>
            </url>
        `)
        .join("");

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urlset}
    </urlset>`;
}; 