import { Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CalendlyEmbedProps {
    onButtonClick?: () => void;
}

export function CalendlyEmbed({ onButtonClick }: CalendlyEmbedProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prefetch the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        
        // Add load event listener
        script.onload = () => {
            setIsLoading(false);
        };

        // Add error handling
        script.onerror = () => {
            console.error('Failed to load Calendly widget');
            setIsLoading(false);
        };

        // Add the script to document head instead of body
        document.head.appendChild(script);

        return () => {
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="relative min-h-[700px]">
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/50">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
                </div>
            )}
            <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/pascalazubike/30min?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1&hide_branding=1&background_color=18181b&text_color=ffffff&primary_color=3b82f6"
                style={{ 
                    minWidth: '320px', 
                    height: '700px',
                    opacity: isLoading ? '0' : '1',
                    transition: 'opacity 0.3s ease-in-out'
                }}
            />
        </div>
    );
}