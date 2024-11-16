import OgImage from "@/components/OgImage"

export default function OgPreviewPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800 p-4">
      {/* Preview container with aspect ratio */}
      <div className="w-full max-w-[1200px] shadow-2xl">
        <OgImage />
      </div>
    </div>
  )
} 