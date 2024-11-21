import axios from 'axios'

export async function pingGoogleIndexing() {
    try {
        const sitemapUrl = `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
        const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
        await axios.get(pingUrl)
        console.log('Successfully pinged Google with updated sitemap')
    } catch (error) {
        console.error('Error pinging Google:', error)
    }
} 