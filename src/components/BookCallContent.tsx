import { Loader2 } from 'lucide-react';
import React, { Suspense } from 'react';
import { CalendlyEmbed } from './CalendlyEmbed';

export default function BookCallContent() {
    return (
        <div className="min-h-screen bg-zinc-900 text-white pt-32 md:pt-40">
            <div className="max-w-5xl mx-auto px-4 md:px-8">
                <h2 className="text-2xl md:text-3xl text-white font-bold mb-6">
                    Let&apos;s Connect
                </h2>
                <p className="text-zinc-400 max-w-3xl text-sm md:text-base mb-8">
                    Schedule a time to discuss your project, get technical advice, explore job
                    opportunities, or learn how we can work together.
                </p>
                <Suspense fallback={
                    <div className="flex items-center justify-center min-h-[700px]">
                        <Loader2 className="w-8 h-8 animate-spin text-cyan-500" />
                    </div>
                }>
                    <CalendlyEmbed />
                </Suspense>
            </div>
        </div>
    );
} 