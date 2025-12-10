"use client";

import { useState } from "react";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CardFlip from "@/components/kokonutui/card-flip";

interface PricingPlan {
    name: string;
    badge: string;
    monthlyPrice: string;
    yearlyPrice: string;
    features: string[];
    buttonText: string;
    description?: string;
}

interface PricingSectionProps {
    title?: string;
    description?: string;
    plans?: PricingPlan[];
    className?: string;
}

const PricingSection = ({
    title = "Pricing",
    description = "Check out our affordable pricing plans.",
    plans = [
        {
            name: "Starter Plan",
            badge: "Starter Plan",
            monthlyPrice: "$1250",
            yearlyPrice: "$1250",
            description: "Kickstart with essential tools and integrations. Ideal for small businesses and startups.",
            features: [
                "Unlimited Integrations",
                "Windows, Linux, Mac support",
                "24/7 Support"
            ],
            buttonText: "Get Started",
        },
        {
            name: "Growth Plan",
            badge: "Growth Plan",
            monthlyPrice: "$2500",
            yearlyPrice: "$2500",
            description: "Grow with advanced support and more storage. Ideal for growing businesses and startups.",
            features: [
                "Unlimited Integrations",
                "Windows, Linux, Mac support",
                "24/7 Support"
            ],
            buttonText: "Purchase",
        },
        {
            name: "Premium Plan",
            badge: "Premium Plan",
            monthlyPrice: "$4500",
            yearlyPrice: "$4500",
            description: "Scale with advanced support and more storage. Ideal for large businesses and startups.",
            features: [
                "Unlimited Integrations",
                "Windows, Linux, Mac support",
                "24/7 Support"
            ],
            buttonText: "Purchase",
        },
    ],
    className = "",
}: PricingSectionProps) => {
    const [ isAnnually, setIsAnnually ] = useState(false);
    return (
        <section className={`relative overflow-hidden py-24 bg-white ${className}`}>
            {/* Soft color accents behind the heading */}
            <div className="pointer-events-none absolute left-[-6%] top-8 h-56 w-56 rounded-full bg-orange-200/40 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute right-[-4%] top-0 h-48 w-48 rounded-full bg-sky-200/50 blur-3xl" aria-hidden />
            <div className="pointer-events-none absolute left-1/2 top-20 h-40 w-40 -translate-x-1/2 rounded-full bg-amber-100/60 blur-2xl" aria-hidden />

            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
                    <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
                        {title}
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed lg:text-xl">
                        {description}
                    </p>
                    <div className="bg-muted/70 flex h-11 w-fit items-center rounded-md p-1 text-lg shadow-sm backdrop-blur">
                        <RadioGroup
                            defaultValue="monthly"
                            className="h-full grid-cols-2"
                            onValueChange={(value) => {
                                setIsAnnually(value === "annually");
                            }}
                        >
                            <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                <RadioGroupItem
                                    value="monthly"
                                    id="monthly"
                                    className="peer sr-only"
                                />
                                <Label
                                    htmlFor="monthly"
                                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center px-7 font-semibold"
                                >
                                    Monthly
                                </Label>
                            </div>
                            <div className='has-[button[data-state="checked"]]:bg-background h-full rounded-md transition-all'>
                                <RadioGroupItem
                                    value="annually"
                                    id="annually"
                                    className="peer sr-only"
                                />
                                <Label
                                    htmlFor="annually"
                                    className="text-muted-foreground peer-data-[state=checked]:text-primary flex h-full cursor-pointer items-center justify-center gap-1 px-7 font-semibold"
                                >
                                    Yearly
                                </Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    {plans.map((plan) => {
                        const priceLabel = isAnnually
                            ? `${plan.yearlyPrice} /yr`
                            : `${plan.monthlyPrice} /mo`;
                        return (
                            <div key={plan.name} className="flex justify-center">
                                <CardFlip
                                    title={plan.name}
                                    subtitle={plan.description ?? `${plan.badge} plan`}
                                    description={plan.description}
                                    features={plan.features}
                                    price={priceLabel}
                                    ctaLabel={plan.buttonText}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export { PricingSection };
