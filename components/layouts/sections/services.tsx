"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Separator } from "@/components/ui/separator";
import SlideTextButton from "@/components/kokonutui/slide-text-button";
import { ContactSection } from "./contact-us";

interface Service {
    id: number;
    title: string;
    description: string;
    image: string;
}

const services: Service[] = [
    {
        id: 1,
        title: "Full Service Account Management",
        description: "Everything done for you. We do it all so you don’t have to stress about Seller Central headaches.",
        image: "/assets/services/amazon-seller-account-management-service.webp",
    },
    {
        id: 2,
        title: "SEO & Conversion Optimization",
        description: "We treat your ad budget like our own — no gasoline-on-a-fire spending here. Average client ACOS under 20%, TACOS 10%.",
        image: "/assets/services/seo.png",
    },
    {
        id: 3,
        title: "PPC Account Management",
        description: "We treat your ad budget like our own — no gasoline-on-a-fire spending here. Average client ACOS under 20%, TACOS 10%.”",
        image: "/assets/services/ppc.png",
    },
    {
        id: 4,
        title: "Product listing optimization",
        description: "From titles to bullet points, we polish your listings until customers can find you and can’t resist hitting “Add to Cart.",
        image: "/assets/services/ppl.webp",
    },
    {
        id: 5,
        title: "Brand Growth Strategy",
        description: "You know your brand, but we know how to sell on Amazon. Let us work together to not only scale but also dominate.",
        image: "/assets/services/brand-growth.png",
    },
    {
        id: 6,
        title: "Customer Service Management",
        description: "We handle the daily questions, complaints, and “where’s my order?” messages — so your buyers stay happy.",
        image: "/assets/services/csr.png",
    },
    {
        id: 7,
        title: "Revenue Recovery & Account Fixes",
        description: "Lost sales, suspended ASINs, or mystery fees? We hunt them down and get your money back.",
        image: "/assets/services/revenue-recovery.png",
    },
];

const ServicesSection = () => {
    const [ activeService, setActiveService ] = useState<Service>(services[ 4 ]); // Start with Packaging (index 4)

    const getServiceNumber = (id: number): string => {
        return id.toString().padStart(2, "0");
    };

    return (
        <section className="max-w-7xl mx-auto py-24 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Left Section - Image and Description */}
                <div className="flex flex-col gap-8">
                    {/* Image Section */}
                    <div className="relative w-[400px] h-[400px] overflow-hidden rounded-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService.id}
                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 100, opacity: 0 }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeService.image}
                                    alt={activeService.title}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover rounded-lg"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    {/* Title and Description Section */}
                    <div className="flex flex-col gap-3">
                        <motion.h3
                            key={`title-${activeService.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, ease: "linear" }}
                            className="text-xl md:text-2xl font-normal uppercase tracking-wider text-gray-400"
                        >
                            {activeService.title}
                        </motion.h3>
                        <motion.p
                            key={`desc-${activeService.id}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg"
                        >
                            {activeService.description}
                        </motion.p>
                    </div>
                </div>

                {/* Right Section - Services List */}
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col">
                        {services.map((service, index) => (
                            <div key={service.id}>
                                <button
                                    onMouseEnter={() => setActiveService(service)}
                                    className={`w-full text-left py-4 transition-all duration-300 ${activeService.id === service.id
                                        ? "font-bold text-black text-xl"
                                        : "font-normal text-gray-400 text-lg hover:text-gray-600"
                                        }`}
                                >
                                    <span>
                                        {service.title}{" "}
                                       
                                    </span>
                                </button>
                                {index < services.length - 1 && (
                                    <Separator className="bg-gray-200" />
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <SlideTextButton
                            text="Click to Start"
                            hoverText="Get Started"
                            href="/"
                            className="text-sm tracking-widest uppercase w-72 h-10 px-10 py-2"

                        />
                    </div>
                </div>
            </div>
            <ContactSection />
        </section>
    );
};

export { ServicesSection };