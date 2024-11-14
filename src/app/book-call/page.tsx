"use client"
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

export default function BookCallPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white pt-32 md:pt-40">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
          Let&apos;s Connect
        </h2>
        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide mb-8">
          Schedule a time to discuss your project, get technical advice, or explore how we can work together.
        </p>
        <div className="mt-8">
          <CalendlyEmbed />
        </div>
      </div>
    </div>
  );
} 