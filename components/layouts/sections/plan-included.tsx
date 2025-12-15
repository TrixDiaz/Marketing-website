"use client";

import Image from "next/image";
import {
    ChartNoAxesGantt,
    CircleCheck,
    Headset,
    LucideIcon,
    PencilRuler,
    Search,
    ShoppingCart,
    Sparkles,
    Undo2,
} from "lucide-react";
import ScrollReveal from "@/components/motion/scroll-reveal";

interface PlanIncluded {
    icon: LucideIcon;
    title: string;
}

interface PlanIncludedSectionProps {
    image?: string;
    title?: string;
    description?: string;
    features?: PlanIncluded[];
}

const PlanIncludedSection = ({
    image = "/assets/pricing.png",
    title = "What’s Included in Every Plan",
    description = "Everything done for you. We do it all so you don’t have to stress about Seller Central headaches.",
    features = [
        {
            icon: ShoppingCart,
            title: "Full-service Amazon marketplace management",
        },
        {
            icon: Search,
            title: "SEO & Conversion Optimization",
        },
        {
            icon: PencilRuler,
            title: "PPC Account Management",
        },
        {
            icon: Sparkles,
            title: "Product listing optimization",
        },
        {
            icon: ChartNoAxesGantt,
            title: "Brand growth strategy",
        },
        {
            icon: Headset,
            title: "Customer Service Management",
        },
        {
            icon: Undo2,
            title: "Revenue Recovery & Account Fixes",
        },
    ],
}: PlanIncludedSectionProps) => {
    return (
        <section className="my-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <ScrollReveal className="space-y-4" delay={0.5} xOffset={-100}>
                    <p className="text-4xl font-bold text-[#FF6900]">{title}</p>
                </ScrollReveal>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-12">
                    <ScrollReveal className="space-y-4" delay={0.5} xOffset={-100}>
                        <Image src={image} alt={title} width={500} height={500} />
                    </ScrollReveal>
                    <div className="flex flex-col gap-4">
                        <ScrollReveal className="space-y-4" delay={0.5} yOffset={100}>

                            <p className="text-2xl font-bold">{description}</p>

                            <div className="flex flex-col gap-3">
                                {features.map((feature) => {
                                    const IconComponent = feature.icon ?? CircleCheck;
                                    return (
                                        <div key={feature.title} className="flex items-center gap-3">
                                            <IconComponent className="h-5 w-5 text-[#FF6900]" aria-hidden />
                                            <p className="text-gray-700">{feature.title}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { PlanIncludedSection };