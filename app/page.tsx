'use client';

import { HeroSection } from "@/components/layouts/sections/hero";
import { AboutUsSection } from "@/components/layouts/sections/about-us";
import { ContactSection } from "@/components/layouts/sections/contact-us";
import { PricingSection } from "@/components/layouts/sections/pricing";
import { AnalyticsSection } from "@/components/layouts/sections/analytics";
import { ClientsSection } from "@/components/layouts/sections/clients";
import { TestimonialSection } from "@/components/layouts/sections/testimonial";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUsSection />
      <PricingSection />
      <TestimonialSection />
      <ClientsSection />
      <AnalyticsSection />
      <ContactSection />
    </div>
  );
}
