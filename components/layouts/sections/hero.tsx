import Image from "next/image";
import SlideTextButton from "@/components/kokonutui/slide-text-button";

const HeroSection = () => {
    return (
        <section className="py-12 bg-gradient-to-b from-gray-200 to-white">
            <div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-col gap-6 w-1/2 max-w-2xl">
                            <h1 className="text-4xl font-bold text-[#FF6900]">Your brand. Your Amazon account. Fully managed by us.</h1>
                            <p className="text-4xl font-bold text-black">Hands-On Partnership. <br /> Proven growth strategies.</p>
                            <p className="text-md text-black/90">Your brand. Your Amazon account. Your profit. Our Expertise and team to drive more sales and profit. Backed by over 10 years of experience selling on Amazon.</p>
                            <SlideTextButton
                                text="Book a Consultation"
                                hoverText="Click to Start"
                                href="/"
                                className="text-sm tracking-widest uppercase w-72 h-10 px-10 py-2 !bg-teal-500 hover:!bg-teal-600 !text-white border-0"
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <Image src="/assets/hero-image.png" alt="Hero" width={500} height={500} />
                        </div>
                    </div>
                </div>
                {/* Decorative lines at the bottom */}
                {/* Elementor-style bottom decorative lines */}
                <div className="rotate-180" aria-hidden="true" data-negative="false">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 283.5 19.6"
                        preserveAspectRatio="none"
                        className="w-full"
                    >
                        <path
                            style={{ opacity: 0.33, fill: "#EFEFEF" }}
                            d="M0 0L0 18.8 141.8 4.1 283.5 18.8 283.5 0z"
                        ></path>
                        <path
                            style={{ opacity: 0.33, fill: "#e0e0e0" }}
                            d="M0 0L0 12.6 141.8 4 283.5 12.6 283.5 0z"
                        ></path>
                        <path
                            style={{ opacity: 0.33, fill: "#F8F8F8" }}
                            d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                        ></path>
                        <path
                            style={{ opacity: 0.33, fill: "#e0e0e0" }}
                            d="M0 0L0 6.4 141.8 4 283.5 6.4 283.5 0z"
                        ></path>
                        <path
                            style={{ fill: "#ffffff" }}
                            d="M0 0L0 1.2 141.8 4 283.5 1.2 283.5 0z"
                        ></path>
                    </svg>
                </div>



            </div>
        </section>
    )
}



export { HeroSection };