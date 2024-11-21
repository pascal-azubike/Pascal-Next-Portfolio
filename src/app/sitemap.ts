import { MetadataRoute } from "next"
import Article from "@/app/api/models/Article"
import { connectDB } from "@/app/api/config/MongoDbConfig"
import axios from 'axios'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    await connectDB()

    // Get all published articles
    const articles = await Article.find({}).lean()

    // Static routes - add all your website's static pages here
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
        lastModified: article.updatedAt || new Date(),
        priority: 0.7,
    }))

    // Function to ping Google
    const pingGoogle = async (sitemapUrl: string) => {
        try {
            const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
            await axios.get(pingUrl)
            console.log('Successfully pinged Google with updated sitemap.................')
        } catch (error) {
            console.error('Error pinging Google:', error)
        }
    }

    // Ping Google with your sitemap URL after generating it
    const sitemapUrl = `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
    await pingGoogle(sitemapUrl)

    return [...routes, ...articleRoutes]
} 