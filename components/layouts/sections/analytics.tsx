"use client";
import Image from "next/image";
import ScrollReveal from "@/components/motion/scroll-reveal";

interface AnalyticsCounts {
    title: string;
    description: string;
    count: string;
}

interface AnalyticsSectionProps {
    title?: string;
    description?: string;
    image?: string;
    analyticsCounts?: AnalyticsCounts[];
}

const AnalyticsSection = ({
    title = "Geared For Results",
    description = "Your growth defines our success. Every strategy we build is custom and geared to scale your brand",
    image = "/assets/analytics.png",
    analyticsCounts = [
        {
            title: "Brands",
            description: "Brands managed averaged client stay length - 4 years.",
            count: "20+",
        },
        {
            title: "Pay per click",
            description: "Spend managed per year. Average ACOS under 20%, TACOS under 10%.",
            count: "500K",
        },
        {
            title: "Total Sales",
            description: "Sales per year and counting!",
            count: "10M+",
        },
    ],
}: AnalyticsSectionProps) => {
    return (
        <section className="relative overflow-hidden py-20 sm:py-28">
            <div className="pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <ScrollReveal className="space-y-4" delay={0.5} xOffset={-80}>
                        <div className="flex flex-col gap-4">
                            <p className="text-5xl font-semibold text-gray-900">{title}</p>
                            <p className="text-lg text-gray-600 max-w-2xl text-balance tracking-wide">{description}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {analyticsCounts.map((analyticsCount) => (
                                    <div
                                        key={analyticsCount.title}
                                        className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-sm backdrop-blur"
                                    >
                                        <p className="text-3xl font-bold text-[#FF6900]">
                                            {analyticsCount.count}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-gray-900">
                                            {analyticsCount.title}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500 tracking-wide">
                                            {analyticsCount.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal className="space-y-4" delay={0.5} xOffset={80}>
                        <div className="flex justify-center items-center rounded-3xl shadow-md backdrop-blur">
                            <Image src={image} alt={title} width={560} height={560} className="object-contain" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export { AnalyticsSection };