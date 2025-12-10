import Link from "next/link";
import Image from "next/image";
import { BackgroundPathsOverlay } from "@/components/kokonutui/background-paths";


interface MenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}

interface FooterProps {
    tagline?: string;
    menuItems?: MenuItem[];
    copyright?: string;
    bottomLinks?: {
        text: string;
        url: string;
    }[];
}

const Footer = ({
    tagline = "Over 10 years of e-commerce experience • Personalized, hands-on support • We manage your Amazon markeplace account so you don’t have to",
    menuItems = [
        {
            title: "Product",
            links: [
                { text: "Overview", url: "#" },
                { text: "Pricing", url: "#" },
                { text: "Marketplace", url: "#" },
                { text: "Features", url: "#" },
                { text: "Integrations", url: "#" },
                { text: "Pricing", url: "#" },
            ],
        },
        {
            title: "Company",
            links: [
                { text: "About", url: "#" },
                { text: "Team", url: "#" },
                { text: "Blog", url: "#" },
                { text: "Careers", url: "#" },
                { text: "Contact", url: "#" },
                { text: "Privacy", url: "#" },
            ],
        },
        {
            title: "Resources",
            links: [
                { text: "Help", url: "#" },
                { text: "Sales", url: "#" },
                { text: "Advertise", url: "#" },
            ],
        },
        {
            title: "Social",
            links: [
                { text: "Twitter", url: "#" },
                { text: "Instagram", url: "#" },
                { text: "LinkedIn", url: "#" },
            ],
        },
    ],
    copyright = "© 2025 Powered by SimplifyEcomm. All rights reserved.",
    bottomLinks = [
        { text: "Terms and Conditions", url: "#" },
        { text: "Privacy Policy", url: "#" },
    ],
}: FooterProps) => {
    return (
        <section className="relative max-w-7xl mx-auto py-24 overflow-hidden">
            <BackgroundPathsOverlay className="opacity-20 blur-[2px]" />
            <div className="container">
                <footer>
                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
                        <div className="col-span-2 mb-8 lg:mb-0">
                            <div className="flex items-center gap-2 lg:justify-start">
                                <Link href="/">
                                    <Image
                                        src="/assets/logo.png"
                                        alt="Logo"
                                        width={250}
                                        height={100}
                                        className="max-h-24 object-contain"
                                    />
                                </Link>
                            </div>
                            <p className="mt-4 text-black text-md">
                                {tagline}
                            </p>
                        </div>
                        {menuItems.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                                <h3 className="mb-4 text-black text-lg font-bold">{section.title}</h3>
                                <ul className="text-black text-md space-y-3">
                                    {section.links.map((link, linkIdx) => (
                                        <li
                                            key={linkIdx}
                                            className="hover:text-primary font-medium"
                                        >
                                            <Link href={link.url}>{link.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="text-muted-foreground mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium md:flex-row md:items-center">
                        <p>{copyright}</p>
                        <ul className="flex gap-4">
                            {bottomLinks.map((link, linkIdx) => (
                                <li key={linkIdx} className="hover:text-primary underline">
                                    <Link href={link.url}>{link.text}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export { Footer };
