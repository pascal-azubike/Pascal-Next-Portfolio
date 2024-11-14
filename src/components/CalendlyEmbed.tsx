import { useEffect } from 'react';

interface CalendlyEmbedProps {
    onButtonClick?: () => void;
}

export function CalendlyEmbed({ onButtonClick }: CalendlyEmbedProps) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/pascalazubike003?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=18181b&text_color=ffffff&primary_color=3b82f6"
            style={{ minWidth: '320px', height: '700px' }}
        />
    );
}