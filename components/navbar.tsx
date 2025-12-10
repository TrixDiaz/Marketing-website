"use client";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ParticleButton from "./kokonutui/particle-button";
import MorphicNavbar from "./kokonutui/morphic-navbar";


const Navbar = () => {
    return (
        <section className="border-b-2 border-[#00E5A9] py-6">
            <div className="max-w-7xl mx-auto px-4 container">
                {/* Desktop Menu */}
                <nav className="hidden items-center justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Link href="/">
                            <Image
                                src="/assets/logo.png"
                                width={150}
                                height={150}
                                className="max-h-12 object-contain"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center">
                        {/* Navbar */}
                        <MorphicNavbar />
                    </div>
                    <div className="flex gap-2">
                        {/* Contact Us Button */}
                        <ParticleButton size="lg" className="text-sm tracking-wide uppercase h-10 px-10 py-2">
                            <Link href="/">Contact Us</Link>
                            <ArrowRightIcon className="size-4 text-white" />
                        </ParticleButton>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="flex lg:hidden items-center justify-between">
                    <MorphicNavbar />
                </div>
            </div >
        </section >
    );
};


export { Navbar };
