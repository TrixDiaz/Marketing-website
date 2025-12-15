"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import ScrollReveal from '@/components/motion/scroll-reveal';

interface Client {
    src: string;
    name: string;
}

const clients: Client[] = [
    {
        src: "/assets/clients/Cats-Claw-Fasteners.png",
        name: "Cats Claw Fasteners"
    },
    {
        src: "/assets/clients/Colby-Valve.png",
        name: "Colby Valve"
    },
    {
        src: "/assets/clients/EG-logo-1.png",
        name: "EG Logo"
    },
    {
        src: "/assets/clients/GlueTread.png",
        name: "GlueTread"
    },
    {
        src: "/assets/clients/Jelt-Belt.png",
        name: "Jelt Belt"
    },
    {
        src: "/assets/clients/MORRflate.png",
        name: "MORRflat"
    },
    {
        src: "/assets/clients/Plugfones.png",
        name: "Plugfone"
    },
    {
        src: "/assets/clients/Proof-1.png",
        name: "Proof"
    },
    {
        src: "/assets/clients/RR_square_complete-1.png",
        name: "RR Square"
    },
];

const ClientsSection = () => {
    return (
        <section
            id="clients"
            className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f8fafc,#ffffff)] py-16 sm:py-24"
        >
            <div className="pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center px-4">
                <ScrollReveal className="space-y-4" delay={0.4} xOffset={80}>
                    <div className="inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                        Trusted by industry leaders
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        Some of our clients
                    </h2>
                    <p className="text-lg text-gray-600 md:text-xl max-w-3xl">
                        Trusted by leading brands — especially in the off-road industry — who count on us to manage their Amazon marketplace success.
                    </p>
                </ScrollReveal>

                <ScrollReveal className="w-full" delay={0.4} xOffset={80}>
                    <div className="mx-auto rounded-3xl border border-gray-200/70 bg-white/90 p-6 shadow-md backdrop-blur">
                        <Marquee className="gap-12 [--duration:70s]" pauseOnHover={true}>
                            {clients.map(({ src, name }, index) => (
                                <div
                                    key={`${name}-${index}`}
                                    className="flex items-center justify-center rounded-2xl px-6 py-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                                >
                                    <Image
                                        src={src}
                                        alt={`${name} logo`}
                                        height={140}
                                        width={140}
                                        className="object-contain"
                                    />
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}

export { ClientsSection };