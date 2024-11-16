import { ImageResponse } from '@vercel/og'
import OgImage from '@/components/OgImage'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    <OgImage />,
    {
      width: 1200,
      height: 630,
    },
  )
} 