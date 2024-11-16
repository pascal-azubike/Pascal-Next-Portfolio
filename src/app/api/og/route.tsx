import { ImageResponse } from '@vercel/og'
import OgImage from '@/components/OgImage'

export const runtime = 'edge'

export async function GET() {
  console.log('og image route')
  try {
    return new ImageResponse(
      (
        <div style={{ 
          display: 'flex',
          height: '100%',
          width: '100%',
          background: 'black',
        }}>
          <OgImage />
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (error) {
    console.error(error)
    return new Response('Failed to generate image', { status: 500 })
  }
} 