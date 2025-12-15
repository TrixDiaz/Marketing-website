"use client";

import { Marquee } from "@/components/ui/marquee";
import { ChevronRight, Sparkles, Star, UserRound } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Alice Johnson",
        role: "CEO & Founder",
        quote: "“This platform has revolutionized the way we manage projects. It is incredibly user-friendly and efficient.”",
        rating: 5,
    },
    {
        name: "David Lee",
        role: "CTO",
        quote: "“I have been impressed with the seamless integration and functionality. It has made our tech operations much smoother.”",
        rating: 5,
    },
    {
        name: "Mark Thompson",
        role: "COO",
        quote: "“Managing our day-to-day tasks has never been easier. The interface is intuitive and saves us a lot of time.”",
        rating: 5,
    },
    {
        name: "Emily Carter",
        role: "Tech Lead",
        quote: "“The tools provided have significantly improved our team’s workflow and collaboration. Highly recommend it!”",
        rating: 4,
    },
    {
        name: "Sophia Reyes",
        role: "Product Manager",
        quote: "“We deliver faster and with more confidence now. The automation and insights are game changers.”",
        rating: 5,
    },
    {
        name: "Michael Chen",
        role: "Head of Engineering",
        quote: "“Rock-solid reliability and stellar support. Our developers love how easy it is to ship.”",
        rating: 5,
    },
];

const TestimonialCard = ({ name, role, quote, rating }: Testimonial) => {
    return (
        <div className="relative h-full max-w-md rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                    <UserRound className="h-6 w-6" aria-hidden />
                </div>
                <div className="flex-1">
                    <p className="text-lg font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                </div>
                <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                            key={index}
                            className={`h-4 w-4 ${index < rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                            aria-hidden
                        />
                    ))}
                </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-gray-600">{quote}</p>
        </div>
    );
};

const TestimonialSection = () => {
    return (
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#f8fafc,#ffffff)] px-4 py-16 sm:py-24">
            <div className="pointer-events-none absolute inset-0 opacity-60" />
            <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
                <div className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                    <Sparkles className="h-4 w-4" aria-hidden />
                    Rated 5 stars by 1000+ clients
                </div>
                <h2 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
                    Meet our happy clients
                </h2>
                <p className="max-w-2xl text-lg text-gray-600 sm:text-xl">
                    Join a global network of thought leaders, product developers, and builders growing with us.
                </p>
            </div>

            <div className="relative mt-12">
                <Marquee className="gap-6 [--duration:80s]" pauseOnHover={true}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export { TestimonialSection };
