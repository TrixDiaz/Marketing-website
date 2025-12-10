"use client";
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import SlideTextButton from '@/components/kokonutui/slide-text-button';


const AboutUsSection = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
                <div className="max-w-7xl mx-auto bg-gradient-to-tr from-[#1a2347] via-[#3e89c2] to-[#1a2347] p-8 md:p-12 rounded-2xl bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left Content */}
                        <div className="space-y-4">
                            {/* About Us Badge */}
                            <div className="flex items-center gap-3">
                                <div className="h-px flex-1 bg-white/40"></div>
                                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                                <span className="text-white/90 font-medium text-sm md:text-base tracking-wide">About Us</span>
                                <div className="w-2 h-2 rounded-full bg-white/60"></div>
                                <div className="h-px flex-1 bg-white/40"></div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">
                                We Will Help You Sell More
                            </h2>

                            {/* Subheading */}
                            <h3 className="text-lg md:text-xl font-semibold text-white">
                                At A Price That Just Makes Sense...
                            </h3>

                            {/* Description Paragraphs */}
                            <div className="space-y-2 text-white text-sm md:text-base leading-tight">
                                <p>
                                    We specialize in setting up, managing, and scaling your Amazon marketplace account with a hands-on, committed approach.
                                </p>

                                <p>
                                    As a boutique business, we intentionally limit the number of clients we take on so that each one gets the personal attention at a price you deserve.
                                </p>

                                <p>
                                    With over 10 years experience in selling on Amazon, we treat your account like our own and handle the grind so you can focus on running your business. Or go hit the trails.
                                </p>
                            </div>

                            {/* Director Name */}
                            <p className="text-white font-semibold text-base md:text-lg">
                                Matthew Eales | Director
                            </p>

                            {/* CTA Button */}
                            <SlideTextButton
                                text="Pricing"
                                hoverText="View Pricing"
                                href="/"
                                className="text-sm tracking-widest uppercase w-72 h-10 px-10 py-2"
                            >
                                Pricing
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </SlideTextButton>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/assets/hero-image.png"
                                    alt="Amazon Analytics Dashboard showing growth metrics"
                                    width={400}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export { AboutUsSection };