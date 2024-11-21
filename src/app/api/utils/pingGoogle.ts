import axios from 'axios'

export async function pingGoogleIndexing() {
    // Only run in production environment
    // if (process.env.NODE_ENV !== 'production') {
    //     console.log('Skipping Google ping in development environment');
    //     return;
    // }

    try {
        const sitemapUrl = `${process.env.NEXT_PUBLIC_APP_URL}/sitemap.xml`
        await axios.post('/api/ping-google', { sitemapUrl })
        console.log("Successfully requested Google ping")
    } catch (error) {
        console.error('Error requesting Google ping:', error)
    }
} 