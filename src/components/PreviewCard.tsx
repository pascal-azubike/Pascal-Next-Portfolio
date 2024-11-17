import { siteConfig } from "@/lib/site-config";
import { Mail, Globe, Phone, Linkedin } from "lucide-react";

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
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-96 bg-purple-500/10 blur-2xl" />

                {/* Main divider line */}
                <div className="absolute inset-0 bg-purple-500"
                    style={{
                        boxShadow: "0 0 10px rgba(168, 85, 247, 0.3), 0 0 20px rgba(168, 85, 247, 0.2)",
                    }}
                />
            </div>

            {/* Right side - Contact Details */}
            <div className="flex-1 flex flex-col justify-center">
                <div className="pl-16 space-y-5">
                    <div className="flex flex-col gap-5">

                        <ContactItem
                            icon={<Mail className="w-4 h-4 " />}
                            text="hello@pascal-azubike.dev"
                        />
                        <ContactItem
                            icon={<XIcon className="w-4 h-4" />}
                            text={`${siteConfig.social.twitter.handle}`}
                        />
                        <ContactItem
                            icon={<Linkedin className="w-4 h-4 " />}
                            text={siteConfig.links.linkedin.replace(/^https?:\/\/(www\.)?linkedin\.com\//, '')}
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
            <span className="text-gray-500 text-xl font-bold">
                {text}
            </span>
        </div>
    );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    );
}





