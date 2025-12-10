"use client";

import {
    YoutubeIcon,
    InstagramIcon,
    MailIcon,
    PhoneIcon,
    LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

const SocialHeader = () => {
    return (
        <div className="hidden md:block bg-gradient-to-l from-[#364397] to-[#6A79D6] py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Social Icons */}
                    <ul className="flex items-center gap-4">
                        <li>
                            <Link
                                href="/"
                                className="text-[#5BBBC6] hover:text-white transition-colors"
                            >
                                <LinkedinIcon className="h-5 w-5" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                className="text-[#5BBBC6] hover:text-white transition-colors"
                            >
                                <InstagramIcon className="h-5 w-5" />
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/"
                                className="text-[#5BBBC6] hover:text-white transition-colors"
                            >
                                <YoutubeIcon className="h-5 w-5" />
                            </Link>
                        </li>
                    </ul>

                    {/* Contact Info */}
                    <div className="flex items-center gap-6 text-sm text-white/95">
                        <p className="flex items-center gap-2">
                            <MailIcon className="h-4 w-4 text-[#5BBBC6] shrink-0" />
                            amazon@simplifyecomm.com
                        </p>

                        <p className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4 text-[#5BBBC6] shrink-0" />
                            +1 (865) 309 3800
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { SocialHeader };
