import { siteConfig } from "@/lib/site-config";
import { Mail, Globe, Phone, Twitter, Linkedin } from "lucide-react";

export function PreviewCard() {
    return (
        <div className="relative w-[1200px] h-[630px] bg-black/95 flex">
            {/* Left side - Name and Designation */}
            <div className="flex-1 flex flex-col justify-center pl-32">
                <h1 className="text-6xl font-bold text-purple-500 mb-1">
                    {siteConfig.author}
                </h1>
                <p className="text-xl text-center text-gray-500 tracking-[0.2em] ml-1 opacity-80">
                    FULL STACK DEVELOPER
                </p>
            </div>

            {/* Center neon divider with diffused glow */}
            <div className="w-[2px] h-full relative">
                {/* Diffused background glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-96 bg-purple-500/20 blur-3xl" />

                {/* Main divider line */}
                <div className="absolute inset-0 bg-purple-500"
                    style={{
                        boxShadow: "0 0 15px rgba(168, 85, 247, 0.5), 0 0 30px rgba(168, 85, 247, 0.3)",
                    }}
                />
            </div>

            {/* Right side - Contact Details */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="pl-16 space-y-5">
                    <div className="flex flex-col gap-5">
                        <ContactItem
                            icon={<Phone className="w-4 h-4" />}
                            text={siteConfig.links.whatsapp.replace('https://wa.me/', '')}
                        />
                        <ContactItem
                            icon={<Mail className="w-4 h-4" />}
                            text="hello@pascal-azubike.dev"
                        />
                        <ContactItem
                            icon={<Twitter className="w-4 h-4" />}
                            text={`${siteConfig.social.twitter.handle}`}
                        />
                        <ContactItem
                            icon={<Linkedin className="w-4 h-4" />}
                            text={siteConfig.links.linkedin.replace('https://linkedin.com/in/', '')}
                        />
                        <ContactItem
                            icon={<Linkedin className="w-4 h-4" />}
                            text={siteConfig.links.github}
                        />
                        <ContactItem
                            icon={<Globe className="w-4 h-4" />}
                            text="pascal-azubike.dev"
                        />
                    </div>
                </div>
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
        <div className="flex items-center gap-3">
            <div className="text-purple-500 opacity-90">
                {icon}
            </div>
            <span className="text-gray-500 text-sm font-light">
                {text}
            </span>
        </div>
    );
}





