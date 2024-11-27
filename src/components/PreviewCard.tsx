"use client";

import { siteConfig } from "@/lib/site-config";
import { Mail, Globe, Phone, Linkedin } from "lucide-react";

export function PreviewCard() {
    return (
        <div className="relative w-full h-[400px] bg-black/95 flex flex-col items-center justify-center">
            <h1 className="text-[3rem] font-bold text-purple-500 mb-1">
                {siteConfig.author}
            </h1>
            <p className="text-xl text-center text-gray-500 tracking-[0.2em] font-bold opacity-80">
                FULL STACK DEVELOPER
            </p>
            <div className="w-full h-[2px] my-4 relative">
                <div className="absolute inset-0 bg-purple-500"
                    style={{
                        boxShadow: "0 0 10px rgba(168, 85, 247, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)",
                    }}
                />
            </div>
            <div className="flex space-x-10">
                <ContactItem
                    icon={<Mail className="w-6 h-6" />}
                    text="hello@pascal-azubike.dev"
                />
                <ContactItem
                    icon={<Globe className="w-6 h-6" />}
                    text={`${siteConfig.social.twitter.handle}`}
                />
                <ContactItem
                    icon={<Linkedin className="w-6 h-6" />}
                    text={siteConfig.links.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '')}
                />
            </div>
        </div>
    );
}

function ContactItem({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex items-center gap-2">
            <div className="text-purple-500 opacity-90 text-2xl">
                {icon}
            </div>
            <span className="text-gray-500 text-lg">
                {text}
            </span>
        </div>
    );
}





